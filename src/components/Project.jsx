import useLanguage from "../hooks/useLanguage";

export default function Project() {
  const { currentContent } = useLanguage();
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {currentContent.projectsList.map((project, index) => (
        <div
          key={index}
          className="w-full sm:w-80 md:w-96 lg:w-[20rem] h-auto rounded-xl border-2 border-gray-300 dark:border-[#3c4049] shadow-lg bg-gradient-to-r from-white to-gray-50 dark:from-[#2a2e37] dark:to-[#1f232b] hover:shadow-2xl hover:scale-105 hover:border-[#5A4FCF] transition-all duration-300"
        >
          <img
            alt={project.ptitle}
            src={project.image}
            className="h-48 w-full object-cover rounded-t-lg"
          />
          <div className="p-6">
            <h5 className="text-[#5A4FCF] dark:text-[#CABFFD] font-semibold text-xl">
              {project.ptitle}
            </h5>
            <p className="text-[#4B5563] dark:text-[#B0B7C3] mt-2 text-sm">
              {project.pdesc}
            </p>
            <div className="mt-3 flex gap-2 flex-wrap">
              {project.technologies.map((tech, techIndex) => (
                <button
                  key={techIndex}
                  className="px-3 py-1 rounded-lg text-xs dark:bg-[#3b3f48] bg-gradient-to-r from-[#EAE7FF] to-[#D8D4FF] dark:hover:from-[#525866] dark:hover:to-[#4b4f5a] hover:bg-[#D8D4FF] border border-[#4F46E5] dark:border-[#D1D5DB] transition-all  hover:scale-105"
                >
                  {tech}
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <a
                href={project.github}
                className="text-[#5A4FCF] dark:text-[#CABFFD] text-sm hover:underline  hover:scale-105"
              >
                Github
              </a>
              <a
                href={project.site}
                className="text-[#5A4FCF] dark:text-[#CABFFD] text-sm hover:underline  hover:scale-105  "
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
