"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    id: 1,
    name: "Naim Hossain",
    role: "Fullstack Developer",
    experience: "3+ Years Experience",
    email: "naim@example.com",
    phone: "+88017XXXXXXXX",
    image: "https://i.ibb.co.com/pBBs7N3b/naim.jpg",
    study:"IIT, Jahangirnagar University"
  },
  {
    id: 2,
    name: "Jakir Hossain",
    role: "Backend Developer",
    experience: "3+ Years Experience",
    email: "jakir@example.com",
    phone: "+88018XXXXXXXX",
    image: "https://i.ibb.co.com/mC0Z3DKD/jakir.jpg",
    study:"CSE, Jahangirnagar University"
  },
  {
    id: 3,
    name: "Humaon Kabir",
    role: "UI/UX Designer and Frontend",
    experience: "2+ Years Experience",
    email: "humaonkabir2003@gmail.com",
    phone: "+8801743637814",
    image: "https://i.ibb.co.com/CKZHz6JY/kabir-resume.jpg",
    study:"IIT, Jahangirnagar University"
  },
];

const TeamSection = () => {
  return (
    <section className=" py-6 px-6 md:px-16">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Our Team
        </h2>
        <p className=" mt-3 max-w-2xl mx-auto">
          Meet the creative minds behind NexovateLabs — passionate developers,
          designers, and innovators building the future together.
        </p>
      </motion.div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group  rounded-2xl overflow-hidden hover:border-cyan-400 hover:shadow-cyan-500/30 transition-all duration-300">
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={350}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-cyan-400 mb-1">
                  {member.name}
                </h3>
                <p className="text-black dark:text-white">{member.role}</p>
                <p className="text-black dark:text-white">{member.study}</p>

                <p className=" text-sm mt-1">
                  {member.experience}
                </p>

                <div className="flex items-center justify-center gap-4 mt-4 ">
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/humaonkabir12"
                    target="_blank"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
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
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-14"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90 transition-all rounded-full px-8 py-6 text-lg"
          onClick={() => window.open("/join", "_self")}
        >
          🚀 Join Our Team
        </Button>
      </motion.div>
    </section>
  );
};

export default TeamSection;
