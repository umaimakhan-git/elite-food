import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// ✅ Type Fix for params
interface ChefPageProps {
  params: { slug: string };
}

// ✅ SEO Metadata (Optional)
export async function generateMetadata({ params }: ChefPageProps): Promise<Metadata> {
  return {
    title: `Chef - ${params.slug}`,
  };
}

// ✅ Fetch function
async function getChef(slug: string) {
  return client.fetch(
    groq`*[_type == "chef" && slug.current == $slug][0]{
      _id,
      name,
      specialty,
      position,
      experience,
      "imageUrl": image.asset->url,
      description
    }`,
    { slug }
  );
}

// ✅ Fixed Component
export default async function ChefPage({ params }: ChefPageProps) {
  if (!params?.slug) return notFound();

  const chef = await getChef(params.slug);
  if (!chef) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Chef Image */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={chef.imageUrl || '/placeholder.jpg'}
            alt={chef.name || 'Chef Image'}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Chef Info */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{chef.name}</h1>
          <p className="text-lg text-gray-700">{chef.position}</p>

          <div className="mt-2 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-lg">
              {chef.specialty}
            </span>
            <span className="px-3 py-1 bg-gray-200 text-sm font-medium rounded-lg">
              {chef.experience} years experience
            </span>
          </div>

          <p className="mt-4 text-gray-700">{chef.description}</p>
        </div>
      </div>
    </div>
  );
}
