"use client";

import { motion, MotionConfig } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "Material UI",
  "APIs",
];

const projects = [
  {
    title: "Azkar App",
    description:
      "A responsive web application for morning and evening Azkar with a clean interface and smooth interactions.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demo: "https://azkar-app-brown.vercel.app/",
    github: "https://github.com/R0185/azkar-app",
  },
  {
    title: "Task Management Dashboard",
    description:
      "A task management dashboard with search, CRUD operations, task completion, and an Arabic RTL interface.",
    technologies: ["React", "Redux Toolkit", "Material UI"],
    demo: "https://cozy-banoffee-96b332.netlify.app/",
    github: "https://github.com/R0185/Task-Dashboard",
  },
  {
    title: "E-commerce Web Application",
    description:
      "An e-commerce web application with product browsing, routing, shopping cart functionality, and API integration.",
    technologies: ["React", "React Router", "Material UI", "API"],
    demo: "https://sunny-scone-f3a6e1.netlify.app/",
    github: "https://github.com/R0185/first-store",
  },
  {
    title: "Interactive Data Dashboard",
    description:
      "An interactive dashboard for displaying and exploring data through responsive charts and visualizations.",
    technologies: ["React", "Recharts"],
    demo: "https://unrivaled-fox-9682e3.netlify.app/",
    github: "https://github.com/R0185/Dashboard-App",
  },
  {
    title: "CRUD Dashboard",
    description:
      "A CRUD application for creating, viewing, updating, and deleting data with a simple and responsive interface.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    demo: "https://mellifluous-alpaca-796614.netlify.app",
    github: "https://github.com/R0185/crud",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: "easeOut" as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const buttonPrimary =
  "inline-flex items-center justify-center rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors duration-300 hover:bg-cyan-300";

const buttonSecondary =
  "inline-flex items-center justify-center rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400";

const navLinks = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-x-clip bg-slate-950">

        {/* Navbar */}
        <nav className="fixed left-0 right-0 top-0 z-50 px-3 pt-3">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-950/90 px-3 py-3 shadow-xl shadow-black/20 backdrop-blur-xl sm:flex-row sm:justify-between sm:px-6">

            <a
              href="#home"
              className="text-lg font-bold text-white transition-colors duration-300 hover:text-cyan-400 sm:text-xl"
            >
              Raghad Muhammad
            </a>

            <div className="flex w-full flex-wrap justify-center gap-x-4 gap-y-2 sm:w-auto sm:gap-6">
              {navLinks.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-xs font-medium text-slate-300 transition-all duration-300 hover:text-cyan-400 sm:text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Home */}
        <section
          id="home"
          className="relative isolate flex min-h-screen scroll-mt-[150px] flex-col items-center justify-center overflow-hidden bg-slate-950 px-5 pb-16 pt-40 text-center sm:scroll-mt-24 sm:px-6 sm:pt-32"
        >
          {/* Animated background */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[100px] sm:h-[500px] sm:w-[500px]"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.35, 0.8, 0.35],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/4 -z-10 h-48 w-48 rounded-full bg-blue-500/10 blur-[90px]"
            animate={{
              x: [0, -35, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex w-full max-w-3xl flex-col items-center gap-5"
          >
            <motion.p
              variants={reveal}
              className="text-lg font-medium uppercase tracking-[0.3em] text-slate-400 sm:text-xl"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              variants={reveal}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Raghad Muhammad
            </motion.h1>

            <motion.h2
              variants={reveal}
              className="text-xl font-semibold text-cyan-400 sm:text-2xl md:text-3xl"
            >
              Front-End Developer
            </motion.h2>

            <motion.p
              variants={reveal}
              className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
            >
              IT student focused on building responsive, accessible, and
              user-friendly web experiences with modern front-end technologies.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-4 flex w-full max-w-md flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className={buttonPrimary}
              >
                View My Projects
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className={buttonSecondary}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#about"
            aria-label="Scroll to About section"
            className="absolute bottom-8 flex flex-col items-center gap-2 text-xs text-slate-500"
            animate={{ y: [0, 9, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>Scroll to explore</span>
            <span className="text-xl text-cyan-400">↓</span>
          </motion.a>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-[150px] bg-slate-900 px-5 py-20 text-center sm:scroll-mt-24 sm:px-6 sm:py-28"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-3xl"
          >
            <motion.p
              variants={reveal}
              className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400"
            >
              About Me
            </motion.p>

            <motion.h2
              variants={reveal}
              className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            >
              Who I Am
            </motion.h2>

            <motion.p
              variants={reveal}
              className="text-base leading-8 text-slate-300 sm:text-lg sm:leading-9"
            >
              I'm an IT student with a strong interest in front-end development.
              I enjoy turning ideas and designs into responsive, interactive,
              and user-friendly web experiences. I'm continuously developing
              my skills through hands-on projects and learning modern
              technologies such as React, Next.js, TypeScript, and Tailwind CSS.
            </motion.p>
          </motion.div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="scroll-mt-[150px] bg-slate-950 px-5 py-20 text-center sm:scroll-mt-24 sm:px-6 sm:py-28"
        >
          <div className="mx-auto max-w-4xl">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p
                variants={reveal}
                className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400"
              >
                Skills
              </motion.p>

              <motion.h2
                variants={reveal}
                className="mb-10 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
              >
                Technologies I Work With
              </motion.h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={reveal}
                  whileHover={{
                    y: -9,
                    scale: 1.05,
                    transition: { duration: 0.25 },
                  }}
                  className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-5 text-sm font-medium text-slate-200 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-400 sm:px-4 sm:text-base"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-[150px] bg-slate-900 px-5 py-20 sm:scroll-mt-24 sm:px-6 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-12 text-center"
            >
              <motion.p
                variants={reveal}
                className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400"
              >
                Projects
              </motion.p>

              <motion.h2
                variants={reveal}
                className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
              >
                Featured Projects
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
              >
                A selection of projects I built while developing my front-end
                development skills.
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 gap-5 md:grid-cols-2"
            >
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  variants={reveal}
                  whileHover={{
                    y: -9,
                    scale: 1.01,
                    transition: { duration: 0.25 },
                  }}
                  className="group flex h-full flex-col rounded-xl border border-slate-700 bg-slate-950 p-5 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-cyan-400 sm:p-7"
                >
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-cyan-400 sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-400 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-300 sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className={buttonPrimary}
                    >
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className={buttonSecondary}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-[150px] bg-slate-950 px-5 py-20 text-center sm:scroll-mt-24 sm:px-6 sm:py-28"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-3xl"
          >
            <motion.p
              variants={reveal}
              className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400"
            >
              Contact
            </motion.p>

            <motion.h2
              variants={reveal}
              className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            >
              Let's Work Together
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              I'm always open to new opportunities, internships, and
              front-end development projects.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-9 flex flex-wrap items-center justify-center gap-3"
            >
              <motion.a
                href="mailto:raghad.it03@gmail.com"
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={buttonPrimary}
              >
                Email Me
              </motion.a>

              <motion.a
                href="https://github.com/R0185"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={buttonSecondary}
              >
                GitHub
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/raghad-mohammad-a23976373/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={buttonSecondary}
              >
                LinkedIn
              </motion.a>

              <motion.a
                href="tel:+966538141162"
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={buttonSecondary}
              >
                Call Me
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-950 px-5 py-6 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Raghad Muhammad. All rights reserved.
          </p>
        </footer>
      </main>
    </MotionConfig>
  );
}