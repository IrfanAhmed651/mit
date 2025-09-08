"use client";
import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Sun, Moon } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enableDark = saved ? saved === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", enableDark);
    setIsDark(enableDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <header className="sticky top-0 z-30 w-full bg-background/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 bg-black text-white rounded px-3 py-2"
      >
        Skip to content
      </a>
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a
          href="#top"
          className="cursor-pointer font-bold text-xl bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent"
          aria-label="Scroll to top"
        >
          It Clone
        </a>
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-80}
              duration={600}
              spy={true}
              activeClass="active-link"
              className=" cursor-pointer transition-colors duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
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
              activeClass="active-link"
              className="cursor-pointer transition-colors duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              offset={0}
              duration={600}
              spy={true}
              activeClass="active-link"
              className="cursor-pointer transition-colors duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={0}
              duration={600}
              spy={true}
              activeClass="active-link"
              className="cursor-pointer transition-colors duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={toggleTheme}
            className="rounded-md border border-gray-700 p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-gray-700" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden rounded-md border px-3 py-1.5 text-sm hover:bg-gray-200 dark:hover:bg-gray-800"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </nav>
      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-40 md:hidden transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />
        <div className="ml-auto h-full w-72 bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>
          <nav className="flex flex-col gap-4 text-gray-700 dark:text-gray-200 font-medium">
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="hover:text-indigo-600"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="hover:text-indigo-600"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={() => setOpen(false)}
              className="hover:text-indigo-600"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="hover:text-indigo-600"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
