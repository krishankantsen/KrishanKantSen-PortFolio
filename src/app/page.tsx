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
    name: "GraphQL DevTools",
    type: "Chrome extension · Developer tooling",
    description: "A developer inspector that captures GraphQL queries, mutations and subscriptions in real time for faster debugging.",
    stack: ["TypeScript", "React", "Chrome Extension APIs"],
  },
  {
    number: "02",
    name: "Field Config Generator",
    type: "AI-assisted configuration",
    description: "A React application and custom LLM skill that converts free-form requirements into validated JSON configuration.",
    stack: ["React", "Claude"],
  },
  {
    number: "03",
    name: "Containerised React Deployment",
    type: "Cloud & DevOps",
    description: "A Vite application deployed on AWS ECS with runtime environment injection, allowing one Docker image to run across environments.",
    stack: ["Docker", "AWS ECS", "Vite"],
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
          <span>FULL STACK AI ENGINEER</span>
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
              <span className="project-link" aria-label="Featured project">
                <ArrowUpRight size={20} />
              </span>
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
