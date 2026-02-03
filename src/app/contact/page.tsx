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


export default function Contact() {
  const fadeIn = (delay: number = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay },
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans px-6 md:px-12 py-6">
      {/* Header Section */}
      <motion.div
        {...fadeIn(0.1)}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mt-4">
          Have questions or need help planning your website?  Reach out —
          we’re here to make your website dreams a reality!
        </p>
      </motion.div>

      <Separator className="max-w-4xl mx-auto mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <ContactForm></ContactForm>

        {/* Contact Info & Map */}
        <motion.div {...fadeIn(0.4)} className="space-y-8">
          <Card className="border border-muted-foreground/20 bg-card/80 backdrop-blur shadow-md rounded-3xl">
            <CardHeader>
              <CardTitle>Our Office</CardTitle>
              <CardDescription>
                Visit or reach us anytime — we’d love to meet you!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Jahangirnagar University, Savar, Dhaka, Bangladesh
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@tour-ms.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  humaonkabir2003@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary w-5 h-5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  01743637814
                </p>
              </div>
            </CardContent>
          </Card>

  
      
        </motion.div>
      </div>
    </div>
  );
}
