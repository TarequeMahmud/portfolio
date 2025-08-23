"use client";

import PageWrapper from "@/components/PageWrapper";
import Skills from "@/components/Skills";
import Whoami from "@/components/Whoami";

const Page = () => {
  return (
    <PageWrapper title="ABOUT ME">
      <Whoami showTitle={false} />

      <Skills />
    </PageWrapper>
  );
};

export default Page;
