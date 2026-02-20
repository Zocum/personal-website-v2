import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

const socials = [
  { icon: Twitter, href: "https://twitter.com/de_codinglife", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hector-jc/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Zocum", label: "GitHub" },
  { icon: Youtube, href: "https://www.youtube.com/@learningOnDemand-y1m", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
        <div className="flex gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 transition-colors hover:text-[var(--color-primary)]"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Hector Jimenez Cruz
        </p>
      </div>
    </footer>
  );
}
