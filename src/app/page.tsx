import Skills from "@/components/Skills";
import Welcome from "@/components/Welcome";
import Whoami from "@/components/Whoami";

export default function Home() {
  return (
    <div className="w-full h-full">
      {/* Welcome Section */}
      <Welcome />

      {/* Featured Section */}
      <div className="w-full min-h-[1000px] flex flex-col items-center justify-start">
        <Whoami />

        <Skills />
      </div>
    </div>
  );
}
