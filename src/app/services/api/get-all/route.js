import { connectDB } from "@/lib/connectdb"
import { NextResponse } from "next/server"

export const GET = async()=>{
    const db = await connectDB()
    const serviceCollection = await db.collection('services')
    try {
    const resp = await serviceCollection.find().toArray()
        return NextResponse.json({resp})
    } catch (error) {
        return NextResponse.json({massage : 'no data found', error})
    }
}
