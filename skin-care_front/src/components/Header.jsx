'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-[#FFC8EF] px-6 py-2 flex flex-col md:flex-row items-center justify-between shadow font-['Istok_Web']">
      {/* Logo */}
      <div>
        <Link href="/">
          <img
            src="https://i.ibb.co/Z18WvWtD/Group-1.png"
            alt="Logo"
            className="h-20 w-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8 relative text-lg">
        <Link href="/" className="text-black no-underline">
          Home
        </Link>

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-black  focus:outline-none"
          >
            Services ▾
          </button>
          {showDropdown && (
            <div className="absolute mt-2 bg-black bg-opacity-90 backdrop-blur-md shadow-md rounded p-2 space-y-1 z-50 w-40">
              <Link
                href="/services/facial"
                className="block px-4 py-2 text-white hover:bg-gray-800 rounded"
              >
                Facial
              </Link>
              <Link
                href="/services/makeup"
                className="block px-4 py-2 text-white hover:bg-gray-800 rounded"
              >
                Makeup
              </Link>
              <Link
                href="/services/lazer"
                className="block px-4 py-2 text-white hover:bg-gray-800 rounded"
              >
                Lazer
              </Link>
            </div>
          )}
        </div>

        <Link href="/contact" className="text-black no-underline">
          Contact
        </Link>
      </nav>

      {/* Buttons */}
      <div className="flex space-x-3 mt-3 md:mt-0">
        <Link href="/login">
          <button className="bg-black text-white px-5 py-2 rounded-full transform transition duration-300  hover:scale-110">
            Sign In
          </button>
        </Link>
        <Link href="/register">
          <button className="border border-black text-black px-5 py-2 rounded-full transform transition duration-300 hover:scale-110">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
}
