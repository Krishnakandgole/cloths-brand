import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

// Background Images
const images = [
  "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  "",
  "https://plus.unsplash.com/premium_photo-1661274008232-e94b655d4b0c?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  "https://plus.unsplash.com/premium_photo-1722005865240-eecdbec17347?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1523380677598-64d85d015339?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [image, setImages] = useState([]);
  const [data, setData] = useState("")

  const allDataSet = async () => {
    try {
      const response = await fetch("./API/Alldata.json");
      const data = await response.json();
      setImages(data.cloth);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    allDataSet();
  }, []);

  // Email submitting 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    reset()
  };

  const reset = () => {
    setData("")
  }

  return (
    <>
      {/* Main banner section */}
      <section>
        <div className="relative w-full min-h-screen flex items-center  justify-center text-white bg-[url(https://raw.githubusercontent.com/Kuzma02/Fashion-eCommerce-Shop-in-React/refs/heads/main/src/assets/banner1.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="flex items-center justify-center text-white min-h-screen  flex-col bg-black/70 w-full  px-6">
            <h1 className="text-5xl font-bold text-center">Welcome to Cloths Brand</h1>
            <p className="text-lg max-w-2xl my-6 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea voluptatibus quaerat laudantium dolorem, dolorum perspiciatis voluptate atque? Maiores voluptate id sit rem sequi tempora dolor error provident quia ex!
            </p>
            <div className="flex gap-5">
              <button className="outline-none border hover:border-none font-bold text-lg p-2 rounded hover:text-black hover:bg-cyan-500 border-cyan-500">Shop Now</button>
              <button className=" font-bold text-lg p-2 border border-cyan-500 hover:border-cyan-500 hover:border rounded hover:bg-transparent hover:text-white text-black bg-cyan-500">See Collection</button>
            </div>
          </div>
        </div>
      </section>

      {/* Product section */}
      <section>
        <div className="container mx-auto flex flex-col items-center p-10 bg-gray-900">
          <div className="my-4 font-bold text-white text-xl">
            <Marquee gradient={false} speed={80} pauseOnHover pauseOnClick className="font-ubuntu">
              Your category
            </Marquee>
          </div>
          <ul className="font-semibold text-center flex flex-wrap items-center justify-center gap-6 w-full my-4">
            {Category.map((cat) => (
              <li key={cat.path} className="font-bold text-white hover:underline hover:text-cyan-500">
                <NavLink to={cat.path}>
                  <motion.div
                    className="relative p-4 rounded-lg border border-cyan-500 text-white text-center shadow-xl hover:text-cyan-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    {cat.title}
                  </motion.div>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {image.map((img, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <img
                  src={img.image}
                  alt="Product"
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:brightness-75"
                />

                {/* Optional Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">View More</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      {/* Explore banner or container */}

      <section>

        <div className="relative w-full bg-[#0D0D0D] text-white py-16 flex justify-center items-center bg-[url(https://krishnakandgole.github.io/E-commerce-Cloth-Centers/Banner/b2.png)] bg-cover bg-center bg-no-repeat">


          {/* Content Section */}
          <div className="text-center px-4">
            <p className="text-sm mb-2">Repair Services</p>
            <h2 className="text-3xl font-bold">
              Up to <span className="text-red-500">70% off</span> - All Summer Cloth's
            </h2>
            <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg shadow-lg transition">
              <NavLink to="/shop" >
                Explore More
              </NavLink>
            </button>
          </div>


        </div>


      </section>


      {/* Banner section or container */}


      {/* Cellaction section or container */}
      <section section className="bg-gray-900 w-full" >

        <div className="w-[90%] py-10 bg-gray-900 rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 transition-transform transform mx-auto">
          {products.map((product) => (
            <div className="bg-gray-600 rounded shadow-md flex flex-col items-center overflow-hidden">
              <div className="w-full h-96 flex items-center justify-center overflow-hidden">
                <img src={product.image} alt={product.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-4 text-center w-full">
                <h3 className="text-lg font-semibold text-white">{product.title}</h3>
                <p className="text-gray-500">{product.collection}</p>
                <p className="text-lg font-bold mt-2">{product.price}</p>
                <button className="mt-3 bg-gray-700 text-white py-2 px-4 w-full rounded-lg hover:bg-gray-800">
                  <NavLink to="/shop">View Product</NavLink>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* login container or section */}
      <section className="w-full">
        <div className="bg-gray-800 py-6 px-4 flex flex-col md:flex-row justify-around items-center text-white">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Sign Up For Newsletters</h2>
            <p className="text-sm mt-1">
              Get E-mail updates about our latest shop and <span className="text-yellow-400">special offers</span>.
            </p>
          </div>
          <div className="flex w-full md:w-auto animate-fade-in">
            <input
              type="email"
              placeholder="your email address"
              className="p-2 rounded-l-md text-white border w-full md:w-72 outline-none bg-transparent "
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <button onClick={handleSubmit} className="bg-teal-600 text-white px-4 py-2 rounded-r-md hover:bg-teal-700 border transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </section>

      {/* feshon container or section */}

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-900">
          {/* Seasonal Sale */}
          <div className="relative group overflow-hidden cursor-pointer">
            <img
              src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19393.jpg?uid=R181781845&ga=GA1.1.664505187.1740726988&semt=ais_hybrid"
              alt="Seasonal Sale"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">SEASONAL SALE</h2>
              <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Winter casual + lorem</p>
            </div>
          </div>

          {/* New Collection */}
          <div className="relative group overflow-hidden cursor-pointer">
            <img
              src="https://img.freepik.com/free-photo/close-up-indoor-studio-fashion-portrait-gorgeous-woman-stylish-winter-brown-coat-black-hat_273443-3782.jpg?uid=R181781845&ga=GA1.1.664505187.1740726988&semt=ais_hybrid"
              alt="New Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">NEW COLLECTION</h2>
              <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Spring / Summer 2025</p>
            </div>
          </div>

          {/* T-Shirts */}
          <div className="relative group overflow-hidden cursor-pointer">
            <img
              src="https://img.freepik.com/free-photo/sexy-smiling-beautiful-woman-her-handsome-boyfriend-happy-cheerful-family-having-tender-momentsyoung-passionate-couple-hugging-sensual-pair-isolated-white-cheerful-happy_158538-22601.jpg?uid=R181781845&ga=GA1.1.664505187.1740726988&semt=ais_hybrid"
              alt="T-Shirts"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
              <h2 className="text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">T-SHIRTS</h2>
              <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Hoodies Man's Ware</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Category Data
const Category = [
  { title: "Men's", path: "/shop" },
  { title: "Ladies", path: "/shop" },
  { title: "Kids'", path: "/shop" },
  { title: "Baby", path: "/shop" },
  { title: "Sale", path: "/shop" },
];

const products = [
  {
    id: 1,
    title: "Luxury Dress",
    collection: "Special Edition",
    price: "$3500",
    image: "https://img.freepik.com/premium-photo/woman-long-dress-stands-front-large-window_1276913-36168.jpg?uid=R181781845&ga=GA1.1.664505187.1740726988&semt=ais_hybrid", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Luxury Black Clothing",
    collection: "Luxury Collection",
    price: "$1050",
    image: "https://img.freepik.com/free-photo/picture-charming-caucasian-lady-sits-black-leather-armchair-poses-camera_132075-9612.jpg?uid=R181781845&ga=GA1.1.664505187.1740726988&semt=ais_hybrid",
  },
  {
    id: 3,
    title: "Luxury Blue Dress",
    collection: "Summer Edition",
    price: "$5000",
    image: "https://img.freepik.com/free-photo/beautiful-elegant-brunette-with-her-husband-walking-ale-city-streets-enjoying-there-time-wearing-black-classic-suit-long-cocktail-dress_273443-744.jpg?uid=R181781845&ga=GA1.1.664505187.1740726988&semt=ais_hybrid",
  },
  {
    id: 4,
    title: "Special Brown Dress",
    collection: "Unique Collection",
    price: "$2500",
    image: "https://img.freepik.com/free-photo/man-suit_1303-5852.jpg?uid=R181781845&ga=GA1.1.664505187.1740726988&semt=ais_hybrid",
  },
  {
    id: 5,
    title: "Special Luxury Dress",
    collection: "Unique Collection",
    price: "$5200",
    image: "https://img.freepik.com/premium-photo/fashion-boy-girl-stylish-clothes-colored-wall-background-autumn-bright-clothes-children-child-posing-colored-purple-pink-background-russia-sverdlovsk-6-april-2019_86390-5983.jpg?uid=R181781845&ga=GA1.1.664505187.1740726988&semt=ais_hybrid",
  },
  {
    id: 6,
    title: "Super Luxury Dress",
    collection: "Luxury Collection",
    price: "$8500",
    image: "https://img.freepik.com/premium-photo/little-brunette-asian-girl-sunglasses-oversized-shirt-dress-brown-beret-boots-she-smiling-posing-sitting-sideways-blue-background-childhood-fashion-hipster-style-close-up-copy-space_417694-38.jpg?uid=R181781845&ga=GA1.1.664505187.1740726988&semt=ais_hybrid",
  },
];

export default Home;
