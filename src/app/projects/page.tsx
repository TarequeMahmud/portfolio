"use client";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full min-h-[600px] p-5 flex flex-col items-center">
      <h1 className="mt-5 mb-2 h-10 text-black text-2xl font-semibold">
        Assigned Tasks
      </h1>
      <hr className="w-3/4 border-gray-400" />

      <div className="my-12 w-[90%] flex flex-wrap gap-8 justify-center">
        <div className="w-full h-[350px] bg-gradient-to-r from-[#176c94] to-[#092735] rounded-[35px] border-2 border-[#0068c9d2] flex justify-between cursor-pointer overflow-hidden">
          {/* Left Image */}
          <div className="flex items-center justify-center w-1/2 h-full">
            <Image
              src="/projects/vox.png"
              alt="Project preview"
              className="w-full h-full object-cover rounded-l-[35px]"
            />
          </div>

          {/* Right Side */}
          <div className="w-1/2 h-full bg-black/25 rounded-r-[35px] pr-5 flex items-center justify-center">
            <div className="flex flex-col justify-between ml-[15%] h-[90%] w-[80%]">
              {/* Property */}
              <div className="flex items-center gap-2 p-2 w-[80%] h-[20%] rounded-[11px] bg-black/60">
                <h3 className="text-white text-lg font-semibold">First</h3>
              </div>

              {/* Title + Description */}
              <div className="flex flex-col">
                <h2 className="text-white text-xl font-bold">Okk</h2>
                <p className="text-white text-sm font-normal text-justify">
                  entially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
