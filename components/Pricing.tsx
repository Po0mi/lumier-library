"use client";
import { usePricingAnimation } from "@/hooks/usePricingAnimation";
import "./Pricing.scss";

const features = [
  "140-page High-Res PDF & ePub",
  "Interactive Digital Journal Prompts",
  "Priority Access to Future Guides",
];

const Pricing = () => {
  const sectionRef = usePricingAnimation();

  return (
    <section className="pricing" id="offers" ref={sectionRef}>
      <div className="pricing-container">

        {/* Left — pitch copy */}
        <div className="pricing-left">
          <span className="pricing-eyebrow">Limited Release Edition</span>
          <h2 className="pricing-title">
            Everything you need<br />to begin.
          </h2>
          <p className="pricing-desc">
            One purchase. No subscriptions, no upsells. Just a complete
            framework for building a quieter, more intentional life — yours
            to keep forever.
          </p>
          <ul className="pricing-features">
            {features.map((f) => (
              <li key={f} className="pricing-feature">
                <span className="pricing-check">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — pricing panel */}
        <div className="pricing-panel">
          <div className="panel-top-bar" />
          <div className="panel-inner">
            <div className="panel-price-row">
              <span className="panel-currency">$</span>
              <span className="panel-amount">24</span>
              <span className="panel-original">$48</span>
            </div>
            <p className="panel-billing">One-time payment. Lifetime access.</p>

            <div className="panel-divider" />

            <ul className="panel-features">
              {features.map((f) => (
                <li key={f} className="panel-feature">
                  <span className="panel-check">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a href="#" className="panel-cta">
              Buy Now &amp; Download Instantly
            </a>

            <p className="panel-guarantee">
              Secure checkout &nbsp;·&nbsp; Instant delivery
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
