"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Star } from "lucide-react";

// Ensure these imports are correct based on your folder structure
import wallet from "@/assets/images/wallet.jpeg";
import TourImg from "@/assets/images/tour.png";
import Rdf from "@/assets/images/rdf.png";
import TourBuddy from "@/assets/images/tourbuddy.png";
import CouponImg from "@/assets/images/coupon.png";

const projects = [
  {
    id: 1,
    title: "AmarCoupon – Coupon & Deals Platform",
    desc: "A modern SaaS-based coupon and deals platform featuring offer listings, responsive UI, and scalable frontend architecture built for growth.",
    image: CouponImg,
    live: "https://amarcoupon.com",
    details: "#", // Added fallback
    reviews: 24, // Added fallback
    rating: 4.6, // Added fallback
  },
  {
    id: 2,
    title: "TourBuddy – Tour Management Software",
    desc: "A complete end-to-end tour management system with booking automation, admin dashboard, package management, and scalable architecture for travel agencies.",
    image: TourBuddy,
    live: "https://tourbuddy-client-ppt5.vercel.app",
    details: "/case-studies/tourbuddy",
    reviews: 48,
    rating: 4.9,
  },
  {
    id: 3,
    title: "RDF Bangladesh – NGO & Corporate",
    desc: "A professional corporate & NGO website with dynamic content management, responsive UI, and modern design to represent organizational activities.",
    image: Rdf,
    live: "https://rdfbd.org",
    details: "/case-studies/rdf-bd",
    reviews: 36,
    rating: 4.8,
  },

  {
    id: 4,
    title: "Tour Management System",
    desc: "A full-stack travel booking web app with user dashboard, admin panel, and live map integration using Next.js and MongoDB.",
    image: TourImg,
    live: "https://sixtour.vercel.app",
    details: "#",
    reviews: 32,
    rating: 4.8,
  },
  {
    id: 5,
    title: "Safwan Chemistry Solution",
    desc: "A modern e-learning platform offering video lectures, quizzes, and progress tracking for students, built with React and Node.js.",
    image: "https://i.ibb.co.com/DHw2yMnq/chemistry.png", // Keep string for external URL
    live: "https://scs-nine.vercel.app/",
    details: "#",
    reviews: 54,
    rating: 4.9,
  },
  {
    id: 6,
    title: "DIGI Wallet",
    desc: "A secure, role-based frontend application for a Digital Wallet System. Enables Users, Agents, and Admins to perform financial operations via dashboard.",
    image: wallet,
    live: "https://digiwallet-front.vercel.app",
    details: "#",
    reviews: 26,
    rating: 4.7,
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative overflow-hidden    dark:bg-[#09090B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800/50">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Our Recent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Projects
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Explore some of our latest works — blending innovation, design, and
            technology to build meaningful digital experiences.
          </p>
        </motion.div>

        {/* Project Grid - Adjusted gap and alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full flex w-full max-w-[380px]" // Restricted max width for a compact look
            >
              <Card className="group flex-1 flex flex-col bg-white dark:bg-[#121214]/80 border border-slate-200 dark:border-slate-800/60 rounded-2xl overflow-hidden hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500">
                {/* Image Section - Reduced height (h-48) */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Section - Adjusted padding (p-5) */}
                <CardContent className="flex-1 flex flex-col p-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.desc}
                  </p>

                  {/* Reviews & Ratings */}
                  <div className="mt-auto flex items-center gap-2 text-slate-600 dark:text-slate-400 text-xs font-medium">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-slate-900 dark:text-slate-200">
                      {project.rating}
                    </span>
                    <span className="text-slate-300 dark:text-slate-600">
                      •
                    </span>
                    <span>{project.reviews} Reviews</span>
                  </div>
                </CardContent>

                {/* Footer Section (Buttons) - Reduced padding */}
                <CardFooter className="px-5 pb-5 pt-0 flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-10 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all rounded-lg text-sm"
                    onClick={() => window.open(project.live, "_blank")}
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-2" /> Live
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 h-10 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-all rounded-lg text-sm"
                    onClick={() => window.open(project.details, "_self")}
                  >
                    Details <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <Button
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            onClick={() => window.open("/projects", "_self")}
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
