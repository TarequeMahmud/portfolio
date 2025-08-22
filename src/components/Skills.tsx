import Image from "next/image";
import skillsdata from "@/data/skills.json";

const Skills = () => {
  return (
    <div className="w-3/4 my-8 grid grid-cols-3 justify-items-center gap-10 p-4">
      {skillsdata.skills.map((item, index) => (
        <div
          key={index}
          className="w-[250px] h-[250px] bg-white/90 border border-white rounded-xl shadow-md shadow-black/30 text-black flex flex-col justify-start items-center"
        >
          {/* Top Section */}
          <div className="mt-2 flex flex-row items-center justify-center gap-5 w-full h-[20%]">
            <Image
              key={item.name}
              src={item.icon}
              alt={item.name}
              width={item.name === "CI/CD" ? 100 : 50}
              height={50}
            />
            <h2 className="text-[1.7rem] font-medium">{item.name}</h2>
          </div>

          <hr className="my-1 w-[90%] h-[2px] bg-gray-500 border-0" />

          {/* Description Section */}
          <div className="w-4/5 h-[35%] m-1 flex items-center justify-center">
            <p className="text-[0.9rem] font-normal text-justify w-full h-full">
              {item.description}
            </p>
          </div>

          <hr className="my-1 w-[90%] h-[2px] bg-gray-500 border-0" />

          {/* Progress Bar */}
          <div className="my-2 w-[90%] h-[30px] border border-blue-600 rounded-lg p-1 flex items-center">
            <div
              style={{ width: `${item.experience_level}%` }}
              className="h-[70%] m-1 bg-teal-700 rounded"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
