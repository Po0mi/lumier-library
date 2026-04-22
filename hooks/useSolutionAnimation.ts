import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSolutionAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header — slides in from the right
      gsap.from(".solution-header-inner > *", {
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".solution-header",
          start: "top 80%",
        },
      });

      // Chapter rows — each row reveals as it enters viewport
      document.querySelectorAll(".chapter-row").forEach((row) => {
        const num  = row.querySelector(".chapter-num");
        const body = row.querySelector(".chapter-body");

        gsap.from(num, {
          opacity: 0,
          x: -20,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 82%" },
        });

        gsap.from(body, {
          opacity: 0,
          x: 20,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.1,
          scrollTrigger: { trigger: row, start: "top 82%" },
        });
      });

      // Achievements strip — fade up
      gsap.from(".achieve-left", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".solution-achieve",
          start: "top 85%",
        },
      });

      gsap.from(".achieve-item", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".solution-achieve",
          start: "top 82%",
        },
        delay: 0.2,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
};
