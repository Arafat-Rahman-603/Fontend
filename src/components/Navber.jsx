import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#1DA1F2] px-5 py-3 flex justify-between items-center relative shadow-md">
      {/* Logo */}
      <div className="flex gap-3 items-center justify-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4015/4015804.png"
        className="w-12 h-12 p-1 rounded-3xl bg-[#aec8ed]"
        alt="logo"
      />
      <NavLink to="/"><h1 className="text-[1.5rem] text-white font-bold">Chatterly</h1></NavLink>
      </div>

      {/* Hamburger (mobile) */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer z-50"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Overlay background */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Menu Links */}
      <ul
        className={`
          flex flex-col md:flex-row md:items-center gap-3 text-xl font-bold
          md:static fixed top-0 left-0 h-full md:h-auto w-[85vw] md:w-auto
          bg-[#1DA1F2] md:bg-transparent
          z-50 md:z-auto
          shadow-lg md:shadow-none
          transition-all duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          p-6 md:p-0
        `}
      >
        {links.map((link) => (
          <li key={link.name} className="w-full md:w-auto">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `block text-center md:text-left border-2 px-4 py-2 rounded-2xl transition-all duration-200 w-full md:w-auto
                 hover:scale-95 hover:bg-white hover:text-black hover:border-black
                 ${
                   isActive
                     ? "bg-white text-black border-black"
                     : "text-white border-white"
                 }`
              }
              end
              onClick={() => setOpen(false)} // Close menu after click
            >
              {link.name}
            </NavLink>
          </li>
        ))}

        {/* Auth Buttons */}
        <li className="w-full md:w-auto flex justify-center md:justify-start">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <NavLink
              to="/"
              className="block border-2 px-4 py-2 rounded-xl transition-all w-full md:w-auto
                         hover:scale-95 hover:bg-white hover:text-black hover:border-black
                         text-white border-white text-center"
              onClick={() => setOpen(false)}
            >
              Login
            </NavLink>
          </SignedOut>
        </li>
      </ul>
    </nav>
  );
}
