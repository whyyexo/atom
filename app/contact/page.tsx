"use client";

import { PublicLayout } from "@/components/public/public-layout";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const subtleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <PublicLayout>
      <section className="bg-white px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={subtleFade}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-semibold leading-tight tracking-tight text-[#000000] sm:text-6xl lg:text-7xl mb-4">
                Contact us
              </h1>
              <p className="text-xl font-light leading-relaxed text-[#333333] sm:text-2xl">
                Have a question or want to get in touch? We'd love to hear from you.
              </p>
            </div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={subtleFade}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-8 shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-normal text-[#333333]"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                      className="h-12 rounded-lg border border-[rgba(0,0,0,0.08)] bg-white text-[#000000] placeholder:text-[#999999] focus-visible:ring-2 focus-visible:ring-[rgba(0,0,0,0.1)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-normal text-[#333333]"
                    >
                      Email
                    </Label>
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
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    className="text-sm font-normal text-[#333333]"
                  >
                    Subject
                  </Label>
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

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-normal text-[#333333]"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows={6}
                    className="rounded-lg border border-[rgba(0,0,0,0.08)] bg-white text-[#000000] placeholder:text-[#999999] focus-visible:ring-2 focus-visible:ring-[rgba(0,0,0,0.1)]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full bg-[#0071e3] px-8 py-3 text-base font-normal text-white hover:bg-[#0077ed] border-0"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={subtleFade}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 grid gap-8 md:grid-cols-2"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#f5f5f5] border border-[rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#000000]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#000000] mb-2">
                      Email
                    </h3>
                    <p className="text-sm font-light text-[#333333]">
                      hello@atom.app
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#f5f5f5] border border-[rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-[#000000]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#000000] mb-2">
                      Response Time
                    </h3>
                    <p className="text-sm font-light text-[#333333]">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}

