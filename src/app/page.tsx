import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-full h-full">
      {/* Welcome Section */}
      <div className="relative overflow-hidden w-full h-[600px] sm:h-[500px] md:h-[600px]">
        <div className="absolute w-[80%] sm:w-[60%] md:w-[40%] flex flex-col items-center justify-center animate-moveBounce">
          <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-medium animate-colorShift transition-colors duration-1000 ease-in-out text-center">
            Hey I am Tareque Mahmud
          </h1>
          <p className="text-xl sm:text-2xl md:text-[1.7rem] font-normal animate-colorShift transition-colors duration-1000 ease-in-out text-center">
            a Full Stack Web Developer.
          </p>
        </div>
      </div>

      {/* Featured Section */}
      <div className="w-full min-h-[1000px] flex flex-col items-center justify-start">
        <div className="w-[70%] flex flex-col items-center justify-start">
          <h1>Who am I</h1>
          <hr className="w-full" />
          <em className="mt-2">
            From Figma Mockups to ER Diagrams — and much of what&#39;s in
            between, satisfactorily.
          </em>
          <p className="text-[1.2rem] text-justify">
            I am a Full Stack Developer with a passion for turning ideas into
            scalable, secure, and user-friendly web applications. I specialize
            in crafting full solutions — from designing sleek interfaces in
            Figma and building interactive frontends with React and Next.js, to
            developing robust backends using Node.js, Express, and various SQL
            and NoSQL databases. My expertise covers authentication, real-time
            communication, API development, and web security, ensuring reliable
            and high-performing applications. I am comfortable managing data
            through ER diagrams and modern ORMs/ODMs like Prisma and Mongoose.
            With a background in Electrical and Electronics Engineering, I
            approach problems with analytical thinking and a fast-learning
            mindset, adapting quickly to new technologies and challenges.
          </p>
        </div>

        <h1>Skills:</h1>
        <hr className="w-[70%]" />
        <Skills />
      </div>
    </div>
  );
}
