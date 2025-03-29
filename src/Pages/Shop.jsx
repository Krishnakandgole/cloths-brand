import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const Shop = ({AddToCart, watchList}) => {
  const [items, setItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  

  useEffect(() => {
    fetch("./API/Alldata.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  const handleInput = (e) => {
    const inputBox = e.target.value.toLowerCase();
    setSearchInput(inputBox);
    const filterItems = items.filter(
      (item) =>
        item.name.toLowerCase().includes(inputBox) ||
        item.brand.toLowerCase().includes(inputBox) ||
        item.category.toLowerCase().includes(inputBox)
    );
    setFilteredProducts(filterItems);
  };

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      {/* Search Input */}
      <div className="max-w-3xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-3 border rounded-lg focus:outline-none bg-transparent text-white"
          value={searchInput}
          onChange={handleInput}
        />
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="relative bg-gray-500 p-4 shadow-lg rounded-lg hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Wishlist Icon */}
            <button
            onClick={() => watchList(product)}
            className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-red-400 transition">
              <Heart className="w-5 h-5 text-gray-700 hover:text-white" />
            </button>

            {/* Updated Image */}
            <div className="w-full h-80 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain rounded"
              />
            </div>

            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-white">₹{product.price}</p>
            <p className="text-green-600 font-bold">{product.offer}</p>
            <p className="text-yellow-500">⭐ {product.rating}</p>

            {/* Add to Cart Button */}
            <button
              onClick={() => AddToCart(product)}
              className="mt-3 flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full justify-center"
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
