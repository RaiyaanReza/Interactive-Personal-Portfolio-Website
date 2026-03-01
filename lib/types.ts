export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live?: string;
  category: "AI" | "Web" | "Mobile" | "ML" | "All";
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "work" | "hackathon" | "competition";
  tags?: string[];
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
  icon: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin?: string;
  address: string;
}

export interface NavItem {
  label: string;
  href: string;
}
