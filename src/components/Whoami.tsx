import summaries from "@/data/summaries.json";

interface WhoamiProps {
  title?: string;
  showTitle?: boolean;
}

const Whoami = ({ title = "WHO AM I", showTitle = true }: WhoamiProps) => {
  return (
    <div
      className={`w-[90%] sm:w-[85%] md:w-[80%] flex flex-col items-center justify-start ${showTitle ? "mt-8 sm:mt-10" : ""
        }`}
    >
      {/* Title Section */}
      {showTitle && (
        <>
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-white tracking-wide">
            {title}
          </h1>
          <hr className="w-full my-2 border-gray-500" />
        </>
      )}

      {/* Description List */}
      <div
        className={`w-full rounded-lg ${showTitle ? "p-3 sm:p-5 md:p-6" : "p-2"
          }`}
      >
        <ul className="list-disc text-base sm:text-lg md:text-[1.3rem] text-justify leading-relaxed mt-2 space-y-2 sm:space-y-3 pl-4 sm:pl-6">
          {summaries.map((summary, idx) => (
            <li key={idx} className="text-gray-200">
              <span className="font-semibold text-[#b7fa00]">
                {summary.text}
              </span>{" "}
              {summary.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Whoami;
