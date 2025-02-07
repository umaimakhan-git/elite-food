import { FaUtensils, FaUsers, FaHeart } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-black text-white py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-400 mb-4">About Us</h2>
        <p className="text-lg text-gray-300 mb-8">
          Welcome to <span className="text-orange-500 font-semibold">Foodie's Heaven</span> – where taste meets passion! We bring you the finest, freshest, and most delicious meals crafted with love.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
          <FaUtensils className="text-5xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-orange-400 mb-2">Quality Ingredients</h3>
          <p className="text-gray-300">We use the freshest ingredients to create mouth-watering dishes that satisfy your cravings.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
          <FaUsers className="text-5xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-orange-400 mb-2">Our Team</h3>
          <p className="text-gray-300">Our passionate chefs and friendly staff ensure you have a memorable dining experience.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
          <FaHeart className="text-5xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-orange-400 mb-2">Customer Love</h3>
          <p className="text-gray-300">Your satisfaction is our priority  we strive to make every meal special for you.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
