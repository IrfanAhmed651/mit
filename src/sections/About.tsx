"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { EvervaultCard } from "@/components/ui/evervault-card";

export function About() {
  return (
    <section id="about" className="border-t px-6">
      <Card
        className="
          relative mx-auto flex flex-col items-center justify-center
          max-w-full overflow-hidden
          rounded-2xl border-none border-black/20 dark:border-white/20
          bg-transparent backdrop-blur-sm
          min-h-[28rem] sm:min-h-[32rem]
        "
      >
        {/* Evervault effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <EvervaultCard text="" />
        </div>

        {/* Content */}
        <CardContent className="relative z-10 flex flex-col items-center justify-center text-center p-6 sm:p-10">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            We are a passionate team of developers and designers focused on
            creating digital solutions that are both functional and beautiful.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
