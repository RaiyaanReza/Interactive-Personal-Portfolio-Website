"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, socialLinks } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      {/* Subtle section background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/2 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary uppercase tracking-wider px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
          >
            Contact
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#10b981] to-[#0d9488] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-6">
              Let&apos;s build something together
            </h3>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: contactInfo.email,
                  href: `mailto:${contactInfo.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: contactInfo.phone,
                  href: `tel:${contactInfo.phone}`,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: contactInfo.location,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-4">
              <p className="text-sm font-medium mb-3">Find me online</p>
              <div className="flex items-center gap-3">
                {[
                  { href: socialLinks.github, icon: Github, label: "GitHub" },
                  {
                    href: socialLinks.linkedin,
                    icon: Linkedin,
                    label: "LinkedIn",
                  },
                  { href: socialLinks.email, icon: Mail, label: "Email" },
                ].map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={
                      link.label !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-lg bg-card/80 border border-border hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center p-8 rounded-xl bg-card/80 backdrop-blur-sm border border-border"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 p-6 sm:p-8 rounded-xl bg-card/80 backdrop-blur-sm border border-border"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...register("name")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-[#10b981] to-[#0d9488] hover:from-[#059669] hover:to-[#0f766e] text-white border-0 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
