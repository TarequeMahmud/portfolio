"use client";

import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-r from-[#0b3c52] to-[#092735] text-gray-200 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-10 py-6 sm:py-8 text-center md:text-left">
        {/* Left Section — About */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          <p className="text-base sm:text-lg font-medium text-gray-200">
            Built with{" "}
            <span className="font-semibold text-white">Next.js</span> &{" "}
            <span className="font-semibold text-white">TailwindCSS</span>
          </p>
          <p className="mt-2 text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} Tareque Mahmud. All rights reserved.
          </p>
        </div>

        {/* Right Section — Contact */}
        <div className="w-full md:w-auto">
          <ContactInfo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
