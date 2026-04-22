import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useTestimonialsAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Left column — stat + title stagger up
      gsap.from(".testimonials-left > *", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".testimonials-left",
          start: "top 82%",
        },
      });

      // Quote rows — each slides in from the right as it enters
      document.querySelectorAll(".testimonial-row").forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          x: 24,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
};
