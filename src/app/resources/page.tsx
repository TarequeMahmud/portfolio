"use client";

import PageWrapper from "@/components/PageWrapper";
import ResourceCard from "@/components/ResourceCard";
import resources from "@/data/resources.json";

const Page = () => {
  return (
    <PageWrapper title="READABLE RESOURCES">
      <div
        className="
          my-10 
          w-[95%] sm:w-[90%] md:w-[85%] 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-8 
          place-items-center
        "
      >
        {resources.map((res) => (
          <ResourceCard key={res.id} resource={res} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default Page;
