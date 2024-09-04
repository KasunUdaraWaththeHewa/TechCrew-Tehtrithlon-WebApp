"use client";
import React, { useState } from "react";

// Define your navbar items
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Login", href: "/api/login" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-5 shadow-md">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">Logo</div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Mobile menu button */}
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        <ul
          className={`flex-1 justify-end items-center space-x-4 md:flex ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map((item, index) => (
            <li key={index} className="my-2 md:my-0">
              <a href={item.href} className="hover:text-gray-300">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
