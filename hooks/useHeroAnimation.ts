import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useHeroAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          ".hero-eyebrow",
          ".hero-title",
          ".hero-subtitle",
          ".hero-cta",
          ".hero-download-note",
        ],
        { opacity: 0, y: 28 },
      );
      gsap.set(".image-wrapper", { opacity: 0, y: 40 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.7 }, 0.1)
        .to(".hero-title", { opacity: 1, y: 0, duration: 0.9 }, 0.3)
        .to(".hero-subtitle", { opacity: 1, y: 0, duration: 0.8 }, 0.55)
        .to(".hero-cta", { opacity: 1, y: 0, duration: 0.7 }, 0.75)
        .to(".hero-download-note", { opacity: 1, y: 0, duration: 0.6 }, 0.9)
        .to(
          ".image-wrapper",
          { opacity: 1, y: 30, duration: 1.1, ease: "power2.out" },
          0.4,
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
};
