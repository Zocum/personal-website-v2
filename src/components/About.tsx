import { motion } from "framer-motion";
import profileImg from "../assets/newprofilepic.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-3xl font-bold sm:text-4xl"
        >
          About me
        </motion.h2>

        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-48 shrink-0 overflow-hidden rounded-2xl shadow-lg shadow-[var(--color-primary)]/20 md:w-64"
          >
            <img
              src={profileImg}
              alt="Hector Jimenez Cruz"
              className="w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4 text-gray-300 leading-relaxed"
          >
            <p>
              I'm a Software Developer from the volcanic island of La Palma,
              Canary Islands, based in Germany. With over 3 years of
              professional experience as a Frontend Developer, I work daily with
              TypeScript, React/Next.js, and modern CSS, building accessible
              (WCAG) interfaces within Agile teams using design systems and
              component-based architectures. My workflow includes Git, Jira,
              Confluence, code reviews, and sprint planning.
            </p>
            <p>
              Beyond the frontend, I have a deep hardware background: I design
              and build induction furnaces from scratch, including circuit
              design, power electronics, and embedded firmware in C/C++. I also
              leverage AI-assisted development tools to ship faster without
              compromising code quality. I speak Spanish, German, and English
              fluently, and I share my hardware projects on YouTube.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
