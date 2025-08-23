"use client";

import GotoSection from "@/components/GotoSection";
import LetsTalk from "@/components/LetsTalk";
import PageWrapper from "@/components/PageWrapper";
import Welcome from "@/components/Welcome";
import Whoami from "@/components/Whoami";

export default function Home() {
  return (
    <PageWrapper>
      <Welcome />

      <Whoami />

      <GotoSection />

      <LetsTalk />
    </PageWrapper>
  );
}
