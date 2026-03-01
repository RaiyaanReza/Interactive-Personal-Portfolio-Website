import type { NavItem, ContactInfo } from "./types";

export const siteConfig = {
  name: "Khan Raiyan Ibne Reza",
  shortName: "Raiyan",
  title: "CS Graduate & AI/ML Engineer",
  description:
    "Computer Science & Engineering graduate specializing in AI/Deep Learning, Web Development, and Computer Vision. Building intelligent systems that solve real-world problems.",
  url: "https://raiyanreza.dev",
};

export const contactInfo: ContactInfo = {
  name: "Khan Raiyan Ibne Reza",
  email: "raiyan.reza@northsouth.edu",
  phone: "+8801753110248",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/RaiyaanReza",
  linkedin: "https://linkedin.com/in/raiyanreza",
  address: "Keyari Buruj, Tower-1 (8F), Kallyanpur Bus Stand, Dhaka",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/RaiyaanReza",
  linkedin: "https://linkedin.com/in/raiyanreza",
  email: "mailto:raiyan.reza@northsouth.edu",
};
