"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can add backend integration or API call
  };

  return (
    <section className="relative overflow-hidden  text-white py-6">
      <div className="max-w-5xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">
            Want Us to Call You?
          </h2>
          <p className="text-black dark:text-white mt-3 text-base md:text-lg">
            Fill out the form below and our team will get in touch shortly.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6  backdrop-blur-sm p-8 rounded-2xl shadow-lg"
        >
          {/* Name */}
          <div className="flex flex-col">
            <Label htmlFor="name" className="mb-2 text-black dark:text-white">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className=" text-white border-gray-700 focus:border-cyan-400 focus:ring-cyan-400"
              required
            />
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <Label
              htmlFor="company"
              className="mb-2 text-black dark:text-white"
            >
              Company
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Company name (optional)"
              value={formData.company}
              onChange={handleChange}
              className=" text-white border-gray-700 focus:border-cyan-400 focus:ring-cyan-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <Label htmlFor="email" className="mb-2 text-black dark:text-white">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className=" text-white border-gray-700 focus:border-cyan-400 focus:ring-cyan-400"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <Label htmlFor="phone" className="mb-2 text-black dark:text-white">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+880 1XXX-XXXXXX"
              value={formData.phone}
              onChange={handleChange}
              className=" text-white border-gray-700 focus:border-cyan-400 focus:ring-cyan-400"
              required
            />
          </div>

          {/* Message (Full width) */}
          <div className="md:col-span-2 flex flex-col">
            <Label
              htmlFor="message"
              className="mb-2 text-black dark:text-white"
            >
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className=" text-white border-gray-700 focus:border-cyan-400 focus:ring-cyan-400"
              required
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Send Message
              </div>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
