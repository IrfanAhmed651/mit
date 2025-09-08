"use client";

import React from "react";
import { motion } from "motion/react";
// import { IconArrowRight } from "@tabler/icons-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl py-2 md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
        >
          Transforming Your Digital Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Innovative IT Solutions Tailored for Your Business Needs.
          <br />
          Whether you are looking to build a new website, improve security, or
          streamline your operations, we are here to help you grow in the
          digital world.
        </motion.p>

        <motion.div
          className="mt-8 flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition">
            Get Started
            <IconArrowRight className="w-5 h-5" />
          </button>
          <button className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Learn More
          </button> */}
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
