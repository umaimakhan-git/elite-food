import { defineQuery } from "next-sanity";

// Food Query
export const allFoodQuery = defineQuery(`
    *[_type == "food"]{
        _id,
        name,
        "slug": slug.current, 
        category,
        price,
        originalPrice,
        tags,
        "imageUrl": image.asset->url,
        description,
        available
    }
`);

// Chef Query
export const allChefsQuery = defineQuery(`
    *[_type == "chef"]{
        _id,
        name,
        
        position,
        experience,
        specialty,
        "imageUrl": image.asset->url,
        description,
        available
    }
`);
