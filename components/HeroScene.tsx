"use client";

import dynamic from "next/dynamic";

const HeroSceneCanvas = dynamic(() => import("./HeroSceneCanvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 animate-pulse bg-white/5" />,
});

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <HeroSceneCanvas />
    </div>
  );
}
