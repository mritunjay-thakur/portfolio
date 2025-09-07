"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Button } from "./ui/moving-border";
import LightRays from "./ui/LightRays";
import Link from "next/link";

function Project() {
  return (
    <div className="relative min-h-screen bg-black px-4 sm:px-8 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#7851A9"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={20}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>
      <h2 className="text-center z-10 mt-16 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        Selected Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center mb-6">
        <CardContainer className="inter-var">
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl 
            dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
            border-black/[0.1] w-[18rem] sm:w-[22rem] md:w-[26rem] 
            h-[25rem] rounded-xl p-5 border flex flex-col"
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Clothify AI
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              AI fashion assistant using OpenRouter, and MERN.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-3">
              <img
                src="https://iili.io/KC79G94.md.png"
                className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as="a"
                href="https://aiclothify.vercel.app"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <Link
                href="https://github.com/mritunjay-thakur/clothify.ai"
                target="_blank"
              >
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  GitHub Repo
                </CardItem>
              </Link>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl 
            dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
            border-black/[0.1] w-[18rem] sm:w-[22rem] md:w-[26rem] 
            h-[25rem] rounded-xl p-5 border flex flex-col"
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Love & Learn Music
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Music school app built with Next.js and Gmail API.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-3">
              <img
                src="https://iili.io/KC7qbOg.md.png"
                className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as="a"
                href="https://musicbyjay.vercel.app"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <Link
                href="https://github.com/mritunjay-thakur/love-learn-music"
                target="_blank"
              >
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  GitHub Repo
                </CardItem>
              </Link>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl 
            dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
            border-black/[0.1] w-[18rem] sm:w-[22rem] md:w-[26rem] 
            h-[25rem] rounded-xl p-5 border flex flex-col"
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Thakur Events
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Event Planning website using HTML, CSS, JS and Bootstrap
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-3">
              <img
                src="https://iili.io/KCaKV71.md.png"
                className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as="a"
                href="https://eventsbyjay.vercel.app/"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <Link
                href="https://github.com/mritunjay-thakur/weddingwebsite"
                target="_blank"
              >
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  GitHub Repo
                </CardItem>
              </Link>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div className="grid grid-cols-1 -mt-32 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        <CardContainer className="inter-var">
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl 
            dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
            border-black/[0.1] w-[18rem] sm:w-[22rem] md:w-[26rem] 
            h-[25rem] rounded-xl p-5 border flex flex-col"
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Dinder Tinder
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Dog Matchmaking website using HTML, CSS, and Bootstrap
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-3">
              <img
                src="https://iili.io/KCauIR4.md.png"
                className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as="a"
                href="https://dinderbyjay.vercel.app/"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <Link
                href="https://github.com/mritunjay-thakur/dinder"
                target="_blank"
              >
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  GitHub Repo
                </CardItem>
              </Link>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl 
            dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
            border-black/[0.1] w-[18rem] sm:w-[22rem] md:w-[26rem] 
            h-[25rem] rounded-xl p-5 border flex flex-col"
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              YouTube Clone
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              My very first project made with only HTML & CSS.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-3">
              <img
                src="https://iili.io/KCaV40x.md.png"
                className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as="a"
                href="https://mritunjay-thakur.github.io/youtubeclone/"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <Link
                href="https://github.com/mritunjay-thakur/youtubeclone"
                target="_blank"
              >
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  GitHub Repo
                </CardItem>
              </Link>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl 
            dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
            border-black/[0.1] w-[18rem] sm:w-[22rem] md:w-[26rem] 
            h-[25rem] rounded-xl p-5 border flex flex-col justify-center items-center text-center"
          >
            <CardItem
              translateZ="50"
              className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-600 dark:text-white leading-snug"
            >
              Projects Under Construction
            </CardItem>
            <CardItem
              as="div"
              translateZ="60"
              className="text-xs sm:text-sm md:text-base mt-3 dark:text-neutral-300 max-w-md flex flex-col text-center gap-2 overflow-y-auto py-2"
            >
              <p>
                Building <span className="font-semibold text-white">Novus</span>{" "}
                — a full-stack web app and React, Next.js component library
                designed to streamline development and deliver scalable UI
                solutions.
              </p>
              <p>
                Developing{" "}
                <span className="font-semibold text-white">DeepChat</span> — an
                end-to-end encrypted chat application with real-time messaging,
                privacy controls, and video calls for smarter conversations.
              </p>
              <p>
                Expanding my portfolio with professional projects that combine
                Next.js, cloud services, AI integrations and cutting-edge tools
                to solve real-world problems.
              </p>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      <div className="-mt-10 mb-10 flex justify-center py-5">
        <Link href="https://github.com/mritunjay-thakur">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Checkout GitHub
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Project;
