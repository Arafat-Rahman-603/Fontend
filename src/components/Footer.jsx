import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 md:flex md:justify-between md:items-center">
        {/* Logo / Name */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bold text-indigo-500">Chatterly</h1>
          <p className="text-gray-400 mt-1">Connect, chat, and share with friends.</p>
        </div>

        {/* Navigation / Links */}
        <div className="">
          <h1 className="text-2xl font-semibold text-indigo-500 text-center md:text-left">Links</h1>
        <div className="flex gap-5 md:pl-0.5 justify-center md:justify-end text-center ">
          <a href="/" className="hover:text-indigo-400 hover:underline mt-2 md:mt-0">Home</a>
          <a href="/contact" className="hover:text-indigo-400 hover:underline mt-2 md:mt-0">Contact</a>
          <a href="/about" className="hover:text-indigo-400 hover:underline mt-2 md:mt-0">About</a>
          <a href="/privacy" className="hover:text-indigo-400 hover:underline mt-2 md:mt-0">Privacy Policy</a>
        </div>
      </div>
      </div>

     

     
      <div className="text-center text-gray-500 text-sm py-4">
        © 2025 Chatterly. All rights reserved.
      </div>
    </footer>
  );
}
