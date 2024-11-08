import Project from "../components/Project";
import useLanguage from "../hooks/useLanguage";

export default function ProjectsPages() {
  const { currentContent } = useLanguage();

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-8">
      <div className="w-full h-px bg-[#BAB2E7] my-8"></div>
      <h1 className="sm:text-left text-2xl sm:text-3xl font-bold text-[#4338CA] mb-4 dark:text-[#AEBCCF]">
        {currentContent.proje}
      </h1>

      <Project />
    </div>
  );
}
