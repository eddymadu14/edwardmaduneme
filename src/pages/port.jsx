import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
 import { Github, ExternalLink, Mail } from "lucide-react";

const projects = [ { title: "WhatsApp Automation Tool (WAutomator)",
 desc: "Backend-driven system for automating WhatsApp messaging using reusable templates and scalable workflows.", features: ["Message templates",
 "Bulk messaging logic", "API-driven automation"], tech: "Node.js, Next.js", status: "In Development",
 live: "https://whatsappautomator.vercel.app/", github: "https://github.com/eddymadu14/whatsappautomator.git", backend: "https://github.com/eddymadu14/Whatsapp-automator.git" }, { title: "Project Management App (Kanban)",
 desc: "Task management system with visual workflow tracking and responsive UI.",
 features: ["Kanban board", "Task state management", "Responsive design"],
 tech: "React.js", status: "Live", live: "#", github: "https://github.com/eddymadu14/Project-management-frontend.git", backend: "https://github.com/eddymadu14/Project-management-backend.git" },
/*  { title: "WHOP Automation System", desc: "Processes webhook events and triggers automated actions across Discord and Telegram.",
 features: ["Webhook handling", "Discord role automation", "Telegram messaging"], tech: "Node.js, Express",
 status: "In Development", live: "#", github: "#", }, */ { title: "Landing Page System",
 desc: "Conversion-focused landing page with tracking and optimized user flow.",
 features: ["Meta Pixel integration", "Dynamic pricing", "Mobile optimization"],
 tech: "React.js", status: "Live", live: "https://swiftostore.onrender.com/book", github: "https://github.com/eddymadu14/swiftostore", },/* { title: "Backend API Systems",
 desc: "Collection of REST APIs handling data, authentication, and async processes.",
 features: ["REST API architecture", "Async handling", "JWT auth (in progress)"],
 tech: "Node.js, Express, MongoDB", status: "In Development", live: "https://swiftostore.onrender.com/book", github: "https://github.com/eddymadu14/swiftostore", },*/ ];

export default function Portfolio() { return ( <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-12"> {/* HERO */} <section className="max-w-6xl mx-auto text-center mb-20"> <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4" > Edward Maduneme </motion.h1>

<motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8"
    >
      I build automation systems, scalable APIs, and high-converting web applications.
    </motion.p>

    <div className="flex justify-center gap-4 flex-wrap">
      <button className="rounded-2xl px-6 py-5 text-sm font-semibold">
        <a href="#projects">View Projects</a>
      </button>

    
      <button variant="outline" className="rounded-2xl px-6 py-5 text-sm">
<a href="https://wa.me/2348168054643">Contact</a>
</button>   
 </div>
  </section>

  {/* STACK */}
  <section className="max-w-6xl mx-auto mb-16">
    <h2 className="text-2xl font-semibold mb-4">Stack</h2>
    <div className="flex flex-wrap gap-3">
      {[
        "JavaScript",
        "Node.js",
        "Express",
        "React",
        "Next.js",
        "MongoDB",
        "REST APIs",
        "Git",
      ].map((tech) => (
        <span
          key={tech}
          className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-full text-sm text-zinc-300"
        >
          {tech}
        </span>
      ))}
    </div>
  </section>

  {/* PROJECTS */}
  <section id="projects" className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-10">Projects</h2>

    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-zinc-900/70 backdrop-blur border border-zinc-800 hover:border-zinc-600 transition rounded-2xl shadow-lg">
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold leading-tight">
                  {project.title}
                </h3>
                <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400">
                  {project.status}
                </span>
              </div>

              <p className="text-zinc-400 text-sm mb-4">
                {project.desc}
              </p>

              <ul className="mb-4 space-y-1 text-sm text-zinc-300">
                {project.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>

              <p className="text-xs text-zinc-500 mb-4">
                <span className="font-medium text-zinc-400">Tech:</span> {project.tech}
              </p>

              <div className="flex items-center gap-4 text-sm">
                <a
                  href={project.live}
                  className="flex items-center gap-1 text-zinc-300 hover:text-white transition"
                >
                  <ExternalLink size={16} /> Live
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-1 text-zinc-300 hover:text-white transition"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>

  {/* CONTACT */}
  <section id="contact" className="max-w-6xl mx-auto mt-24 text-center">
    <h2 className="text-3xl font-bold mb-4">Let’s Work</h2>
    <p className="text-zinc-400 mb-8">
      Open to building scalable systems and shipping production-ready applications.
    </p>

    <div className="flex justify-center gap-6 flex-wrap text-sm">
      <a href="https://github.com/eddymadu14" className="flex items-center gap-2 hover:text-white text-zinc-300">
        <Github size={18} /> GitHub
      </a>
      <a href="#" className="flex items-center gap-2 hover:text-white text-zinc-300">
        <ExternalLink size={18} /> Portfolio
      </a>
      <a href="mailto:edwardmaduneme@gmail.com" className="flex items-center gap-2 hover:text-white text-zinc-300">
        <Mail size={18} /> Email
      </a>
    </div>
  </section>
</div>

); }
