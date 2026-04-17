"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Flutter",      icon: "🐦", level: 90, color: "#54c5f8", category: "Mobile"   },
  { name: "Dart",         icon: "🎯", level: 88, color: "#6c8ebf", category: "Language" },
  { name: "React",        icon: "⚛️", level: 82, color: "#61dafb", category: "Web"      },
  { name: "Firebase",     icon: "🔥", level: 85, color: "#f97316", category: "Backend"  },
  { name: "Figma",        icon: "🎨", level: 80, color: "#e879f9", category: "Design"   },
  { name: "Git",          icon: "�", level: 85, color: "#fb923c", category: "Tools"    },
  { name: "REST API",     icon: "�", level: 83, color: "#2dd4bf", category: "Backend"  },
  { name: "UI/UX Design", icon: "✏️", level: 76, color: "#a78bfa", category: "Design"   },
];

const education = [
  { degree: "Bachelor of Computer Applications (BCA)", school: "University of Calicut", year: "2021 - 2024", icon: "🖥️", glow: "#fbbf24" },
  { degree: "Higher Secondary (12th) - Biology Science", school: "State Board", year: "2019 - 2021", icon: "🧬", glow: "#34d399" },
  { degree: "SSLC (10th)", school: "State Board", year: "2019", icon: "🏫", glow: "#38bdf8" },
];

const entrances = [
  { x: -200, y: -100, rotate: -15, scale: 0.5 },
  { x:  200, y: -150, rotate:  12, scale: 0.6 },
  { x: -150, y:  200, rotate:  -8, scale: 0.7 },
  { x:  300, y:  100, rotate:  18, scale: 0.5 },
  { x:    0, y: -250, rotate: -20, scale: 0.4 },
  { x: -300, y:   50, rotate:  10, scale: 0.6 },
  { x:  250, y:  -80, rotate: -12, scale: 0.7 },
  { x: -100, y:  300, rotate:  15, scale: 0.5 },
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

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const { ref, visible } = useScrollReveal(0.05);
  const e = entrances[index % entrances.length];

  return (
    <div ref={ref} style={{ perspective: "800px", position: "relative", zIndex: 1 }}>
      <div
        style={{
          transform: visible
            ? "translate(0,0) rotate(0deg) scale(1) rotateX(0deg)"
            : `translate(${e.x}px,${e.y}px) rotate(${e.rotate}deg) scale(${e.scale}) rotateX(20deg)`,
          opacity: visible ? 1 : 0,
          transition: `transform 0.9s cubic-bezier(0.34,1.4,0.64,1) ${index * 100}ms,
                       opacity 0.6s ease ${index * 100}ms,
                       box-shadow 0.3s ease,
                       border-color 0.3s ease`,
          background: "linear-gradient(135deg,rgba(255,255,255,0.09) 0%,rgba(255,255,255,0.03) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.15)",
          borderRadius: "1rem",
          padding: "1.25rem",
          cursor: "default",
          overflow: "hidden",
          position: "relative",
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = "translateY(-18px) scale(1.22) rotateX(0deg)";
          el.style.boxShadow = `0 40px 80px rgba(0,0,0,0.9), 0 0 0 2px ${skill.color}, 0 0 50px ${skill.color}, 0 0 100px ${skill.color}55, inset 0 1px 0 rgba(255,255,255,0.3)`;
          el.style.borderColor = skill.color;
          el.style.zIndex = "99";
          (el.parentElement as HTMLDivElement).style.zIndex = "99";
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = "translateY(0) scale(1) rotateX(0deg)";
          el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.15)";
          el.style.borderColor = "rgba(255,255,255,0.12)";
          el.style.zIndex = "1";
          (el.parentElement as HTMLDivElement).style.zIndex = "1";
        }}
      >
        {/* Top shine */}
        <div style={{ position:"absolute", top:0, left:0, right:0, height:"1px", background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)", borderRadius:"1rem 1rem 0 0" }} />
        {/* Left shine */}
        <div style={{ position:"absolute", top:0, left:0, bottom:0, width:"1px", background:"linear-gradient(180deg,rgba(255,255,255,0.2),transparent)" }} />

        <span style={{ fontSize:"10px", color:"rgba(255,255,255,0.35)", textTransform:"uppercase", letterSpacing:"0.15em" }}>{skill.category}</span>

        <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginTop:"0.5rem", marginBottom:"1rem" }}>
          <span style={{ fontSize:"1.875rem" }}>{skill.icon}</span>
          <h3 style={{ color:"white", fontWeight:700, fontSize:"1.125rem", margin:0 }}>{skill.name}</h3>
        </div>

        <div style={{ width:"100%", borderRadius:"9999px", height:"6px", overflow:"hidden", background:"rgba(255,255,255,0.08)" }}>
          <div style={{
            height:"100%",
            borderRadius:"9999px",
            width: visible ? `${skill.level}%` : "0%",
            background: `linear-gradient(90deg,${skill.color}88,${skill.color})`,
            boxShadow: `0 0 10px ${skill.color}88`,
            transition: `width 1.2s cubic-bezier(0.34,1.2,0.64,1) ${index * 100 + 400}ms`,
          }} />
        </div>
        <p style={{ textAlign:"right", fontSize:"0.75rem", marginTop:"0.25rem", color: skill.color }}>{skill.level}%</p>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(-50px)",
      transition: "all 0.8s cubic-bezier(0.34,1.4,0.64,1)",
    }}>
      {children}
    </div>
  );
}

function EduCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  const { ref, visible } = useScrollReveal(0.1);
  const fromLeft = index % 2 === 0;

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible
        ? "translate(0,0) rotate(0deg) scale(1)"
        : `translate(${fromLeft ? "-300px" : "300px"},0) rotate(${fromLeft ? -8 : 8}deg) scale(0.85)`,
      transition: `all 0.9s cubic-bezier(0.34,1.4,0.64,1) ${index * 180}ms,
                   box-shadow 0.3s ease, border-color 0.3s ease`,
      background: "linear-gradient(135deg,rgba(255,255,255,0.07) 0%,rgba(255,255,255,0.02) 100%)",
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.12)",
      borderRadius: "1rem",
      padding: "1.75rem",
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
      overflow: "hidden",
      position: "relative",
    }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = `0 30px 70px rgba(0,0,0,0.7), 0 0 0 2px ${edu.glow}, 0 0 50px ${edu.glow}66, inset 0 1px 0 rgba(255,255,255,0.2)`;
        el.style.borderColor = edu.glow;
        el.style.transform = "translateY(-6px) scale(1.02)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.12)";
        el.style.borderColor = "rgba(255,255,255,0.1)";
        el.style.transform = "translateY(0) scale(1)";
      }}
    >
      <div style={{ position:"absolute", top:0, left:0, right:0, height:"1px", background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)" }} />

      <div style={{ fontSize:"2rem", width:"4rem", height:"4rem", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"0.75rem", flexShrink:0, background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", boxShadow:`0 4px 16px ${edu.glow}22` }}>
        {edu.icon}
      </div>

      <div style={{ flex:1 }}>
        <h3 style={{ color:"white", fontWeight:700, fontSize:"1.25rem", marginBottom:"0.25rem" }}>{edu.degree}</h3>
        <p style={{ color:"rgba(255,255,255,0.4)", fontSize:"0.875rem", margin:0 }}>{edu.school}</p>
      </div>

      <div style={{ fontWeight:700, fontSize:"1.125rem", whiteSpace:"nowrap", color: edu.glow }}>{edu.year}</div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <>
      {/* SKILLS */}
      <section style={{ padding:"6rem 1.5rem", position:"relative", background:"linear-gradient(135deg,#0a0a0a 0%,#111827 50%,#0a0a0a 100%)" }}>
        <div style={{ position:"absolute", top:"5rem", left:"2.5rem", width:"18rem", height:"18rem", borderRadius:"9999px", opacity:0.2, filter:"blur(80px)", background:"radial-gradient(circle,#fbbf24,transparent)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"5rem", right:"2.5rem", width:"24rem", height:"24rem", borderRadius:"9999px", opacity:0.15, filter:"blur(80px)", background:"radial-gradient(circle,#38bdf8,transparent)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:"50%", left:"50%", width:"20rem", height:"20rem", borderRadius:"9999px", opacity:0.1, filter:"blur(80px)", background:"radial-gradient(circle,#a78bfa,transparent)", pointerEvents:"none", transform:"translate(-50%,-50%)" }} />

        <div style={{ maxWidth:"72rem", margin:"0 auto", position:"relative", zIndex:1 }}>
          <SectionTitle>
            <div style={{ textAlign:"center", marginBottom:"4rem" }}>
              <p style={{ color:"#fcd34d", fontSize:"0.75rem", letterSpacing:"0.4em", marginBottom:"0.75rem", textTransform:"uppercase" }}>What I Work With</p>
              <h2 style={{ fontSize:"3rem", fontWeight:900, color:"white", margin:0 }}>
                Skills &{" "}
                <span style={{ background:"linear-gradient(90deg,#fde68a,#fcd34d)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  Expertise
                </span>
              </h2>
            </div>
          </SectionTitle>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:"1.25rem", overflow:"visible" }}>
            {skills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ padding:"6rem 1.5rem", position:"relative", background:"linear-gradient(135deg,#050505 0%,#0f172a 100%)" }}>
        <div style={{ position:"absolute", top:"2.5rem", right:"5rem", width:"16rem", height:"16rem", borderRadius:"9999px", opacity:0.15, filter:"blur(80px)", background:"radial-gradient(circle,#fbbf24,transparent)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"2.5rem", left:"5rem", width:"20rem", height:"20rem", borderRadius:"9999px", opacity:0.1, filter:"blur(80px)", background:"radial-gradient(circle,#818cf8,transparent)", pointerEvents:"none" }} />

        <div style={{ maxWidth:"56rem", margin:"0 auto", position:"relative", zIndex:1 }}>
          <SectionTitle>
            <div style={{ textAlign:"center", marginBottom:"4rem" }}>
              <p style={{ color:"#fcd34d", fontSize:"0.75rem", letterSpacing:"0.4em", marginBottom:"0.75rem", textTransform:"uppercase" }}>My Background</p>
              <h2 style={{ fontSize:"3rem", fontWeight:900, color:"white", margin:0 }}>
                Edu<span style={{ background:"linear-gradient(90deg,#fde68a,#fcd34d)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>cation</span>
              </h2>
            </div>
          </SectionTitle>

          <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>
            {education.map((edu, i) => (
              <EduCard key={edu.degree} edu={edu} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
