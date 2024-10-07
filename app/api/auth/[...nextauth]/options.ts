import { getUserDetails } from "@/app/data/users"
import CredentialsProvider from "next-auth/providers/credentials"


export const NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name:'Credentials',
            credentials: {
                email: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                
                if(credentials){
                    const user = await getUserDetails(credentials.email)
                    if(user){
                        if(user.password==credentials.password){
                            return user
                        }else{
                            throw new Error("Credentials mismatch");
                        }
                    }else{
                        throw new Error("User not found")
                    }
                }

                return null
          
                // If no error and we have user data, return it
                // Return null if user data could not be retrieved
              }
        }),
        
    ],
    pages:{
        signIn:'/signin'
    }
    
}