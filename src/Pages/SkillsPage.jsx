import useLanguage from "../hooks/useLanguage";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
export default function SkillsPage() {
  const { currentContent } = useLanguage();
  return (
    <div className="mt-24 flex flex-col gap-4">
      <h1 className="text-3xl dark:text-[#AEBCCF] font-bold ">
        {currentContent.skills}
      </h1>

      <div className="flex  gap-9 justify-start overflow-x-auto py-2 px-2 rounded-lg text-xs dark:bg-[#383838]  dark:hover:bg-[#4B5563]  border border-[#3730A3] dark:border-[#E1E1FF] transition-all ">
        <div className="w-80 flex-shrink-0 bg-gradient-to-r from-[#FFCC00] to-[#FFCC00] dark:from-[#FFCC00] dark:to-[#FFCC00] rounded-lg shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-white text-xl font-semibold">JavaScript</h2>
          <p className="text-white mt-2">{currentContent.java}</p>
          <span className="mb-80">
            {" "}
            <IoLogoJavascript size={100} />
          </span>

          <div className="mt-4 flex justify-center items-center gap-3"></div>
        </div>

        <div className="w-80 flex-shrink-0 bg-gradient-to-r from-[#61DBFB] to-[#61DBFB] dark:from-[#61DBFB] dark:to-[#61DBFB] rounded-lg shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-white text-xl font-semibold">React.Js</h2>
          <p className="text-white mt-2">{currentContent.react}</p>

          <FaReact size={80} />
          <div className="mt-4 flex justify-center items-center gap-3"></div>
        </div>

        <div className="w-80 flex-shrink-0 bg-gradient-to-r from-[#8CC84B] to-[#8CC84B] dark:from-[#8CC84B] dark:to-[#8CC84B] rounded-lg shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-white text-xl font-semibold">Node.Js</h2>
          <p className="text-white mt-2">{currentContent.node}</p>
          <FaNodeJs size={90} />
          <div className="mt-4 flex justify-center items-center gap-3"></div>
        </div>
      </div>
    </div>
  );
}
