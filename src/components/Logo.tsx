import logo from "@/app/favicon.ico";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="ml-10 h-full w-[30%] flex flex-row justify-between items-center"
    >
      <Image
        src={logo}
        height={50}
        width={50}
        alt="Logo for my portfolio"
        unoptimized
      />
      <h1 className="w-[90%] ml-5 text-2xl text-left text-white font-bold">
        Tareque Mahmud
      </h1>
    </Link>
  );
}

export default Logo;
