import Project from "../components/Project";
import useLanguage from "../hooks/useLanguage";
import { ceviri } from "../language";

export default function ProjectsPages() {
  const { leanguage } = useLanguage();
  return (
    <div>
      <div className="w-4/4 h-px bg-[#BAB2E7] my-8"></div>

      <h1 className="mb-4"> {ceviri[leanguage].proje} </h1>

      <Project />
    </div>
  );
}
