import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects, webProjects } from "./projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected AI, full-stack, developer tooling and cloud projects by Krishan Kant Sen.",
};

export default function ProjectsPage() {
  return (
    <main className="inner-page projects-page">
      <section className="section-shell projects-intro">
        <p className="section-label">SELECTED WORK / 2026</p>
        <h1>Ideas made <em>real.</em></h1>
        <p>
          A selection of engineering work across developer tooling, AI-assisted
          workflows, cloud deployment and full-stack product development.
        </p>
      </section>

      <section className="section-shell featured-projects-section">
        <div className="inner-section-heading">
          <p className="section-label">ENGINEERING & AI</p>
          <h2>Selected <em>projects.</em></h2>
        </div>
        <div className="featured-project-list">
          {featuredProjects.map((project) => (
            <article className="featured-project" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="featured-project-copy">
                <p className="project-type">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">
                  {project.tech.map((item) => <span className="tag" key={item}>{item}</span>)}
                </div>
              </div>
              <span className="project-note">FEATURED WORK</span>
            </article>
          ))}
        </div>
        <p className="project-disclaimer">
          These project summaries reflect the selected projects listed in my
          latest resume. Public demo links are not available for these three
          entries.
        </p>
      </section>

      <section className="web-projects-band">
        <div className="section-shell">
          <div className="inner-section-heading">
            <p className="section-label">WEB PROJECTS</p>
            <h2>More from the <em>workbench.</em></h2>
            <p className="inner-section-description">
              Earlier public-facing projects and experiments with live links.
            </p>
          </div>
          <div className="web-project-grid">
            {webProjects.map((project, index) => (
              <article className="web-project-card" key={project.name}>
                <span className="capability-index">0{index + 1}</span>
                <p className="project-type">WEB DEVELOPMENT</p>
                <h3>{project.name}</h3>
                <p className="web-project-description">{project.description}</p>
                <div className="tag-list">
                  {project.tech.map((item) => <span className="tag" key={item}>{item}</span>)}
                </div>
                <Link href={project.link} target="_blank" rel="noreferrer" className="underlined-link">
                  {project.linkLabel} <ArrowUpRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell projects-contact-cta">
        <p className="section-label">HAVE SOMETHING IN MIND?</p>
        <h2>Let’s build what’s <em>next.</em></h2>
        <Link className="button button-dark" href="/contact">
          Get in touch <ArrowUpRight size={16} />
        </Link>
      </section>
    </main>
  );
}
