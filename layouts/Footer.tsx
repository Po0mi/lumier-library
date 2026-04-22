import "./Footer.scss";

const links = [
  { label: "The Struggle", href: "#struggle" },
  { label: "Solution",     href: "#solution" },
  { label: "Pricing",      href: "#offers"   },
  { label: "Support",      href: "#faq"      },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">Lumiere Library</a>
        <nav className="footer-nav">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="footer-link">{l.label}</a>
          ))}
        </nav>
        <p className="footer-copy">
          &copy; 2024 Lumiere Library.&nbsp; Curated literacy for the digital patron.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
