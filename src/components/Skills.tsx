import Image from "next/image";
import skillsdata from "@/data/skills.json";

const Skills = () => {
  return (
    <section className="w-[90%] sm:w-[85%] md:w-[80%] flex flex-col items-center justify-start py-6">
      <h1 className="text-2xl sm:text-3xl font-bold mt-4 text-center">SKILLS:</h1>
      <hr className="w-full my-2 border-gray-600" />

      {/* Grid Layout */}
      <div
        className="
          w-full my-6
          grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          justify-items-center
          gap-6 sm:gap-8 md:gap-10
          p-2 sm:p-4
        "
      >
        {skillsdata.skills.map((item, index) => (
          <div
            key={index}
            className="
              w-full sm:w-[260px] md:w-[280px]
              min-h-[260px] sm:min-h-[270px]
              bg-white/90 
              border border-white rounded-xl 
              shadow-md shadow-black/30 
              text-black 
              flex flex-col items-center 
              hover:scale-[1.02] transition-transform duration-200
            "
          >
            {/* Top Section */}
            <div className="mt-3 flex flex-row items-center justify-center gap-4 w-full h-auto px-2">
              <Image
                src={item.icon}
                alt={item.name}
                width={item.name === 'CI/CD' ? 80 : 45}
                height={45}
              />
              <h2 className="text-lg sm:text-xl font-semibold text-center">
                {item.name}
              </h2>
            </div>

            <hr className="my-2 w-[90%] h-0.5 bg-gray-400 border-0" />

            {/* Description Section */}
            <div className="w-[85%] flex-1 flex items-center justify-center mb-2">
              <p className="text-sm sm:text-[0.95rem] text-justify text-gray-800">
                {item.description}
              </p>
            </div>

            <hr className="my-2 w-[90%] h-0.5 bg-gray-400 border-0" />

            {/* Progress Bar */}
            <div className="w-[90%] mb-4 h-7 border border-blue-600 rounded-lg p-[3px] flex items-center">
              <div
                style={{ width: `${item.experience_level}%` }}
                className="h-[70%] bg-linear-to-r from-teal-700 to-cyan-600 rounded transition-all duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
