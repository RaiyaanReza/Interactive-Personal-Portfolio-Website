import type { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Teaching Assistant — Discrete Mathematics & Programming",
    organization: "North South University (DHP)",
    period: "2023 — 2025 (3 Semesters)",
    description:
      "Assisted faculty in conducting lab sessions, grading assignments, and mentoring 100+ students across 3 semesters. Helped students understand complex concepts in Discrete Mathematics and Programming fundamentals.",
    type: "work",
    tags: ["Teaching", "Mentoring", "Discrete Math", "Programming"],
    images: ["/images/experience pic/work_in_dhp_ta_ship.jpg"],
  },
  {
    id: 2,
    title: "Finalist — Solvio AI Hackathon 2025",
    organization: "Solvio AI",
    period: "2025",
    description:
      "Reached Top 10 in a national AI hackathon. Developed an AI-driven solution leveraging agentic workflows with LLMs, LangChain, and LangGraph for real-world problem solving.",
    type: "hackathon",
    tags: ["LLM", "LangChain", "Agentic AI", "Top 10"],
    images: ["/images/experience pic/solvio_ai_hackathon.jpg"],
  },
  {
    id: 3,
    title: "Finalist — Innovative X Hackathon (BUBT) 2025",
    organization: "BUBT",
    period: "2025",
    description:
      "Achieved Top 20 position. Built FoodWise — an AI-powered food management platform addressing SDG 2 (Zero Hunger) & SDG 12 (Responsible Consumption) with Django, Gemini AI OCR, and intelligent recommendations.",
    type: "hackathon",
    tags: ["Django", "Gemini AI", "Sustainability", "Top 20"],
  },
  {
    id: 4,
    title: "ICPC Preliminary Contestant",
    organization: "ICPC",
    period: "2022, 2023",
    description:
      "Participated in ICPC Asia Dhaka Regional Preliminary rounds for two consecutive years, solving competitive programming problems under time constraints.",
    type: "competition",
    tags: ["Competitive Programming", "C++", "Algorithms"],
  },
];
