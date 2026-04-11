"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Failed to send message ❌");
    }

    setLoading(false);
  };

  return (
    <div className=" backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-lg">
      
      {success ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-3">
            🎉 Message Sent!
          </h2>
          <p className="text-gray-400">
            Thank you! We’ll get back to you soon.
          </p>

          <Button
            className="mt-6"
            onClick={() => setSuccess(false)}
          >
            Send Another
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <Label>Name</Label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label>Message</Label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600"
            disabled={loading}
          >
            {loading ? "Sending..." : (
              <>
                <Send className="w-4 h-4 mr-2" /> Send Message
              </>
            )}
          </Button>

        </form>
      )}
    </div>
  );
}