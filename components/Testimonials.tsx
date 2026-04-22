"use client";
import { useTestimonialsAnimation } from "@/hooks/useTestimonialsAnimation";
import "./Testimonials.scss";

const testimonials = [
  {
    quote:
      "This isn't just a book about throwing away things. It's a surgical guide to reclaiming your brain from the digital noise.",
    name: "Marcus Chen",
    role: "Tech Architect",
    initials: "MC",
    color: "avatar--warm",
  },
  {
    quote:
      "The spatial sanctuary chapter alone saved my marriage. We finally have a home that feels like a refuge instead of a storage unit.",
    name: "Sarah L.",
    role: "Interior Designer",
    initials: "SL",
    color: "avatar--sage",
  },
  {
    quote:
      "Rarely does a PDF guide provide such profound value. The Rituals section has completely transformed my mornings.",
    name: "David Vane",
    role: "Creative Director",
    initials: "DV",
    color: "avatar--teal",
  },
];

const Testimonials = () => {
  const sectionRef = useTestimonialsAnimation();

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <div className="testimonials-container">

        <div className="testimonials-left">
          <span className="testimonials-eyebrow">Readers</span>
          <p className="testimonials-stat">12,000+</p>
          <h2 className="testimonials-title">Seekers of<br />Stillness</h2>
          <div className="testimonials-divider" />
          <p className="testimonials-note">Verified readers worldwide</p>
        </div>

        <div className="testimonials-right">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-row">
              <span className="testimonial-mark">&ldquo;</span>
              <div className="testimonial-body">
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <span className={`testimonial-avatar ${t.color}`}>{t.initials}</span>
                  <div className="testimonial-info">
                    <span className="testimonial-name">{t.name}</span>
                    <span className="testimonial-role">{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
