import { connectDB } from "@/lib/connectdb"
import { ObjectId } from "mongodb"

export const PATCH = async (request, { params }) => {
    try {
        const db = await connectDB(); // Ensure this connects to your database properly
        const updateCollection = db.collection('users');
        const updateDoc = await request.json();

        // Ensure `params.id` is valid and handle invalid ObjectId errors
        if (!ObjectId.isValid(params.id)) {
            return new Response(
                JSON.stringify({ message: 'Invalid ID format' }),
                { status: 400 }
            );
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
            return new Response(
                JSON.stringify({ message: 'No matching document found to update' }),
                { status: 404 }
            );
        }

        return new Response(
            JSON.stringify({ message: 'Update successful', response: myUser }),
            { status: 200 }
        );

    } catch (error) {
        console.error('Error updating document:', error);
        return new Response(
            JSON.stringify({ message: 'Internal Server Error', error: error.message }),
            { status: 500 }
        );
    }
};


export const DELETE = async (request, { params }) => {
    const db = await connectDB()
    const deleteCollection = await db.collection('users')
    try {
        const deleteUser = await deleteCollection.deleteOne({ _id: new ObjectId(params.id) })
        return Response.json({ deleteUser })
    } catch (error) {
        console.log(error)
    }
}