import useLanguage from "../hooks/useLanguage";

import { FaGithub, FaLinkedin, FaBlog } from "react-icons/fa"; // React ikonu

export default function Footer() {
  const { currentContent } = useLanguage();
  return (
    <div className="w-full h-auto p-4 dark:bg-[#141414] bg-[#F9F9F9]">
      <div className="my-12 px-8 flex flex-col gap-8">
        <h2 className="text-2xl sm:text-left dark:text-[#AEBCCF] animate-pulse">
          {currentContent.ftitle}
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <article className="text-[#AF0C48] dark:text-[#BAB2E7] text-center sm:text-left hover:underline">
            👉 burkidad@outlook.com
          </article>
          <nav className="flex gap-4 justify-center sm:justify-start">
            <a
              className="flex items-center gap-1 text-[#0A0A14] dark:text-[#E1E1FF] no-underline hover:text-[#4338CA] dark:hover:text-[#CABFFD] transition-colors duration-300"
              href="#"
            >
              <FaBlog className="text-lg" />
              Personal Blog
            </a>
            <a
              className="flex items-center gap-1 text-[#00AB6B] no-underline hover:text-[#00C29E] transition-colors duration-300"
              href="https://github.com/burakdemirhan"
            >
              <FaGithub className="text-lg" />
              Github
            </a>
            <a
              className="flex items-center gap-1 text-[#0077B5] no-underline hover:text-[#0099CC] transition-colors duration-300"
              href="https://www.linkedin.com/in/burak-demirhan-518962216/"
            >
              <FaLinkedin className="text-lg" />
              Linkedin
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
