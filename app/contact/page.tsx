"use client";

import { PublicLayout } from "@/components/public/public-layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [hoveredEmail, setHoveredEmail] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const isFormValid = formData.email.trim() !== "" && formData.subject.trim() !== "" && formData.message.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const copyToClipboard = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const emails = [
    { label: "Get help", email: "hello@atom.app" },
    { label: "Work at Atom", email: "work@atom.app" },
    { label: "Legal", email: "legal@atom.app" },
  ];

  return (
    <PublicLayout>
      <section className="bg-white px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">
            {/* Left Side - Form */}
            <div>
              <h1 className="text-6xl font-semibold leading-tight tracking-tight text-[#000000] mb-8 sm:text-7xl lg:text-8xl">
                Get in touch
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email and Subject - Side by side */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-normal text-[#333333] block">
                      Email address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      required
                      className="h-12 rounded-lg border border-[rgba(0,0,0,0.08)] bg-white text-[#000000] placeholder:text-[#999999] focus-visible:ring-2 focus-visible:ring-[rgba(0,0,0,0.1)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-normal text-[#333333] block">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="What's this about?"
                      required
                      className="h-12 rounded-lg border border-[rgba(0,0,0,0.08)] bg-white text-[#000000] placeholder:text-[#999999] focus-visible:ring-2 focus-visible:ring-[rgba(0,0,0,0.1)]"
                    />
                  </div>
                </div>

                {/* How can we help? */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-normal text-[#333333] block">
                    How can we help?
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us more..."
                    required
                    rows={6}
                    className="rounded-lg border border-[rgba(0,0,0,0.08)] bg-white text-[#000000] placeholder:text-[#999999] focus-visible:ring-2 focus-visible:ring-[rgba(0,0,0,0.1)]"
                  />
                </div>

                {/* Submit Button - Visible but subtle, becomes more visible when form is valid */}
                <motion.button
                  animate={{
                    opacity: isFormValid ? 1 : 0.3,
                    backgroundColor: isFormValid ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
                    borderColor: isFormValid ? "rgba(0, 0, 0, 0.08)" : "rgba(0, 0, 0, 0.03)",
                  }}
                  transition={{ duration: 0.3 }}
                  type="submit"
                  disabled={!isFormValid}
                  className="flex items-center gap-2 rounded-full border px-6 py-3 text-base font-normal text-[#000000] hover:bg-[rgba(0,0,0,0.04)] transition-all disabled:cursor-not-allowed"
                >
                  Submit
                  <span className="text-[#000000]">&gt;</span>
                </motion.button>
              </form>
            </div>

            {/* Right Side - Contact Emails */}
            <div className="space-y-8 lg:pl-8">
              {emails.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-sm font-semibold text-[#000000]">
                    {item.label}
                  </h3>
                  <div
                    className="flex items-center gap-2 group"
                    onMouseEnter={() => setHoveredEmail(item.email)}
                    onMouseLeave={() => setHoveredEmail(null)}
                  >
                    <span className="text-sm font-light text-[#333333]">
                      {item.email}
                    </span>
                    <AnimatePresence>
                      {hoveredEmail === item.email && (
                        <motion.button
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          onClick={() => copyToClipboard(item.email)}
                          className="p-1 text-[#666666] hover:text-[#000000] transition-colors"
                          aria-label="Copy email"
                        >
                          {copiedEmail === item.email ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

