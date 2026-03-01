<p align="center">
  <img src="public/images/profile.jpg" alt="Raiyan Reza" width="150" height="150" style="border-radius: 50%;" />
</p>

<h1 align="center">Interactive Personal Portfolio Website</h1>

<p align="center">
  <strong>A modern, animated, and fully responsive portfolio website built with Next.js 16, Tailwind CSS 4, Framer Motion, and shadcn/ui.</strong>
</p>

<p align="center">
  <a href="https://github.com/RaiyaanReza/Interactive-Personal-Portfolio-Website/actions"><img src="https://img.shields.io/badge/build-passing-brightgreen?style=flat-square" alt="Build Status" /></a>
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js" alt="Next.js" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react" alt="React" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" /></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer" alt="Framer Motion" /></a>
  <a href="https://ui.shadcn.com"><img src="https://img.shields.io/badge/shadcn%2Fui-latest-000?style=flat-square" alt="shadcn/ui" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License" /></a>
</p>

<p align="center">
  <a href="https://github.com/RaiyaanReza">GitHub</a> •
  <a href="https://linkedin.com/in/raiyanreza">LinkedIn</a> •
  <a href="mailto:raiyan.reza@northsouth.edu">Email</a>
</p>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Sections Overview](#-sections-overview)
- [Color Theme](#-color-theme)
- [Animations & Effects](#-animations--effects)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🧑‍💻 About

This is the personal portfolio website of **Khan Raiyan Ibne Reza** — a Computer Science & Engineering graduate from North South University (CGPA 3.69/4.00) specializing in **AI/Deep Learning**, **Full-Stack Web Development**, and **Computer Vision**.

The portfolio showcases 14+ projects spanning AI, machine learning, computer vision, and web development, along with hackathon achievements, professional experience, and a comprehensive skills overview.

---

## ✨ Features

### Core Features
- **Fully Responsive** — Optimized for all screen sizes from mobile to 4K displays
- **Dark/Light Theme Toggle** — Seamless theme switching with `next-themes` (dark-reddish default)
- **Smooth Scroll Navigation** — Section-based navigation with scroll progress indicator
- **Interactive Project Filtering** — Filter projects by category (AI, Web, ML, Mobile)
- **Contact Form** — Validated form with `react-hook-form` + `zod` schema validation
- **SEO Optimized** — Full metadata, Open Graph tags, Twitter cards, `robots.txt`, and `sitemap.xml`

### Animations & Visual Effects
- **Framer Motion Animations** — Scroll-triggered reveals, staggered entries, hover effects
- **Ember Particle Effect** — Floating particle system in the hero section
- **Animated Skill Bars** — Progressive fill animation on scroll into view
- **Card Shine Effect** — CSS-powered shimmer overlay on interactive cards
- **Pulsating Profile Ring** — Animated gradient border with pulse rings
- **Floating Tech Icons** — Animated emoji icons orbiting the hero section
- **Gradient Text Glow** — Animated text shadow effects
- **Typewriter Role Text** — Rotating animated role titles in the hero
- **Hover Lift Effects** — 3D lift animation on project cards
- **Scroll Progress Bar** — Gradient progress indicator at the top of the page

### Design
- **Dark-Reddish Theme** — Custom crimson/rose color palette with warm dark backgrounds
- **Glassmorphism Elements** — Frosted glass effects with backdrop blur
- **Custom Scrollbar** — Styled scrollbar matching the red theme
- **Gradient Accents** — Consistent red-to-rose gradients throughout the UI
- **Modern Typography** — Inter + JetBrains Mono font pairing via Google Fonts

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, RSC) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org) |
| **UI Library** | [React 19](https://react.dev) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) |
| **Components** | [shadcn/ui](https://ui.shadcn.com) (New York style) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Form Validation** | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| **CSS Architecture** | CSS Variables, Custom Properties, `tw-animate-css` |
| **Build Tool** | [Turbopack](https://turbo.build/pack) |
| **Package Manager** | npm |

---

## 📁 Project Structure

```
portfolio/
├── app/                        # Next.js App Router
│   ├── globals.css             # Global styles & theme variables
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Home page (all sections)
│   ├── robots.ts               # SEO robots.txt generation
│   └── sitemap.ts              # SEO sitemap generation
│
├── components/
│   ├── cards/                  # Reusable card components
│   │   ├── ExperienceCard.tsx  # Timeline experience card
│   │   ├── ProjectCard.tsx     # Project showcase card
│   │   └── SkillCard.tsx       # Skill category card
│   ├── layout/                 # Layout components
│   │   ├── Footer.tsx          # Site footer with links
│   │   └── Header.tsx          # Sticky navigation header
│   ├── providers/              # Context providers
│   │   └── ThemeProvider.tsx   # Dark/Light theme provider
│   ├── sections/               # Page sections
│   │   ├── About.tsx           # About me with profile picture
│   │   ├── Achievements.tsx    # Milestones & recognition
│   │   ├── Contact.tsx         # Contact form & info
│   │   ├── Experience.tsx      # Timeline experience
│   │   ├── Hero.tsx            # Hero with particles & CTA
│   │   ├── Projects.tsx        # Filterable project grid
│   │   └── Skills.tsx          # Skill categories with bars
│   ├── shared/                 # Shared utility components
│   │   ├── AnimatedText.tsx    # Rotating text animation
│   │   ├── ScrollProgress.tsx  # Top scroll progress bar
│   │   └── ThemeToggle.tsx     # Theme switch button
│   └── ui/                     # shadcn/ui primitives
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       └── textarea.tsx
│
├── data/                       # Static data files
│   ├── achievements.ts         # Achievements & awards
│   ├── experience.ts           # Work & hackathon experience
│   ├── projects.ts             # Project definitions (14 projects)
│   └── skills.ts               # Skill categories & levels
│
├── hooks/                      # Custom React hooks
│   └── useScroll.ts            # Scroll position & progress
│
├── lib/                        # Utilities & configuration
│   ├── constants.ts            # Site config, nav items, contact info
│   ├── types.ts                # TypeScript type definitions
│   └── utils.ts                # Utility functions (cn)
│
├── public/
│   └── images/
│       ├── profile.jpg         # Profile photograph
│       └── projects/           # Project screenshots
│
├── styles/
│   └── animations.css          # Custom keyframes & animation classes
│
├── components.json             # shadcn/ui configuration
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies & scripts
├── postcss.config.mjs          # PostCSS configuration
└── tsconfig.json               # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.17.0
- **npm** >= 9.0.0 (or yarn/pnpm)
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/RaiyaanReza/Interactive-Personal-Portfolio-Website.git
   cd Interactive-Personal-Portfolio-Website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

---

## ⚙️ Configuration

### Personalizing Content

All portfolio content is driven by data files in the `data/` directory:

| File | Purpose |
|------|---------|
| `data/projects.ts` | Add/edit project entries (title, description, tags, GitHub link, category) |
| `data/skills.ts` | Define skill categories and proficiency levels |
| `data/experience.ts` | Add work experience, hackathons, competitions |
| `data/achievements.ts` | List achievements and milestones |
| `lib/constants.ts` | Update name, email, social links, navigation items |

### Adding a New Project

```typescript
// data/projects.ts
{
  id: 15,
  title: "Your Project Title",
  description: "A brief description of what the project does.",
  image: "/images/projects/your-project.jpg",
  tags: ["React", "TypeScript", "AI"],
  github: "https://github.com/yourusername/your-project",
  live: "https://your-project-demo.vercel.app",  // optional
  category: "Web",  // "AI" | "Web" | "ML" | "Mobile"
  featured: true,
}
```

### Profile Picture

Replace `public/images/profile.jpg` with your own photo. The image is displayed in the **About** section with an animated gradient border ring.

---

## 📑 Sections Overview

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Full-screen landing with animated text, floating emojis, ember particles, CTA buttons, and social links |
| 2 | **About** | Profile picture with animated ring, bio, education info, stats (47+ projects, 3 TA semesters, 3.69 CGPA) |
| 3 | **Skills** | 4 skill categories (Languages, AI/DL, Web/Mobile, Tools) with animated progress bars |
| 4 | **Projects** | 14 projects in a filterable grid (AI, Web, ML, Mobile categories) with hover effects and GitHub links |
| 5 | **Experience** | Timeline view of work experience, hackathon placements, and competitions |
| 6 | **Achievements** | Card grid of milestones — hackathon wins, CGPA, ICPC, GitHub contributions |
| 7 | **Contact** | Contact form with Zod validation, direct email/phone/location info, and social links |

---

## 🎨 Color Theme

The website uses a **dark-reddish** color scheme with warm undertones:

### Dark Mode (Default)

| Variable | Color | Hex |
|----------|-------|-----|
| Background | Deep dark red-black | `#0f0505` |
| Card | Dark warm surface | `#1a0a0a` |
| Primary | Vivid red | `#ef4444` |
| Secondary | Rose | `#e11d48` |
| Accent | Amber | `#f59e0b` |
| Muted | Dark reddish gray | `#2a1515` |
| Text | Warm white | `#faf5f5` |

### Light Mode

| Variable | Color | Hex |
|----------|-------|-----|
| Background | Soft red-white | `#fef2f2` |
| Card | Pure white | `#ffffff` |
| Primary | Classic red | `#dc2626` |
| Secondary | Deep rose | `#9f1239` |
| Accent | Amber | `#f59e0b` |
| Text | Dark warm brown | `#1c1210` |

### Gradient Palette

- **Primary gradient**: `#dc2626` → `#e11d48` (red to rose)
- **Text gradient**: `#ef4444` → `#e11d48` → `#f43f5e`
- **Scroll bar**: `#dc2626` → `#e11d48` → `#f43f5e`

---

## 🎬 Animations & Effects

| Effect | Technology | Location |
|--------|-----------|----------|
| Scroll-triggered reveal | Framer Motion `whileInView` | All sections |
| Floating tech emojis | Framer Motion `animate` loop | Hero |
| Ember particle system | Framer Motion infinite translate | Hero |
| Rotating role text | Custom `AnimatedText` component | Hero |
| Animated skill bars | Framer Motion width transition | Skills |
| Card hover lift | Framer Motion `whileHover` | Projects |
| Card shine overlay | CSS `::after` pseudo-element | Cards |
| Gradient border pulse | CSS `@keyframes pulse-ring` | About |
| Scroll progress bar | Custom `useScroll` hook | Header |
| Staggered card entry | Framer Motion delay offset | All grids |
| Gradient text glow | CSS `@keyframes text-glow` | Headings |
| Mobile menu slide | Framer Motion `AnimatePresence` | Header |
| Button shadow glow | Tailwind `shadow-red-500/20` | CTAs |
| Glassmorphism blur | `backdrop-filter: blur()` | Header, cards |

---

## ⚡ Performance

- **Static Site Generation (SSG)** — All pages are pre-rendered at build time
- **Turbopack** — Lightning-fast development builds
- **Font Optimization** — Google Fonts loaded via `next/font` with `display: swap`
- **Image Optimization** — `next/image` with automatic WebP conversion and lazy loading
- **Code Splitting** — Automatic per-page and per-component splitting
- **Reduced Motion** — Respects `prefers-reduced-motion` media query
- **Lighthouse Ready** — Optimized for high scores across all categories

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push this repository to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** this repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

**Khan Raiyan Ibne Reza**

| Platform | Link |
|----------|------|
| 📧 Email | [raiyan.reza@northsouth.edu](mailto:raiyan.reza@northsouth.edu) |
| 🐙 GitHub | [github.com/RaiyaanReza](https://github.com/RaiyaanReza) |
| 💼 LinkedIn | [linkedin.com/in/raiyanreza](https://linkedin.com/in/raiyanreza) |
| 📍 Location | Dhaka, Bangladesh |

---

<p align="center">
  Built with ❤️ using Next.js, Tailwind CSS & Framer Motion
</p>
