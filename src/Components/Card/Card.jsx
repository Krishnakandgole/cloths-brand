import React from 'react';
import { Trash2 } from "lucide-react";

function Card({ items, handleRemove, handleInc, handleDec, totalCost }) {
  return (
    <>
      <div className='w-full min-h-[50vh] flex justify-center items-center bg-[url(https://img.freepik.com/free-photo/composition-black-friday-shopping-cart-with-copy-space_23-2148667046.jpg?uid=R181781845&ga=GA1.1.664505187.1740726988&semt=ais_hybrid)] bg-cover bg-center bg-no-repeat'>
        <h1 className="text-5xl font-bold mb-6 text-white">Shopping Cart</h1>
      </div>

      <div className="bg-gray-900 min-h-screen p-6 flex flex-col items-center">
        <div className="w-full max-w-4xl bg-transparent border text-white p-6 rounded-lg shadow-lg">
          {items.length > 0 ? (
            <>
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b py-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1 ml-4">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      className="px-3 py-1 text-black text-xl font-bold hover:bg-red-700 hover:text-white bg-white rounded"
                      onClick={() => handleDec(item.id)}
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-white text-bold text-xl text-black hover:bg-green-700 hover:text-white rounded"
                      onClick={() => handleInc(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-4 text-red-600 hover:text-red-800"
                  >
                    <Trash2 />
                  </button>
                </div>
              ))}
              <div className="flex justify-between mt-6 text-xl font-semibold">
                <span>Total:</span>
                <span>₹{Math.round(totalCost())}</span>
              </div>
              <button className="w-full bg-blue-500 text-white py-3 mt-6 rounded-lg hover:bg-blue-600 transition">
                Place to your Order
              </button>
            </>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
