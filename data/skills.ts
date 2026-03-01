import type { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Databases",
    icon: "Code2",
    skills: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "JavaScript", level: 85, icon: "🟨" },
      { name: "TypeScript", level: 75, icon: "🔷" },
      { name: "SQL", level: 80, icon: "🗃️" },
      { name: "Dart", level: 70, icon: "🎯" },
      { name: "C++", level: 75, icon: "⚙️" },
    ],
  },
  {
    category: "AI & Deep Learning",
    icon: "Brain",
    skills: [
      { name: "LLMs & LangChain", level: 90, icon: "🤖" },
      { name: "Computer Vision", level: 88, icon: "👁️" },
      { name: "YOLO (Object Detection)", level: 85, icon: "🔍" },
      { name: "LangGraph", level: 80, icon: "🔗" },
      { name: "RAG Pipelines", level: 85, icon: "📚" },
      { name: "TensorFlow / PyTorch", level: 82, icon: "🧠" },
    ],
  },
  {
    category: "Web & Mobile",
    icon: "Globe",
    skills: [
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "React.js", level: 85, icon: "⚛️" },
      { name: "Django", level: 88, icon: "🐍" },
      { name: "Flutter", level: 72, icon: "📱" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "FastAPI", level: 78, icon: "⚡" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 92, icon: "🔀" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Docker", level: 65, icon: "🐳" },
      { name: "Linux", level: 70, icon: "🐧" },
      { name: "Vercel", level: 80, icon: "▲" },
      { name: "Figma / Canva", level: 75, icon: "🎨" },
    ],
  },
];
