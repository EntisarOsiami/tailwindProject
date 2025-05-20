import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-800 py-6">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center">
          <div className="text-amber-400 text-lg font-bold">My Website</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-amber-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-400">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>{" "}
    </div>
  );
}
