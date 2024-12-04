import { connectDB } from "@/lib/connectdb"
import NextAuth from "next-auth"
import bcrypt from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github"

const handler = NextAuth({
    secret:process.env.NEXT_PUBLIC_SECRET,
    session: {
        strategy: "jwt",
        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const { email, password } = credentials
                if (!email || !password) {
                    return null
                }
                const db = await connectDB()
                const currentUser = await db.collection('users').findOne({ email })
                if (!currentUser) {
                    return null
                }
                const passwordMatched = bcrypt.compareSync(password, currentUser.password)
                if (!passwordMatched) {
                    return null
                }
                return currentUser
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
        })
    ],

    pages: {
        signIn: '/Login'
    },
    callbacks: {
        async signIn({ user, account }) {
            if(account.provider === 'google' || account.provider === 'github'){
                const {name,email,image} = user
                try {
                    const db = await connectDB()
                    const userCollection = db.collection('users')
                    const exist = await userCollection.findOne({email})
                    if(!exist){
                       const resp = await userCollection.insertOne(user)
                       return user 
                    }
                    else{
                        return user
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            else{
                return user
            }
          },
    }
})

export { handler as GET, handler as POST }