import { connectDB } from "@/lib/connectdb"
import { ObjectId } from "mongodb"


export const GET = async (request, { params }) => {
    const db = await connectDB()
    const updateCollection = db.collection('booking')
    try {
        const resp = await updateCollection.findOne({ _id: new ObjectId(params.id) })
        return Response.json({resp})
    } catch (error) {
        console.log(error)
    }
} 





