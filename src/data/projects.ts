export interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  sourceUrl?: string;
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "VibeSafe",
    description:
      "AI-powered security scanner for vibe-coded websites. Non-technical founders paste a URL and receive a plain-English security report with a letter grade, prioritized findings, and copy-paste fix prompts tailored to their AI tool. Built with Next.js 14, TypeScript, Supabase, Stripe, and Claude API.",
    image: "/vibesafe.jpg",
    liveUrl: "https://www.vibe-safe.net/",
    sourceUrl: "https://github.com/Zocum/vibesafe",
  },
  {
    title: "Induction Furnace",
    description:
      "A custom-built induction furnace capable of melting aluminum, copper, and steel. An ESP32 microcontroller drives a full-bridge MOSFET inverter through a gate-drive transformer, with a PID-based frequency lock that tracks the LC tank's resonant frequency in real time as the load changes. Features water-cooled capacitors, 3D-printed control enclosure with OLED display, and a modular design for swappable coils and crucibles.",
    image: "/induction-furnace.png",
    videoUrl: "https://youtu.be/ZBoxISZrN2Y",
  },
];
