'use server'
import { auth, currentUser } from '@clerk/nextjs/server';
import { client } from '@/sanity/lib/client';

export async function getUserFromClerck() {
    const { userId } = await auth();
    const user = await currentUser();

    return {
        userName: `${user?.firstName} ${user?.lastName}`,
        userEmail: `${user?.emailAddresses[0].emailAddress}`,
        userID: `${user?.id}`,
        userImage: user?.imageUrl || '',
        userPassword: `${user?.passwordEnabled}`,
    };
}

// Fetch ALL users from Clerk
export async function getAllUsersFromClerk() {
    const CLERK_API_KEY = process.env.CLERK_SECRET_KEY;

    try {
        const response = await fetch('https://api.clerk.com/v1/users', {
            headers :{
                Authorization :`Bearer ${CLERK_API_KEY}`,
                'Content-Type' : 'application/json'
            }
        });

        if(!response.ok){
            throw new Error('Failed to Fetch')
        }

        return response.json();   
    } catch (error) {
        console.error('Error fetching users from Clerk:', error);
        return [];    
    }
}


export async function uploadImage(imageUrl:string){

    try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
        throw new Error(`Failed to fetch image: ${res.statusText}`);
    }
    const blob = await res.blob();
    const asset = await client.assets.upload('image',blob);
    return asset;
        
    } catch (error) {
        console.error('Image upload error:', error);
        return null;    
    }

}
// Sync ALL users from Clerk to Sanity
export async function syncUsersToSanity() {
    const clerkUsers = await getAllUsersFromClerk();

    for (const user of clerkUsers) {
        const userId = user.id;
        const userName = `${user.first_name} ${user.last_name}`;
        const userEmail = user.email_addresses[0]?.email_address || '';
        const userImage = user.image_url || '';
        const userPassword = user.password_enabled || false;

        const existingUser = await client.fetch(`*[_type == "user" && userId == $userId][0]`, { userId });

        let imageAsset = null;
        if (userImage) {
            imageAsset = await uploadImage(userImage);
        }

        const userData = {
            _type: 'user',
            _id: `user-${userId}`,
            name: userName,
            email: userEmail,
            userId,
            image: imageAsset
                ? { _type: 'image', asset: { _type: 'reference', _ref: imageAsset._id } }
                : existingUser?.image || null, 
            password: userPassword,
            createdAt: existingUser ? existingUser.createdAt : new Date().toISOString(), 
        };

        await client.createOrReplace(userData);
    }

    console.log('All Clerk users synced to Sanity.');
}
