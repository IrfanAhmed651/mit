"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Globe, Rocket, Shield } from "lucide-react";

type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Modern, performant web apps built with React, Next.js, and TypeScript.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "High-quality iOS/Android apps with React Native or Flutter.",
  },
  {
    icon: Globe,
    title: "Cloud & DevOps",
    desc: "CI/CD, containers, and scalable cloud architecture on AWS/GCP/Azure.",
  },
  {
    icon: Shield,
    title: "Security & QA",
    desc: "Threat-modeling, automated tests, and secure SDLC practices.",
  },
  {
    icon: Rocket,
    title: "Product Acceleration",
    desc: "MVPs, design sprints, and rapid iteration to find product-market fit.",
  },
];

export function Services() {
  const prefersReducedMotion = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };
  const item = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.3 } },
      }
    : {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
      };

  return (
    <section id="services" className="border-y py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">Services</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              End-to-end delivery for web, mobile, and cloud.
            </p>
          </div>

          <Button asChild variant="outline">
            <a href="#contact" aria-label="Get pricing and contact us">
              Get Pricing
            </a>
          </Button>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.li key={s.title} variants={item} className="list-none">
                <Card className="h-full group transition-transform hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center 
                                   rounded-2xl border 
                                   text-gray-500 dark:text-gray-400 
                                   group-hover:text-indigo-500 transition-colors"
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <CardTitle>
                        <h3
                          className="text-lg font-semibold 
                                     transition-colors group-hover:text-indigo-500"
                        >
                          {s.title}
                        </h3>
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    {s.desc}
                  </CardContent>
                </Card>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
