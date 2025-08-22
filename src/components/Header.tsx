import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full h-[28rem] min-w-[400px] min-h-[15rem] max-h-[30rem] m-0 p-0 relative border-b-2 border-[#05155e] bg-[#0170b1] bg-[url('/hero-background.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="flex flex-row justify-between absolute top-[10px] left-[calc(2%-2*0.5%)] bg-black/45 w-[98%] h-[70px] my-5 mx-auto rounded-2xl border border-black/55 items-center px-4">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
