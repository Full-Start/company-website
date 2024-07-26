import { connectMongoDB } from "../../../../lib/mongodb";
import New from "../../../../models/new";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, img, desc, date } = await req.json();
    console.log('Received data:', { title, img, desc, date });

    await connectMongoDB();

    try {
        await New.create({ title, img, desc, date });
        return NextResponse.json({ message: "News created" }, { status: 201 });
    } catch (error) {
        console.error('Error creating news:', error);
        return NextResponse.json({ error: "Failed to create news" }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        await connectMongoDB();

        const url = new URL(req.url);
        const page = parseInt(url.searchParams.get('page')) || 1;
        const limit = parseInt(url.searchParams.get('limit')) || 4;

        console.log(`Page: ${page}, Limit: ${limit}`);

        const skip = (page - 1) * limit;

        console.log(`Skip: ${skip}`);

        const news = await New.find({}).skip(skip).limit(limit);
        const totalItems = await New.countDocuments({});
        const totalPages = Math.ceil(totalItems / limit);

        console.log(`Total Items: ${totalItems}, Total Pages: ${totalPages}`);

        return NextResponse.json({
            news,
            totalPages,
            currentPage: page,
        });
    } catch (error) {
        console.error("Error fetching news:", error);
        return NextResponse.json({
            error: "Failed to fetch news",
            details: error.message
        }, { status: 500 });
    }
}
