"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/images/landingPage/tools/blockchain/ethereumActive.png",
  "/images/landingPage/tools/blockchain/binanceActive.png",
  "/images/landingPage/tools/blockchain/solidityActive.png",
  "/images/landingPage/tools/blockchain/polygonActive.png",
  "/images/landingPage/tools/web/nodeActive.png",
  "/images/landingPage/tools/web/reactActive.png",
  "/images/landingPage/tools/web/nextActive.png",
  "/images/landingPage/tools/web/pgActive.png",
  "/images/landingPage/tools/web/mongoActive.png",
  "/images/landingPage/tools/uiux/figmaActive.png",
  "/images/landingPage/tools/devops/awsActive.png",
  "/images/landingPage/tools/devops/dockerActive.png",
  "/images/landingPage/tools/others/gitHubActive.png",
];

export default function LogoSlider() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-10">
          Technologies We Use
        </h2>

        {/* Slider */}
        <div className="relative overflow-hidden group">
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {/* Duplicate for infinite effect */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[160px] h-[80px] opacity-70 hover:opacity-100 transition"
              >
                <Image
                  src={logo}
                  alt="tech"
                  width={120}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </motion.div>

          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
}