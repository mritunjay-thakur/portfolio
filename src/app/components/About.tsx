"use client";

import React from "react";
import LiquidChrome from "./ui/LiquidChrome";
import ProfileCard from "./ui/ProfileCard";
import SplitText from "./ui/SplitText";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <LiquidChrome
          baseColor={[0.0, 0.0, 0.1]}
          speed={0.2}
          amplitude={0.6}
          frequencyX={3}
          frequencyY={2}
          interactive={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-10 px-4 md:px-6 py-10 md:py-16 max-w-7xl mx-auto">
        {" "}
        <h2 className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">
          About me
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="w-full max-w-md flex justify-center order-1 lg:order-1 mt-0 lg:mt-0">
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px]">
              <ProfileCard
                avatarUrl="https://i.postimg.cc/m2Dyv9T7/1706869125805-removebg-preview.png"
                name="Mritunjay Thakur"
                title="Full Stack Web Dev"
                handle="jaythakur.x"
                status="Online"
                contactText="Contact"
                showUserInfo={false}
                className="profile-card-natural"
              />
            </div>
          </div>

          <div className="w-full lg:w-2/3 text-center lg:text-left order-2 lg:order-2">
            <div className="text-base sm:text-xl md:text-2xl lg:text-4xl text-white mb-8 max-w-4xl mx-auto lg:mx-0">
              <SplitText
                text="I'm a Full-Stack Web Developer & Designer based in New Delhi, building robust, scalable, and intelligent web applications. I craft seamless user experiences using React, Next.js, and Tailwind CSS on the frontend, while designing secure, high-performance backends with Node.js, Express, MongoDB, and PostgreSQL. I also integrate AI features through OpenAI and leverage prompt engineering to create smart, adaptive, and interactive applications blending creativity with powerful engineering."
                className=""
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
