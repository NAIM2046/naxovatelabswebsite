"use client";

import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import heroAnimation from "@/assets/lottiefile/Business Analysis.json"; // your Lottie JSON file

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden  text-white  md:py-6">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex  md:flex-row items-center justify-between flex-col-reverse">
        {/* Left side content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Next Innovation Labs
          </h1>
          <p className="text-black dark:text-white text-base md:text-lg mb-6">
            Empowering businesses with next-generation web and software
            solutions. At{" "}
            <span className="text-cyan-400 font-semibold">NexovateLabs</span>,
            we turn ideas into impactful digital realities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Button
              asChild
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-lg"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right side Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
        >
          <div className="w-[280px] sm:w-[350px] md:w-[450px] rounded-3xl overflow-hidden">
            <Lottie animationData={heroAnimation} loop={true} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
