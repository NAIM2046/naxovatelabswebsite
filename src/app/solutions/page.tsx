"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Star, X, Play } from "lucide-react";

import wallet from "@/assets/images/wallet.jpeg";
import TourImg from "@/assets/images/tour.png";
import TourBuddy from "@/assets/images/tourbuddy.png";
import Rdf from "@/assets/images/rdf.png";
import CouponImg from "@/assets/images/coupon.png";

type Project = {
  id: number;
  title: string;
  desc: string;
  image: any;
  video?: string;
  live: string;
  details: string;
  reviews: number;
  rating: number;
};

const projects: Project[] = [
  {
    id: 1,
    title: "TourBuddy – Tour Management Software",
    desc: "A complete end-to-end tour management system with booking automation, admin dashboard, and scalable architecture.",
    image: TourBuddy,
    video: "/src/assets/video/tour-buddy.mp4",
    live: "https://tourbuddy-client-ppt5.vercel.app",
    details: "/case-studies/tourbuddy",
    reviews: 48,
    rating: 4.9,
  },
  {
    id: 2,
    title: "RDF Bangladesh – NGO & Corporate Website",
    desc: "A professional NGO & corporate website with modern UI, responsive layout, and content-focused architecture.",
    image: Rdf,
    video: "/src/assets/video/tour-buddy.mp4",
    live: "https://rdfbd.org",
    details: "/case-studies/rdf-bd",
    reviews: 36,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Coupon Opal – Coupon & Deals Platform",
    desc: "A SaaS-based coupon & deals platform designed for scalability and growth.",
    image: CouponImg,
    video: "/videos/coupon.mp4",
    live: "https://coupon-opal.vercel.app",
    details: "/case-studies/coupon-opal",
    reviews: 29,
    rating: 4.7,
  },
  {
    id: 4,
    title: "DIGI Wallet",
    desc: "Role-based digital wallet system inspired by bKash & Nagad with user, agent & admin dashboards.",
    image: wallet,
    video: "/videos/digiwallet.mp4",
    live: "https://digiwallet-front.vercel.app",
    details: "#",
    reviews: 26,
    rating: 4.7,
  },
  {
    id: 5,
    title: "Education Platform -Safwan chemistry Solution",
    desc: "A modern e-learning platform offering video lectures, quizzes, and progress tracking for students, built with React and Node.js.",
    image: "https://i.ibb.co.com/DHw2yMnq/chemistry.png",
    video: "/src/assets/video/scs.mp4",
    live: "https://scs-nine.vercel.app/",
    details: "#",
    reviews: 54,
    rating: 4.9,
  },
  {
    id: 6,
    title: "DIGI Wallet",
    desc: "A secure, role-based, and user-friendly frontend application for a Digital Wallet System — inspired by popular platforms like bKash and Nagad. This project enables Users, Agents, and Admins to perform financial operations, manage wallets, and monitor transactions through an intuitive dashboard interface",
    image: wallet,
    video: "/videos/digiwallet.mp4",
    live: "https://digiwallet-front.vercel.app",
    details: "#",
    reviews: 26,
    rating: 4.7,
  },
];

const OurSolutions = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      {/* SECTION */}
      <section className="max-w-7xl mx-auto py-12 transition-colors duration-500">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Featured Case Studies
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
            Real-world software solutions we’ve built for businesses,
            organizations, and startups.
          </p>
        </motion.div>

        {/* Grid */}
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
                {/* Image / Video Trigger */}
                <div
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => project.video && setActiveVideo(project.video)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-black ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-cyan-500 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>
                </CardContent>

                {/* Footer */}
                <CardFooter className="flex items-center justify-between px-6 pb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{project.rating}</span>
                    <span>•</span>
                    <span>{project.reviews} Reviews</span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                    <Button
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={() => window.open(project.details, "_self")}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-auto p-4">
            <button
              className="absolute -top-10 right-0 text-white"
              onClick={() => setActiveVideo(null)}
            >
              <X size={32} />
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default OurSolutions;
