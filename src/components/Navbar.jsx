import React from "react";

export default function Navbar() {
  return (
    <header className="navbar flex  p-6 bg-amber-400 text-zinc-900 container text-center items-center justify-between mx-auto">
      <nav className="flex w-full items-center justify-between text-center">
        <ul className="lg:flex gap-4 md:flex pag-2 hidden items-center justify-center font-bold">
          <a href="" className="">
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
