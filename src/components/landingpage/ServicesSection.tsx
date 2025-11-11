"use client";

import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Card, CardContent } from "@/components/ui/card";
import webDevAnim from "@/assets/lottiefile/website building of shopping sale.json";
import uiuxAnim from "@/assets/lottiefile/Designer.json";
import appAnim from "@/assets/lottiefile/Business Analysis.json";
import softwareAnim from "@/assets/lottiefile/Software House.json";
import hostingAnim from "@/assets/lottiefile/Website hosting.json";
import businessAnim from "@/assets/lottiefile/Business team.json";

const services = [
  {
    title: "Full-Stack Web Development",
    desc: "We build powerful and scalable web applications using Next.js, React.js, Node.js, and MongoDB. From custom portfolios to full-featured business and e-commerce websites.",
    animation: webDevAnim,
  },
  {
    title: "UI/UX Design",
    desc: "We design beautiful, responsive, and user-friendly interfaces. From wireframe to Figma design — we convert your vision into pixel-perfect experiences.",
    animation: uiuxAnim,
  },
  {
    title: "Mobile App Development",
    desc: "We create seamless mobile applications for both Android and iOS using React Native and Flutter — delivering performance and design together.",
    animation: appAnim,
  },
  {
    title: "Software & ERP Solutions",
    desc: "Smart software solutions for schools, inventory, HR, and accounting systems — all tailored to your needs with efficiency and automation.",
    animation: softwareAnim,
  },
  
  {
    title: "Business Management System",
    desc: "We design and develop complete business management systems with dashboards, analytics, and automation to help your company grow faster.",
    animation: businessAnim,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden py-6 px-6 md:px-16">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black bg-clip-text dark:text-white">
          Our Services
        </h2>
        <p className=" mt-3 max-w-2xl mx-auto">
          We deliver high-quality digital solutions — from full-stack web
          development to mobile apps, software systems, and hosting support.
        </p>
      </motion.div>

      {/* Services Cards */}
      <div className="space-y-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className=" border  hover:border-cyan-400 transition-all rounded-2xl shadow-xl">
              <CardContent
                className={`flex flex-col-reverse ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center justify-between gap-3 `}
              >
                {/* Text */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Animation */}
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-[250px] sm:w-[300px] md:w-[350px]">
                    <Lottie animationData={service.animation} loop={true} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
