import { connectDB } from "@/lib/connectdb"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    const newBooking = await request.json()
    const db = await connectDB()
    const bookingCollection = await db.collection('booking')
    try {
        const booking = await bookingCollection.insertOne(newBooking)
        return NextResponse.json({ message: 'insert successfully' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'something went wrong' }, { status: 404 })
    }
}


export const PATCH = async (request, { params }) => {
    const db = await connectDB()
    const bookingCollection = await db.collection('booking')
    const updatedDoc = await request.json()
    try {
        const resp = await bookingCollection.updateOne({ _id: new ObjectId(id) },
            {
                $set: {
                    ...updatedDoc,
                    role: 'done'
                }
            },
            {
                upsert: true
            }
        )

        return NextResponse.json({ message: 'update found', response: resp })
    } catch (error) {
        return NextResponse.json({massage : 'no data found', error})
    }
}
