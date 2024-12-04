import { connectDB } from "@/lib/connectdb"
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    const db =await connectDB()
    const bookingsCollection = db.collection('booking')
    try {
        const myBookings = await bookingsCollection.find({email : params.email}).toArray();
        return NextResponse.json({myBookings})
    } catch (error) {
        return NextResponse.json({massage : 'no data found', error})
    }
}