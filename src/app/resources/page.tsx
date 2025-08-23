"use client";

import ResourceCard from "@/components/ResourcCard";
import resources from "@/data/resources.json";

const Page = () => {
  return (
    <div className="w-full min-h-[600px] p-5 flex flex-col items-center">
      <h1 className="mt-5 mb-2 h-10 text-3xl font-semibold">
        READABLE RESOURCES
      </h1>
      <hr className="w-full border-gray-400" />

      <div className="my-12 w-[90%] flex flex-wrap gap-8 justify-center">
        {resources.map((res) => (
          <ResourceCard key={res.id} resource={res} />
        ))}
      </div>
    </div>
  );
};

export default Page;
