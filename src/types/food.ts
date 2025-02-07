export type Food = {
    image: string; 
    _id: string;
    name: string;
    slug: {
        _type: string;
        current: string;
    }
    category: string;
    price: number;
    originalPrice: number;
    tags: string[];
    imageUrl: string;
    description: string;
    available: boolean ;
    quantity: number;
    
};
