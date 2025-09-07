"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { Button } from "./ui/moving-border";
import { PinContainer } from "../components/ui/3d-pin";
import "../css/Hero.css";

export const Contact = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative z-10">
      <h1 className="text-4xl md:text-6xl text-center font-extrabold  mt-15 mb-4 text-white">
        Hey, I’m <span className="text-blue-400">Mritunjay Thakur</span>
      </h1>
      <p className="text-neutral-400 -mt-2 text-center max-w-2xl text-xl my-11 mx-auto mb-10">
        Your friendly neighbourhood <strong>Full Stack web Developer</strong>
      </p>

      <h2 className="text-3xl font-bold text-white text-center mb-4">
        Reach out for collaborations, freelance opportunities, or just to say
        hi. I’d love to connect!
      </h2>
      <p className="text-neutral-500 text-center mb-8"></p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full p-4 rounded-xl bg-neutral-950 text-white border border-neutral-800 focus:ring-2 focus:ring-teal-500"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          rows={5}
          className="w-full p-4 rounded-xl bg-neutral-950 text-white border border-neutral-800 focus:ring-2 focus:ring-teal-500"
          required
        ></textarea>

        {status === "success" && (
          <p className="text-blue-500 text-center font-medium">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-white-500 text-center font-medium">
            Failed to send message. Please try again.
          </p>
        )}

        <div className="relative max-w-4xl mx-auto mt-6 flex items-center">
          {/* Back Button (Left side) */}
          <div className="mt-6">
            <button
              type="button"
              onClick={() => router.push("/")}
              disabled={loading}
              className="font-extralight text-sm landing-button flex items-center justify-center px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-400 disabled:opacity-50"
            >
              {loading ? "Back" : "Back"}
            </button>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 mt-6">
            <button
              type="submit"
              disabled={loading}
              className="font-extralight text-sm landing-button flex items-center justify-center px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-400 disabled:opacity-50"
            >
              <span className="text-md">
                {loading ? "Sending..." : "Send Message"}
              </span>
              <div className="button-arrow-circle ml-2">
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
            </button>
          </div>

          <div className="absolute right-0 mt-6">
            <button
              type="button"
              onClick={() => router.push("/nini")}
              disabled={loading}
              className="font-extralight text-sm landing-button flex items-center justify-center px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-400 disabled:opacity-50"
            >
              {loading ? "Nini Ai" : "Nini Ai"}
            </button>
          </div>
        </div>
      </form>

      <div className="h-auto w-full flex justify-center items-center py-12">
        <PinContainer
          title="Instagram"
          href="https://instagram.com/___jaythakur___"
        >
          <div className="flex flex-col p-3 tracking-tight text-slate-100/50 w-[14rem] h-[14rem]">
            <h3 className="font-bold text-base text-slate-100">Instagram</h3>
            <span className="text-slate-500 text-xs">___jaythakur___</span>
            <div className="flex-1 rounded-lg mt-4 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500" />
          </div>
        </PinContainer>

        <PinContainer
          title="LinkedIn"
          href="https://www.linkedin.com/in/mritunjay-thakur-jay/"
        >
          <div className="flex flex-col p-3 tracking-tight text-slate-100/50 w-[14rem] h-[14rem]">
            <h3 className="font-bold text-base text-slate-100">LinkedIn</h3>
            <span className="text-slate-500 text-xs">mritunjay-thakur-jay</span>
            <div className="flex-1 rounded-lg mt-4 bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400" />
          </div>
        </PinContainer>

        <PinContainer
          title="GitHub"
          href="https://github.com/mritunjay-thakur/mritunjay-thakur"
        >
          <div className="flex flex-col p-3 tracking-tight text-slate-100/50 w-[14rem] h-[14rem]">
            <h3 className="font-bold text-base text-slate-100">GitHub</h3>
            <span className="text-slate-500 text-xs">mritunjay-thakur</span>
            <div className="flex-1 rounded-lg mt-4 bg-gradient-to-br from-pink-800 via-purple-600 to-blue-400" />
          </div>
        </PinContainer>

        <PinContainer title="Email" href="mailto:mritunjaythakur903@gmail.com">
          <div className="flex flex-col p-3 tracking-tight text-slate-100/50 w-[14rem] h-[14rem]">
            <h3 className="font-bold text-base text-slate-100">Email</h3>
            <span className="text-slate-500 text-xs">
              mritunjaythakur903@gmail.com
            </span>
            <div className="flex-1 rounded-lg mt-4 bg-gradient-to-br from-red-500 via-pink-500 to-yellow-500" />
          </div>
        </PinContainer>
      </div>

      <footer className=" text-center">
        <p className="text-lg text-neutral-500">
          Built with ❤️ by{" "}
          <span className="text-blue-400 font-medium">Mritunjay Thakur</span> .
        </p>
      </footer>
    </div>
  );
};
