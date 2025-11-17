"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import BackToTopButton from "../utilities/BackToTopButton";

const Footer = () => {
  return (
    <>
    <footer className="relative overflow-hidden py-6">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-gray-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-12 text-gray-300 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 place-items-center md:place-items-start">
          {/* Logo & About */}
          <div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
              NexovateLabs
            </h2>
            <p className="text-sm  leading-relaxed max-w-xs mx-auto md:mx-0">
              We craft modern web experiences and digital solutions that power
              the next generation of innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Our Services
            </h3>
            <ul className="space-y-2 ">
              <li>Full-Stack Web Development</li>
              <li>UI/UX Design</li>
              <li>Software & ERP Solutions</li>
              <li>SEO & Marketing</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <p className="text-sm  mb-3">
              Dhaka, Bangladesh <br />
              <Link
                href="mailto:info@nexovatelabs.com"
                className="hover:text-cyan-400"
              >
                info@nexovatelabs.com
              </Link>
            </p>

            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:info@nexovatelabs.com"
                className="hover:text-cyan-400 transition-colors"
              >
                <Mail size={20} />
              </Link>
            </div>

            <Button
              variant="outline"
              className="mt-5 border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all"
            >
              Get a Quote
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <p className="text-sm  text-center">
          © {new Date().getFullYear()} NexovateLabs — All Rights Reserved.
        </p>
      </div>
    </footer>
    <BackToTopButton />
    </>
  );
};

export default Footer;
