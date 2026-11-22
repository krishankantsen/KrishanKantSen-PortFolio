import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Tomato",
    type: "Food delivery platform",
    description:
      "A full-stack food ordering experience with a responsive interface and a Node.js, Express and MongoDB backend.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    href: "https://tomato-kks.vercel.app/",
  },
  {
    number: "02",
    name: "Social Media Web App",
    type: "Full-stack application",
    description:
      "A social application built with a modern Next.js frontend, Material UI and a MongoDB-backed API.",
    stack: ["Next.js", "Material UI", "Node.js", "MongoDB"],
    href: "https://github.com/krishankantsen",
  },
  {
    number: "03",
    name: "Survey Form",
    type: "Multi-page web application",
    description:
      "A multi-step survey experience supported by a React frontend and an Express and MongoDB backend.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    href: "https://survey-form-kks.vercel.app/",
  },
];

const capabilities = [
  {
    title: "Frontend",
    items: "React · Next.js · TypeScript · JavaScript · HTML · CSS",
  },
  {
    title: "Backend",
    items: "Node.js · NestJS · Express · GraphQL · REST APIs",
  },
  {
    title: "Data",
    items: "MongoDB · PostgreSQL",
  },
  {
    title: "Tools & AI",
    items: "Git · LangChain · LLM integrations · SaaS development",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero section-shell" id="home">
        <div className="hero-kicker">
          <span className="status-dot" />
          <span>FULL STACK DEVELOPER</span>
          <span className="kicker-divider">/</span>
          <span>INDIA</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">HELLO, I’M KRISHAN KANT SEN.</p>
          <h1>
            I build digital
            <br />
            products with <em>purpose.</em>
          </h1>
          <div className="hero-bottom">
            <p className="hero-description">
              Full stack developer focused on thoughtful interfaces, reliable
              systems, and turning complex ideas into useful software.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/projects">
                Explore my work <ArrowUpRight size={16} />
              </Link>
              <Link className="text-link" href="/contact">
                Get in touch <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-index">
          <span>PORTFOLIO</span>
          <span>2026 — PRESENT</span>
          <ArrowDown size={15} />
        </div>
      </section>

      <section className="intro-band">
        <div className="section-shell intro-grid">
          <p className="section-label">A LITTLE ABOUT ME</p>
          <p className="intro-statement">
            I enjoy working across the stack — from shaping a clear user
            experience to designing the APIs and data models behind it.
          </p>
          <Link className="underlined-link" href="/about">
            More about me <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <section className="section-shell work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="section-label">SELECTED WORK / 01—03</p>
            <h2>Things I’ve <em>built.</em></h2>
          </div>
          <Link className="underlined-link" href="/projects">
            All projects <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-main">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                aria-label={`View ${project.name}`}
                className="project-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <ArrowUpRight size={20} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="section-label">MY TOOLKIT</p>
              <h2>Built on a strong <em>foundation.</em></h2>
            </div>
            <Code2 className="heading-icon" size={30} strokeWidth={1.2} />
          </div>
          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <article className="capability-card" key={capability.title}>
                <span className="capability-index">0{index + 1}</span>
                <h3>{capability.title}</h3>
                <p>{capability.items}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell experience-section">
        <p className="section-label">THE JOURNEY</p>
        <h2>Where I’ve <em>grown.</em></h2>
        <div className="experience-list">
          <article className="experience-row">
            <p className="experience-date">APR 2025 — PRESENT</p>
            <div>
              <h3>Full Stack Developer</h3>
              <p className="experience-company">Adaptware Solutions</p>
              <p className="experience-description">
                Building and maintaining full-stack SaaS products, integrations,
                APIs and data-driven workflows.
              </p>
            </div>
          </article>
          <article className="experience-row">
            <p className="experience-date">FEB 2024 — MAR 2025</p>
            <div>
              <h3>Full Stack Developer</h3>
              <p className="experience-company">Xenonstack</p>
              <p className="experience-description">
                Worked across frontend and backend development, building
                application features and end-to-end product experiences.
              </p>
            </div>
          </article>
        </div>
      </section>

      <footer className="footer-section" id="contact">
        <div className="section-shell footer-inner">
          <p className="section-label">HAVE A PROJECT IN MIND?</p>
          <h2>Let’s make something <em>meaningful.</em></h2>
          <Link className="button button-light" href="/contact">
            Start a conversation <ArrowUpRight size={16} />
          </Link>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Krishan Kant Sen</span>
            <div className="social-links">
              <Link href="https://github.com/krishankantsen" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18} />
              </Link>
              <Link href="https://www.linkedin.com/in/krishan-kant-sen-506333260/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </Link>
              <Link href="/contact" aria-label="Contact">
                <Mail size={18} />
              </Link>
            </div>
            <span>DESIGNED WITH INTENTION.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
