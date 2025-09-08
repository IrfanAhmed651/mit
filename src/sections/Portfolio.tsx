"use client";

import React from "react";
import { CometCard } from "@/components/ui/comet-card";

export function Portfolio() {
  return (
    <section id="portfolio" className="pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Selected Work</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Recent projects we’ve shipped.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <CometCard key={n}>
              <button
                type="button"
                className="my-6 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-4"
                aria-label={`View project ${n}`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                {/* Project screenshot */}
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                      alt={`Project ${n} screenshot`}
                      src={`https://picsum.photos/seed/project-${n}/400/600`}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>

                {/* Project info */}
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                  <div className="text-xs">Project Title {n}</div>
                  <div className="text-xs text-gray-300 opacity-50">#{n}</div>
                </div>
              </button>
            </CometCard>
          ))}
        </div>
      </div>
    </section>
  );
}
