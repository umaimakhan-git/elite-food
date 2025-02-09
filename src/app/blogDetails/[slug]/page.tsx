"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


import Burger from "../../../../public/assets/burger.jpg";
import LimeJuice from "../../../../public/assets/limeJuice.jpg";
import StreetFood from "../../../../public/assets/streetFood.jpg";

const blogs = [
  {
    title: "Delicious burger Recipe",
    slug: "delicious-pasta-recipe",
    image: Burger,
    content: "Learn how to make a delicious homemade pasta with fresh ingredients... Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero voluptatum similique temporibus quisquam consectetur facilis sapiente! Mollitia suscipit quae itaque repudiandae pariatur adipisci nemo excepturi ab id earum, rerum exercitationem et recusandae dolor distinctio cupiditate laudantium, quibusdam tenetur! Atque accusantium doloremque praesentium aperiam impedit quisquam quia aliquam sit ut nostrum excepturi inventore vero soluta sunt maxime facere, incidunt dolorum debitis unde, provident, tenetur blanditiis animi corporis. Laborum soluta assumenda ratione iure harum alias officiis. Tempore illum saepe exercitationem distinctio dolor dolore voluptatum. Vel, dolore. Eaque doloribus optio cum consequuntur? Laboriosam corporis unde natus sunt fugiat sit illo ipsam delectus! ",
  },
  {
    title: "Top 5 Healthy Smoothies",
    slug: "top-5-healthy-smoothies",
    image: LimeJuice,
    content: "Discover the top 5 smoothies that will keep you refreshed and healthy... Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero voluptatum similique temporibus quisquam consectetur facilis sapiente! Mollitia suscipit quae itaque repudiandae pariatur adipisci nemo excepturi ab id earum, rerum exercitationem et recusandae dolor distinctio cupiditate laudantium, quibusdam tenetur! Atque accusantium doloremque praesentium aperiam impedit quisquam quia aliquam sit ut nostrum excepturi inventore vero soluta sunt maxime facere, incidunt dolorum debitis unde, provident, tenetur blanditiis animi corporis. Laborum soluta assumenda ratione iure harum alias officiis. Tempore illum saepe exercitationem distinctio dolor dolore voluptatum. Vel, dolore. Eaque doloribus optio cum consequuntur? Laboriosam corporis unde natus sunt fugiat sit illo ipsam delectus!",
  },
  {
    title: "Best Street Foods Around the World",
    slug: "best-street-foods",
    image: StreetFood,
    content: "Explore the tastiest street foods from different countries..0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero voluptatum similique temporibus quisquam consectetur facilis sapiente! Mollitia suscipit quae itaque repudiandae pariatur adipisci nemo excepturi ab id earum, rerum exercitationem et recusandae dolor distinctio cupiditate laudantium, quibusdam tenetur! Atque accusantium doloremque praesentium aperiam impedit quisquam quia aliquam sit ut nostrum excepturi inventore vero soluta sunt maxime facere, incidunt dolorum debitis unde, provident, tenetur blanditiis animi corporis. Laborum soluta assumenda ratione iure harum alias officiis. Tempore illum saepe exercitationem distinctio dolor dolore voluptatum. Vel, dolore. Eaque doloribus optio cum consequuntur? Laboriosam corporis unde natus sunt fugiat sit illo ipsam delectus!.",
  },
];

interface Review {
  name: string;
  comment: string;
}

const BlogDetails = () => {
  const { slug } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");


  const blog = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedReviews = localStorage.getItem(`reviews-${slug}`);
      if (storedReviews) {
        setReviews(JSON.parse(storedReviews));
      }
    }
  }, [slug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newReview = { name, comment };
    const updatedReviews = [...reviews, newReview];

    setReviews(updatedReviews);
    localStorage.setItem(`reviews-${slug}`, JSON.stringify(updatedReviews));

    setName("");
    setComment("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      
      {blog && (
        <div>
          <Image src={blog.image} alt={blog.title}  className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>
          <p className="text-gray-600 mt-2">{blog.content}</p>
        </div>
      )}

      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Related Blogs</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {blogs
            .filter((b) => b.slug !== slug)
            .map((relatedBlog) => (
              <Link key={relatedBlog.slug} href={`/blogDetails/${relatedBlog.slug}`} className="block">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform cursor-pointer">
                  <Image src={relatedBlog.image} alt={relatedBlog.title} className="w-full h-40 object-cover" />
                  <div className="p-3">
                    <h3 className="text-lg font-semibold text-gray-800">{relatedBlog.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

            
            <div className="mt-12"> 
        <h2 className="text-xl font-semibold mb-6">Thoughts</h2> 
        <p className="text-lg font-normal ">What Do You Think About Thr Blog?</p>

       
        <form onSubmit={handleSubmit} className="mb-8"> 
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 w-full mb-4 rounded" 
          />
          <textarea
            placeholder="Your Thought"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border p-3 w-full mb-4 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700"
          >
            Submit Review
          </button>
        </form>

        
        <div className="mt-6 space-y-4"> 
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="border p-4 rounded bg-gray-100">
                <p className="font-semibold">{review.name}</p>
                <p className="mt-1">{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to review!</p>
          )}
        </div>
      </div>

      
    </div>
  );
};

export default BlogDetails;
