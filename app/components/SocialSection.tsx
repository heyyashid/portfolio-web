"use client";

import { useEffect, useRef, useState } from "react";

const socials = [
  {
    name: "LinkedIn",
    handle: "@ashid-kv",
    desc: "Professional network & career updates",
    url: "https://www.linkedin.com/in/ashid-kv",
    color: "#0A66C2",
    glow: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "2rem", height: "2rem" }}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    bg: "linear-gradient(135deg, #0A66C2 0%, #004182 100%)",
  },
  {
    name: "GitHub",
    handle: "@heyyashid",
    desc: "Open source projects & code repositories",
    url: "https://github.com/heyyashid",
    color: "#ffffff",
    glow: "#6e40c9",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "2rem", height: "2rem" }}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    bg: "linear-gradient(135deg, #24292e 0%, #1a1f24 100%)",
  },
  {
    name: "Instagram",
    handle: "@_.ashid",
    desc: "Creative shots & behind the scenes",
    url: "https://www.instagram.com/_.ashid?igsh=MWxuenBiZzI5Z2Fhbg==",
    color: "#E1306C",
    glow: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "2rem", height: "2rem" }}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
    bg: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
  },
  {
    name: "WhatsApp",
    handle: "+91 95395 76057",
    desc: "Chat with me directly anytime",
    url: "https://wa.me/919539576057",
    color: "#25D366",
    glow: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "2rem", height: "2rem" }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
    bg: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
  },
  {
    name: "Email",
    handle: "ashidkv123@gmail.com",
    desc: "Drop me a message anytime",
    url: "mailto:ashidkv123@gmail.com",
    color: "#34d399",
    glow: "#34d399",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "2rem", height: "2rem" }}>
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    bg: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)",
  },
];

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function SocialCard({ social, index }: { social: typeof socials[0]; index: number }) {
  const { ref, visible } = useScrollReveal(0.05);
  const fromLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate(0,0) rotate(0deg) scale(1)"
          : `translate(${fromLeft ? "-250px" : "250px"}, ${index % 3 === 0 ? "-80px" : "80px"}) rotate(${fromLeft ? -10 : 10}deg) scale(0.7)`,
        transition: `all 0.85s cubic-bezier(0.34,1.4,0.64,1) ${index * 100}ms`,
      }}
    >
      <a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          padding: "1.5rem",
          borderRadius: "1.25rem",
          background: "linear-gradient(135deg,rgba(255,255,255,0.07) 0%,rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)",
          textDecoration: "none",
          position: "relative",
          overflow: "hidden",
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, border-color 0.35s ease",
          cursor: "pointer",
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "translateY(-10px) scale(1.04)";
          el.style.boxShadow = `0 30px 70px rgba(0,0,0,0.7), 0 0 0 2px ${social.glow}, 0 0 40px ${social.glow}88, 0 0 80px ${social.glow}33, inset 0 1px 0 rgba(255,255,255,0.2)`;
          el.style.borderColor = social.glow;
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "translateY(0) scale(1)";
          el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)";
          el.style.borderColor = "rgba(255,255,255,0.1)";
        }}
      >
        {/* Top shine */}
        <div style={{ position:"absolute", top:0, left:0, right:0, height:"1px", background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)" }} />

        {/* Icon box */}
        <div style={{
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "0.875rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: social.bg,
          color: "white",
          flexShrink: 0,
          boxShadow: `0 4px 20px ${social.glow}55`,
        }}>
          {social.icon}
        </div>

        {/* Text */}
        <div style={{ flex: 1 }}>
          <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 0.2rem 0" }}>{social.name}</h3>
          <p style={{ color: social.color, fontSize: "0.8rem", margin: "0 0 0.2rem 0", fontWeight: 600 }}>{social.handle}</p>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", margin: 0 }}>{social.desc}</p>
        </div>

        {/* Arrow */}
        <div style={{
          color: "rgba(255,255,255,0.3)",
          fontSize: "1.25rem",
          transition: "transform 0.3s ease, color 0.3s ease",
        }}>
          →
        </div>
      </a>
    </div>
  );
}

function TitleReveal() {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} style={{
      textAlign: "center",
      marginBottom: "4rem",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0) scale(1)" : "translateY(-40px) scale(0.95)",
      transition: "all 0.8s cubic-bezier(0.34,1.4,0.64,1)",
    }}>
      <p style={{ color: "#fcd34d", fontSize: "0.75rem", letterSpacing: "0.4em", marginBottom: "0.75rem", textTransform: "uppercase" }}>
        Find Me Online
      </p>
      <h2 style={{ fontSize: "3rem", fontWeight: 900, color: "white", margin: 0 }}>
        Let's{" "}
        <span style={{ background: "linear-gradient(90deg,#fde68a,#fcd34d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Connect
        </span>
      </h2>
      <p style={{ color: "rgba(255,255,255,0.4)", marginTop: "1rem", fontSize: "1rem" }}>
        I'm always open to new opportunities and collaborations
      </p>
    </div>
  );
}

export default function SocialSection() {
  return (
    <section style={{ padding: "6rem 1.5rem", position: "relative", background: "linear-gradient(135deg,#0a0a0a 0%,#0f0f1a 50%,#0a0a0a 100%)" }}>

      {/* Ambient blobs */}
      <div style={{ position:"absolute", top:"3rem", left:"5rem", width:"20rem", height:"20rem", borderRadius:"9999px", opacity:0.12, filter:"blur(80px)", background:"radial-gradient(circle,#0A66C2,transparent)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"3rem", right:"5rem", width:"20rem", height:"20rem", borderRadius:"9999px", opacity:0.12, filter:"blur(80px)", background:"radial-gradient(circle,#6e40c9,transparent)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:"50%", left:"50%", width:"16rem", height:"16rem", borderRadius:"9999px", opacity:0.08, filter:"blur(80px)", background:"radial-gradient(circle,#E1306C,transparent)", pointerEvents:"none", transform:"translate(-50%,-50%)" }} />

      <div style={{ maxWidth: "64rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <TitleReveal />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {socials.map((social, i) => (
            <SocialCard key={social.name} social={social} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
