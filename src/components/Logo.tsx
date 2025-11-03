import Image from "next/image";
import Link from "next/link";
import logo from "@/app/favicon.ico";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 pl-3 cursor-pointer"
    >
      <Image
        src={logo}
        height={50}
        width={50}
        alt="Logo for my portfolio"
        unoptimized
      />
      <h1 className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap">
        Tareque Mahmud
      </h1>
    </Link>
  );
}

export default Logo;
