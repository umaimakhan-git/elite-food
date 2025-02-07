import React from 'react';
import { allChefsQuery } from '@/sanity/lib/queries';
import Image from 'next/image';
import { sanityFetch } from '@/sanity/lib/live';
import { Chef } from '@/types/chef';
import Link from 'next/link';

async function OurChefs() {
    const response = await sanityFetch({ query: allChefsQuery });
    const chefs = response?.data ?? [];

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                {chefs.map((chef: Chef) => (
                   
                    <div key={chef._id} className='flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg'>
                       <Link href={`/ChefsInfo/${chef.slug}`}>
                        
                        <Image
                            src={chef.imageUrl}
                            alt={chef.name}
                            width={200}
                            height={200}
                            layout="intrinsic"
                            className='w-60 h-60 object-contain rounded-md'
                        />
                        <h3 className="text-lg font-semibold">{chef.name}</h3>
                        
                        
                        <p className="text-sm text-orange">{chef.specialty}</p>
                        
                        <p className="text-sm text-green border-b-2">{chef.available ? 'Available' : 'Not Available'}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurChefs;
