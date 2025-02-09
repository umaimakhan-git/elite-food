import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = groq`*[_type == "food"]{
      _id,
      name,
      category,
      price,
      "imageUrl": image.asset->url,
      description,
      available,
      "originalPrice": originalPrice,
      slug
    }`;

    const foods = await client.fetch(query);
    return NextResponse.json(foods);
  } catch (_error) {  
    return NextResponse.json({ error: "Failed to fetch foods" }, { status: 500 });
  }
}
