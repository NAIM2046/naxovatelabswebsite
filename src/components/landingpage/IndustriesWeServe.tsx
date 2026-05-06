"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Plane,
  Wallet,
  Rocket,
  Building2,
  Home, // Added for Real Estate
  Truck, // Added for Logistics
} from "lucide-react";

const industries = [
  {
    title: "Education",
    desc: "E-learning platforms, school management systems, and online course solutions.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare",
    desc: "Healthcare portals, appointment systems, and patient management software.",
    icon: HeartPulse,
  },
  {
    title: "E-commerce",
    desc: "Scalable e-commerce platforms, admin dashboards, and payment integrations.",
    icon: ShoppingCart,
  },
  {
    title: "Travel & Tourism",
    desc: "Tour booking systems, travel management software, and customer dashboards.",
    icon: Plane,
  },
  {
    title: "FinTech",
    desc: "Digital wallets, financial dashboards, and secure transaction systems.",
    icon: Wallet,
  },
  {
    title: "Startups",
    desc: "MVP development, SaaS platforms, and rapid product prototyping.",
    icon: Rocket,
  },
  {
    title: "Corporate Business",
    desc: "Corporate websites, ERP systems, HRM, CRM, and internal software solutions.",
    icon: Building2,
  },
  {
    title: "Real Estate",
    desc: "Property listing platforms, CRM systems, and virtual tour solutions.",
    icon: Home, // Changed from Building2
  },
  {
    title: "Logistics & Supply",
    desc: "Fleet management, inventory tracking, and supply chain optimization software.",
    icon: Truck, // Changed from Rocket
  },
];

const IndustriesWeServe = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-10  dark:bg-[#050505] transition-colors duration-300">
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
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Industries We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Serve
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We deliver tailored software solutions across multiple industries,
            helping businesses grow with modern technology.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }} // Smooth staggering
                viewport={{ once: true, margin: "-50px" }}
                className="group bg-white dark:bg-[#121214]/80 border border-slate-200 dark:border-slate-800/60 rounded-3xl p-8 hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon Container with hover effect */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 mb-6 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {industry.title}
                </h3>

                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {industry.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default IndustriesWeServe;