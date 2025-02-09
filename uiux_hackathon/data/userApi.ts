'use server'
import { client } from '@/sanity/lib/client';
import { auth, currentUser } from '@clerk/nextjs/server';

async function getUserFromClerk() {
    const { userId } = await auth();
    const user = await currentUser();

    if (!user) {
        throw new Error("User not found in Clerk.");
    }

    const userID = user.id;
    const userName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
    const userEmail = user.emailAddresses?.[0]?.emailAddress || '';
    const userImage = user.imageUrl || '';
    const createdAt = user.createdAt

    return { userID, userName, userEmail ,userImage,createdAt};
}

export async function uploadImage(imageUrl: string) {
    try {
        const response = await fetch(imageUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }

        const blob = await response.blob();
        const asset = await client.assets.upload('image', blob);
        return asset;
    } catch (error) {
        console.error('Image upload error:', error);
        return null; // Return null to use the URL directly
    }
}

export async function sanityUserPost() {
    try {
        const userDetails = await getUserFromClerk();
       const imageAsset = await uploadImage(userDetails.userImage);

        const userData = {
            _type: "user",
            _id: `${userDetails.userID}`,
            _createdAt:userDetails.createdAt,
            name: userDetails.userName,
            email: userDetails.userEmail,
            userId: userDetails.userID,
            image: {
                _type: 'image',
                asset: { _type: 'reference', _ref: imageAsset?._id },
            },
        };

        const res = await client.createOrReplace(userData);
        console.log("User data saved to Sanity:", res);
    } catch (error) {
        console.error("Error saving user data to Sanity:", error);
    }
}
