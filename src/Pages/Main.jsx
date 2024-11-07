import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import burkidad from "../assets/burkidad.jpg";
import { ceviri } from "../language";
import useLanguage from "../hooks/useLanguage";
import { darkMode } from "../../tailwind.config";
import useDark from "../hooks/useDark";

export default function Main() {
  const { leanguage } = useLanguage();
  const { darkMode } = useDark();
  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-8 px-4 md:px-8 lg:px-16 py-8">
      <div className="flex flex-col pt-14 w-full md:w-1/2">
        <div className="flex items-center gap-6 my-4">
          <div className="w-24 h-px bg-[#3730A3]"></div>
          <span className="text-[#4338CA] dark:text-[#B7AAFF]">
            Burak Demirhan
          </span>
        </div>

        <h1 className="text-4xl dark:text-[#AEBCCF]  font-bold">
          {ceviri[leanguage].title}
        </h1>
        <p className="mt-4 text-gray-700 dark:text-[#FFFFFF] ">
          {ceviri[leanguage].desc}
        </p>

        <div className="mt-6 space-y-3 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
          <button
            className={
              darkMode
                ? "px-4 py-2  bg-[#E1E1FF] rounded-md w-full sm:w-auto  text-[#000000] "
                : "px-4 py-2  bg-[#3730A3] rounded-md w-full sm:w-auto  "
            }
          >
            {ceviri[leanguage].hireme}
          </button>
          <a
            href="https://github.com/burakdemirhan"
            className="w-full sm:w-auto"
          >
            <button className="px-4 py-2 dark:text-[#E1E1FF] dark:bg-[#383838]  text-[#3730A3] border-1 border-[#3730A3] rounded-md w-full sm:w-auto  ">
              <FontAwesomeIcon icon={faGithub} /> Github
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/burak-demirhan-518962216/"
            className="w-full sm:w-auto"
          >
            <button className="px-4 py-2  text-[#3730A3] dark:text-[#E1E1FF] border-1 border-[#3730A3] rounded-md w-full sm:w-auto dark:bg-[#383838]">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </button>
          </a>
        </div>
      </div>

      <img
        className="rounded-3xl w-full md:w-1/3 h-auto mt-5 md:ml-8"
        src={burkidad}
        alt="Profile"
      />
    </div>
  );
}
