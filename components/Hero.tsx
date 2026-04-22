"use client";
import Image from "next/image";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import "./Hero.scss";

const Hero = () => {
  const sectionRef = useHeroAnimation();

  return (
    <section className="hero" id="hero" ref={sectionRef}>
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">NEW RELEASE</span>
          <h1 className="hero-title">The architecture of a quiet life</h1>
          <p className="hero-subtitle">
            Discover <span>&apos;The Art of Minimal Living&apos;</span>, a curated guide
            to reclaiming your focus, space, and spirit in an age of digital
            noise.
          </p>
          <div className="hero-cta">
            <a href="#" className="hero-primary">Get the Guide</a>
            <a href="#" className="hero-secondary">Explore Preview</a>
          </div>
          <p className="hero-download-note">
            <span className="hero-download-dot" />
            Instant PDF &amp; ePub Download Included
          </p>
        </div>

        <div className="image-wrapper">
          <Image
            src="/images/book-hand.png"
            alt="Letter"
            width={600}
            height={600}
            className="book-hand"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
