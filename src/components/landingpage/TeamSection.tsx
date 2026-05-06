"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

import jakirImg from "@/assets/images/jakir.jpeg";
import naimImg from "@/assets/images/naim.jpeg";
import kabirImg from "@/assets/images/kabir.jpg";

type Member = {
  id: number;
  name: string;
  role: string;
  experience: string;
  email: string;
  phone: string;
  image: any;
  study: string;
  linkedin: string;
};

const teamMembers: Member[] = [
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
    role: "UI/UX Designer & Fullstack Developer",
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
    <section className="py-10 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          The talented people behind NexovateLabs who design, build, and scale
          modern digital products with precision.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="[perspective:1000px]"
          >
            <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"></div>

              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 text-center">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {member.name}
                </h3>

                <p className="text-black text-sm mt-1 dark:text-white">{member.role}</p>

                <p className="text-black text-sm mt-1 dark:text-white">{member.study}</p>

                <p className="text-xs text-black mt-2 dark:text-white">
                  {member.experience}
                </p>

                {/* Social */}
                <div className="flex justify-center gap-4 mt-5 opacity-80 group-hover:opacity-100 transition">
                  <a href={`mailto:${member.email}`}>
                    <Mail className="w-5 h-5 hover:text-cyan-400 transition" />
                  </a>
                  <a href={`tel:${member.phone}`}>
                    <Phone className="w-5 h-5 hover:text-cyan-400 transition" />
                  </a>
                  <a href={member.linkedin} target="_blank">
                    <Linkedin className="w-5 h-5 hover:text-cyan-400 transition" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mt-5"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full px-10 py-6 text-lg shadow-lg hover:scale-105 transition"
          onClick={() => window.open("/contact", "_self")}
        >
          <span ref={rocketRef} className="mr-2 inline-block">
            🚀
          </span>
          Join Our Team
        </Button>
      </motion.div>
    </section>
  );
};

export default TeamSection;
