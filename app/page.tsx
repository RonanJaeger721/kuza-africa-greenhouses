"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const services = [
  { no: "01", title: "Fix & Supply", copy: "Purpose-built greenhouse structures, supplied and assembled around your site, crop and growing ambition.", image: "/images/construction-team.jpeg" },
  { no: "02", title: "Drip Irrigation", copy: "Measured water delivery designed to bring consistency to every row and efficiency to every growing cycle.", image: "/images/irrigation.jpeg" },
  { no: "03", title: "Complete Service", copy: "One professional team from site assessment and structure to covering, irrigation and final handover.", image: "/images/completed-house.jpeg" },
];

const gallery = [
  ["/images/multi-span.jpeg", "Multi-span greenhouse installation"],
  ["/images/sky-structure.jpeg", "Greenhouse frame and covering"],
  ["/images/drip-lines.jpeg", "Installed drip irrigation lines"],
  ["/images/aerial-two.jpeg", "Completed greenhouse from above"],
];

function Arrow({ down = false }: { down?: boolean }) {
  return <span aria-hidden="true" className={down ? "arrow down" : "arrow"}>↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));

    return () => reveal.disconnect();
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };

  return (
    <main>
      <div className="intro-join" aria-hidden="true">
        <div className="intro-half intro-left"><Image unoptimized src="/images/multi-span.jpeg" alt="" fill priority sizes="100vw" /></div>
        <div className="intro-half intro-right"><Image unoptimized src="/images/multi-span.jpeg" alt="" fill priority sizes="100vw" /></div>
        <div className="intro-seam" />
        <div className="intro-logo"><Image unoptimized src="/images/kuza-logo.jpeg" alt="" width={300} height={300} /></div>
      </div>
      <header className="nav-shell">
        <a href="#top" className="brand" aria-label="Kuza Africa home">
          <span className="real-logo"><Image unoptimized src="/images/kuza-logo.jpeg" alt="Kuza Africa" fill sizes="56px" /></span>
          <span>Kuza Africa<small>Greenhouse specialists</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#services">Services</a><a href="#work">Projects</a>
        </nav>
        <a className="nav-cta" href="#contact">Start a project <Arrow /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><span /><span /></button>
      </header>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {[["About", "about"], ["Services", "services"], ["Projects", "work"], ["Contact", "contact"]].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<Arrow /></a>)}
      </div>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Greenhouse construction · Zimbabwe</p>
          <h1>Where better<br/><em>growing begins.</em></h1>
          <p className="hero-intro">Professional greenhouse structures and precise irrigation systems—designed, supplied and installed by one dependable team.</p>
          <div className="hero-actions"><a className="primary-link" href="#contact">Plan your greenhouse <Arrow /></a><a className="quiet-link" href="#work">View completed work</a></div>
        </div>
        <div className="hero-stage" aria-label="A completed Kuza Africa greenhouse">
          <div className="hero-photo-main">
            <Image unoptimized src="/images/greenhouse-exterior.jpeg" alt="Completed greenhouse built by Kuza Africa" fill priority sizes="(max-width: 800px) 92vw, 58vw" />
          </div>
          <div className="hero-detail"><Image unoptimized src="/images/drip-lines.jpeg" alt="Drip irrigation installed inside a greenhouse" fill sizes="220px" /><span>Structure + irrigation<br/><b>one complete service</b></span></div>
          <div className="hero-caption"><span>01</span><p>Built around your land,<br/>crop and ambition.</p></div>
        </div>
        <a href="#about" className="scroll-cue">Scroll to explore <span>↓</span></a>
      </section>

      <section className="manifesto" id="about">
        <p className="section-label" data-reveal>Who we are</p>
        <div className="manifesto-grid">
          <h2 data-reveal>We create the space<br/>where growth <em>begins.</em></h2>
          <div data-reveal>
            <p>Kuza Africa is a greenhouse construction company helping growers turn open ground into controlled, productive environments.</p>
            <p>We combine practical local knowledge with professional installation—from structural frames and protective covering to water-smart drip systems.</p>
            <a href="#services" className="text-link">Explore our expertise <Arrow /></a>
          </div>
        </div>
        <div className="growth-line" aria-hidden="true"><span/><i/><i/><i/><i/><i/></div>
      </section>

      <section className="services" id="services">
        <div className="services-head">
          <p className="section-label" data-reveal>What we do</p>
          <h2 data-reveal>Everything a growing<br/>environment needs.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.no} data-reveal>
              <span className="service-no">{service.no}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <div className="service-image"><Image unoptimized src={service.image} alt="" fill sizes="260px" /></div>
              <span className="service-arrow"><Arrow /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="process-copy" data-reveal>
          <p className="section-label light">Our process</p>
          <h2>From bare ground<br/>to a working system.</h2>
          <p>Each project moves through one continuous, accountable process.</p>
        </div>
        <div className="process-visual" data-reveal>
          <div className="greenhouse-drawing" aria-hidden="true"><span className="roof left"/><span className="roof right"/><span className="post p1"/><span className="post p2"/><span className="post p3"/><span className="post p4"/><span className="soil"/><span className="water w1"/><span className="water w2"/><span className="water w3"/></div>
          <ol><li><span>01</span>Site & needs assessment</li><li><span>02</span>Supply & construction</li><li><span>03</span>Irrigation installation</li><li><span>04</span>Test & handover</li></ol>
        </div>
      </section>

      <section className="work" id="work">
        <div className="work-head"><div><p className="section-label" data-reveal>Selected work</p><h2 data-reveal>Built here.<br/><em>Built to perform.</em></h2></div><p data-reveal>Real installations, completed by Kuza Africa.</p></div>
        <div className="gallery">
          {gallery.map(([src, alt], index) => <figure key={src} className={`gallery-${index + 1}`} data-reveal><Image unoptimized src={src} alt={alt} fill sizes="(max-width: 700px) 88vw, 46vw"/><figcaption><span>0{index + 1}</span>{alt}</figcaption></figure>)}
        </div>
      </section>

      <section className="proof">
        <div className="proof-image" data-reveal><Image unoptimized src="/images/greenhouse-exterior.jpeg" alt="Long completed Kuza Africa greenhouse" fill sizes="(max-width: 800px) 90vw, 45vw" /></div>
        <div className="proof-copy" data-reveal><p className="section-label">Why Kuza</p><blockquote>“Not just a structure. A complete growing environment, delivered professionally.”</blockquote><div className="proof-points"><span>One team</span><span>Complete service</span><span>Local understanding</span></div></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-intro" data-reveal><p className="section-label light">Start a project</p><h2>Let’s build<br/>what grows <em>next.</em></h2><p>Tell us about your site and what you plan to grow. We’ll help shape the right greenhouse solution.</p></div>
        <form onSubmit={submit} data-reveal>
          <label><span>Your name</span><input required name="name" placeholder="Full name" /></label>
          <label><span>Phone or email</span><input required name="contact" placeholder="How should we reach you?" /></label>
          <label><span>What do you need?</span><select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Fix & supply a greenhouse</option><option>Drip irrigation installation</option><option>Complete greenhouse service</option></select></label>
          <label><span>Project details</span><textarea name="message" placeholder="Location, approximate size and what you plan to grow" rows={3}/></label>
          <button type="submit">{sent ? "Thank you — enquiry noted" : "Send project enquiry"}<Arrow /></button>
          {sent && <p className="form-note">This preview is ready to connect to Kuza Africa’s preferred email or WhatsApp number.</p>}
        </form>
      </section>

      <footer><a href="#top" className="footer-brand"><span className="brand-mark"><i/><i/><i/></span>Kuza Africa</a><p>Greenhouse construction<br/>and irrigation systems.</p><a href="#top" className="back-top">Back to top ↑</a><small>© {new Date().getFullYear()} Kuza Africa</small></footer>
    </main>
  );
}
