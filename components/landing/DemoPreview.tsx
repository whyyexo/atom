"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function DemoPreview() {
  return (
    <section id="demo" className="py-20 sm:py-24 lg:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 [font-family:var(--font-heading)]">
            See Atom in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how Atom helps you organize your day and achieve your goals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Demo mockup */}
          <Card className="rounded-3xl border-border/50 bg-card/50 overflow-hidden shadow-2xl shadow-primary/10">
            <div className="aspect-video bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for demo video/mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 border border-primary/20">
                    <Calendar className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {/* TODO: Replace with actual demo video or interactive mock */}
                    Interactive demo preview
                    <br />
                    <span className="text-xs">Animated UI mockup showing Atom suggesting daily plan</span>
                  </p>
                </div>
              </div>

              {/* Animated suggestion cards */}
              <div className="absolute bottom-8 left-8 right-8 flex gap-4">
                {[
                  { icon: Clock, text: "Review meeting notes", time: "9:00 AM" },
                  { icon: CheckCircle2, text: "Complete project proposal", time: "2:00 PM" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="flex-1 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-4 shadow-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{item.text}</p>
                          <p className="text-xs text-muted-foreground">{item.time}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Card>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <Button asChild size="lg" className="rounded-lg text-base px-8 h-12">
              <Link href="/sign-up">
                Create your workspace
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

