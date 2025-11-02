import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div
      className="
        flex justify-center md:justify-end 
        space-x-6 sm:space-x-8 
        text-2xl sm:text-3xl 
        mt-2 md:mt-0
      "
    >
      <a
        href="https://github.com/TarequeMahmud"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <FaGithub aria-label="GitHub" />
      </a>

      <a
        href="https://linkedin.com/in/tarequemahmud"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#0A66C2] transition-colors"
      >
        <FaLinkedin aria-label="LinkedIn" />
      </a>

      <a
        href="mailto:tarequemahmud313@gmail.com"
        className="hover:text-red-400 transition-colors"
      >
        <FaEnvelope aria-label="Email" />
      </a>
    </div>
  );
};

export default ContactInfo;
