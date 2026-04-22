import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useStruggleAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header — eyebrow + title row + body slide up
      gsap.from(".struggle-eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".struggle-header",
          start: "top 85%",
        },
      });

      gsap.from(".struggle-title", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".struggle-header",
          start: "top 80%",
        },
        delay: 0.15,
      });

      gsap.from(".struggle-body", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".struggle-header",
          start: "top 80%",
        },
        delay: 0.3,
      });

      // Cards — stagger in from below
      gsap.from(".struggle-card", {
        opacity: 0,
        y: 50,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".struggle-cards",
          start: "top 80%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
};
