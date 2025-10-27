// Enable client-side rendering for this component
"use client";

// React and Next.js imports
import { useState } from "react";
import Link from "next/link";
// Icon imports
import { FaRegMoon } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
// Font imports
import { roboto, montserrat } from "@/app/font/fonts";
// Next.js hook to get current route
import { usePathname } from "next/navigation";
// Animation imports
import { motion, AnimatePresence } from "framer-motion";

// Navbar component for site navigation
const Navbar = () => {
  // Get current route pathname
  const pathname = usePathname();
  // State to control mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  // Navigation links for the portfolio
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pages/about", label: "About" },
    { href: "/pages/projects", label: "Projects" },
    { href: "/pages/contact", label: "Contact" },
  ];

  return (
    // Main navigation bar container
    <nav className="absolute top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0b0f19]/80 border-b border-[#1e293b]">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Portfolio owner name */}
        <h2
          className={`font-bold text-[1.3rem] text-white ${montserrat.className}`}
        >
          Felipe Marin
        </h2>

        {/* Desktop navigation links */}
        <ul className={`hidden md:flex gap-8 ${roboto.className}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 hover:text-indigo-400 ${
                pathname === link.href
                  ? "text-indigo-400 font-semibold"
                  : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Right side icons: dark mode and mobile menu toggle */}
        <div className="flex items-center gap-4 text-slate-300">
          {/* Dark mode icon (not functional yet) */}
          <FaRegMoon className="cursor-pointer hover:text-indigo-400 transition-colors" />
          {/* Mobile menu toggle button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {/* Show close icon if menu is open, hamburger if closed */}
            {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile navigation menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0b0f19] border-t border-[#1e293b]"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-slate-300">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                  className={`transition-colors duration-300 hover:text-indigo-400 ${
                    pathname === link.href
                      ? "text-indigo-400 font-semibold"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Export Navbar component as default
export default Navbar;
