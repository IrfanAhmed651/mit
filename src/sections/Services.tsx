"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Rocket, Shield } from "lucide-react";

const services = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Web Development",
    desc: "Modern, performant web apps built with React, Next.js, and TypeScript.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Apps",
    desc: "High-quality iOS/Android apps with React Native or Flutter.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Cloud & DevOps",
    desc: "CI/CD, containers, and scalable cloud architecture on AWS/GCP/Azure.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security & QA",
    desc: "Threat-modeling, automated tests, and secure SDLC practices.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Product Acceleration",
    desc: "MVPs, design sprints, and rapid iteration to find product-market fit.",
  },
];

export function Services() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">Services</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              End-to-end delivery for web, mobile, and cloud.
            </p>
          </div>

          <Button asChild variant="outline">
            <a href="#contact">Get Pricing</a>
          </Button>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <motion.div key={s.title} variants={item}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border">
                      {s.icon}
                    </span>
                    <CardTitle>{s.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-300">
                  {s.desc}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
