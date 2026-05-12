import { useState, useEffect } from "react";

// ── Icons ────────────────────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3 6h16M3 11h16M3 16h16" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M5 5l12 12M17 5L5 17" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────
const HOW_IT_WORKS_STEPS = [
  {
    num: "1",
    title: "Test your baseline",
    desc: "One simple blood draw to measure 100+ biomarkers.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dcb3594df2fbeffe683659_Frame%201739335562.avif",
  },
  {
    num: "2",
    title: "Results explained",
    desc: "Get a complete picture of your health data in one secure location.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dcb3585d63725e607372b2_Frame%201739335563.avif",
  },
  {
    num: "3",
    title: "Build your protocol",
    desc: "AI builds evidence-backed protocols, informed by your data.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dcb3598a7caa14c66acf86_Frame%201739335563-1.avif",
  },
  {
    num: "4",
    title: "Access everything",
    desc: "Take action, access everything you need, then retest. You're in control.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69ded23162bb97807a3c6490_Frame%201739335778.avif",
  },
];

const FEATURES_DETAIL = [
  {
    title: "Every membership starts with 100+ biomarkers",
    desc: "A full body test with a quick 10-min lab draw to get started. Test at 2,000+ Quest locations or at-home.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69df30a5f824d7447b289d94_New%20Image.avif",
  },
  {
    title: "All your health data, in one place",
    desc: "Upload past labs and sync your wearables (Oura, Whoop, Apple Health and more). Connect the dots across all your data and spot trends early.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69df51029436254f3cb22a83_80c8ddd04871c22dfd6b98b56019cfc6c1142123.avif",
  },
  {
    title: "Get a personalized health protocol",
    desc: "A clinician-grade action plan after every test with insight on exactly what to do next (lifestyle, diet, supplements).",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69db381c1158df7a078486cb_22d9a7ce82375ceecc0d90725ed652c4_home-hiw4.png",
  },
  {
    title: "Message your private care team 24/7",
    desc: "A private care-team in your pocket at all times for any health questions or concerns.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dd05dded3be034ae24f989_home-hiw1-mobile.avif",
  },
];

const MEMBERSHIP_FEATURES = [
  { title: "100+ biomarker test", sub: "Detect early signs of 1,000+ conditions" },
  { title: "Health data upload", sub: "Upload external bloodwork reports" },
  { title: "Biological age", sub: "" },
  { title: "Personalized protocol", sub: "Diet, lifestyle and supplements" },
  { title: "Wearable connection", sub: "Link Apple Health, Whoop, OURA, etc." },
  { title: "Advanced AI chat", sub: "With context on your health" },
  { title: "24/7 access to care team", sub: "Ask questions anytime" },
  { title: "Access add-on tests", sub: "Gut, toxins, Grail Galleri cancer screen" },
  { title: "Access peptides", sub: "" },
  { title: "Access best supplements", sub: "" },
  { title: "Access prescriptions", sub: "" },
];

const DOCTORS = [
  {
    name: "Dr Anant Vinjamoori, MD",
    role: "Chief Longevity Officer, Superpower",
    bio: "Board-certified longevity physician. Previously product leader at Virta Health & CMO at Modern Age. Featured in WSJ, Forbes, and Fortune.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69d952375cd5bb65772c2e05_Frame%201739334881.avif",
    school: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69d951fcf7f3468af1b1eac7_Group.svg",
  },
  {
    name: "Dr Leigh Erin Connealy, MD",
    role: "Clinician & Founder of The Centre for New Medicine",
    bio: "Leads the largest integrative medical clinic in North America. A pioneer in integrative oncology.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69d95237d8c103fb62ea8226_Frame%201739334881-1.avif",
    school: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69debddca7b70497bce8780f_image%201728072499.avif",
  },
  {
    name: "Dr Robert Lufkin",
    role: "UCLA Medical Professor, NYT Bestselling Author",
    bio: "A leading voice on metabolic health and longevity as shown in The Today Show, USA Today and FOX.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69d952374aca91dc008a4e8a_Frame%201739334881-2.avif",
    school: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69debfaae57f9e618ed29d9f_71f3fe26fa40a97a50b6a2e3aa556e22_UCLA_Bruins_primary_logo.svg%201.avif",
  },
  {
    name: "Dr Abe Malkin",
    role: "Founder & Medical Director of Concierge MD",
    bio: "Leads a nationwide medical practice, and Drip Hydration, a mobile IV therapeutics company.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69d952371ab196a0fa99b754_Frame%201739334881-3.avif",
    school: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69d97070dd0a03dff178ac4d_Mask%20group.avif",
  },
];

