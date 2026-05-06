"use client";

import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Card, CardContent } from "@/components/ui/card";

// Ensure these imports point to your exact Lottie files
import webDevAnim from "@/assets/lottiefile/website building of shopping sale.json";
import uiuxAnim from "@/assets/lottiefile/Designer.json";
import appAnim from "@/assets/lottiefile/Business Analysis.json";
import softwareAnim from "@/assets/lottiefile/Software House.json";
import businessAnim from "@/assets/lottiefile/Business team.json";
import marketingAnim from "@/assets/lottiefile/3D Digital Marketing.json";

const services = [
  {
    title: "Full-Stack Web Development",
    desc: "We build powerful and scalable web applications using Next.js, React.js, Node.js, and MongoDB. From custom portfolios to business websites.",
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
    title: "Business Management",
    desc: "We design and develop complete business management systems with dashboards, analytics, and automation to help your company grow faster.",
    animation: businessAnim,
  },
  {
    title: "Digital Marketing & SEO",
    desc: "Boost your online presence with our digital marketing services. We offer SEO, social media management, and targeted campaigns to grow your audience.",
    animation: marketingAnim,
  }
];

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden py-10  dark:bg-[#09090B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800/50">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Our Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Services
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We deliver high-quality digital solutions — from full-stack web
            development to mobile apps, software systems, and hosting support.
          </p>
        </motion.div>

        {/* Services Cards (Grid Layout for equal & minimized size) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
              viewport={{ once: true, margin: "-50px" }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border border-slate-200 dark:border-slate-800/60 bg-white dark:bg-[#121214]/80 backdrop-blur-sm hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-500 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 overflow-hidden group">
                <CardContent className="flex flex-col items-center text-center p-8 flex-grow">
                  
                  {/* Lottie Animation (Top) */}
                  <div className="flex justify-center items-center w-full h-[160px] mb-6">
                    <div className="w-[140px] drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Lottie animationData={service.animation} loop={true} />
                    </div>
                  </div>

                  {/* Text Content (Bottom) */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;