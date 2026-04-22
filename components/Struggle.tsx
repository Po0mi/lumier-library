"use client";
import Image from "next/image";
import { useStruggleAnimation } from "@/hooks/useStruggleAnimation";
import "./Struggle.scss";

const struggles = [
  {
    number: "01",
    title: "Digital Satiation",
    description:
      "Constant notifications and endless scrolling leave us mentally exhausted before the day even begins. We consume without intention, and rest without true recovery.",
    stat: "96×",
    statLabel: "daily phone checks, on average",
    imageType: "gradient-digital",
    image: "/images/stress-man.jpg",
  },
  {
    number: "02",
    title: "Spatial Anxiety",
    description:
      "Excess possessions create a silent weight on our subconscious, preventing true relaxation at home. Clutter is a visual noise that keeps the mind in a perpetual state of low-level stress.",
    stat: "20%",
    statLabel: "of our possessions are regularly used",
    imageType: "photo",
    image: "/images/anxiety.jpg",
  },
  {
    number: "03",
    title: "Decision Fatigue",
    description:
      "Too many choices and too much information lead to paralysis instead of meaningful action. The mental bandwidth spent on trivial decisions depletes capacity for what truly matters.",
    stat: "35K+",
    statLabel: "decisions made every single day",
    imageType: "gradient-decision",
    image: "/images/fatigued.jpg",
  },
];

const Struggle = () => {
  const sectionRef = useStruggleAnimation();

  return (
    <section className="struggle" id="struggle" ref={sectionRef}>
      <div className="struggle-container">
        <div className="struggle-header">
          <span className="struggle-eyebrow">The Struggle</span>
          <div className="struggle-header-row">
            <h2 className="struggle-title">The Noise of Modern Living</h2>
            <p className="struggle-body">
              We live in an age of digital overwhelm. Our attention is a
              commodity, and our physical spaces have become cluttered
              extensions of our chaotic minds.
            </p>
          </div>
        </div>

        <div className="struggle-cards">
          {struggles.map((item) => (
            <div key={item.number} className="struggle-card">
              <div className={`card-image card-image--${item.imageType}`}>
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="card-photo"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
                <span className="card-number">{item.number}</span>
              </div>

              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
                <div className="card-stat">
                  <span className="card-stat-number">{item.stat}</span>
                  <span className="card-stat-label">{item.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Struggle;
