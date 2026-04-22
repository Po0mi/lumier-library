import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const usePricingAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Left copy — stagger up
      gsap.from(".pricing-left > *", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: {
          trigger: ".pricing-left",
          start: "top 82%",
        },
      });

      // Panel — rises up with a subtle scale
      gsap.from(".pricing-panel", {
        opacity: 0,
        y: 48,
        scale: 0.97,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pricing-panel",
          start: "top 85%",
        },
      });

      // Panel inner items stagger after panel lands
      gsap.from(
        [".panel-price-row", ".panel-billing", ".panel-divider", ".panel-features", ".panel-cta", ".panel-guarantee"],
        {
          opacity: 0,
          y: 14,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.09,
          scrollTrigger: {
            trigger: ".pricing-panel",
            start: "top 80%",
          },
          delay: 0.3,
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
};
