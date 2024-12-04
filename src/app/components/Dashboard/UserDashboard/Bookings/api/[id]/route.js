import { connectDB } from "@/lib/connectdb"
import { ObjectId } from "mongodb"

export const PATCH = async (request, { params }) => {
    const db = await connectDB()
    const bookingCollection = await db.collection('booking')
    const updatedDoc = await request.json()
    try {
        const resp = await bookingCollection.updateOne({ _id: new ObjectId(params.id) },
            {
                $set: {
                    ...updatedDoc,
                    role: 'done',
                }
            },
            {
                upsert: true
            }
        )

        return Response.json({ message: 'update found', response: resp })
    } catch (error) {
        return Response.json({ message: "No Data Found" })
    }
}