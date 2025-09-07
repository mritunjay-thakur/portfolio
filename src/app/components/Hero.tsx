"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import SplitText from "./ui/SplitText";
import FadeContent from "./ui/FadeContent";
import BackgroundHero from "./ui/Background-Hero";
import Header from "./Header";

import "../css/Hero.css";

type ResponsiveSplitTextProps = {
  isMobile: boolean;
  text: string;
  className?: string;
  splitType?: "chars" | "words" | "lines";
  delay?: number;
  duration?: number;
  ease?: string;
};

const ResponsiveSplitText: React.FC<ResponsiveSplitTextProps> = ({
  isMobile,
  text,
  ...rest
}) =>
  isMobile ? (
    <span className={rest.className}>{text}</span>
  ) : (
    <SplitText text={text} {...rest} />
  );

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <BackgroundHero />
      </div>

      <div className="relative z-20">
        <Header />
      </div>

      <div className="landing-content z-30 relative flex flex-col items-center justify-center h-full">
        <div className="hero-main-content flex flex-col items-center text-center">
          <FadeContent className="hero-tag-fade" blur>
            <div className="hero-new-badge-container">
              <span className="hero-new-badge">Full Stack</span>
              <div className="hero-new-badge-text flex items-center gap-2">
                <span>Developer</span>
                <GoArrowRight />
              </div>
            </div>
          </FadeContent>

          <h3 className="landing-title">
            <ResponsiveSplitText
              isMobile={isMobile}
              text="Mritunjay Thakur"
              className="hero-split"
              splitType="chars"
              delay={30}
              duration={2}
              ease="elastic.out(0.5, 0.3)"
            />
          </h3>

          <ResponsiveSplitText
            isMobile={isMobile}
            className="landing-subtitle mt-4 max-w-2xl"
            splitType="words"
            delay={25}
            duration={1}
            text="Full Stack Web Developer from Delhi. I love creating websites that are super interactive, fast, and fun to use bringing ideas to life in ways that actually click with people."
          />

          <Link href="/contact" className="landing-button mt-6">
            <span>Contact Me</span>
            <div className="button-arrow-circle">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#4c1d95"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-white text-sm">
            <span>Scroll Down</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
