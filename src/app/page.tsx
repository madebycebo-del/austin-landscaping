"use client";
import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Star, ArrowRight, CheckCircle, Leaf, Layers, Droplets, Box, ChevronDown, Instagram, Facebook, Twitter, Menu, X } from "lucide-react";

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const FadeIn = ({ children, delay = 0, className = "" }: any) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref as any} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`
    }}>{children}</div>
  );
};

export default function AustinLandscaping() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    { icon: <Box size={28} />, title: "Custom 3D Design", desc: "See your landscape before we break ground — photorealistic renders of every detail.", tag: "Most Popular" },
    { icon: <Layers size={28} />, title: "Premium Hardscaping", desc: "Hand-selected stone patios, retaining walls, outdoor kitchens built to last decades.", tag: null },
    { icon: <Leaf size={28} />, title: "Texas Native Planting", desc: "Drought-tolerant, lush, and thriving — luxury that works with Hill Country ecology.", tag: null },
    { icon: <Droplets size={28} />, title: "Smart Irrigation", desc: "AI-driven water management that keeps your landscape perfect, season after season.", tag: null },
  ];

  const steps = [
    { num: "01", title: "Deep Consultation", body: "We spend 90 minutes on-site understanding your vision, lifestyle, and how you actually use your outdoor space. No cookie-cutter proposals.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80" },
    { num: "02", title: "Photorealistic 3D Rendering", body: "Before a single shovel hits the ground, you'll walk through your future landscape in stunning 3D. Transparent pricing locked in at this stage — no surprises.", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80" },
    { num: "03", title: "Flawless Execution", body: "Our own craftsmen — never low-cost subcontractors — build your project with the care of people who put their name on it.", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80" },
  ];

  const testimonials = [
    { name: "Sarah M.", location: "Westlake Hills", stars: 5, quote: "They completely transformed our backyard from a patch of dirt into the envy of our neighborhood. The 3D preview was spot-on — what we saw is exactly what was built." },
    { name: "Derek & Lena T.", location: "Barton Hills, Austin", stars: 5, quote: "We've tried two other landscapers. The difference is night and day. These guys showed up on time, communicated every step, and the result is breathtaking." },
  ];

  const gallery = [
    { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", h: "h-72" },
    { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", h: "h-48" },
    { url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80", h: "h-56" },
    { url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80", h: "h-64" },
    { url: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=600&q=80", h: "h-48" },
    { url: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80", h: "h-72" },
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif", backgroundColor: "#FAFAFA", color: "#1a1a1a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #2d4a2d; border-radius: 3px; }
        .btn-primary { background: #2d4a2d; color: #f0ead6; padding: 14px 30px; border-radius: 8px; font-weight: 700; font-size: 15px; letter-spacing: 0.02em; border: none; cursor: pointer; transition: all 0.3s ease; display: inline-flex; align-items: center; gap: 8px; }
        .btn-primary:hover { background: #1a2e1a; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(45,74,45,0.35); }
        .btn-ghost { background: transparent; color: #f0ead6; padding: 13px 28px; border-radius: 8px; font-weight: 600; font-size: 15px; border: 1.5px solid rgba(240,234,214,0.45); cursor: pointer; transition: all 0.3s ease; display: inline-flex; align-items: center; gap: 8px; }
        .btn-ghost:hover { background: rgba(240,234,214,0.1); border-color: rgba(240,234,214,0.8); transform: translateY(-2px); }
        .service-card { background: #fff; border: 1px solid #e8e4dc; border-radius: 16px; padding: 36px 28px; transition: all 0.35s ease; cursor: pointer; position: relative; overflow: hidden; }
        .service-card::before { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #2d4a2d, #8b7355); transform: scaleX(0); transition: transform 0.35s ease; }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(45,74,45,0.12); border-color: #c9c0ad; }
        .service-card:hover::before { transform: scaleX(1); }
        .glass-nav { backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); }
        .step-num { font-size: 88px; font-weight: 800; line-height: 1; color: transparent; -webkit-text-stroke: 1.5px #d4c9b4; user-select: none; }
        input, select, textarea { font-family: inherit; }
        .form-field { width: 100%; background: rgba(255,255,255,0.06); border: 1px solid rgba(240,234,214,0.2); border-radius: 8px; padding: 13px 16px; color: #f0ead6; font-size: 15px; outline: none; transition: border-color 0.2s; }
        .form-field::placeholder { color: rgba(240,234,214,0.4); }
        .form-field:focus { border-color: rgba(240,234,214,0.6); }
        .form-field option { background: #1a2e1a; color: #f0ead6; }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes shimmer { 0% { opacity: 0.6; } 50% { opacity: 1; } 100% { opacity: 0.6; } }
      `}</style>
      <nav className="glass-nav" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(26,46,26,0.92)" : "rgba(26,46,26,0.55)",
        transition: "all 0.4s ease",
        borderBottom: scrolled ? "1px solid rgba(240,234,214,0.12)" : "none"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #2d4a2d, #8b7355)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Leaf size={18} color="#f0ead6" />
            </div>
            <span style={{ color: "#f0ead6", fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em" }}>TERRA<span style={{ color: "#c9a96e" }}>CRAFT</span></span>
          </div>
          <div className="hidden md:flex" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {["Services", "Process", "Gallery", "Contact"].map((link: any) => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ color: "rgba(240,234,214,0.75)", fontWeight: 500, fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e: any) => e.target.style.color = "#f0ead6"}
                onMouseLeave={(e: any) => e.target.style.color = "rgba(240,234,214,0.75)"}>{link}</a>
            ))}
            <button className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>Free Estimate</button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", color: "#f0ead6", cursor: "pointer" }}
            className="mobile-menu-btn">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,28,15,0.88) 0%, rgba(26,46,26,0.75) 50%, rgba(90,60,30,0.55) 100%)" }} />
        <div style={{ position: "absolute", top: "20%", right: "8%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,115,85,0.15), transparent 70%)", animation: "float 6s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <MapPin size={15} color="#c9a96e" />
            <span style={{ color: "#c9a96e", fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Austin & Westlake · Texas Hill Country</span>
          </div>
          <h1 style={{ color: "#f0ead6", fontSize: "clamp(38px, 6vw, 82px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: 780, marginBottom: 24 }}>
            Transform Your Austin Property into a <span style={{ color: "#c9a96e" }}>Premium Outdoor Oasis.</span>
          </h1>
          <p style={{ color: "rgba(240,234,214,0.72)", fontSize: "clamp(16px, 2.2vw, 20px)", maxWidth: 560, lineHeight: 1.65, marginBottom: 40, fontWeight: 400 }}>
            Expert landscape design, hardscaping, and maintenance tailored for the Texas Hill Country — built by craftsmen who never cut corners.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button className="btn-primary">Get a Free Estimate <ArrowRight size={16} /></button>
            <button className="btn-ghost">View Our Work <ChevronDown size={16} /></button>
          </div>
          <div style={{ display: "flex", gap: 32, marginTop: 64, flexWrap: "wrap" }}>
            {[["100+", "Projects Completed"], ["4.9★", "Average Rating"], ["10yr", "Warranty on Hardscaping"]].map(([val, label]) => (
              <div key={label} style={{ borderLeft: "2px solid rgba(201,169,110,0.45)", paddingLeft: 16 }}>
                <div style={{ color: "#c9a96e", fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em" }}>{val}</div>
                <div style={{ color: "rgba(240,234,214,0.55)", fontSize: 12, fontWeight: 500, marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "#1a2e1a", padding: "28px 24px", borderBottom: "1px solid rgba(201,169,110,0.15)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
          <span style={{ color: "rgba(240,234,214,0.55)", fontSize: 13, fontWeight: 500, whiteSpace: "nowrap" }}>Trusted by 100+ Homeowners in Austin & Westlake</span>
          <div style={{ width: 1, height: 24, background: "rgba(240,234,214,0.15)" }} />
          {["🏆 Houzz Best of Service 2024", "⭐ BBB A+ Rated", "🌿 Certified Native Plant Society", "🔑 Angi Super Service Award", "🛡️ NALP Certified"].map(badge => (
            <span key={badge} style={{ color: "rgba(240,234,214,0.65)", fontSize: 13, fontWeight: 500, background: "rgba(240,234,214,0.06)", padding: "6px 14px", borderRadius: 20, border: "1px solid rgba(240,234,214,0.1)", whiteSpace: "nowrap" }}>{badge}</span>
          ))}
        </div>
      </section>
      <section id="services" style={{ padding: "100px 24px", background: "#FAFAFA" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ color: "#8b7355", fontWeight: 700, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>What We Do</p>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 16, lineHeight: 1.1 }}>Services Built for<br /><span style={{ color: "#2d4a2d" }}>Austin's Best Properties.</span></h2>
            <p style={{ color: "#6b6b6b", fontSize: 18, maxWidth: 520, lineHeight: 1.6, marginBottom: 60 }}>We don't offer packages. Every project is a bespoke collaboration designed around your land, your life, and your vision.</p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <div className="service-card">
                  {s.tag && (
                     <span style={{ position: "absolute", top: 20, right: 20, background: "#2d4a2d", color: "#f0ead6", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20, letterSpacing: "0.05em" }}>{s.tag}</span>
                  )}
                  <div style={{ width: 56, height: 56, background: "linear-gradient(135deg, #e8f0e8, #d4e4d4)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, color: "#2d4a2d" }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, color: "#1a1a1a", letterSpacing: "-0.02em" }}>{s.title}</h3>
                  <p style={{ color: "#6b6b6b", fontSize: 15, lineHeight: 1.65 }}>{s.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 24, color: "#2d4a2d", fontWeight: 600, fontSize: 14 }}>
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section id="process" style={{ padding: "100px 24px", background: "#f4f0e8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ color: "#8b7355", fontWeight: 700, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>The Austin Advantage</p>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 60, lineHeight: 1.1 }}>Our Process.<br /><span style={{ color: "#2d4a2d" }}>No Surprises. Ever.</span></h2>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={0.1}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", direction: i % 2 !== 0 ? "rtl" : "ltr" }}>
                  <div style={{ direction: "ltr" }}>
                    <div className="step-num">{step.num}</div>
                    <h3 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1a1a1a", marginBottom: 16, marginTop: -12, lineHeight: 1.2 }}>{step.title}</h3>
                    <p style={{ color: "#5a5a5a", fontSize: 17, lineHeight: 1.7 }}>{step.body}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 24 }}>
                      {i === 0 && ["No-obligation consultation", "On-site property assessment", "Vision & budget alignment"].map(item => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, color: "#2d4a2d", fontSize: 14, fontWeight: 600 }}>
                          <CheckCircle size={16} /> {item}
                        </div>
                      ))}
                      {i === 1 && ["Transparent fixed pricing", "Full 3D walkthrough", "Material selection session"].map(item => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, color: "#2d4a2d", fontSize: 14, fontWeight: 600 }}>
                          <CheckCircle size={16} /> {item}
                        </div>
                      ))}
                      {i === 2 && ["Our own crew — no subcontractors", "Daily photo updates", "10-year hardscape warranty"].map(item => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, color: "#2d4a2d", fontSize: 14, fontWeight: 600 }}>
                          <CheckCircle size={16} /> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ direction: "ltr" }}>
                    <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 64px rgba(45,74,45,0.18)", position: "relative" }}>
                      <img src={step.img} alt={step.title} style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }} />
                      <div style={{ position: "absolute", bottom: 20, left: 20, background: "rgba(26,46,26,0.85)", backdropFilter: "blur(12px)", borderRadius: 10, padding: "10px 16px" }}>
                        <span style={{ color: "#c9a96e", fontWeight: 700, fontSize: 13 }}>Step {step.num}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section id="gallery" style={{ padding: "100px 24px", background: "#FAFAFA" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ color: "#8b7355", fontWeight: 700, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Our Work</p>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 16, lineHeight: 1.1 }}>Real Projects.<br /><span style={{ color: "#2d4a2d" }}>Real Austin Homes.</span></h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 64 }}>
            {gallery.map((img, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ borderRadius: 14, overflow: "hidden", position: "relative", cursor: "pointer" }}
                  onMouseEnter={(e: any) => e.currentTarget.querySelector('img').style.transform = "scale(1.06)"}
                  onMouseLeave={(e: any) => e.currentTarget.querySelector('img').style.transform = "scale(1)"}>
                  <img src={img.url} alt={`Project ${i + 1}`} style={{
                    width: "100%", height: i % 3 === 0 ? 280 : i % 3 === 1 ? 200 : 240,
                    objectFit: "cover", display: "block", transition: "transform 0.5s ease"
                  }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,28,15,0.5), transparent)", opacity: 0, transition: "opacity 0.3s" }}
                    onMouseEnter={(e: any) => e.target.style.opacity = "1"}
                    onMouseLeave={(e: any) => e.target.style.opacity = "0"} />
                </div>
              </FadeIn>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.15}>
                <div style={{ background: "#fff", border: "1px solid #e8e4dc", borderRadius: 16, padding: "36px 32px", boxShadow: "0 4px 24px rgba(45,74,45,0.06)" }}>
                  <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                    {Array(t.stars).fill(0).map((_, j) => <Star key={j} size={16} fill="#c9a96e" color="#c9a96e" />)}
                  </div>
                  <p style={{ color: "#2a2a2a", fontSize: 17, lineHeight: 1.7, fontStyle: "italic", marginBottom: 24 }}>"{t.quote}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #2d4a2d, #8b7355)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "#f0ead6", fontWeight: 700, fontSize: 16 }}>{t.name[0]}</span>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1a1a" }}>{t.name}</div>
                      <div style={{ fontSize: 13, color: "#8b7355", display: "flex", alignItems: "center", gap: 4 }}><MapPin size={11} /> {t.location}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,169,110,0.12), transparent 70%)" }} />
        <FadeIn>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#f0ead6", letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.1 }}>
              Your Neighbors Are Already Upgrading Their Outdoors.
            </h2>
            <p style={{ color: "rgba(240,234,214,0.68)", fontSize: 18, marginBottom: 36, lineHeight: 1.6 }}>
              Spots fill up fast each season. Claim your free consultation and 3D design preview today.
            </p>
            <button className="btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Claim Your Free Estimate <ArrowRight size={18} />
            </button>
            <div style={{ marginTop: 24, color: "rgba(240,234,214,0.4)", fontSize: 13 }}>No commitment. No pressure. Just a conversation.</div>
          </div>
        </FadeIn>
      </section>
      <section id="contact" style={{ background: "#0f1c0f", padding: "80px 24px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, marginBottom: 64 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 40, height: 40, background: "linear-gradient(135deg, #2d4a2d, #8b7355)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Leaf size={20} color="#f0ead6" />
                </div>
                <span style={{ color: "#f0ead6", fontWeight: 800, fontSize: 20 }}>TERRA<span style={{ color: "#c9a96e" }}>CRAFT</span></span>
              </div>
              <p style={{ color: "rgba(240,234,214,0.5)", fontSize: 15, lineHeight: 1.7, marginBottom: 28, maxWidth: 300 }}>Premium landscape design and installation for Austin's most discerning homeowners.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="tel:+15125550100" style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(240,234,214,0.65)", fontSize: 14, textDecoration: "none" }}>
                  <Phone size={15} color="#c9a96e" /> (512) 555-0100
                </a>
                <a href="mailto:hello@terracraft.co" style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(240,234,214,0.65)", fontSize: 14, textDecoration: "none" }}>
                  <MapPin size={15} color="#c9a96e" /> Austin, TX 78746
                </a>
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <div key={i} style={{ width: 38, height: 38, borderRadius: 8, border: "1px solid rgba(240,234,214,0.12)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}
                    onMouseEnter={(e: any) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)"; e.currentTarget.style.background = "rgba(201,169,110,0.08)"; }}
                    onMouseLeave={(e: any) => { e.currentTarget.style.borderColor = "rgba(240,234,214,0.12)"; e.currentTarget.style.background = "transparent"; }}>
                    <Icon size={16} color="rgba(240,234,214,0.55)" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ color: "#f0ead6", fontSize: 24, fontWeight: 700, marginBottom: 6, letterSpacing: "-0.02em" }}>Ready to Upgrade Your Outdoors?</h3>
              <p style={{ color: "rgba(240,234,214,0.45)", fontSize: 14, marginBottom: 28 }}>Tell us about your project and we'll be in touch within 24 hours.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <input className="form-field" placeholder="Your Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                  <input className="form-field" placeholder="Email Address" type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <select className="form-field" value={formData.project} onChange={e => setFormData({ ...formData, project: e.target.value })}>
                  <option value="">Project Type</option>
                  <option value="design">Custom 3D Landscape Design</option>
                  <option value="hardscape">Hardscaping (Patio / Walls / Kitchen)</option>
                  <option value="planting">Native Planting & Garden</option>
                  <option value="irrigation">Irrigation System</option>
                  <option value="full">Full Property Transformation</option>
                  <option value="other">Other / Not Sure Yet</option>
                </select>
                <textarea className="form-field" placeholder="Tell us about your project or space (optional)" rows={3} style={{ resize: "vertical" }} />
                <button className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px 24px", fontSize: 16 }}>
                  Send My Request <ArrowRight size={17} />
                </button>
                <p style={{ color: "rgba(240,234,214,0.3)", fontSize: 12, textAlign: "center" }}>We respond within 1 business day. No spam, ever.</p>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(240,234,214,0.08)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <span style={{ color: "rgba(240,234,214,0.25)", fontSize: 13 }}>© 2025 TerraCraft Landscaping · Austin, TX · License #TX-LCA-00492</span>
            <div style={{ display: "flex", gap: 24 }}>
              {["Privacy Policy", "Terms of Service", "Sitemap"].map(link => (
                <a key={link} href="#" style={{ color: "rgba(240,234,214,0.3)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e: any) => e.target.style.color = "rgba(240,234,214,0.7)"}
                  onMouseLeave={(e: any) => e.target.style.color = "rgba(240,234,214,0.3)"}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
