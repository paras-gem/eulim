"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const stats = [
  { value: "20+", label: "Workshops" },
  { value: "300+", label: "Members" },
  { value: "15", label: "Annual events" },
];

const initiatives = [
  {
    title: "Workshops & Skill Labs",
    description: "Weekly sessions that cover design systems, full-stack development, and collaboration practices.",
  },
  {
    title: "Student-led Projects",
    description: "Build real campus tools in small teams, with mentorship and polished deliverables.",
  },
  {
    title: "Community & Mentoring",
    description: "Connect with fellow students, alumni mentors, and industry speakers in a supportive environment.",
  },
];

const events = [
  {
    category: "Design Sprint",
    title: "Campus product challenge",
    time: "May 12 • 4 PM",
  },
  {
    category: "Tech Talk",
    title: "Building apps for student life",
    time: "May 24 • 6 PM",
  },
  {
    category: "Hackathon",
    title: "24‑hour creativity marathon",
    time: "June 8 • 10 AM",
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : prefersDark ? "dark" : "light";
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.dot} />
          <div>
            <p className={styles.brandName}>Eulim Club</p>
            <p className={styles.brandTag}>University Coding Committee</p>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#initiatives">Initiatives</a>
          <a href="#events">Events</a>
          <a href="#join">Join</a>
        </nav>

        <button className={styles.themeToggle} type="button" onClick={toggleTheme} aria-label="Toggle light and dark mode">
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </header>

      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>University club</span>
          <h1 className={styles.headline}>
            A modern campus community built for student creators, coders, and collaborators.
          </h1>
          <p className={styles.description}>
            Eulim offers a polished club experience with soft, fluent visuals and a professional tone. The site adapts seamlessly to both light and dark mode while remaining fully mobile optimized.
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryBtn} href="#join">
              Become a member
            </a>
            <a className={styles.secondaryBtn} href="#events">
              Explore events
            </a>
          </div>

          <div className={styles.stats}>
            {stats.map((item) => (
              <div key={item.label} className={styles.statCard}>
                <p className={styles.statValue}>{item.value}</p>
                <p className={styles.statLabel}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className={styles.heroPanel}>
          <div className={styles.panelCard}>
            <p className={styles.panelTitle}>Featured pathway</p>
            <h2>Campus app design sprint</h2>
            <p>
              Work in teams to research, prototype, and present a polished student experience by the end of the semester.
            </p>
          </div>
        </aside>
      </main>

      <section id="about" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>About the club</p>
          <h2>Where creativity, code, and community meet on campus.</h2>
        </div>

        <div className={styles.grid}>
          <article className={styles.featureCard}>
            <h3>Professional atmosphere</h3>
            <p>
              We maintain a polished club experience with clear communication, thoughtful planning, and accessible support for every student.
            </p>
          </article>
          <article className={styles.featureCard}>
            <h3>Inclusive by design</h3>
            <p>
              Whether you are just starting or already building, Eulim welcomes members from all majors and experience levels.
            </p>
          </article>
          <article className={styles.featureCard}>
            <h3>Built for mobile</h3>
            <p>
              Every workshop, event, and announcement is optimized for phones and tablets so members can stay connected anywhere.
            </p>
          </article>
        </div>
      </section>

      <section id="initiatives" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>What we do</p>
          <h2>Programs designed for growth and teamwork.</h2>
        </div>

        <div className={styles.grid}>
          {initiatives.map((item) => (
            <article key={item.title} className={styles.featureCard}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="events" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Upcoming events</p>
          <h2>Join our next hands-on experiences.</h2>
        </div>

        <div className={styles.eventGrid}>
          {events.map((event) => (
            <article key={event.title} className={styles.eventCard}>
              <span className={styles.eventCategory}>{event.category}</span>
              <h3>{event.title}</h3>
              <p className={styles.eventTime}>{event.time}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="join" className={styles.ctaPanel}>
        <div>
          <p className={styles.sectionLabel}>Ready to get started?</p>
          <h2>Join Eulim and help shape the student tech community.</h2>
        </div>
        <a className={styles.primaryBtn} href="mailto:contact@eulim.example">
          Contact us
        </a>
      </section>

      <footer className={styles.footer}>
        <p>© Eulim Club • Professional university collaboration with a warm, modern style.</p>
      </footer>
    </div>
  );
}
