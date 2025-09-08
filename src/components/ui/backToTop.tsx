"use client";

import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { ArrowUp } from "lucide-react"; // icon (you can swap with any)

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 600, smooth: true });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-indigo-600 p-3 text-white shadow-lg transition hover:bg-gradient-to-t from-indigo-500 to-purple-500 focus:outline-none"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
