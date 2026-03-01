import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/animations.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Khan Raiyan Ibne Reza — AI/ML Engineer & Web Developer",
    template: "%s | Raiyan Reza",
  },
  description:
    "Portfolio of Khan Raiyan Ibne Reza — Computer Science graduate specializing in AI/Deep Learning, Web Development, and Computer Vision. Building intelligent systems that solve real-world problems.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Web Developer",
    "Next.js",
    "Python",
    "Computer Vision",
    "LangChain",
    "Portfolio",
    "Khan Raiyan Ibne Reza",
  ],
  authors: [{ name: "Khan Raiyan Ibne Reza" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Khan Raiyan Ibne Reza — AI/ML Engineer & Web Developer",
    description:
      "CS Graduate specializing in AI/Deep Learning, Web Development, and Computer Vision.",
    siteName: "Raiyan Reza Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khan Raiyan Ibne Reza — AI/ML Engineer & Web Developer",
    description:
      "CS Graduate specializing in AI/Deep Learning, Web Development, and Computer Vision.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <AnimatedBackground />
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
