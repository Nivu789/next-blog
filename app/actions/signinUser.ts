import prisma from "@/prisma/db"

export async function signinUser(email:string){
    try {
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        })

        if(user){
            return {
                ...user,
                id: user.id.toString(), // Convert id to string if it's a number
            };
        }
        

    } catch (error) {
        console.log(error)
    }
}