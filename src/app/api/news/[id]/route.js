import { connectMongoDB } from "../../../../../lib/mongodb";
import New from "../../../../../models/new";
import { NextResponse } from "next/server";

export async function GET (req ,  {params}) {
    const {id} =params;
    await connectMongoDB();
    const newItem = await New.findOne({_id:id})
    return NextResponse.json({ newItem } , {status:200})
}