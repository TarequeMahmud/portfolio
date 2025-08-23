"use client";

import PageWrapper from "@/components/PageWrapper";
import ResourceCard from "@/components/ResourcCard";
import resources from "@/data/resources.json";

const Page = () => {
  return (
    <PageWrapper title="READABLE RESOURCES">
      <div className="my-12 h-full w-full flex flex-wrap gap-8 justify-center">
        {resources.map((res) => (
          <ResourceCard key={res.id} resource={res} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default Page;
