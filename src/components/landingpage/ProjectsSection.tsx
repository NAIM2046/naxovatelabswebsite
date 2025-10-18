"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tour Management System",
    desc: "A full-stack travel booking web app with user dashboard, admin panel, and live map integration using Next.js and MongoDB.",
    image: "/images/tour.png",
    live: "https://tour-delta-rose.vercel.app/",
    details: "#",
    reviews: 32,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Education Platform -Safwan chemistry Solution",
    desc: "A modern e-learning platform offering video lectures, quizzes, and progress tracking for students, built with React and Node.js.",
    image: "https://i.ibb.co.com/DHw2yMnq/chemistry.png",
    live: "https://scs-nine.vercel.app/",
    details: "#",
    reviews: 54,
    rating: 4.9,
  },
  {
    id: 3,
    title: "Smart Inventory System",
    desc: "An ERP-based inventory & accounting system with role-based access, report generation, and live data visualization.",
    image: "/projects/inventory.png",
    live: "https://inventory-smart.vercel.app",
    details: "#",
    reviews: 26,
    rating: 4.7,
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-16 transition-colors duration-500">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
          Our Projects
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
          Explore some of our latest works — blending innovation, design, and
          technology to build meaningful digital experiences.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-400 hover:shadow-cyan-500/30 transition-all duration-300 flex flex-col">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              <CardContent className=" flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-cyan-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
              </CardContent>

              {/* Footer Section */}
              <CardFooter className="flex items-center justify-between px-6 pb-6">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{project.rating}</span>
                  <span>•</span>
                  <span>{project.reviews} Reviews</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all"
                    onClick={() => window.open(project.live, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> Live
                  </Button>
                  <Button
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => window.open(project.details, "_blank")}
                  >
                    <Eye className="w-4 h-4 mr-2" /> Details
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-14"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90 transition-all rounded-full px-8 py-6 text-lg"
          onClick={() => window.open("/projects", "_self")}
        >
          🚀 View All Projects
        </Button>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
