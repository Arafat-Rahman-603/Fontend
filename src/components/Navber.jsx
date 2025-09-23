import { NavLink } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

export default function Navbar() {
  return (
    <nav className="bg-[#1DA1F2] px-5 py-3 flex justify-between items-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4015/4015804.png"
        className="w-12 h-12 p-1 rounded-3xl bg-[#aec8ed]"
        alt="logo"
      />
      <ul className="flex text-xl font-bold gap-3 text-white items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `border-2 rounded-xl px-2 hover:scale-90 transition-all hover:text-black hover:border-black ${isActive ? 'scale-90 text-black border-black' : ''}`
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `border-2 rounded-xl px-2 hover:scale-90 transition-all hover:text-black hover:border-black ${isActive ? 'scale-90 text-black border-black' : ''}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `border-2 rounded-xl px-2 hover:scale-90 transition-all hover:text-black hover:border-black ${isActive ? 'scale-90 text-black border-black' : ''}`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <NavLink to="/" className="border-2 rounded-xl px-2 hover:scale-90 transition-all hover:text-black hover:border-black">
              Login
            </NavLink>
          </SignedOut>
        </li>
      </ul>
    </nav>
  );
}
