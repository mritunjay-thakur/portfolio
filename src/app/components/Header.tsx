"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

type DisplayHeaderProps = {
  activeItem?: string;
};

const Header: React.FC<DisplayHeaderProps> = ({ activeItem }) => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    if (isScrolling) return;

    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  return (
    <header
      className="
        fixed top-0 left-1/2 -translate-x-1/2 z-[100]
        flex items-center justify-between
        w-screen max-w-[1200px] px-16 h-40
      "
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-6 w-full justify-between">
          <nav
            ref={navRef}
            className="
              hidden md:flex items-center justify-between gap-8
              text-white h-[60px] px-10
              rounded-full border border-white/10
              bg-white/5 backdrop-blur-lg shadow-lg
            "
          >
            <button
              onClick={() => scrollToSection("hero")}
              className={`relative opacity-60 hover:opacity-100 transition ${
                activeItem === "home"
                  ? "opacity-100 before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-white before:rounded-full before:-left-3 before:top-1/2 before:-translate-y-1/2"
                  : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="opacity-60 hover:opacity-100 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("project")}
              className="opacity-60 hover:opacity-100 transition"
            >
              Project
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="opacity-60 hover:opacity-100 transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="opacity-60 hover:opacity-100 transition"
            >
              Contact
            </button>
          </nav>
          <Link
            href="/nini"
            className=" font-extralight text-sm landing-button mt-6"
          >
            <span className="text-md ">Nini Ai</span>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
