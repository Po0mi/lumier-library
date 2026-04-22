"use client";
import { useSolutionAnimation } from "@/hooks/useSolutionAnimation";
import "./Solution.scss";

const chapters = [
  {
    number: "01",
    method: "Clear Method",
    title: "The Digital Audit",
    desc: "A surgical extraction of low-value digital habits using the Essential Notification framework to reclaim hours of daily focus.",
  },
  {
    number: "02",
    method: "Architectural Design",
    title: "Spatial Sanctuary",
    desc: "Frameworks for redesigning your living environment so every room supports deep rest, clarity, and intentional living.",
  },
  {
    number: "03",
    method: "Sustainable Rituals",
    title: "Rituals of Presence",
    desc: "Daily ceremonies that anchor your attention to what matters — practices built to last a lifetime, not just a weekend.",
  },
];

const achievements = [
  "2.5 hours of reclaimed daily time",
  "Elimination of digital anxiety",
  "A curated, high-performance home",
  "Deep focus capabilities restored",
];

const Solution = () => {
  const sectionRef = useSolutionAnimation();

  return (
    <section className="solution" id="solution" ref={sectionRef}>
      <div className="solution-container">

        <div className="solution-header">
          <div className="solution-header-inner">
            <span className="solution-eyebrow">The Solution</span>
            <h2 className="solution-title">A Path to<br />Stillness</h2>
            <p className="solution-subtitle">
              This guide isn&apos;t about deprivation — it&apos;s about
              curation. A framework for reclaiming your attention and building
              a life of purpose.
            </p>
          </div>
        </div>

        <div className="solution-rows">
          {chapters.map((ch) => (
            <div key={ch.number} className="chapter-row">
              <span className="chapter-num">{ch.number}</span>
              <div className="chapter-body">
                <span className="chapter-method">{ch.method}</span>
                <h3 className="chapter-title">{ch.title}</h3>
                <p className="chapter-desc">{ch.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="solution-achieve">
          <div className="achieve-left">
            <p className="achieve-label">What you&apos;ll achieve</p>
            <a href="#offers" className="achieve-cta">Get the Guide</a>
          </div>
          <ul className="achieve-list">
            {achievements.map((a) => (
              <li key={a} className="achieve-item">
                <span className="achieve-dot" />
                {a}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Solution;
