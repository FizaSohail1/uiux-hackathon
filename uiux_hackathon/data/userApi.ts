'use server'
import { client } from '@/sanity/lib/client';
import { auth, currentUser } from '@clerk/nextjs/server'

async function getUserFromClerck(){
    const {userId} = await auth();
    const user = await currentUser();

    // getting their detail which we want

    const userID = `${user?.id}`
    const userName = `${user?.firstName} ${user?.lastName}`
    const userEmail = `${user?.emailAddresses}`
    const userImage = `${user?.imageUrl}`

    return {
        userID,
        userName,
        userEmail,
        userImage
    }
}

export async function sanityUserPost(){

    const userDetatils = await getUserFromClerck();

    const userData = {
        _type:"user",
        _id:`user-${userDetatils.userID}`,
        name: userDetatils.userName,
        email: userDetatils.userEmail,
        userId: userDetatils.userID,
        image: userDetatils.userImage
    }

    const res = client.createOrReplace(userData)

}