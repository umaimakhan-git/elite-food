export type Chef = {
    _id: string;
    name: string;
    slug: {
        _type: string;
        current: string;
    }
    position: string;
    experience: number;
    specialty: string;
    imageUrl: string;
    description: string;
    available: boolean;
};
