"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Star, Users, Briefcase } from "lucide-react";
import AnimatedTitle from "../../components/utilities/AnimatedTitle";
import { Button } from "@/components/ui/button";

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rocketRef = useRef<HTMLSpanElement | null>(null);

  /* 🚀 Floating Rocket Animation */
  useEffect(() => {
    if (!rocketRef.current) return;

    const tween = gsap.to(rocketRef.current, {
      y: -8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 0.8,
    });

    return () => {
      tween.kill();
    };
  }, []);

  /* ✨ Fade-up Section Animation */
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-up",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const storySteps = [
    {
      year: "2026",
      title: "Expanding Horizons",
      desc: "Developing scalable web and mobile apps for global clients.",
    },
    {
      year: "2025",
      title: "Growth & Projects",
      desc: "Delivered ERP and full-stack solutions for local businesses.",
    },
    {
      year: "2024",
      title: "The Beginning",
      desc: "Started as a small team of 3 passionate developers.",
    },
  ];

  const milestones = [
    { icon: Briefcase, title: "20+", subtitle: "Projects Completed" },
    { icon: Users, title: "15+", subtitle: "Happy Clients" },
    { icon: Star, title: "4.9/5", subtitle: "Client Ratings" },
    { icon: Eye, title: "3+", subtitle: "Years Experience" },
  ];

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-6 md:px-16 py-10"
    >
      {/* Hero Section */}
      <div className="text-center mb-16 fade-up">
        <AnimatedTitle />
        <p className="text-lg mt-3">
          Next Innovation Labs — A Software Solution Provider 🚀
        </p>
        <p className="text-sm mt-2 italic">
          Empowering innovation through technology.
        </p>
      </div>

      {/* Story Section */}
      <div className="text-center mb-10 fade-up">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">
          Every Step Tells Our Story
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {storySteps.map((step, index) => (
            <div
              key={index}
              className="relative border border-gray-700 rounded-2xl p-6 w-full md:w-1/3 shadow-md hover:shadow-cyan-400/20 transition-all"
            >
              <h3 className="text-xl font-semibold text-purple-400">
                {step.year}
              </h3>
              <h4 className="text-2xl mt-1 mb-2 font-bold">
                {step.title}
              </h4>
              <p className="text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-10 mb-10 fade-up">
        <Card className="border border-cyan-500/30 hover:shadow-cyan-400/30 transition-all">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <Eye className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p>
              To empower businesses with modern, scalable, and intelligent
              digital solutions that shape the future.
            </p>
          </CardContent>
        </Card>

        <Card className="border border-purple-500/30 hover:shadow-purple-400/30 transition-all">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <Target className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p>
              To innovate, design, and deliver next-generation web and app
              solutions with excellence, creativity, and trust.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Milestones */}
      <div className="text-center mb-6 fade-up">
        <h2 className="text-3xl font-bold mb-10">
          Building Success, One Milestone at a Time
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:shadow-cyan-400/20 transition-all"
            >
              <item.icon className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
              <h4 className="text-3xl font-bold">{item.title}</h4>
              <p className="text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center p-6 rounded-2xl"
      >
        <h3 className="text-3xl font-bold mb-4">
          Have an idea? Let’s make it real with{" "}
          <span className="text-cyan-400">NexovateLabs</span>
        </h3>
        <p className="mb-6">
          Contact us today for a free consultation and turn your idea into
          reality.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90 transition-all rounded-full px-8 py-6 text-lg"
          onClick={() => window.open("/contact", "_self")}
        >
          <span ref={rocketRef} className="inline-block mr-2">
            🚀
          </span>
          Let’s Talk
        </Button>
      </motion.div>
    </section>
  );
};

export default About;
