"use client";
import { useState } from "react";
import { useFAQAnimation } from "@/hooks/useFAQAnimation";
import "./FAQ.scss";

const faqs = [
  {
    q: "Is this just another \"delete social media\" book?",
    a: "No. We recognise that modern life requires digital tools. Instead of total deletion, we teach you how to architect a relationship with technology that serves your goals without stealing your focus.",
  },
  {
    q: "What formats are included in the download?",
    a: "You receive a high-resolution PDF optimised for both print and screen, plus a fully reflowable ePub file compatible with every major e-reader including Kindle, Apple Books, and Kobo.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "If you apply the framework for 30 days and feel no meaningful shift, we'll refund you in full — no questions asked. We're confident enough in the material to back it completely.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most readers report a noticeable shift within the first week of the Digital Audit chapter alone. Full integration of all three pillars typically takes 30–60 days, but the changes compound over time.",
  },
  {
    q: "Is this suitable for someone who isn't very 'minimalist'?",
    a: "Absolutely. The guide is written for people who feel overwhelmed, not for people who already live with 12 possessions. You don't need to want less — you just need to want more of the right things.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useFAQAnimation();

  return (
    <section className="faq" id="faq" ref={sectionRef}>
      <div className="faq-container">

        <div className="faq-left">
          <span className="faq-eyebrow">FAQ</span>
          <h2 className="faq-title">Common<br />Questions</h2>
          <p className="faq-note">
            Still unsure? Everything you need to make the decision is here.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? "faq-item--open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="faq-icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 5l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
