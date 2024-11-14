import { User } from "@/app/models/User";
import mongoose from "mongoose"

export async function POST(req: { json: () => unknown }) {
    const body = await req.json();
    
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
    throw new Error("MONGO_URL environment variable is not defined");
    }
    await mongoose.connect(mongoUrl);

    const createUser = await User.create(body)
    return Response.json(createUser);
    

}