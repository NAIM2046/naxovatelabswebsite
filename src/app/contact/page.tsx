"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ContactForm from "./components/ContactForm";
import SupportContact from "@/components/layout/SupportContact";

export default function Contact() {
  const fadeIn = (delay: number = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black  px-6 md:px-12 py-12">
      
      {/* Header */}
      <motion.div {...fadeIn(0.1)} className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-gray-400 text-lg mt-4">
          Have an idea? Let’s build something amazing together 🚀
        </p>
      </motion.div>

      <Separator className="max-w-4xl mx-auto mb-12 bg-gray-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {/* Form */}
        <ContactForm />

        {/* Info Card */}
        <motion.div {...fadeIn(0.3)}>
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-cyan-400">Our Office</CardTitle>
              <CardDescription className="text-gray-400">
                We’re always open to talk and collaborate.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="text-cyan-400" />
                <p className="text-gray-400 text-sm">
                  Jahangirnagar University, Savar, Dhaka
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-purple-400" />
                <a href="mailto:humaonkabir2003@gmail.com" className="text-gray-400 text-sm hover:text-white">
                  humaonkabir2003@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-cyan-400" />
                <p className="text-gray-400 text-sm">
                  01743637814
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
      <SupportContact/>
    </div>
  );
}