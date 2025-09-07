"use client";

import React from "react";
import Balatro from "./Balatro";

const BackgroundHero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Balatro
          spinRotation={-0.5}
          spinSpeed={2.0}
          offset={[0.1, -0.05]}
          color1="#6a0dad"
          color2="#7f00ff"
          color3="#000000"
          contrast={4.0}
          lighting={0.6}
          spinAmount={0.35}
          pixelFilter={3000}
          spinEase={0.8}
          isRotate={true}
          mouseInteraction={true}
        />
      </div>
    </div>
  );
};

export default BackgroundHero;
