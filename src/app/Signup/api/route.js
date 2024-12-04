import { connectDB } from "@/lib/connectdb"
import bcrypt from 'bcrypt'
import { ObjectId } from "mongodb"

export const POST = async (request) => {
    const newUser = await request.json()

    try {
        const db = await connectDB()
        const userCollection = db.collection('users')
        const exist = await userCollection.findOne({ email: newUser.email })
        if (exist) {
            return Response.json({ massage: 'user exist' }, { status: 304 })
        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);
        const resp = await userCollection.insertOne({ ...newUser, password: hashedPassword })

        return Response.json({ massage: 'user Created' }, { status: 200 })

    } catch (error) {

        return Response.json({ message: "something went wrong", error }, { status: 500 })
    }
}

export const GET = async () => {
    const db = await connectDB()
    const allUserCollection = await db.collection('users')
    try {
        const allUser = await allUserCollection.find().toArray()
        return Response.json({ allUser })
    } catch (error) {
        console.log(error)
    }
}



