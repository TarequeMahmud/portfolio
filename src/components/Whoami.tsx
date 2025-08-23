import summaries from "@/data/summaries.json";
const Whoami = () => {
  return (
    <div className="w-[80%] flex flex-col items-center justify-start mt-10">
      <h1 className="text-3xl font-bold">WHO AM I</h1>
      <hr className="w-full my-2" />
      <div className="w-full rounded-lg p-6">
        <ul className="list-disc text-[1.3rem] text-justify mt-2 space-y-2 pl-6">
          {summaries.map((summary, idx) => (
            <li key={idx}>
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
