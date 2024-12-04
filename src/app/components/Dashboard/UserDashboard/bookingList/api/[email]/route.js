import { connectDB } from "@/lib/connectdb"

export const GET = async (request, {params}) => {
    const db =await connectDB()
    const bookingsCollection = db.collection('booking')
    try {
        const myBookings = await bookingsCollection.find({email : params.email}).toArray();
        return Response.json({myBookings})
    } catch (error) {
        return Response.json({message : "No Data Found"})
    }
}