import { connectMongoDB } from "../../../../lib/mongodb";
import  Post from "../../../../models/post"
import { NextResponse } from "next/server"

export async function POST(req){
    const { name, company, email, phone, message } = await req.json();
    console.log(name, company, email, phone, message)
    await connectMongoDB();
    await Post.create({name, company, email, phone, message});
    return NextResponse.json({message:"Post created"} , {status:201});
}

export async function GET() {
    await connectMongoDB();
    const posts = await Post.find({});
    return NextResponse.json({ posts });
}
