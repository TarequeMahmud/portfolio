"use client";

import GotoSection from "@/components/GotoSection";
import LetsTalk from "@/components/LetsTalk";
import Welcome from "@/components/Welcome";
import Whoami from "@/components/Whoami";

export default function Home() {
  return (
    <div className="w-full h-full">
      {/* Welcome Section */}
      <Welcome />

      <div className="w-full min-h-[1000px] flex flex-col items-center justify-start gap-8 mt-10">
        <Whoami />

        {/* Navigation Buttons */}
        <GotoSection />

        <LetsTalk />
      </div>
    </div>
  );
}
