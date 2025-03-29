import React from 'react'

import { Trash2 } from "lucide-react";

const UserBag = ({ items, handleRemove }) => {
  return (
    <>
      {/* Watchlist Banner */}
      <div className="w-full flex items-center justify-center h-[300px] bg-gray-800">
        <h2 className="text-4xl font-semibold mb-4 text-white">Your Watchlist</h2>
      </div>

      {/* Product Grid */}
      <div className="p-6 max-w-4xl mx-auto">
        {items.length === 0 ? (
          <p className="text-center text-gray-500">Your watchlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((product) => (
              <div
                key={product.id}
                className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center relative"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <h3 className="text-lg font-medium mt-2">{product.name}</h3>
                <p className="text-gray-600">₹{product.price}</p>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(product.id)}
                  className="absolute top-2 right-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserBag