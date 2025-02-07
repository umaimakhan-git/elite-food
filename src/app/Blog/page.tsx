"use client";

import Image from "next/image";
import Link from "next/link";


const Burger = "/assets/burger.jpg";
const LimeJuice = "/assets/limeJuice.jpg";
const StreetFood = "/assets/streetFood.jpg";

const blogs = [
  { title: "Delicious Burger Recipe", slug: "delicious-pasta-recipe", image: Burger },
  { title: "Top 5 Healthy Smoothies", slug: "top-5-healthy-smoothies", image: LimeJuice },
  { title: "Best Street Foods Around the World", slug: "best-street-foods", image: StreetFood },
];

const BlogPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Food Blog</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blogDetails/${blog.slug}`} className="block">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform cursor-pointer">
              <Image src={blog.image} alt={blog.title} width={500} height={300} className="w-full h-40 object-cover" />
              <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
