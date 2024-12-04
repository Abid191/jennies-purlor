import { connectDB } from "@/lib/connectdb"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
    try {
        const db = await connectDB(); // Ensure this connects to your database properly
        const updateCollection = db.collection('users');
        const updateDoc = await request.json();

        // Ensure `params.id` is valid and handle invalid ObjectId errors
        if (!ObjectId.isValid(params.id)) {
            return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
        }

        const myUser = await updateCollection.updateOne(
            { _id: new ObjectId(params.id) },
            {
                $set: {
                    ...updateDoc,
                    role: 'admin',
                },
            },
            { upsert: true } // Creates a document if it doesn't exist
        );

        // Check the update result
        if (myUser.matchedCount === 0 && myUser.upsertedCount === 0) {
            return NextResponse.json({ message: 'No matching document found to update' }, { status: 400 });
        }

        return NextResponse.json({ message: 'Update successful', response: myUser }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ massage: 'no data found', error })
    }
};


export const DELETE = async (request, { params }) => {
    const db = await connectDB()
    const deleteCollection = await db.collection('users')
    try {
        const deleteUser = await deleteCollection.deleteOne({ _id: new ObjectId(params.id) })
        return NextResponse.json({ deleteUser })
    } catch (error) {
        return NextResponse.json({ massage: 'no data found', error })
    }
}