"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Sun, Moon } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // theme init
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

  // lock body scroll + Esc to close
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  const navItems = [
    { to: "about", label: "About", offset: -80 },
    { to: "services", label: "Services", offset: -80 },
    { to: "portfolio", label: "Portfolio", offset: 0 },
    { to: "contact", label: "Contact", offset: 0 },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
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

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth
                offset={item.offset}
                duration={600}
                spy
                activeClass="active-link"
                className="cursor-pointer transition-colors duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
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
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile Overlay + Drawer */}
      {/* The wrapper controls pointer-events + opacity to avoid showing on first paint */}
      <div
        className={`fixed inset-0 md:hidden z-50 transition-opacity duration-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        />

        {/* Drawer panel (slides from right) */}
        <aside
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          className={`ml-auto h-full w-72 bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-6 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
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
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                offset={item.offset}
                duration={600}
                className="py-2 cursor-pointer hover:text-indigo-600"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}
