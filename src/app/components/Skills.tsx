"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import LogoLoop from "./ui/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVite,
  SiPrisma,
  SiGoogle,
  SiSupabase,
  SiPostgresql,
  SiMongodb,
  SiJsonwebtokens,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SiGoogle />, title: "Google AI", href: "https://google.com" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiJsonwebtokens />, title: "JWT", href: "https://jwt.io" },
];

type Skill = {
  left: string;
  right: string;
  videoSrc: string;
  poster: string;
};

const skills: Skill[] = [
  {
    left: "Web",
    videoSrc: "https://davidhaz.com/videos/web_develop.mp4",
    poster: "https://davidhaz.com/images/web_development_placeholder.webp",
    right: "Development",
  },
  {
    left: "AI",
    videoSrc: "https://davidhaz.com/videos/3d_web_experiences.mp4",
    poster: "https://davidhaz.com/images/interface_design_placeholder.webp",
    right: "Integration",
  },
  {
    left: "Interface",
    videoSrc: "https://davidhaz.com/videos/interface_design.mp4",
    poster: "https://davidhaz.com/images/3d_web_experiences_placeholder.webp",
    right: "Design",
  },
  {
    left: "Creative",
    videoSrc: "https://davidhaz.com/videos/creative_coding.mp4",
    poster: "https://davidhaz.com/images/creative_coding_placeholder.webp",
    right: "Coding",
  },
  {
    left: "Prompt",
    videoSrc: "https://davidhaz.com/videos/solid_engineering.mp4",
    poster: "https://davidhaz.com/images/solid_engineering_placeholder.webp",
    right: "Engineering",
  },
];

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleVideos, setVisibleVideos] = useState<boolean[]>(
    Array(skills.length).fill(false)
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const videoElements = Array.from(
      containerRef.current.querySelectorAll(".skill-video-wrapper")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleVideos((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    videoElements.forEach((el) => observer.observe(el));
    return () => videoElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="relative w-full bg-black py-12 overflow-hidden min-h-screen">
      <BackgroundRippleEffect className="absolute inset-0 -z-10 pointer-events-none" />

      <div
        ref={containerRef}
        className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-center gap-12"
      >
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Skills & Services
        </h2>

        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-center justify-center w-full skill-video-wrapper"
            data-index={idx}
          >
            <motion.p
              className="text-4xl sm:text-7xl md:text-8xl font-extrabold text-white text-center sm:text-right sm:mr-2 w-auto"
              initial={{ x: 0 }}
              animate={{ x: visibleVideos[idx] ? -100 : 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {skill.left}
            </motion.p>

            <motion.div
              className="rounded-4xl border border-white/40 w-[180px] h-[120px] md:w-[220px] md:h-[140px] overflow-hidden flex items-center justify-center -mx-20"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={
                visibleVideos[idx]
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.6 }
              }
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <video
                src={skill.videoSrc}
                poster={skill.poster}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.p
              className="text-4xl sm:text-7xl md:text-8xl font-extrabold text-white text-center sm:text-left sm:ml-2 w-auto"
              initial={{ x: 0 }}
              animate={{ x: visibleVideos[idx] ? 100 : 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {skill.right}
            </motion.p>
          </div>
        ))}

        <LogoLoop
          className="mt-7 -mb-5"
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
};

export default Skills;
