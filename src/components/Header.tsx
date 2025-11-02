import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full min-w-[320px] min-h-60 max-h-120 md:h-112 relative border-b-2 border-[#05155e] bg-[#0170b1] bg-[url('/hero-background.jpg')] bg-center bg-cover bg-no-repeat">
      {/* Top Navigation Bar */}
      <div className="flex flex-row justify-between items-center absolute top-2.5 left-[calc(2%-2*0.5%)] bg-black/45 w-[98%] h-[70px] my-5 mx-auto rounded-2xl border border-black/55 px-4">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
