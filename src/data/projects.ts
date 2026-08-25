export type LinkKind = "live" | "source" | "video" | "guide";

export interface ProjectLink {
  kind: LinkKind;
  label: string;
  url: string;
}

export interface Project {
  title: string;
  /** Short badge shown next to the title, e.g. "Proof of concept". */
  status?: string;
  description: string;
  image: string;
  tags: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "Induction Furnace",
    description:
      "A high-power induction furnace built from scratch and rebuilt twice on camera. It started as a 4 kW ESP32 prototype driving a full-bridge MOSFET inverter with a PID frequency lock that tracks the LC tank's resonance in real time, then grew into a 14 kW three-phase machine on IGBT modules running at nearly 600 VDC. Getting there meant hunting down shoot-through, transformer saturation, flux walking, Miller turn-on and EMI — the failures that stay harmless at low power and destroy switches at high power. It melts aluminum, brass, copper and stainless steel, and reaches past 2000 °C to make calcium carbide.",
    image: "/induction-furnace.png",
    tags: ["Power electronics", "Embedded C/C++", "STM32", "PCB & magnetics"],
    links: [
      { kind: "video", label: "Part 1 — 4 kW build", url: "https://youtu.be/ZBoxISZrN2Y" },
      { kind: "video", label: "Part 2 — Rebuild", url: "https://youtu.be/mvL91OWx5RU" },
      { kind: "video", label: "Part 3 — 14 kW", url: "https://youtu.be/7b1zsku5o-A" },
      { kind: "guide", label: "Build guide", url: "https://www.instructables.com/DIY-4kW-Induction-Heater/" },
      { kind: "source", label: "Schematic & firmware", url: "https://github.com/Zocum/induction-heater" },
    ],
  },
  {
    title: "VibeSafe",
    status: "Proof of concept",
    description:
      "An AI-powered security scanner for vibe-coded websites. Non-technical founders paste a URL and get a plain-English report with a letter grade, prioritized findings, and copy-paste fix prompts tailored to their AI tool. Built as a proof of concept to see how far an automated audit could be pushed — the scanning pipeline and report generation work end to end, but it is not a finished product and is no longer under active development.",
    image: "/vibesafe.jpg",
    tags: ["Next.js", "TypeScript", "Supabase", "Claude API"],
    links: [{ kind: "live", label: "Live demo", url: "https://www.vibe-safe.net/" }],
  },
];
