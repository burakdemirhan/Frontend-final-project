import useLanguage from "../hooks/useLanguage";
import { ceviri } from "../language";

export default function Footer() {
  const { leanguage } = useLanguage();
  return (
    <div className=" w-full bg-[#F9F9F9] p-4 	">
      <div className=" my-12 px-8 flex flex-col gap-8">
        <h2>{ceviri[leanguage].ftitle}</h2>
        <div className="flex justify-between items-center ">
          <article className="text-[#AF0C48]">👉burkidad@outlook.com</article>
          <nav className="flex gap-2">
            <a className="text-[#0A0A14] no-underline" href="">
              Personal Blog
            </a>{" "}
            <a
              className="text-[#00AB6B] no-underline"
              href="https://github.com/burakdemirhan"
            >
              Github
            </a>{" "}
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
