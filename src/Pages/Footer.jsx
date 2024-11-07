import useLanguage from "../hooks/useLanguage";
import { ceviri } from "../language";

export default function Footer() {
  const { leanguage } = useLanguage();
  return (
    <div className="w-full h-auto display-block p-4 dark:bg-[#141414] bg-[#F9F9F9]">
      <div className="my-12 px-8 flex flex-col gap-8">
        <h2 className=" sm:text-left dark:text-[#AEBCCF]">
          {ceviri[leanguage].ftitle}
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <article className="text-[#AF0C48] dark:text-[#BAB2E7] text-center sm:text-left">
            👉burkidad@outlook.com
          </article>
          <nav className="flex gap-4 justify-center sm:justify-start">
            <a
              className="text-[#0A0A14] dark:text-[#E1E1FF] no-underline"
              href=""
            >
              Personal Blog
            </a>
            <a
              className="text-[#00AB6B] no-underline"
              href="https://github.com/burakdemirhan"
            >
              Github
            </a>
            <a
              className="text-[#0077B5] no-underline"
              href="https://www.linkedin.com/in/burak-demirhan-518962216/"
            >
              Linkedin
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
