import React from "react";
import "./App.css";

const skills = [
  {
    title: "Backend & Platform",
    items: ["Java", "Spring Boot", "FastAPI", "REST APIs", "Microservices", "Cloud-native Architecture"],
  },
  {
    title: "Systems & Infrastructure",
    items: ["Apache Kafka", "RabbitMQ", "Distributed Systems", "TDD", "CI/CD", "Docker"],
  },
  {
    title: "Full-Stack",
    items: ["React.js", "Next.js", "MySQL", "MongoDB", "Performance Optimization", "SEO"],
  },
];

const projects = [
  {
    name: "Custom Software Solutions",
    description:
      "Built scalable, maintainable software systems for multiple clients. Delivered backend APIs, web applications, and automation pipelines. Ensured high uptime, fast response, and test coverage across projects.",
    tech: ["Java", "Spring Boot", "React.js", "FastAPI", "MySQL", "MongoDB"],
    impact: "High reliability · Fast delivery · Scalable design",
  },
  {
    name: "Web Application Performance Optimization",
    description:
      "Enhanced existing web applications by reducing API calls, improving SSR/SSG performance, and optimizing state management. Outcome: Faster page loads, reduced server costs, and improved user experience.",
    tech: ["React.js", "Next.js", "Redux Toolkit", "SSR/SSG", "SEO"],
    impact: "35% faster loads · 50% fewer API calls",
  },
  {
    name: "AI-powered Resume Matching",
    description:
      "Built an automated resume screening system with FastAPI and transformer models. Integrated Hugging Face API to identify skill gaps and improve candidate-job fit. Reduced screening time from hours to seconds.",
    tech: ["Python", "FastAPI", "Hugging Face API", "React.js"],
    impact: "Automated matching · Skill gap analysis · Production-ready SaaS",
  },
];

const contact = {
  email: "mailto:sbthapliyal2002@gmail.com",
  linkedin: "https://linkedin.com/in/thapliyalshailesh",
  github: "https://github.com/thapliyals",
};

function SectionHeading({ label, title }) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat-card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-header">
        <div>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-impact">{project.impact}</p>
        </div>
        <span className="project-badge">Production</span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((item) => (
          <span key={item} className="project-tech-item">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function ContactLink({ href, label }) {
  return (
    <a href={href} className="contact-link" target="_blank" rel="noopener noreferrer">
      <span>{label}</span>
      <span aria-hidden="true" className="contact-link-arrow">
        →
      </span>
    </a>
  );
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-container">
          <div className="header-brand">
            <div className="header-logo">BE</div>
            <div>
              <p className="header-title">Shailesh — Backend & Full-Stack Engineer</p>
              <p className="header-subtitle">Remote (Global) | Available for US/EU hours | Distributed team experience</p>
            </div>
          </div>
          <div className="header-links">
            <ContactLink href={contact.linkedin} label="LinkedIn" />
            <ContactLink href={contact.github} label="GitHub" />
            <ContactLink href={contact.email} label="Email" />
          </div>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="hero-content">
            <p className="hero-label">Backend & Full-Stack</p>
            <h1 className="hero-title">
              Reliable software systems. Maintainable code. Seamless collaboration.
            </h1>
            <p className="hero-description">
              I build scalable software, backend services, and web applications that solve real problems. 
              Production-ready code with high test coverage, fast issue resolution, and smooth distributed teamwork.
            </p>
            <div className="hero-actions">
              <ContactLink href={contact.email} label="Get in touch" />
              <ContactLink href={contact.linkedin} label="View LinkedIn" />
            </div>
            <div className="hero-stats">
              <Stat value="500+" label="Users Served" />
              <Stat value="20+" label="Projects Delivered" />
              <Stat value="99%" label="Client Satisfaction" />
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/svg/product.svg"
              alt="Software illustration"
              className="hero-image"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills">
          <SectionHeading label="Skills" title="What I can build for you" />
          <div className="skills-grid">
            {skills.map((group) => (
              <article key={group.title} className="skill-card">
                <h3 className="skill-title">{group.title}</h3>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item} className="skill-item">
                      <span className="skill-bullet" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <SectionHeading label="Projects" title="Real systems, real results" />
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <SectionHeading label="Contact" title="Ready to build something reliable?" />
          <div className="contact-content">
            <p className="contact-text">
              Need a backend that handles peak traffic? Systems that stay up? Someone who builds maintainable code and fixes issues fast? Let's talk. 
              I deliver on time, write tested code, and collaborate seamlessly with distributed teams. Available for US/EU hours, ready to start immediately.
            </p>
            <div className="contact-links">
              <ContactLink href={contact.email} label="Email" />
              <ContactLink href={contact.linkedin} label="LinkedIn" />
              <ContactLink href={contact.github} label="GitHub" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>Shailesh — Backend & Full-Stack Engineer | Remote-ready for US/EU clients | Reliable delivery for production systems</p>
          <div className="footer-links">
            <a className="footer-link" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="footer-link" href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="footer-link" href={contact.email} target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
