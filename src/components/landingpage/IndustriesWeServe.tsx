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
    icon: Building2,
  },
  {
    title: "Logistics & Supply Chain",
    desc: "Fleet management, inventory tracking, and supply chain optimization software.",
    icon: Rocket,
  }

];

const IndustriesWeServe = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
          Industries We Serve
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          We deliver tailored software solutions across multiple industries,
          helping businesses grow with modern technology.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-500/10 mb-6">
                <Icon className="w-7 h-7 text-cyan-500" />
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {industry.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {industry.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default IndustriesWeServe;
