"use client";

import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import heroAnimation from "@/assets/lottiefile/Business Analysis.json"; // your Lottie JSON file

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden  md:py-24 lg:py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left side content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start"
        >
          {/* Premium Tagline Badge */}
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-800/50 shadow-sm">
            🚀 Empowering Digital Innovation
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-slate-900 dark:text-white tracking-tight">
            Innovate with <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              NexovateLabs
            </span>
          </h1>
          
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
            We deliver next-generation web and software solutions. 
            Turn your visionary ideas into impactful, scalable digital realities with our expert team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium px-8 py-6 text-base rounded-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Link href="/solutions">Explore Services</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right side Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center w-full"
        >
          <div className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] drop-shadow-2xl">
            <Lottie animationData={heroAnimation} loop={true} />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default HeroSection;