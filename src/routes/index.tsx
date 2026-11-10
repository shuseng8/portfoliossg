import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Award,
  Briefcase,
  ChevronDown,
  Cloud,
  ExternalLink,
  FolderOpen,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Moon,
  PenLine,
  ShieldCheck,
  Sun,
  Trophy,
  Users,
  Wrench,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const NAV = [
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#highlights", label: "Highlights", icon: Trophy },
  { href: "#skills", label: "Skills", icon: Wrench },
];

const MORE = [
  { href: "#volunteer", label: "Volunteer", icon: HeartHandshake },
  { href: "#projects", label: "Projects", icon: FolderOpen },
  { href: "#writing", label: "Writing", icon: PenLine },
  { href: "#contact", label: "Contact", icon: Mail },
];

function Home() {
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  const close = () => {
    setOpen(false);
    setMore(false);
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode */
    }
    setTheme(next);
  };

  return (
    <div className="shell">
      <header className="nav-wrap">
        <div className="nav">
          <a className="logo" href="#top" onClick={close}>
            Shubham Sen Gupta
          </a>
          <div className="nav-end">
            <button
              className="theme-btn"
              type="button"
              aria-pressed={theme === "dark"}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="menu-btn"
              type="button"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
            <ul className={open ? "nav-links open" : "nav-links"}>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>
                  <item.icon size={14} aria-hidden />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            <li className={more ? "more open" : "more"}>
              <button
                className="more-toggle"
                type="button"
                aria-expanded={more}
                onClick={() => setMore((v) => !v)}
              >
                <span>More</span>
                <ChevronDown className="chevron" size={14} aria-hidden />
              </button>
              <ul className="more-menu">
                {MORE.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={close}>
                      <item.icon size={14} aria-hidden />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="page greeting">
          <div>
            <h1>Hi, I'm Shubham Sen Gupta</h1>
            <p className="lede">
              <strong>Senior Java software engineer at TCS, Bengaluru.</strong>{" "}
              Backend engineer with 5.8 years in Java, Spring Boot, microservices,
              and AWS. Previously at TransUnion, Accenture, and Cognizant.
            </p>
          </div>
          <div className="portrait-wrap">
            <img
              className="portrait"
              src="/portrait.jpg"
              alt="Portrait of Shubham Sen Gupta"
            />
          </div>
        </section>

        <section className="page section" id="experience">
          <h2>Work experience</h2>
          <p className="subhead">
            Java backend roles at TCS, TransUnion, Accenture, and Cognizant.
          </p>

          <article className="exp-card">
            <div className="company-head">
              <div className="mark" aria-hidden>
                TCS
              </div>
              <div>
                <h3 className="company-name">Tata Consultancy Services</h3>
                <div className="meta">
                  <span>
                    <MapPin size={14} aria-hidden /> Bangalore Urban · On-site
                  </span>
                  <span>
                    <Briefcase size={14} aria-hidden /> Apr 2026 – Present · 8 mos
                  </span>
                </div>
              </div>
            </div>
            <div className="role">
              <h4 className="role-title">Java Microservices Developer</h4>
              <ul className="bullets">
                <li>
                  Java backend lead for a US-based BFSI client, covering wealth
                  management and mortgage.
                </li>
                <li>
                  Building the modernization on Java 25 and Spring Boot 4+,
                  including a move of legacy stored procedures into Java services.
                </li>
                <li>
                  Leads an offshore team of 8: tasking, PR reviews, progress, and
                  escalations.
                </li>
                <li>
                  Works with DBA, UI, and DevOps so delivery stays aligned with
                  the client.
                </li>
              </ul>
              <div className="links">
                <a
                  href="https://www.linkedin.com/in/shuseng8/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn profile
                </a>
              </div>
            </div>
          </article>

          <article className="exp-card">
            <div className="company-head">
              <div className="mark" aria-hidden>
                TU
              </div>
              <div>
                <h3 className="company-name">TransUnion</h3>
                <div className="meta">
                  <span>
                    <MapPin size={14} aria-hidden /> Bengaluru · On-site
                  </span>
                  <span>
                    <Briefcase size={14} aria-hidden /> Sep 2024 – Apr 2026 · 1 yr 8 mos
                  </span>
                </div>
              </div>
            </div>
            <div className="role">
              <h4 className="role-title">Java Software Engineer</h4>
              <ul className="bullets">
                <li>
                  Owned backend work on a high-scale identity and data platform
                  handling millions of daily transactions, in Java and Spring Boot.
                </li>
                <li>
                  Led a monolith-to-microservices migration with Spring Cloud
                  (Eureka, Feign) and OpenTelemetry.
                </li>
                <li>
                  Moved 2+ TB of production data with S3, DynamoDB, Lambda, and
                  Step Functions, with zero data loss.
                </li>
                <li>
                  Ran cloud infrastructure with Terraform and CloudFormation, and
                  cleared security findings across 19 microservices.
                </li>
                <li>
                  Cut backend latency with CloudWatch, distributed tracing, and
                  query tuning, and handled L3 incidents under RBI and CIBIL rules.
                </li>
              </ul>
            </div>
          </article>

          <article className="exp-card">
            <div className="company-head">
              <div className="mark" aria-hidden>
                ACN
              </div>
              <div>
                <h3 className="company-name">Accenture</h3>
                <div className="meta">
                  <span>
                    <MapPin size={14} aria-hidden /> On-site
                  </span>
                  <span>
                    <Briefcase size={14} aria-hidden /> Feb 2022 – Sep 2024 · 2 yr 8 mos
                  </span>
                </div>
              </div>
            </div>
            <div className="role">
              <h4 className="role-title">
                Advanced Application Engineering Senior Analyst
              </h4>
              <p className="card-subtitle">Nov 2023 – Sep 2024 · 11 mos</p>
              <ul className="bullets">
                <li>
                  Java and Spring Boot for retail clients, including leading
                  sportswear brands. APIs and microservices aimed at efficiency.
                </li>
                <li>
                  Led Purchase Orders Flow from start to production: 99.92%
                  accuracy across 100K+ records, with Python, Terraform, and AWS.
                </li>
                <li>
                  Automated CloudWatch dashboards and rolled Terraform out across
                  AWS regions.
                </li>
                <li>
                  Shortened delivery by automating pipelines with Python, Kafka,
                  Kubernetes, Airflow, and Snowflake.
                </li>
                <li>
                  Shipped a React and AWS UI automation path on Jenkins, cutting
                  about $615K a year in cloud cost.
                </li>
                <li>Mentored new joiners and kept delivery documented.</li>
              </ul>
            </div>
            <div className="role">
              <h4 className="role-title">
                Advanced Application Engineering Analyst
              </h4>
              <p className="card-subtitle">Feb 2022 – Nov 2023 · 1 yr 10 mos</p>
              <ul className="bullets">
                <li>
                  Java Spring Boot APIs and microservices for the same retail
                  clients, in agile teams, including the purchase-order, data
                  pipeline, and cloud-cost work.
                </li>
              </ul>
            </div>
          </article>

          <article className="exp-card">
            <div className="company-head">
              <div className="mark" aria-hidden>
                CTS
              </div>
              <div>
                <h3 className="company-name">Cognizant</h3>
                <div className="meta">
                  <span>
                    <MapPin size={14} aria-hidden /> Bangalore Urban
                  </span>
                  <span>
                    <Briefcase size={14} aria-hidden /> Feb 2021 – Feb 2022 · 1 yr 1 mo
                  </span>
                </div>
              </div>
            </div>
            <div className="role">
              <h4 className="role-title">Software Engineer</h4>
              <p className="card-subtitle">Jun 2021 – Feb 2022 · 9 mos · On-site</p>
              <ul className="bullets">
                <li>
                  Full-time software engineering in Bengaluru. Skills named on
                  this role: Jenkins and Python.
                </li>
              </ul>
            </div>
            <div className="role">
              <h4 className="role-title">Contractor</h4>
              <p className="card-subtitle">
                Feb 2021 – Jun 2021 · 5 mos · Internship
              </p>
            </div>
          </article>
        </section>

        <section className="page section" id="volunteer">
          <h2>Volunteer</h2>
          <p className="subhead">
            Open source and mentoring alongside the day job.
          </p>

          <article className="exp-card">
            <div className="company-head">
              <div className="mark" aria-hidden>
                GH
              </div>
              <div>
                <h3 className="company-name">GitHub</h3>
                <div className="meta">
                  <span>
                    <PenLine size={14} aria-hidden /> Science and Technology
                  </span>
                  <span>
                    <Briefcase size={14} aria-hidden /> Dec 2020 – Present · 6 yrs
                  </span>
                </div>
              </div>
            </div>
            <div className="role">
              <h4 className="role-title">Open Source Contributor and Enthusiast</h4>
              <ul className="bullets">
                <li>
                  Contributes to community projects: backend work, bug fixes,
                  features, and general code improvements.
                </li>
                <li>
                  Stack on this work: Java, Spring Boot, REST APIs, JavaScript,
                  TypeScript, React, and Git.
                </li>
              </ul>
              <div className="links">
                <a href="https://github.com/shuseng8" target="_blank" rel="noreferrer">
                  github.com/shuseng8
                </a>
              </div>
            </div>
          </article>

          <article className="exp-card">
            <div className="company-head">
              <div className="mark" aria-hidden>
                BL
              </div>
              <div>
                <h3 className="company-name">BlueLearn</h3>
                <div className="meta">
                  <span>
                    <PenLine size={14} aria-hidden /> Education
                  </span>
                  <span>
                    <Briefcase size={14} aria-hidden /> Jan 2021 – Sep 2021 · 9 mos
                  </span>
                </div>
              </div>
            </div>
            <div className="role">
              <h4 className="role-title">Competitive Programming Mentor</h4>
              <ul className="bullets">
                <li>
                  Mentored students starting out in programming and competitive
                  programming, including lectures on how the industry and
                  open source actually work.
                </li>
              </ul>
            </div>
          </article>

          <article className="exp-card">
            <div className="company-head">
              <div className="mark" aria-hidden>
                DS
              </div>
              <div>
                <h3 className="company-name">DevScript</h3>
                <div className="meta">
                  <span>
                    <PenLine size={14} aria-hidden /> Science and Technology
                  </span>
                  <span>
                    <Briefcase size={14} aria-hidden /> Dec 2020 – Feb 2021 · 3 mos
                  </span>
                </div>
              </div>
            </div>
            <div className="role">
              <h4 className="role-title">Project Maintainer and Contributor</h4>
              <ul className="bullets">
                <li>
                  Contributed to open-source projects and maintained his own
                  repo during DWOC 2020.
                </li>
              </ul>
              <div className="links">
                <a
                  href="https://github.com/ssg8288/Surviellance-Bomb-Diffusion-Robot"
                  target="_blank"
                  rel="noreferrer"
                >
                  Surveillance bomb diffusion robot
                </a>
              </div>
            </div>
          </article>
        </section>

        <section className="page section" id="highlights">
          <h2>Highlights</h2>
          <p className="subhead">Scale, accuracy, and cost from the roles above.</p>
          <div className="hero-grid">
            <article className="spotlight">
              <div className="spot-visual" aria-hidden>
                <Trophy size={42} />
              </div>
              <div>
                <p className="spot-kicker">Accenture · cloud cost</p>
                <h3 className="card-title">$615K saved in a year</h3>
                <Clamp text="A React and AWS UI automation project, with Jenkins for CI/CD, cut about $615K a year in cloud cost while he was at Accenture." />
              </div>
            </article>
          </div>
          <div className="highlight-grid" style={{ marginTop: 18 }}>
            <article className="mini-card">
              <Cloud size={20} aria-hidden />
              <h3>2+ TB moved</h3>
              <Clamp text="At TransUnion, migrated more than 2 TB of production data with S3, DynamoDB, Lambda, and Step Functions, with zero data loss." />
            </article>
            <article className="mini-card">
              <ShieldCheck size={20} aria-hidden />
              <h3>99.92% accurate</h3>
              <Clamp text="Purchase Orders Flow at Accenture processed 100K+ records at 99.92% accuracy, from inception through deployment." />
            </article>
            <article className="mini-card">
              <Users size={20} aria-hidden />
              <h3>Team of 8</h3>
              <Clamp text="At TCS, leads an offshore team of 8 developers: allocation, PR reviews, progress tracking, and escalations for a US BFSI client." />
            </article>
          </div>
          <div className="stat-row">
            <div className="stat">
              <strong>5.8y</strong>
              <span>Java backend</span>
            </div>
            <div className="stat">
              <strong>19</strong>
              <span>Services hardened</span>
            </div>
            <div className="stat">
              <strong>4</strong>
              <span>AWS, Oracle, Claude certs</span>
            </div>
          </div>
          <div className="extra">
            <h3>Also on the record</h3>
            <ul className="extra-list">
              <li>
                <span className="dot">
                  <Award size={16} aria-hidden />
                </span>
                <span>
                  Certified once on AWS, twice with Oracle, and once with Claude.
                </span>
              </li>
              <li>
                <span className="dot">
                  <ShieldCheck size={16} aria-hidden />
                </span>
                <span>
                  Owned security fixes across 19 TransUnion microservices: SAST,
                  dependency, and container findings.
                </span>
              </li>
              <li>
                <span className="dot">
                  <PenLine size={16} aria-hidden />
                </span>
                <span>Open to referrals. Send a DM on LinkedIn.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="page section" id="skills">
          <h2>Skills</h2>
          <p className="subhead">
            Backend from the roles. Frontend: JavaScript, TypeScript, React, and Vue.
          </p>
          <div className="skill-grid">
            <div className="skill-column">
              <div className="skill-block">
                <h3>Backend</h3>
                <div className="chips">
                  <span className="chip">Java</span>
                  <span className="chip">Java 25</span>
                  <span className="chip">Spring Boot</span>
                  <span className="chip">Spring Cloud</span>
                  <span className="chip">Microservices</span>
                  <span className="chip">REST APIs</span>
                  <span className="chip">JUnit</span>
                </div>
              </div>
            </div>
            <div className="skill-column">
              <div className="skill-block">
                <h3>Cloud</h3>
                <div className="chips">
                  <span className="chip">AWS</span>
                  <span className="chip">Terraform</span>
                  <span className="chip">CloudFormation</span>
                  <span className="chip">Kubernetes</span>
                  <span className="chip">Jenkins</span>
                  <span className="chip">Splunk</span>
                  <span className="chip">OpenTelemetry</span>
                </div>
              </div>
            </div>
            <div className="skill-column">
              <div className="skill-block">
                <h3>Data</h3>
                <div className="chips">
                  <span className="chip">Kafka</span>
                  <span className="chip">Airflow</span>
                  <span className="chip">Snowflake</span>
                  <span className="chip">Python</span>
                  <span className="chip">GenAI</span>
                </div>
              </div>
            </div>
            <div className="skill-column">
              <div className="skill-block">
                <h3>Frontend</h3>
                <div className="chips">
                  <span className="chip">JavaScript</span>
                  <span className="chip">TypeScript</span>
                  <span className="chip">React</span>
                  <span className="chip">Vue.js</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page section" id="projects">
          <h2>Selected work</h2>
          <p className="subhead">Delivery called out on the profile.</p>
          <div className="project-grid">
            <a
              className="project-card"
              href="https://www.linkedin.com/in/shuseng8/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="kicker">TCS · current</span>
              <h3>Wealth and mortgage modernization</h3>
              <p>
                Java 25 and Spring Boot 4+ for a US BFSI client, including stored
                procedures moving into Java services. Leads a team of 8.
              </p>
              <span className="goto">
                On LinkedIn <ExternalLink size={14} aria-hidden />
              </span>
            </a>
            <a
              className="project-card"
              href="https://www.linkedin.com/in/shuseng8/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="kicker">TransUnion</span>
              <h3>Identity platform migration</h3>
              <p>
                Millions of daily transactions. Monolith split with Spring Cloud,
                and 2+ TB moved on AWS with zero data loss.
              </p>
              <span className="goto">
                On LinkedIn <ExternalLink size={14} aria-hidden />
              </span>
            </a>
            <a
              className="project-card"
              href="https://www.linkedin.com/in/shuseng8/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="kicker">Accenture</span>
              <h3>Purchase orders and cloud cost</h3>
              <p>
                99.92% accuracy on 100K+ purchase-order records, plus UI
                automation that saved about $615K a year.
              </p>
              <span className="goto">
                On LinkedIn <ExternalLink size={14} aria-hidden />
              </span>
            </a>
            <a
              className="project-card"
              href="https://github.com/ssg8288/Surviellance-Bomb-Diffusion-Robot"
              target="_blank"
              rel="noreferrer"
            >
              <span className="kicker">DevScript · DWOC 2020</span>
              <h3>Surveillance bomb diffusion robot</h3>
              <p>
                Open-source project he maintained while contributing through
                DevScript, December 2020 to February 2021.
              </p>
              <span className="goto">
                Open repo <ExternalLink size={14} aria-hidden />
              </span>
            </a>
          </div>
        </section>

        <section className="page section" id="writing">
          <h2>Writing</h2>
          <article className="mini-card">
            <p className="spot-kicker">Technical writing</p>
            <h3 className="card-title">Substack and the older blog</h3>
            <p className="card-subtitle">
              Technical posts on Substack since November 2026, documenting
              learnings and experience. Earlier writing lived on Blogspot from
              November 2020 to May 2021. Day-to-day notes are still on X.
            </p>
            <div className="links">
              <a
                href="https://shubhamsengupta.substack.com/"
                target="_blank"
                rel="noreferrer"
              >
                Substack
              </a>
              <a
                href="https://haspdecrypted-c.blogspot.com/"
                target="_blank"
                rel="noreferrer"
              >
                Blogspot
              </a>
              <a href="https://github.com/shuseng8" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://x.com/shuseng8" target="_blank" rel="noreferrer">
                X
              </a>
            </div>
          </article>
        </section>

        <section className="page section" id="contact">
          <h2>Contact</h2>
          <div className="contact-panel">
            <div>
              <p className="spot-kicker">Open to referrals</p>
              <h3 className="card-title">Bengaluru</h3>
              <p>
                Senior Java engineer at TCS. The fastest way in is a LinkedIn DM.
              </p>
            </div>
            <div className="contact-actions">
              <a
                href="https://www.linkedin.com/in/shuseng8/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ExternalLink size={16} aria-hidden />
              </a>
              <a href="https://github.com/shuseng8" target="_blank" rel="noreferrer">
                GitHub <ExternalLink size={16} aria-hidden />
              </a>
              <a href="https://x.com/shuseng8" target="_blank" rel="noreferrer">
                X / @shuseng8 <ExternalLink size={16} aria-hidden />
              </a>
            </div>
          </div>
        </section>

        <footer className="page foot">
          Shubham Sen Gupta · Senior Java engineer · Bengaluru
        </footer>
      </main>
    </div>
  );
}

function Clamp({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const long = text.length > 120;
  return (
    <>
      <p className={long && !open ? "card-subtitle clamp" : "card-subtitle"}>
        {text}
      </p>
      {long ? (
        <button
          className="expand"
          type="button"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Show less" : "Read more"}
        </button>
      ) : null}
    </>
  );
}
