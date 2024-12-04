import { connectDB } from "@/lib/connectdb"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const DELETE = async (request, { params }) => {
    const db = await connectDB()
    const deleteCollection = db.collection('booking')
    try {
        const resp = await deleteCollection.deleteOne({ _id: new ObjectId(params.id) })
        return NextResponse.json({ resp })
    } catch (error) {
        return NextResponse.json({massage : 'no data found', error})
    }
}