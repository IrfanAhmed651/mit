import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export function Header() {
  // function closeDrawer() {
  //   const el = document.getElementById("mobile-drawer");
  //   if (!el) return;
  //   el.classList.add("translate-x-full");
  // }

  return (
    <header className="sticky top-0 z-30 w-full bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div
          onClick={() => scroll.scrollToTop({ duration: 600, smooth: true })}
          className="cursor-pointer font-bold text-xl bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent"
        >
          It Clone
        </div>
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-80}
              duration={600}
              spy={true}
              className=" cursor-pointer hover:text-indigo-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              offset={-80}
              duration={600}
              spy={true}
              className="cursor-pointer hover:text-indigo-600"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              offset={-80}
              duration={600}
              spy={true}
              className="cursor-pointer hover:text-indigo-600"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={600}
              spy={true}
              className="cursor-pointer hover:text-indigo-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
