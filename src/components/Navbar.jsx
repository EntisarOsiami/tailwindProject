import React from "react";

export default function Navbar() {
  return (
    <header className="navbar p-6 bg-amber-400 text-zinc-900 container mx-auto">
      <nav className="flex w-full items-center justify-center">
        <ul className="lg:flex md:flex hidden items-center justify-center font-bold space-x-6">
          <a href="">
            <li>ALL CATEGORIES</li>
          </a>
          <a href="">
            <li>TODAY DEALS</li>
          </a>
          <a href="">
            <li>ELECTRONICS</li>
          </a>
          <a href="">
            <li>CLOTHINGS</li>
          </a>
          <a href="">
            <li>COMPUTERS</li>
          </a>
          <a href="">
            <li>FURNITURE</li>
          </a>
          <a href="">
            <li>MOM & BABY</li>
          </a>
          <a href="">
            <li>BOOKS & MORE</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
