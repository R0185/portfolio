
export default function Home() {
  return (
    <main>
      
  <nav className="fixed left-0 right-0 top-4 z-50">
   <div className="mx-auto flex max-w-6xl items-center justify-between rounded-xl border border-slate-800 bg-slate-950/90 px-8 py-4 backdrop-blur">
    
    <a
      href="#home"
      className="text-xl font-bold text-white transition hover:text-cyan-400"
    >
      Raghad Muhammad
    </a>

    <div className="flex items-center gap-8">
      <a
        href="#home"
        className="text-sm text-slate-300 transition hover:text-cyan-400"
      >
        Home
      </a>

      <a
        href="#about"
        className="text-sm text-slate-300 transition hover:text-cyan-400"
      >
        About
      </a>

      <a
        href="#skills"
        className="text-sm text-slate-300 transition hover:text-cyan-400"
      >
        Skills
      </a>

      <a
        href="#projects"
        className="text-sm text-slate-300 transition hover:text-cyan-400"
      >
        Projects
      </a>

      <a
        href="#contact"
        className="text-sm text-slate-300 transition hover:text-cyan-400"
      >
        Contact
      </a>
    </div>

  </div>
</nav>

  <section
    id="home"
    className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">
      <div className="flex max-w-3xl flex-col items-center gap-5">
        <p className="text-2xl font medium uppercase tracking-widest text-slate-400" >
          Hi, I'm
        </p>

        <h1 className="text-2xl font-bold tracking-tight text-white mb:text-7xl">
          Raghad Muhammad
        </h1>

        <h2 className="text-2xl font-swmibold text-cyan-400 md:text-3xl">
          Front-End Developer
        </h2>

        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          IT student focused on building responsive, accessible, and
          user-friendly web experiences with modern front-end technologies.
        </p>

        <div className="mt-4 flex gap-4">
          <a 
            href="#projects"
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View My Projects
          </a>

            <a
            href="#contact"
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-slate-400"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
      
      <section
  id="about"
  className="bg-slate-900 px-6 py-24 text-center"
>
  <div className="mx-auto max-w-3xl">
    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
      About Me
    </p>

    <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
      Who I Am
    </h2>

    <p className="text-lg leading-8 text-slate-300">
      I&apos;m an IT student with a strong interest in front-end development.
      I enjoy turning ideas and designs into responsive, interactive, and
      user-friendly web experiences. I&apos;m continuously developing my
      skills through hands-on projects and learning modern technologies such
      as React, Next.js, TypeScript, and Tailwind CSS.
    </p>
  </div>
</section>
      
      <section
  id="skills"
  className="bg-slate-950 px-6 py-24 text-center"
>
  <div className="mx-auto max-w-4xl">
    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
      Skills
    </p>

    <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
      Technologies I Work With
    </h2>

    <div className="flex flex-wrap justify-center gap-4">
      <div className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400">
        HTML
      </div>

      <div className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400">
        CSS
      </div>

      <div className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400">
        JavaScript
      </div>

      <div className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400">
        React
      </div>

      <div className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400">
        Next.js
      </div>

      <div className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400">
        TypeScript
      </div>

      <div className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400">
        Tailwind CSS
      </div>

      <div className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400">
        Redux Toolkit
      </div>

      <div className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400">
        Material UI
      </div>

      <div className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400">
        APIs
      </div>
    </div>
  </div>
</section>

<section
  id="projects"
  className="bg-slate-900 px-6 py-24"
>
  <div className="mx-auto max-w-6xl">
    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
        Projects
      </p>

      <h2 className="text-3xl font-bold text-white md:text-4xl">
        Featured Projects
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-slate-400">
        A selection of projects I built while developing my front-end
        development skills.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      
      {/* Azkar App */}
      <div className="group rounded-xl border border-slate-700 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400">
          Azkar App
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          A responsive web application for morning and evening Azkar with
          a clean interface and smooth interactions.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            Next.js
          </span>
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            TypeScript
          </span>
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            Tailwind CSS
          </span>
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            Framer Motion
          </span>
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href="https://azkar-app-brown.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/R0185/azkar-app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-600 px-4 py-2 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Task Management Dashboard */}
      <div className="group rounded-xl border border-slate-700 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400">
          Task Management Dashboard
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          A task management dashboard with search, CRUD operations,
          task completion, and an Arabic RTL interface.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            React
          </span>
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            Redux Toolkit
          </span>
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            Material UI
          </span>
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href="https://cozy-banoffee-96b332.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/R0185/Task-Dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-600 px-4 py-2 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* E-commerce */}
      <div className="group rounded-xl border border-slate-700 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400">
          E-commerce Web Application
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          An e-commerce web application with product browsing, routing,
          shopping cart functionality, and API integration.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            React
          </span>
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            React Router
          </span>
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            Material UI
          </span>
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            API
          </span>
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href="https://sunny-scone-f3a6e1.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/R0185/first-store"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-600 px-4 py-2 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Interactive Data Dashboard */}
      <div className="group rounded-xl border border-slate-700 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400">
          Interactive Data Dashboard
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          An interactive dashboard for displaying and exploring data
          through responsive charts and visualizations.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            React
          </span>
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            Recharts
          </span>
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href="https://unrivaled-fox-9682e3.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/R0185/Dashboard-App"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-600 px-4 py-2 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* CRUD */}
      <div className="group rounded-xl border border-slate-700 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 md:col-span-2">
        <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400">
          CRUD Dashboard
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          A CRUD application for creating, viewing, updating, and deleting
          data with a simple and responsive interface.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            HTML
          </span>
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            CSS
          </span>
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            JavaScript
          </span>
          <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300">
            LocalStorage
          </span>
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href="https://mellifluous-alpaca-796614.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/R0185/crud"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-600 px-4 py-2 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

<section
  id="contact"
  className="bg-slate-950 px-6 py-24"
>
  <div className="mx-auto max-w-3xl text-center">
    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
      Contact
    </p>

    <h2 className="text-3xl font-bold text-white md:text-4xl">
      Let&apos;s Work Together
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
      I&apos;m always open to new opportunities, internships, and
      front-end development projects.
    </p>

    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="mailto:raghad.it03@gmail.com"
        className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
      >
        Email Me
      </a>

      <a
        href="https://github.com/R0185"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/raghad-mohammad-a23976373/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
      >
        LinkedIn
      </a>

    <a
     href="tel:+966538141162"
     className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
>
      Call Me
    </a>

    </div>
  </div>
</section>



    </main>
  )
    
}
