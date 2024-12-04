import { connectDB } from "@/lib/connectdb"

export const GET =async(request,{params})=>{
    const db = await connectDB()
    const serviceCollection = await db.collection('services')
    try {
        const resp = await serviceCollection.findOne({_id : params.id})
        return Response.json({resp})
    } catch (error) {
        console.log(error)
    }
}