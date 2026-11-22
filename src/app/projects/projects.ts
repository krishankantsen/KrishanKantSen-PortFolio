/**
 * Project details are based on the latest resume.
 * Public demo links are included only where an existing URL is available.
 */
export const featuredProjects = [
  {
    number: "01",
    name: "GraphQL DevTools",
    category: "Chrome Extension",
    description:
      "An Apollo-DevTools-style inspector that captures and displays GraphQL queries, mutations and subscriptions in real time, helping developers debug GraphQL web applications faster.",
    tech: ["TypeScript", "React", "Chrome Extension APIs"],
  },
  {
    number: "02",
    name: "Field Config Generator",
    category: "AI-assisted configuration",
    description:
      "A React application paired with a custom LLM skill that turns free-form requirement forms into validated JSON configuration, reducing manual setup work.",
    tech: ["React", "Claude"],
  },
  {
    number: "03",
    name: "Containerised React Deployment",
    category: "Cloud & DevOps",
    description:
      "A Vite React application deployed on AWS ECS with runtime environment injection, allowing one Docker image to run across multiple environments.",
    tech: ["Docker", "AWS ECS", "Vite"],
  },
];

export const webProjects = [
  {
    name: "Tomato — Food Delivery",
    description:
      "A responsive food ordering application with cart and order flows, backed by a Node.js, Express and MongoDB stack.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://tomato-kks.vercel.app/",
    linkLabel: "View live project",
  },
  {
    name: "Social Media Web App",
    description:
      "A social platform concept with authentication, post creation and profile customisation.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "MUI"],
    link: "https://github.com/krishankantsen",
    linkLabel: "View GitHub profile",
  },
  {
    name: "Multi-page Survey Form",
    description:
      "An interactive multi-step survey with dynamic form elements and persistent data, supported by an Express and MongoDB backend.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://survey-form-kks.vercel.app/",
    linkLabel: "View live project",
  },
  {
    name: "Netflix Web Series Page",
    description:
      "A responsive React page presenting details for popular web series.",
    tech: ["React"],
    link: "https://krishankantsen.github.io/Webseries/",
    linkLabel: "View live project",
  },
  {
    name: "Netflix Homepage Concept",
    description:
      "A responsive homepage concept built to practise layout, styling and frontend fundamentals.",
    tech: ["HTML", "CSS"],
    link: "https://krishankantsen.github.io/Netflix_Home/",
    linkLabel: "View live project",
  },
];
