import { connectDB } from "@/lib/connectdb"
import bcrypt from 'bcrypt'
import { NextResponse } from "next/server"

export const POST = async (request) => {
    const newUser = await request.json()

    try {
        const db = await connectDB()
        const userCollection = db.collection('users')
        const exist = await userCollection.findOne({ email: newUser.email })
        if (exist) {
            return NextResponse.json({ massage: 'user exist' }, { status: 304 })
        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);
        const resp = await userCollection.insertOne({ ...newUser, password: hashedPassword })

        return NextResponse.json({ massage: 'user Created' }, { status: 200 })

    } catch (error) {

        return NextResponse.json({ massage: 'no data found', error })
    }
}

export const GET = async () => {
    const db = await connectDB()
    const allUserCollection = await db.collection('users')
    try {
        const allUser = await allUserCollection.find().toArray()
        return NextResponse.json({ allUser })
    } catch (error) {
        return NextResponse.json({ massage: 'no data found', error })
    }
}



