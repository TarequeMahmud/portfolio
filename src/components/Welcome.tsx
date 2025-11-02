const Welcome = () => {
  return (
    <div className="relative overflow-visible w-full h-[200px] sm:h-[500px] md:h-[600px]">
      <div className="absolute w-[80%] sm:w-[60%] md:w-[50%] flex flex-col items-center justify-center animate-moveBounce">
        <h1 className="text-md sm:text-4xl md:text-[2.5rem] font-medium animate-colorShift transition-colors duration-1000 ease-in-out text-center">
          Hello, I&#39;m Tareque Mahmud
        </h1>
        <p className="text-xs sm:text-2xl font-normal animate-colorShift transition-colors duration-1000 ease-in-out text-center">
          I build full stack web applications.
          <br />
          <span className="text-xs sm:text-[1.1rem]">
            Next.js, React | Nest, Express | Django, FastAPI | SQL, MongoDB |
            Docker, AWS
          </span>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
