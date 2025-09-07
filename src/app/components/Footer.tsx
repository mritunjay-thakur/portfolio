"use client";

import React from "react";
import Iridescence from "./ui/Iridescence";
import Link from "next/link";

function Footer() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-8 z-0 rounded-[40px] overflow-hidden">
        <Iridescence
          color={[0.4, 0.6, 1]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      <div className="absolute inset-8 rounded-[40px] pointer-events-none z-5"></div>
      <div className="absolute inset-8 rounded-[40px] border-4 border-black pointer-events-none z-10"></div>

      <div className="relative z-20 min-h-screen flex flex-col p-12 pt-32">
        <div className="pt-12 pl-12">
          <p className="text-4xl md:text-7xl lg:text-8xl font-['arial'] max-w-5xl">
            Wanna create something <span className="font-bold">awesome</span>{" "}
            together?
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-auto mb-4">
          <div className="flex-1"></div>

          <div className="relative flex flex-col items-end">
            <div className="relative">
              <Link href="/contact">
                <div className="relative inline-flex hover:text-blue-400 hover:bg-white items-center justify-center h-18 w-60 mr-16 bg-transparent border-2 border-white text-white text-2xl md:text-3xl py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 font-inter overflow-hidden">
                  <span className="animate-sparkle-left">✦</span>
                  <span className=" mx-2">Let'sTalk</span>
                  <span className="animate-sparkle-right">✦</span>
                </div>
              </Link>
            </div>

            <p className="text-md mb-10 md:text-xl font-light font-['Inter'] mr-16 text-right">
              Reach out at mritunjaythakur903@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
