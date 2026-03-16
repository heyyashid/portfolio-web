"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Flutter", icon: "🐦", level: 90, color: "#54c5f8", category: "Mobile" },
  { name: "Dart", icon: "🎯", level: 88, color: "#6c8ebf", category: "Language" },
  { name: "React", icon: "⚛️", level: 82, color: "#61dafb", category: "Web" },
  { name: "Next.js", icon: "▲", level: 78, color: "#e2e8f0", category: "Web" },
  { name: "TypeScript", icon: "📘", level: 75, color: "#3b82f6", category: "Language" },
  { name: "Firebase", icon: "🔥", level: 85, color: "#f97316", category: "Backend" },
  { name: "Node.js", icon: "🟢", level: 70, color: "#4ade80", category: "Backend" },
  { name: "Figma", icon: "🎨", level: 80, color: "#e879f9", category: "Design" },
  { name: "Git", icon: "🔀", level: 85, color: "#f97316", category: "Tools" },
  { name: "REST API", icon: "🔗", level: 83, color: "#2dd4bf", category: "Backend" },
  { name: "Tailwind CSS", icon: "💨", level: 88, color: "#38bdf8", category: "Web" },
  { name: "UI/UX Design", icon: "✏️", level: 76, color: "#a78bfa", category: "Design" },
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "University of Technology",
    year: "2020 - 2024",
    icon: "🎓",
    glow: "#fbbf24",
  },
  {
    degree: "Flutter Development Bootcamp",
    school: "Udemy - Angela Yu",
    year: "2022",
    icon: "📱",
    glow: "#38bdf8",
  },
  {
    degree: "Full Stack Web Development",
    school: "freeCodeCamp",
    year: "2023",
    icon: "💻",
    glow: "#4ade80",
  },
];

function AnimatedCard({
  children,
  delay,
  direction,
}: {
  children: React.ReactNode;
  delay: number;
  direction: "left" | "right" | "top" | "bottom";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const transforms: Record<string, string> = {
    left: "translate(-120px, -40px) rotate(-6deg)",
    right: "translate(120px, -40px) rotate(6deg)",
    top: "translate(0, -100px) rotate(-3deg)",
    bottom: "translate(0, 100px) rotate(3deg)",
  };

  return (
    <div
      ref={ref}
      style={{
        transform: visible ? "translate(0,0) rotate(0deg)" : transforms[direction],
        opacity: visible ? 1 : 0,
        transition: `transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease`,
      }}
    >
      {children}
    </div>
  );
}

export default function SkillsSection() {
  return (
    <>
      {/* SKILLS SECTION */}
      <section className="py-24 px-6 overflow-hidden relative" style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #0a0a0a 100%)" }}>

        {/* Ambient blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #fbbf24, transparent)" }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #38bdf8, transparent)" }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }}></div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Section Title */}
          <AnimatedCard delay={0} direction="top">
            <div className="text-center mb-16">
              <p className="text-amber-300 text-sm tracking-[0.4em] mb-3 uppercase">What I Work With</p>
              <h2 className="text-5xl font-black text-white font-[family-name:var(--font-montserrat)]">
                Skills &{" "}
                <span className="text-transparent bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text">
                  Expertise
                </span>
              </h2>
            </div>
          </AnimatedCard>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {skills.map((skill, i) => {
              const directions: Array<"left" | "right" | "top" | "bottom"> = ["left", "top", "right", "top", "left", "bottom", "right", "top", "left", "bottom", "right", "top"];
              return (
                <AnimatedCard key={skill.name} delay={i * 80} direction={directions[i % directions.length]}>
                  <div
                    className="group relative rounded-2xl p-5 cursor-default overflow-hidden transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 48px rgba(0,0,0,0.5), 0 0 30px ${skill.color}33, inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.2)`;
                      (e.currentTarget as HTMLDivElement).style.border = `1px solid ${skill.color}55`;
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px) scale(1.02)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2)";
                      (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.12)";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0) scale(1)";
                    }}
                  >
                    {/* Glass shine top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }}></div>
                    
                    {/* Glass shine left highlight */}
                    <div className="absolute top-0 left-0 bottom-0 w-px rounded-l-2xl" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.2), transparent)" }}></div>

                    {/* Category badge */}
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">{skill.category}</span>

                    {/* Icon + Name */}
                    <div className="flex items-center gap-3 mt-2 mb-4">
                      <span className="text-3xl drop-shadow-lg">{skill.icon}</span>
                      <h3 className="text-white font-bold text-lg font-[family-name:var(--font-montserrat)]">{skill.name}</h3>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full rounded-full h-1.5 overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                      <div
                        className="h-full rounded-full transition-all duration-1000 delay-300"
                        style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`, boxShadow: `0 0 8px ${skill.color}88` }}
                      ></div>
                    </div>
                    <p className="text-right text-xs mt-1" style={{ color: skill.color }}>{skill.level}%</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="py-24 px-6 overflow-hidden relative" style={{ background: "linear-gradient(135deg, #050505 0%, #0f172a 100%)" }}>

        {/* Ambient blobs */}
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #fbbf24, transparent)" }}></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #818cf8, transparent)" }}></div>

        <div className="max-w-4xl mx-auto relative z-10">

          <AnimatedCard delay={0} direction="top">
            <div className="text-center mb-16">
              <p className="text-amber-300 text-sm tracking-[0.4em] mb-3 uppercase">My Background</p>
              <h2 className="text-5xl font-black text-white font-[family-name:var(--font-montserrat)]">
                Edu
                <span className="text-transparent bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text">
                  cation
                </span>
              </h2>
            </div>
          </AnimatedCard>

          <div className="space-y-6">
            {education.map((edu, i) => {
              const dirs: Array<"left" | "right"> = ["left", "right", "left"];
              return (
                <AnimatedCard key={edu.degree} delay={i * 150} direction={dirs[i % 2]}>
                  <div
                    className="relative rounded-2xl p-7 flex items-center gap-6 overflow-hidden transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${edu.glow}22, inset 0 1px 0 rgba(255,255,255,0.2)`;
                      (e.currentTarget as HTMLDivElement).style.border = `1px solid ${edu.glow}44`;
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)";
                      (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.1)";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    }}
                  >
                    {/* Glass shine */}
                    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)" }}></div>

                    {/* Icon */}
                    <div
                      className="text-4xl w-16 h-16 flex items-center justify-center rounded-xl flex-shrink-0"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        boxShadow: `0 4px 16px ${edu.glow}22`,
                      }}
                    >
                      {edu.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xl font-[family-name:var(--font-montserrat)] mb-1">{edu.degree}</h3>
                      <p className="text-white/40 text-sm">{edu.school}</p>
                    </div>

                    {/* Year */}
                    <div className="font-bold text-lg whitespace-nowrap" style={{ color: edu.glow }}>
                      {edu.year}
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
