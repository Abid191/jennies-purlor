import { connectDB } from "@/lib/connectdb"

export const GET = async (request, {params}) => {
    const db =await connectDB()
    const bookingsCollection = db.collection('users')
    try {
        const Users = await bookingsCollection.findOne({email : params.email})
        return Response.json({Users})
    } catch (error) {
        return Response.json({message : "No Data Found"})
    }
}