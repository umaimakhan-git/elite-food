import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Food } from '@/types/food';

interface MenuProps {
  params: Promise<{ slug: string }>;  // Fix: Promise added
}

async function getMenu(slug: string): Promise<Food | null> {
  return client.fetch(
    groq`*[_type == "food" && slug.current == $slug][0]{
      _id,
      name,
      category,
      price,
      "imageUrl": image.asset->url,
      description,
      available,
      originalPrice
    }`,
    { slug }
  );
}

export default async function MenuPage({ params }: MenuProps) {
  const { slug } = await params; // Fix: Awaiting params

  const food = await getMenu(slug);

  if (!food) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative aspect-square w-full h-auto rounded-lg overflow-hidden shadow-lg">
          <Image
            src={food.imageUrl}
            alt={food.name}
            width={500}
            height={500}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900">{food.name}</h1>
          <p className="text-lg text-gray-600">{food.category || 'Uncategorized'}</p>
          <div className="mt-4 flex items-center space-x-3">
            <span className="text-2xl font-semibold text-red-500">${food.price}</span>
            {food.originalPrice && (
              <span className="text-lg text-gray-400 line-through">${food.originalPrice}</span>
            )}
          </div>
          <p className="mt-4 text-gray-700">{food.description}</p>
          <p className={`mt-4 text-sm font-semibold ${food.available ? 'text-green-600' : 'text-red-500'}`}>
            {food.available ? 'Available' : 'Not Available'}
          </p>
        </div>
      </div>
    </div>
  );
}
