import React from "react";

export default function Banner() {
  return (
    <div className="bg-white grid grid-cols-9 gap-8 p-8 mx-auto my-12 max-w-7xl items-center border-2 border-amber-200 rounded-lg shadow-md">      <div className="sm:col-span-9 md:col-span-6 lg:col-span-3 flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-2">Bose Bluetooth Wireless headphones</h2>
        <p className="text-gray-600">
          crisp powerful sound from the best sounding Wireless headphone in its
          class
        </p>
      </div>
      <div className="sm:col-span-9 md:col-span-6 lg:col-span-3 flex flex-col justify-center">
        <p className="line-through text-gray-500 mb-1">260.50$</p>
        <p className="text-amber-500 font-bold text-xl mb-3">299.05$</p>
        <button className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded transition duration-300 w-max">
          Shop Now
        </button>
      </div><div className="sm:col-span-9 md:col-span-6 lg:col-span-3 flex items-center justify-center">
        <img
          src="https://m.media-amazon.com/images/I/61C5t1ltM5L._AC_SL1500_.jpg"
          className="w-full h-auto max-h-48 object-cover rounded-lg"
          alt="Bose Bluetooth Wireless headphones"
        />
      </div>
    </div>
  );
}
