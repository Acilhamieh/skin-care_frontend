import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#FFC8EF] text-black py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Skin Care by Rawan</h3>
          <p className="text-sm">
            UK & Swiss-certified esthetician providing expert skincare solutions.
            Your skin deserves the best care!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="/services" className="hover:underline">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
          <p className="text-sm mb-2">Email: rawan@skincare.com</p>
          <p className="text-sm mb-2">Phone: +123 456 789</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:scale-110 transition">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8">
        © {new Date().getFullYear()} Skin Care by Rawan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
