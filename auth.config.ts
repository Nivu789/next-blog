import CredentialsProvider from "next-auth/providers/credentials"
import { getUserDetails } from "@/app/data/users"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from 'next-auth/providers/github'
import { NextAuthConfig } from "next-auth"

const publicRoutes = ["/signin","/signup"]
const authRoutes = ["/signin","/signup"]

export default {
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,

            authorization:{
                params:{
                    prompt:"consent",
                    access_type:"offline",
                    response_type:"code",
                }
            }
        }),
        GithubProvider({
            clientId:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET,

            authorization:{
                params:{
                    prompt:"consent",
                    access_type:"offline",
                    response_type:"code",
                }
            }
        }),
        CredentialsProvider({
            name:'Credentials',
            credentials: {
                email: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials:any, req) {
                
                if(credentials==null) return null

                try {
                    
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
                    
                    
                    

                } catch (error:any) {
                    throw new Error(error)
                }

              }
        }),
        
    ],
    callbacks:{
        async authorized({request:{nextUrl},auth}){
            const isLoggedIn = !!auth?.user
            const {pathname} = nextUrl

            if(publicRoutes.includes(pathname)){
                return true
            }

            if(authRoutes.includes(pathname)){
                if(isLoggedIn){
                    return Response.redirect(new URL('/',nextUrl))    
                }

                return true
            }


            if(pathname.startsWith('/signin') && isLoggedIn){
                return Response.redirect(new URL('/',nextUrl))
            }

        return isLoggedIn
        },
        jwt({token,user}){
            if(user && user.id){
                token.id = user.id
            }
            return token
        },
        session({session,token}){
            session.user.id = token.id

            return session
        }

    },
    pages:{
        signIn:'/signin',
        
    }
}satisfies NextAuthConfig