import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Multi-Crop Plant Disease Identification",
    description:
      "A deep learning classification system trained on the AgriVision dataset using YOLO26 architecture. Identifies 57 disease and healthy classes across 8 crop types, achieving 82.7% top-1 accuracy on 10,727 images. Includes ONNX deployment for edge devices.",
    image: "/images/project images/multi-crop plant disease.jpg",
    tags: ["YOLO26", "Computer Vision", "Python", "Deep Learning", "ONNX"],
    github:
      "https://github.com/RaiyaanReza/A-Multi-Crop-Plant-Disease-Identification-System",
    category: "AI",
    featured: true,
  },
  {
    id: 2,
    title: "PawCare — AI Veterinary Telemedicine",
    description:
      "AI-assisted Next.js platform connecting pet owners with verified veterinarians for virtual appointments, scheduling, and credit-based billing. Features Vonage video sessions, Clerk auth, Prisma ORM, and real-time slot management.",
    image: "/images/project images/pawcare.jpg",
    tags: ["Next.js", "React", "Prisma", "Clerk", "Vonage", "PostgreSQL"],
    github:
      "https://github.com/RaiyaanReza/PawCare-GenAI-Medical-Assistant-App",
    category: "Web",
    featured: true,
  },
  {
    id: 3,
    title: "FoodWise — AI Food Management System",
    description:
      "Full-stack Django platform for household food inventory tracking, expiry monitoring, consumption logging, and waste reduction. Features AI-powered OCR via Google Gemini for receipt scanning and intelligent recommendations.",
    image: "/images/projects/foodwise.jpg",
    tags: ["Django", "Python", "Gemini AI", "Tailwind CSS", "GSAP"],
    github:
      "https://github.com/RaiyaanReza/FoodWise-AI-Powered-Food-Management-System",
    category: "Web",
    featured: true,
  },
  {
    id: 4,
    title: "MathScriber — AI Math OCR",
    description:
      "AI-powered application that converts handwritten math equations to LaTeX. Supports image upload, stylus drawing, and PDF input. Uses pix2tex for equation OCR and Tesseract/Gemini for table conversion with live MathJax rendering.",
    image: "/images/project images/mathscriber.jpg",
    tags: ["Django", "pix2tex", "OCR", "Python", "MathJax"],
    github:
      "https://github.com/RaiyaanReza/MathScriber-AI-Powered-Math-to-Latex-App",
    category: "AI",
    featured: true,
  },
  {
    id: 5,
    title: "License Plate Recognition (YOLO + OCR)",
    description:
      "Automated license plate detection and text recognition system using fine-tuned YOLO for plate detection and OCR for character recognition. Built for real-time processing of vehicle images.",
    image: "/images/projects/license-plate.jpg",
    tags: ["YOLO", "OCR", "Python", "Computer Vision", "Deep Learning"],
    github:
      "https://github.com/RaiyaanReza/License-Plate-Recognition-using-Finetuned-YOLO-OCR",
    category: "AI",
    featured: false,
  },
  {
    id: 6,
    title: "Tomato Leaf Disease Segmentation",
    description:
      "Instance segmentation system for tomato leaf diseases using YOLO26 for detection and SAM2 (Segment Anything Model 2) for precise disease region segmentation.",
    image: "/images/project images/tomato_leaf_disase.png",
    tags: ["YOLO26", "SAM2", "Segmentation", "Python", "Computer Vision"],
    github:
      "https://github.com/RaiyaanReza/Tomato-Leaf-Disease-Segmentation-using-YOLO26-and-SAM2",
    category: "AI",
    featured: false,
  },
  {
    id: 7,
    title: "SwiftKart E-Commerce App",
    description:
      "Modern e-commerce web application with dynamic product catalog from FakeStore API, category filtering, shopping cart with localStorage persistence, product detail modals, and responsive design using Tailwind CSS + DaisyUI.",
    image: "/images/projects/swiftkart.jpg",
    tags: ["JavaScript", "Tailwind CSS", "DaisyUI", "REST API"],
    github: "https://github.com/RaiyaanReza/Swift-Kart-E-Commerce-App",
    live: "https://resilient-lolly-b768b5.netlify.app/#products",
    category: "Web",
    featured: false,
  },
  {
    id: 8,
    title: "Credit Card Fraud Detection",
    description:
      "Anomaly detection system using Autoencoders to identify fraudulent credit card transactions. Trained on imbalanced dataset with reconstruction error-based threshold for binary classification.",
    image: "/images/projects/fraud-detection.jpg",
    tags: ["Autoencoders", "Python", "Deep Learning", "Anomaly Detection"],
    github:
      "https://github.com/RaiyaanReza/Credit-Card-Fraud-Detection-Autoencoders",
    category: "ML",
    featured: false,
  },
  {
    id: 9,
    title: "License Plate Enhancement (Autoencoders)",
    description:
      "Denoising autoencoder model to enhance and restore degraded license plate images, improving readability for downstream OCR systems.",
    image: "/images/project images/license_plate_enhance.jpg",
    tags: ["Autoencoders", "Python", "Image Processing", "Deep Learning"],
    github:
      "https://github.com/RaiyaanReza/License-Plate-Enhancement-Denoising-Autoencoders",
    category: "AI",
    featured: false,
  },
  {
    id: 10,
    title: "Research Paper Summarization (DeepSeek)",
    description:
      "Automated research paper summarization tool using DeepSeek LLM for generating concise, structured summaries of academic papers.",
    image: "/images/projects/paper-summary.jpg",
    tags: ["LLM", "DeepSeek", "Python", "NLP"],
    github:
      "https://github.com/RaiyaanReza/Research-Paper-Summarization-DeepSeek",
    category: "AI",
    featured: false,
  },
  {
    id: 11,
    title: "RAG Chatbot on YouTube Videos",
    description:
      "Retrieval-Augmented Generation chatbot that processes YouTube video transcripts and enables conversational Q&A using LangChain and vector embeddings.",
    image: "/images/project images/rag_chatbot_yt.jpg",
    tags: ["LangChain", "RAG", "Python", "LLM", "Vector DB"],
    github: "https://github.com/RaiyaanReza/rag_chatbot_on_youtube_video",
    category: "AI",
    featured: false,
  },
  {
    id: 12,
    title: "Next Word Predictor (LSTM)",
    description:
      "Sequence prediction model using Long Short-Term Memory networks for next-word prediction. Trained on text corpora for language modeling.",
    image: "/images/projects/word-predictor.jpg",
    tags: ["LSTM", "Python", "NLP", "Deep Learning"],
    github: "https://github.com/RaiyaanReza/Next-Word-Predictor-using-LSTM",
    category: "ML",
    featured: false,
  },
  {
    id: 13,
    title: "DeepBanglaVision Dataset",
    description:
      "Curated dataset and benchmark for Bangla visual recognition tasks. Includes data collection, preprocessing pipeline, and baseline evaluation scripts.",
    image: "/images/projects/deepbangla.jpg",
    tags: ["Dataset", "Python", "Computer Vision", "Research"],
    github: "https://github.com/RaiyaanReza/DeepBanglaVision-Dataset",
    category: "AI",
    featured: false,
  },
  {
    id: 14,
    title: "Inventory Management (React + FastAPI)",
    description:
      "Full-stack inventory management system with React frontend and FastAPI backend. Features CRUD operations and real-time dashboard.",
    image: "/images/project images/inventory_management.jpg",
    tags: ["React", "FastAPI", "Python", "Full Stack"],
    github:
      "https://github.com/RaiyaanReza/project-inventory-management-using-react-fastapi",
    category: "Web",
    featured: false,
  },
];
