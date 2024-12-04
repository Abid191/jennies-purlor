import { connectDB } from "@/lib/connectdb"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"


export const GET = async (request, { params }) => {
    const db = await connectDB()
    const updateCollection = db.collection('booking')
    try {
        const resp = await updateCollection.findOne({ _id: new ObjectId(params.id) })
        return NextResponse.json({resp})
    } catch (error) {
        return NextResponse.json({massage : 'no data found', error})
    }
} 