const TESTIMONIALS = [
  {
    name: "Camelia, 29",
    quote: '"I left the appointment feeling like I was being dramatic. I wasn\'t being dramatic. I was being responsible."',
    story: "Doctors refused to test her fertility, so she took control of her health",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dec7eb48722e199d9bd706_c05045137eb4af06d2d182caf7067e4fd1128de4.avif",
  },
  {
    name: "Thach, 37",
    quote: '"They told me I was overthinking my genetic risk of diabetes but when I tested with Superpower I found my A1c was really high."',
    story: "His Superpower test caught risks that two doctors missed",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dec7eb5dff1e5644ba4018_0449ab87432c065a38a7c71d84588b9fa08c0977.avif",
  },
  {
    name: "Carissa, 38",
    quote: '"I spent almost a year thinking something was wrong with me. Turns out a simple blood test could have told me in a week."',
    story: "Uncovered the hormone imbalances behind bloating and weight gain",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dec7eba4d46388eb27614a_792a6d3f159e6e876f29d091413356f49ae26d1b.avif",
  },
  {
    name: "Teva, 28 and Cole, 29",
    quote: '"I got my boyfriend a Superpower blood test. And it opened his eyes to things that seriously needed to change."',
    story: "The gift that changed how they think and talk about health",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dec7ebffc9ec51266b8b80_9a647e6a2c86e80604409949d355fe959e6ac206.avif",
  },
  {
    name: "Joel, 55",
    quote: '"I was putting in so much effort to improve my health. But nothing was working, until I got testing that actually showed me what to focus on."',
    story: "Superpower gave him a supplement plan that saved him time and money",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dec7eb1e28ea69fdcb13c1_f69d3a6c3434aa0deb109e3fa06016e83e29a8c1.avif",
  },
];

