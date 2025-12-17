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
    name: "Payment Processing Platform",
    description:
      "Problem: Payment system couldn't handle high transaction volume and failed frequently, risking revenue loss. Solution: Built and scaled Spring Boot microservices deployed in a distributed system environment. Integrated Kafka and RabbitMQ for distributed messaging to improve reliability and enable fault-tolerant workflows. Implemented Saga orchestration for complex transaction workflows. Applied TDD with JUnit and Mockito, boosting code coverage from 65% to 90% using Jacoco. Outcome: System now handles 10K+ transactions per second with 99.9% uptime. Reduced transaction failures by 30% and cut production downtime by 40%, preventing significant client losses.",
    tech: ["Java", "Spring Boot", "Kafka", "RabbitMQ", "Microservices", "TDD"],
    impact: "10K+ TPS · 99.9% uptime · 30% fewer failures · 40% less downtime",
  },
  {
    name: "High-Performance Web Application",
    description:
      "Problem: Slow page loads frustrated users and excessive API calls increased server costs. Solution: Developed responsive React.js and Next.js applications leveraging SSR and SSG for scalable, cloud-deployed high-performance web apps. Implemented debounced API calls to reduce unnecessary requests. Built feature-rich UI using Redux Toolkit and Context API, ensuring seamless integration with backend REST APIs. Enhanced discoverability with SEO best practices including sitemap generation and metadata optimization. Outcome: Improved page load performance by 35%, reduced unnecessary API requests by 50%, and delivered production-ready application to cloud—users stay engaged, costs decrease.",
    tech: ["React.js", "Next.js", "Redux Toolkit", "SSR/SSG", "SEO"],
    impact: "35% faster loads · 50% fewer API calls · Production-ready",
  },
  {
    name: "AI Resume Matching System",
    description:
      "Problem: Manual resume screening was slow, inconsistent, and didn't scale. Solution: Developed a FastAPI backend to calculate resume-JD compatibility scores using transformer models. Integrated Hugging Face Inference API to identify missing skills and generate improvement tips. Deployed with robust CORS and environment configuration. Outcome: Production-ready SaaS application that automates candidate matching, provides skill gap analysis, and reduces screening time from hours to seconds—making it scalable for high-volume hiring.",
    tech: ["Python", "FastAPI", "Hugging Face API", "React.js"],
    impact: "Automated matching · Skill gap analysis · Production SaaS",
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
        <section id="hero" className="hero">
          <div className="hero-content">
            <p className="hero-label">Backend & Full-Stack</p>
            <h1 className="hero-title">
              Backend systems that scale. Production issues that get fixed. Code that your team can maintain.
            </h1>
            <p className="hero-description">
              I build Java and Spring Boot microservices that handle 10K+ transactions per second with 99.9% uptime. You get production-ready code with 90% test coverage, 
              real-time issue resolution that cuts downtime by 40%, and someone who collaborates seamlessly with distributed teams across time zones. Available for US/EU hours.
            </p>
            <div className="hero-actions">
              <ContactLink href={contact.email} label="Get in touch" />
              <ContactLink href={contact.linkedin} label="View LinkedIn" />
            </div>
            <div className="hero-stats">
              <Stat value="10K+ TPS" label="Transaction capacity" />
              <Stat value="99.9%" label="System uptime" />
              <Stat value="90%" label="Code coverage" />
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-content">
              <h2 className="hero-card-title">What you get</h2>
              <ul className="hero-card-list">
                <li className="hero-card-item">
                  <span className="hero-card-bullet" aria-hidden="true" />
                  Scalable systems that don't break under load. Built payment platforms handling 10K+ TPS with 99.9% uptime using Kafka and RabbitMQ for fault-tolerant workflows.
                </li>
                <li className="hero-card-item">
                  <span className="hero-card-bullet" aria-hidden="true" />
                  Production issues resolved in real-time. Cut downtime by 40% and reduced transaction failures by 30% using Saga orchestration, preventing client losses.
                </li>
                <li className="hero-card-item">
                  <span className="hero-card-bullet" aria-hidden="true" />
                  Maintainable code with high test coverage. Boosted coverage from 65% to 90% using TDD (JUnit, Mockito), ensuring your team can extend and maintain it long-term.
                </li>
              </ul>
            </div>
            <div className="hero-card-footer">
              <p className="hero-card-footer-label">Current stack</p>
              <p className="hero-card-footer-text">Java · Spring Boot · Kafka · React · Next.js · FastAPI</p>
            </div>
          </div>
        </section>

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

        <section id="projects" className="projects">
          <SectionHeading label="Projects" title="Real systems, real results" />
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <SectionHeading label="Contact" title="Ready to build something reliable?" />
          <div className="contact-content">
            <p className="contact-text">
              Need a backend that handles 10K+ transactions per second? Systems with 99.9% uptime? Someone who fixes production issues in real-time and cuts downtime by 40%? Let's talk. 
              I deliver on time, write tested code with 90% coverage, and collaborate seamlessly with distributed teams across time zones using async communication tools. Available for US/EU hours, ready to start immediately.
            </p>
            <div className="contact-links">
              <ContactLink href={contact.email} label="Email" />
              <ContactLink href={contact.linkedin} label="LinkedIn" />
              <ContactLink href={contact.github} label="GitHub" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p>Shailesh — Backend & Full-Stack Engineer | Remote-ready for global teams | Experienced with distributed collaboration</p>
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
