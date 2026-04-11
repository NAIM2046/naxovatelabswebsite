"use client";
import React, { useState } from "react";
import {
  ChevronRight,
  Send,
  Monitor,
  Cloud,
  Cpu,
  Globe,
  ShoppingCart,
  Layout,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const servicesList = [
  { icon: <ShoppingCart size={18} />, label: "E-Commerce" },
  { icon: <Layout size={18} />, label: "SaaS Development" },
  { icon: <Globe size={18} />, label: "Web Application" },
  { icon: <Monitor size={18} />, label: "Mobile App" },
  { icon: <Cpu size={18} />, label: "AI & Automation" },
  { icon: <Cloud size={18} />, label: "Cloud & DevOps" },
];

type FormFields = {
  name: string;
  email: string;
  company: string;
};

export default function ProjectProposalForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  /* ---------------- FORM STATE ---------------- */
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  //const fields: (keyof FormFields)[] = ["name", "email", "company"];
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    company: "",
  });

  const [error, setError] = useState("");

  /* ---------------- THEME TOGGLE ---------------- */
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  /* ---------------- SERVICE SELECT ---------------- */
  const toggleService = (label: string) => {
    setServices((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label],
    );
  };

  /* ---------------- VALIDATION ---------------- */
  const validateStep = () => {
    if (step === 1 && services.length === 0) {
      setError("Select at least one service");
      return false;
    }

    if (step === 2 && (!budget || !description)) {
      setError("Budget and description required");
      return false;
    }

    if (step === 3 && (!form.name || !form.email)) {
      setError("Name & email required");
      return false;
    }

    setError("");
    return true;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => s + 1);
  };

  const back = () => setStep((s) => s - 1);

  /* ---------------- SUBMIT (EMAIL CLIENT) ---------------- */
  const submitForm = () => {
    if (!validateStep()) return;

    const body = `
Services: ${services.join(", ")}
Budget: ${budget}

Description:
${description}

Name: ${form.name}
Email: ${form.email}
Company: ${form.company}
`;

    window.location.href = `mailto:your@email.com?subject=Project Proposal Request&body=${encodeURIComponent(
      body,
    )}`;
  };

  const slide = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6
      bg-slate-50 dark:bg-[#0F172A] transition-colors"
    >

      <div className="w-full max-w-2xl">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold dark:text-white">
            Get a Free Proposal
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Tell us about your project and we'll prepare a detailed proposal.
          </p>
        </div>

        {/* CARD */}
        <div
          className="bg-white dark:bg-slate-900
          border border-slate-200 dark:border-slate-800
          rounded-2xl p-8 shadow-xl"
        >
          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div key={1} {...slide}>
                <h2 className="text-xl font-semibold mb-6">Select Services</h2>

                <div className="grid md:grid-cols-2 gap-3">
                  {servicesList.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => toggleService(s.label)}
                      className={`flex items-center gap-3 p-4 rounded-xl border transition
                      ${
                        services.includes(s.label)
                          ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-900/30"
                          : "border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      {s.icon}
                      {s.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div key={2} {...slide} className="space-y-4">
                <h2 className="text-xl font-semibold">Project Details</h2>

                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full p-3 border rounded-lg dark:bg-slate-800"
                >
                  <option value="">Select Budget</option>
                  <option>Under 20k</option>
                  <option>20k - 40k</option>
                  <option>40k - 70k</option>
                </select>

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your project..."
                  className="w-full p-3 border rounded-lg h-32 dark:bg-slate-800"
                />
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div key={3} {...slide} className="space-y-4">
                <h2 className="text-xl font-semibold">Contact Info</h2>
                {(["name", "email", "company"] as (keyof FormFields)[]).map(
                  (field) => (
                    <input
                      key={field}
                      type={field === "email" ? "email" : "text"}
                      value={form[field]}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          [field]: e.target.value,
                        }))
                      }
                      placeholder={
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }
                      className="w-full p-3 border rounded-lg dark:bg-slate-800"
                    />
                  ),
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

          {/* NAV */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <button
                onClick={back}
                className="flex-1 py-3 bg-slate-200 dark:bg-slate-700 rounded-lg"
              >
                Back
              </button>
            )}

            <button
              onClick={step === 3 ? submitForm : next}
              className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center gap-2"
            >
              {step === 3 ? (
                <>
                  Send <Send size={16} />
                </>
              ) : (
                <>
                  Continue <ChevronRight size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
