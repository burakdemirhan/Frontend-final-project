import useLanguage from "../hooks/useLanguage";
import { ceviri } from "../language";

export default function SkillsPage() {
  const { leanguage } = useLanguage();
  return (
    <div className="mt-24">
      <h1 className="text-3xl  dark:text-[#AEBCCF] font-bold ">
        {ceviri[leanguage].skills}
      </h1>
      <div className="flex flex-wrap gap-9 justify-between">
        <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4">
          <h2 className="text-[#4338CA] dark:text-[#B7AAFF]">Java Script</h2>
          <p className="text-[#6B7280] ">{ceviri[leanguage].java}</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4">
          <h2 className="text-[#4338CA] dark:text-[#B7AAFF]">React.Js</h2>
          <p className="text-[#6B7280]">{ceviri[leanguage].react}</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4">
          <h2 className="text-[#4338CA] dark:text-[#B7AAFF]">Node.Js</h2>
          <p className="text-[#6B7280] ">{ceviri[leanguage].node}</p>
        </div>
      </div>
    </div>
  );
}
