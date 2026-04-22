import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useFAQAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header — stagger up
      gsap.from(".faq-left > *", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".faq-left",
          start: "top 82%",
        },
      });

      // FAQ items — each slides up as it enters
      document.querySelectorAll(".faq-item").forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 20,
          duration: 0.65,
          ease: "power3.out",
          delay: i * 0.08,
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
};
