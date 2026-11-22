import type { Metadata } from "next";
import Image from "next/image";
import portrait from "../assets/4bc703f3772b00c34cd1318426cfaa9bf746a8b5_high.webp";

export const metadata: Metadata = {
  title: "About",
  description: "Experience, technical skills and education of Krishan Kant Sen, Full Stack AI Engineer.",
};

const skillGroups = [
  {
    title: "AI Engineering",
    skills: ["RAG", "LLM Agents", "Tool Calling", "MCP", "Claude API", "LangChain", "LlamaIndex", "Embeddings", "Qdrant", "Voice & SMS AI"],
  },
  {
    title: "Backend & APIs",
    skills: ["TypeScript", "Node.js", "NestJS", "Express", "GraphQL", "REST APIs", "Kafka", "Workflow Automation"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Redux", "Tailwind CSS", "Vite", "Chrome Extensions"],
  },
  {
    title: "Data & Infrastructure",
    skills: ["MongoDB", "PostgreSQL", "Redis", "AWS ECS", "AWS EC2", "Docker", "Kubernetes", "Observability", "Git", "Jira"],
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Adaptware Solutions",
    period: "APR 2025 — PRESENT",
    details: [
      "Build backend services and GraphQL APIs in TypeScript, Node.js and MongoDB for a production multi-tenant SaaS CRM platform.",
      "Designed and shipped a remote MCP server for semantic code search using tree-sitter chunking, code embeddings and Qdrant.",
      "Implemented voice and SMS AI agents, CRM synchronisation, enrolment and stop rules, and automated follow-up workflows.",
      "Delivered third-party integrations through a pluggable provider pattern and database-configured field mapping.",
      "Built an autonomous ticket-triage agent that investigates database, automation and application logs through read-only MCP tools.",
      "Coordinate a small engineering team through task planning, code reviews, onboarding and training.",
      "Deploy containerised services on AWS ECS and write MongoDB aggregation migrations for tenant data fixes.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Xenonstack",
    period: "FEB 2024 — MAR 2025",
    details: [
      "Built RAG pipelines and multi-agent AI systems with LangChain and LlamaIndex.",
      "Developed full-stack applications using Node.js, Next.js, TypeScript, Go and GraphQL.",
      "Worked on real-time data pipelines with Kafka and Apache Spark, deploying containerised microservices on AWS with Docker and Kubernetes.",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="inner-page">
      <section className="section-shell about-hero">
        <div className="about-intro">
          <p className="section-label">ABOUT / THE PERSON BEHIND THE CODE</p>
          <h1>Engineering ideas into <em>useful things.</em></h1>
          <p className="about-lead">
            I’m Krishan Kant Sen, a Full Stack AI Engineer with 2.5+ years of
            experience building multi-tenant SaaS platforms and shipping
            practical AI features to production.
          </p>
          <p className="about-copy">
            I work across product interfaces, backend systems and AI
            integrations. I enjoy solving problems end to end — from
            understanding a workflow and shaping its architecture to shipping,
            observing and improving it in production. Alongside hands-on
            engineering, I coordinate a small team, review code and help
            teammates grow.
          </p>
          <a className="underlined-link" href="mailto:krishankantsen.bhumca22@gmail.com">
            Say hello <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="about-portrait-wrap">
          <Image
            src={portrait}
            alt="Portrait of Krishan Kant Sen"
            className="about-portrait"
            priority
          />
          <p className="portrait-caption">KRISHAN KANT SEN · FULL STACK AI ENGINEER</p>
        </div>
      </section>

      <section className="about-skills-section">
        <div className="section-shell">
          <div className="inner-section-heading">
            <p className="section-label">CAPABILITIES</p>
            <h2>The tools I use to <em>make it happen.</em></h2>
          </div>
          <div className="about-skill-grid">
            {skillGroups.map((group, index) => (
              <article className="about-skill-card" key={group.title}>
                <span className="capability-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.skills.map((skill) => (
                    <span className="tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell about-experience-section">
        <div className="inner-section-heading">
          <p className="section-label">EXPERIENCE</p>
          <h2>A little of the <em>journey so far.</em></h2>
          <p className="inner-section-description">
            Building production software, integrating AI into real workflows,
            and helping teams deliver reliable products.
          </p>
        </div>
        <div className="about-timeline">
          {experience.map((job, index) => (
            <article className="about-timeline-row" key={job.company}>
              <div className="timeline-meta">
                <span className="capability-index">0{index + 1}</span>
                <p>{job.period}</p>
              </div>
              <div className="timeline-content">
                <h3>{job.role}</h3>
                <p className="timeline-company">{job.company}</p>
                <ul>
                  {job.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-band">
        <div className="section-shell">
          <p className="section-label">EDUCATION</p>
          <h2>The <em>foundation.</em></h2>
          <div className="education-grid">
            <article>
              <p className="experience-date">2022 — 2024</p>
              <h3>Master of Computer Applications</h3>
              <p>Banaras Hindu University</p>
              <span>CGPA: 8.36 / 10</span>
            </article>
            <article>
              <p className="experience-date">2018 — 2021</p>
              <h3>B.Sc. Computer Science</h3>
              <p>Jiwaji University</p>
              <span>71.6%</span>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
