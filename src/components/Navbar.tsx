import { useEffect, useState } from "react";

const links = ["About", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-gray-950/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-lg font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
        >
          HJC
        </a>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-[var(--color-primary)]"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
