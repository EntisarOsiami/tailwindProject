import React from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

export default function Hero() {
  return (
    <div className="grid grid-cols-12 gap-4 p-6">
      <div className="col-span-12 md:col-span-8 flex p-8">
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          <div className="relative h-75 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://images.pexels.com/photos/31581062/pexels-photo-31581062/free-photo-of-pink-ceramic-plate-on-tiled-surface.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className="absolute block w-full  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
          </div>

          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <IoIosArrowDropleftCircle />
          </button>

          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>

      <div className="col-span-12 md:col-span-4 h-75 p-8">
        <div className="p-4 m-3 bg-white border-2 border-amber-200 w-full max-w-sm text-center shadow-lg rounded-lg">
          <h2 className="text-xl font-bold mb-2">
            Tiita Round End Table Mental
          </h2>
          <p className="text-gray-700 mb-3">$49.99</p>
          <img
            src="https://m.media-amazon.com/images/I/61LA9PBsVIL._AC_UL480_QL65_.jpg"
            className="w-full h-48 object-center object-contain mb-3"
          />
        </div>
      </div>
    </div>
  );
}
