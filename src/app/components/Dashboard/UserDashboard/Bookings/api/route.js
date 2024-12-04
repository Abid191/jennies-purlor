import { connectDB } from "@/lib/connectdb"
import { ObjectId } from "mongodb"

export const POST = async (request) => {
    const newBooking = await request.json()
    const db = await connectDB()
    const bookingCollection = await db.collection('booking')
    try {
        const booking = await bookingCollection.insertOne(newBooking)
        return Response.json({ message: 'insert successfully' }, { status: 200 })
    } catch (error) {
        return Response.json({ message: 'something went wrong' }, { status: 404 })
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

        return Response.json({ message: 'update found', response: resp })
    } catch (error) {
        return Response.json({ message: "No Data Found" })
    }
}

// export const PATCH = async (request, { params }) => {
//     const db = await connectDB()
//     const updateCollection = db.collection('booking')
//     const updateDoc = await request.json()
//     try {
//         const myBookings = await updateCollection.updateOne({ _id: new ObjectId(params.id)},
//             {
//                 $set: {
//                     ...updateDoc,
//                     role : 'done',
//                 }
//             },
//             {
//                 upsert: true
//             }
//         )
//         return Response.json({ massage: 'update found', response: myBookings })

//     } catch (error) {
//         return Response.json({ message: "No Data Found" })
//     }
// }