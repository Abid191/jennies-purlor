import { connectDB } from "@/lib/connectdb"
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {
    const db =await connectDB()
    const bookingsCollection = db.collection('users')
    try {
        const Users = await bookingsCollection.findOne({email : params.email})
        return NextResponse.json({Users})
    } catch (error) {
        return NextResponse.json({massage : 'no data found', error})
    }
}