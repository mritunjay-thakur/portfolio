import React from "react";
import { Contact } from "../components/Contact";
import { BackgroundBeams } from "../components/ui/background-beams";

function page() {
  return (
    <div className="min-h-screen bg-white dark:bg-purple-950 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <Contact />
    </div>
  );
}

export default page;
