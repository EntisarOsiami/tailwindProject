import React from "react";

export default function Card({ name, image, info }) {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="card-image col-span-1">
          <img src={image} className="w-full h-48 object-cover" />
        </div>
        <div className="p-4 col-span-1">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-gray-700">{info}</p>
        </div>
      </div>
    </>
  );
}
