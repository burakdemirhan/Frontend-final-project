import useLanguage from "../hooks/useLanguage";
import { ceviri } from "../language";

export default function SkillsPage() {
  const { leanguage } = useLanguage();
  return (
    <div className="mt-24">
      <h1>{ceviri[leanguage].skills}</h1>
      <div className="flex space-x-8">
        <div className="w-1/3">
          <h2 className="text-[#4338CA]">Java Script</h2>
          <p className="text-[#6B7280]">{ceviri[leanguage].java}</p>
        </div>
        <div className="w-1/3">
          <h2 className="text-[#4338CA]">React.Js</h2>
          <p className="text-[#6B7280]"> {ceviri[leanguage].react}</p>
        </div>
        <div className="w-1/3">
          <h2 className="text-[#4338CA]">Node.Js</h2>
          <p className="text-[#6B7280]">{ceviri[leanguage].node}</p>
        </div>
      </div>
    </div>
  );
}