const MEMBERSHIP_SLIDES = [
  "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dd13a031d2bf692182aa9b_Frame%201739335590.avif",
  "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dd713171336b93f5e1988f_image%207203972.avif",
  "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dd139f20222b0126a8f424_Frame%201739335562.avif",
  "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dd13a07e0be50c9b6bd9a3_Frame%201739335590%20(1).avif",
];

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background: scrolled ? "rgba(10,10,10,0.92)" : "rgba(10,10,10,0.6)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.5px",
              color: "#fff",
            }}
          >
            ⚡ superpower
          </span>
        </a>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden-mobile"
        >
          {["How it works", "Biomarkers", "Doctors", "Pricing", "Stories"].map(
            (item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 400,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
                }
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="#"
            style={{
              color: "rgba(255,255,255,0.65)",
              textDecoration: "none",
              fontSize: 14,
            }}
            className="hidden-mobile"
          >
            Login
          </a>
          <a
            href="#"
            style={{
              background: "#fff",
              color: "#000",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 14,
              padding: "10px 20px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Become a member
          </a>
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              display: "none",
            }}
            className="show-mobile"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#0a0a0a",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 24px 24px",
          }}
        >
          {["How it works", "Biomarkers", "Doctors", "Pricing", "Stories", "Login"].map(
            (item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: 16,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
}

// ── Hero Section ──────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      style={{
        paddingTop: 120,
        paddingBottom: 0,
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(40,80,40,0.35) 0%, transparent 70%)",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 999,
            padding: "7px 16px",
            marginBottom: 36,
          }}
        >
          <CheckIcon />
          <span
            style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}
          >
            HSA / FSA eligible
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(44px, 8vw, 88px)",
            fontWeight: 700,
            letterSpacing: "-3px",
            lineHeight: 1.02,
            margin: "0 0 28px",
            color: "#fff",
          }}
        >
          Get better at being
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.4) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            healthy, every year
          </span>
        </h1>

        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.6,
            marginBottom: 44,
            maxWidth: 480,
          }}
        >
          100+ biomarkers. A plan built around you.
          <br />
          Everything you need to act on it.
        </p>

        {/* CTA */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 52 }}>
          <a
            href="#"
            style={{
              background: "#fff",
              color: "#000",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 16,
              padding: "15px 32px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Become a member <ArrowRight />
          </a>
          <a
            href="#"
            style={{
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 999,
              fontWeight: 500,
              fontSize: 16,
              padding: "15px 32px",
              textDecoration: "none",
            }}
          >
            How it works
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 0,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 52,
            width: "100%",
            maxWidth: 640,
          }}
        >
          {[
            { label: "Whole body check", value: "Detect 1,000+ conditions" },
            { label: "Accessible", value: "Starts at $199/year" },
            { label: "Trusted", value: "1M biomarkers tested" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                minWidth: 150,
                padding: "16px 20px",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                textAlign: "center",
              }}
            >
              <div
                style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}
              >
                {stat.label}
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero image */}
      <div
        style={{
          width: "100%",
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <img
          src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69dfaf11411ff8e1f94f4a5c_sp2-home-hero_first-frame.avif"
          alt="Superpower health dashboard"
          style={{
            width: "100%",
            borderRadius: "20px 20px 0 0",
            display: "block",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}

// ── How It Works (Steps Grid) ─────────────────────────────────────────────────
function HowItWorksSection() {
  return (
    <section
      style={{
        padding: "100px 24px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-1.5px",
            marginBottom: 16,
          }}
        >
          How it works
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 18 }}>
          It starts with an advanced health check,{" "}
          <span style={{ color: "rgba(255,255,255,0.8)" }}>then so much more.</span>
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {HOW_IT_WORKS_STEPS.map((step) => (
          <div
            key={step.num}
            style={{
              background: "#111",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <img
              src={step.img}
              alt={step.title}
              style={{ width: "100%", display: "block", objectFit: "cover" }}
            />
            <div style={{ padding: "20px 24px 24px" }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 12,
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  marginBottom: 8,
                  color: "#fff",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Features Detail (scrollable tabs) ────────────────────────────────────────
function FeaturesDetailSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{
        padding: "0 24px 100px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
        className="features-grid"
      >
        {/* Left: image */}
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            background: "#111",
            border: "1px solid rgba(255,255,255,0.08)",
            minHeight: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={FEATURES_DETAIL[active].img}
            alt={FEATURES_DETAIL[active].title}
            style={{
              width: "100%",
              display: "block",
              objectFit: "cover",
              transition: "opacity 0.3s",
            }}
          />
        </div>

        {/* Right: content tabs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {FEATURES_DETAIL.map((f, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                cursor: "pointer",
                padding: "20px 20px",
                borderRadius: 14,
                background: active === i ? "rgba(255,255,255,0.05)" : "transparent",
                border:
                  active === i
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "1px solid transparent",
                transition: "all 0.2s",
                borderLeft: active === i ? "3px solid #4ade80" : "3px solid transparent",
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: active === i ? "#fff" : "rgba(255,255,255,0.5)",
                  marginBottom: active === i ? 10 : 0,
                  transition: "color 0.2s",
                }}
              >
                {f.title}
              </h3>
              {active === i && (
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {f.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Pricing/What You Get ──────────────────────────────────────────────────────
function PricingSection() {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 20,
          }}
        >
          Your membership includes so much more.
        </p>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-2px",
            marginBottom: 60,
            lineHeight: 1.05,
          }}
        >
          What could cost $10,000
          <br />
          <span style={{ color: "rgba(255,255,255,0.6)" }}>is now $199</span>
        </h2>

        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {MEMBERSHIP_FEATURES.map((f, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "18px 28px",
                borderBottom:
                  i < MEMBERSHIP_FEATURES.length - 1
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "none",
                background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "rgba(74,222,128,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <CheckIcon />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, color: "#fff" }}>
                  {f.title}
                </div>
                {f.sub && (
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
                    {f.sub}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a
            href="#"
            style={{
              background: "#fff",
              color: "#000",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 16,
              padding: "16px 36px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Become a member <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Doctors Section ───────────────────────────────────────────────────────────
function DoctorsSection() {
  return (
    <section style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 52 }}>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-1.5px",
            marginBottom: 32,
            maxWidth: 600,
            margin: "0 auto 32px",
            lineHeight: 1.15,
          }}
        >
          Led by doctors with 40 years of health and longevity expertise
        </h2>
        {/* University logos */}
        <div
          style={{
            display: "flex",
            gap: 32,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: 52,
            opacity: 0.7,
          }}
        >
          {[
            { src: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6872bd59573993b99def2932_logo-stanford.svg", alt: "Stanford" },
            { src: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6872bd59e1c1fed237f2b998_logo-harvard.svg", alt: "Harvard" },
            { src: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/698d2df3c7923087d292811f_Vector%202.svg", alt: "MIT" },
            { src: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/698d2df3e9eeb61ddf752aa5_University_of_Oxford%201.svg", alt: "Oxford" },
          ].map((u) => (
            <img
              key={u.alt}
              src={u.src}
              alt={u.alt}
              style={{ height: 28, objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
          ))}
        </div>
      </div>

      {/* Doctor cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
          marginBottom: 20,
        }}
      >
        {DOCTORS.map((doc, i) => (
          <div
            key={i}
            style={{
              background: "#111",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <img
              src={doc.img}
              alt={doc.name}
              style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "4/3" }}
            />
            <div style={{ padding: "20px 24px 28px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <img
                  src={doc.school}
                  alt="institution"
                  style={{
                    height: 24,
                    objectFit: "contain",
                    filter:
                      i === 0 || i === 2
                        ? "brightness(0) invert(1)"
                        : "none",
                    borderRadius: i === 1 || i === 3 ? "50%" : 0,
                    width: i === 1 || i === 3 ? 28 : "auto",
                  }}
                />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4, color: "#fff" }}>
                {doc.name}
              </h3>
              <p
                style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 10 }}
              >
                {doc.role}
              </p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                {doc.bio}
              </p>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 500,
                  marginTop: 14,
                }}
              >
                Learn more <ArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "16px",
          fontSize: 13,
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Medical Advisory Board
      </div>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const t = TESTIMONIALS[current];

  return (
    <section
      style={{
        padding: "80px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div
          style={{
            background: "#111",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 24,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
          }}
          className="testimonial-grid"
        >
          <img
            src={t.img}
            alt={t.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              minHeight: 300,
            }}
          />
          <div
            style={{
              padding: "44px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h4
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 20,
                }}
              >
                {t.name}
              </h4>
              <p
                style={{
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: "#fff",
                  marginBottom: 20,
                }}
              >
                {t.quote}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.5,
                }}
              >
                {t.story}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 32,
              }}
            >
              <span
                style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}
              >
                {current + 1} / {total}
              </span>
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={prev}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "transparent",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={next}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "transparent",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Membership CTA ─────────────────────────────────────────────────────────────
function MembershipSection() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % MEMBERSHIP_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const membershipFeatures = [
    "Annual 100+ biomarker panel",
    "Data dashboard and digital twin",
    "Upload past labs and connect wearables",
    "Personalized health protocol",
    "24/7 care team access",
    "AI companion for all health questions",
    "Marketplace with additional solutions",
  ];

  return (
    <section
      style={{
        padding: "80px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.01)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
        className="membership-grid"
      >
        {/* Left: image carousel */}
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            position: "relative",
            background: "#111",
            border: "1px solid rgba(255,255,255,0.08)",
            minHeight: 360,
          }}
        >
          {MEMBERSHIP_SLIDES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Membership feature ${i + 1}`}
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                position: i === 0 ? "relative" : "absolute",
                top: 0,
                left: 0,
                opacity: slide === i ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            />
          ))}
          {/* Dots */}
          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 6,
            }}
          >
            {MEMBERSHIP_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                style={{
                  width: i === slide ? 20 : 6,
                  height: 6,
                  borderRadius: 999,
                  background: i === slide ? "#fff" : "rgba(255,255,255,0.3)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.3s, background 0.3s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: pricing details */}
        <div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-1.5px",
              marginBottom: 28,
              lineHeight: 1.1,
            }}
          >
            Your membership
            <br />
            starts here
          </h2>

          <div style={{ marginBottom: 28 }}>
            {membershipFeatures.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 0",
                  borderBottom:
                    i < membershipFeatures.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "rgba(74,222,128,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CheckIcon />
                </div>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{f}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 8,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                letterSpacing: "-3px",
                lineHeight: 1,
              }}
            >
              $199
            </span>
            <div>
              <div style={{ fontSize: 16, color: "rgba(255,255,255,0.5)" }}>/year*</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
                Billed annually
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div
            style={{
              display: "flex",
              gap: 20,
              marginBottom: 24,
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: "✓", text: "HSA / FSA eligible" },
              { icon: "↺", text: "Cancel anytime" },
              { icon: "⚡", text: "Results in a week" },
            ].map((badge) => (
              <div
                key={badge.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                <span style={{ color: "#4ade80", fontWeight: 600 }}>{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>

          <a
            href="#"
            style={{
              background: "#fff",
              color: "#000",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 16,
              padding: "16px 32px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              width: "100%",
              justifyContent: "center",
            }}
          >
            Become a member <ArrowRight />
          </a>
          <p
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.3)",
              marginTop: 12,
              textAlign: "center",
            }}
          >
            * Pricing may vary for members in New York and New Jersey
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 24px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 52,
          }}
          className="footer-grid"
        >
          <div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-0.5px",
                marginBottom: 16,
              }}
            >
              ⚡ superpower
            </div>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                maxWidth: 280,
              }}
            >
              Get better at being healthy, every year. 100+ biomarkers. A plan built
              around you. Everything you need to act on it.
            </p>
          </div>

          {[
            {
              title: "Product",
              links: ["How it works", "Biomarkers", "Pricing", "App"],
            },
            {
              title: "Company",
              links: ["About", "Doctors", "Blog", "Careers"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "HIPAA Notice"],
            },
          ].map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                }}
              >
                {col.title}
              </div>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: "block",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    marginBottom: 10,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                  }
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            © 2024 Superpower. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Twitter", "Instagram", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .testimonial-grid { grid-template-columns: 1fr !important; }
          .membership-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>

      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesDetailSection />
      <PricingSection />
      <DoctorsSection />
      <TestimonialsSection />
      <MembershipSection />
      <Footer />
    </div>
  );
}
