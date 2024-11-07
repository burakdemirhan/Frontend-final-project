import useLanguage from "../hooks/useLanguage";
import { ceviri } from "../language";

export default function Project() {
  const { leanguage } = useLanguage();
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {ceviri[leanguage].projectsList.map((project, index) => (
        <div
          key={index}
          className="w-full sm:w-[18rem] h-[27rem] rounded-lg shadow-lg dark:bg-"
        >
          <img
            alt={project.ptitle}
            src={project.image}
            className="h-[12rem] w-full object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h5 className="text-[#4338CA] font-semibold dark:text-[#CFCBFF]">
              {project.ptitle}
            </h5>
            <p className="text-[#6B7280] mt-2 text-sm dark:text-[#FFFFFF]">
              {project.pdesc}
            </p>
            <div className="mt-1 flex gap-1 flex-wrap">
              {project.technologies.map((tech, techIndex) => (
                <button
                  key={techIndex}
                  className=" text-[#3730A3] px-1 py-1 rounded-lg text-xs dark:text-[#E1E1FF] dark:bg-[#383838]  text-[#3730A3] border-1 border-[#3730A3]"
                >
                  {tech}
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <a
                href={project.github}
                className="text-[#3730A3] text-sm dark:text-[#E1E1FF]"
              >
                Github
              </a>
              <a
                href={project.site}
                className="text-[#3730A3] text-sm dark:text-[#E1E1FF]"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
