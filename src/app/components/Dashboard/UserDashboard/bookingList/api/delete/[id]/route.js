import { connectDB } from "@/lib/connectdb"
import { ObjectId } from "mongodb"

export const DELETE = async (request, { params }) => {
    const db = await connectDB()
    const deleteCollection = db.collection('booking')
    try {
        const resp = await deleteCollection.deleteOne({ _id: new ObjectId(params.id) })
        return Response.json({ resp })
    } catch (error) {
        console.log(error)
    }
}