"use client";

import Skills from "@/components/Skills";
import Whoami from "@/components/Whoami";

const Page = () => {
  return (
    <div className="w-full min-h-[600px] p-5 flex flex-col items-center">
      <div className="my-12 w-full flex flex-wrap gap-8 justify-center">
        <Whoami />

        <Skills />
      </div>
    </div>
  );
};

export default Page;
