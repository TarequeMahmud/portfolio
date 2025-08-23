import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const ContactInfo = () => {
  return (
    <div className="flex space-x-8 text-3xl">
      <a
        href="https://github.com/TarequeMahmud"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/tarequemahmud"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#0A66C2] transition-colors"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:tarequemahmud313@gmail.com"
        className="hover:text-red-400 transition-colors"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default ContactInfo;
