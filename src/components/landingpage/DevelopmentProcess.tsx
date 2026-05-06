"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Pencil,
  Code,
  ShieldCheck,
  Rocket,
  Wrench,
} from "lucide-react";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    title: "Brainstorming",
    description: "Generating ideas, defining requirements, planning",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    title: "Designing",
    description: "Creating concepts, PRD, wireframing, UI/UX",
    icon: <Pencil className="w-8 h-8" />,
  },
  {
    title: "Developing",
    description: "Writing code, building components, integrations",
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: "Quality Assurance",
    description: "Testing, bug fixing, optimization",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "Deployment",
    description: "Monitoring, feedback, support",
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    title: "Maintenance",
    description: "Product release, beta testing, delivery",
    icon: <Wrench className="w-8 h-8" />,
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="py-10 bg-gradient-to-b from-blue-100 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-gray-800"
        >
          Our Development Process
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          At NexovateLabs, we follow a structured process to transform ideas
          into scalable, high-quality software solutions.
        </motion.p>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -12,
                rotateX: 6,
                rotateY: -6,
                scale: 1.04,
              }}
              className="relative group [perspective:1000px]"
            >
              {/* Card */}
              <div className="p-6 bg-white/60 backdrop-blur-lg border border-blue-200 rounded-2xl shadow-md transition duration-300 h-full group-hover:shadow-2xl">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-center text-blue-600 mb-4 group-hover:scale-125 transition duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-400 group-hover:translate-x-1 transition">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
