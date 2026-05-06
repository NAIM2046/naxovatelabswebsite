"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 30, suffix: "+", label: "Projects Completed" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 25, suffix: "+", label: "Developers" },
];

const features = [
  {
    title: "Qualified",
    desc: "Experienced and skilled team",
  },
  {
    title: "Proficient",
    desc: "Using modern tools & methodologies",
  },
  {
    title: "Expert",
    desc: "Deep expertise in modern tech",
  },
  {
    title: "Transparent",
    desc: "Clear communication always",
  },
  {
    title: "Integrity",
    desc: "Professional & ethical work",
  },
  {
    title: "Relationship",
    desc: "Long-term partnerships",
  },
];

export default function AboutStats() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Outline number */}
              <p className="absolute text-6xl md:text-7xl font-bold text-gray-300 -top-6 left-1/2 -translate-x-1/2 opacity-40">
                {stat.value}
                {stat.suffix}
              </p>

              {/* Main number */}
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 relative">
                <CountUp end={stat.value} duration={2} />
                {stat.suffix}
              </h3>

              <p className="mt-3 text-gray-700 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* About Text */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800">About Us</h3>
          <div className="w-14 h-[2px] bg-blue-500 mx-auto mt-2 mb-4"></div>

          <p className="text-gray-600 leading-relaxed">
            NexovateLabs builds modern, scalable digital products across web,
            mobile, and emerging technologies. Our team focuses on delivering
            high-quality solutions from ideation to deployment, helping
            businesses grow faster in the digital world.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-gray-800">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                {item.desc}
              </p>

              {/* Hover line */}
              <div className="mt-4 h-[2px] w-0 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}