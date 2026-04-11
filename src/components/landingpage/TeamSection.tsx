"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

// Ensure these imports point to your exact image files
import jakirImg from "@/assets/images/jakir.jpeg";
import naimImg from "@/assets/images/naim.jpeg";
import kabirImg from "@/assets/images/kabir.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Naim Hossain",
    role: "Fullstack Developer",
    experience: "3+ Years Experience",
    email: "naim2046juiit@gmail.com",
    phone: "+8801875-990127",
    image: naimImg,
    study: "IIT, Jahangirnagar University",
    linkedin: "https://www.linkedin.com/in/naimhossain2046",
  },
  {
    id: 2,
    name: "Jakir Hossain",
    role: "Fullstack Developer",
    experience: "2.5+ Years Experience",
    email: "mdjakir.cse.ju@gmail.com",
    phone: "+8801605-043849",
    image: jakirImg,
    study: "CSE, Jahangirnagar University",
    linkedin: "https://www.linkedin.com/in/jakir-md",
  },
  {
    id: 3,
    name: "Humaon Kabir",
    role: "UI/UX Designer & Developer",
    experience: "2.5+ Years Experience",
    email: "humaonkabir2003@gmail.com",
    phone: "+8801743-637814",
    image: kabirImg,
    study: "IIT, Jahangirnagar University",
    linkedin: "https://linkedin.com/in/humaonkabir12",
  },
];

const TeamSection = () => {
  const rocketRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!rocketRef.current) return;
    gsap.to(rocketRef.current, {
      y: -6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 1.2,
    });
  }, []);

  return (
    <section className="relative overflow-hidden py-16   dark:bg-[#09090B] transition-colors duration-300">
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
            Meet The Experts
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Our Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Team
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Meet the creative minds behind NexovateLabs — passionate developers,
            designers, and innovators building the future together.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full flex"
            >
              <Card className="group flex-1 flex flex-col bg-slate-50 dark:bg-[#121214]/80 border border-slate-200 dark:border-slate-800/60 rounded-3xl overflow-hidden hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                
                {/* Image Container */}
                <div className="relative w-full h-72 md:h-80 overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={350}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <CardContent className="flex-1 flex flex-col p-6 text-center relative z-10 -mt-10  dark:bg-[#121214] mx-4 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800/50 mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  
                  <div className="text-slate-600 dark:text-slate-400 text-sm space-y-1 mb-6 flex-1">
                    <p>{member.study}</p>
                    <p className="font-medium">{member.experience}</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
                      aria-label="Phone"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Join Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
            onClick={() => window.open("/contact", "_self")}
          >
            <span ref={rocketRef} className="inline-block mr-2 text-xl">
              🚀
            </span>
            Join Our Team
          </Button>
        </motion.div>
        
      </div>
    </section>
  );
};

export default TeamSection;