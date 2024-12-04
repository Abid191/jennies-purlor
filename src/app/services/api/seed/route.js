import { connectDB } from "@/lib/connectdb"
import { services } from "@/lib/services"
import { NextResponse } from "next/server"

export const GET = async () => {
    const db = await connectDB()
    const serviceCollection = await db.collection('services')
    try {
        await serviceCollection.deleteMany()
        const resp = await serviceCollection.insertMany(services)
        return NextResponse.json({ message: 'seeded successfully' })
    } catch (error) {
        return NextResponse.json({massage : 'no data found', error})
    }
}