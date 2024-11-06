import useLanguage from "../hooks/useLanguage";
import { ceviri } from "../language";

export default function Profile() {
  const { leanguage } = useLanguage();

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-8">
        <h3 className="text-[#4338CA]">{ceviri[leanguage].profile}</h3>
        <ul className="p-0 flex flex-col gap-8">
          {Object.values(ceviri[leanguage].profileDetails).map(
            (detail, index) => (
              <li key={index} className="flex gap-4 text-[#6B7280]">
                <span className="font-semibold w-36 text-[#000000]">
                  {detail.label}:
                </span>
                <span className="flex-1">{detail.value}</span>
              </li>
            )
          )}
        </ul>
      </div>
      <div>
        <h2 className="text-[#4338CA]">{ceviri[leanguage].about}</h2>
        <p className="text-lg max-w-md whitespace-pre-line text-[#6B7280] mt-2">
          {ceviri[leanguage].info1}
        </p>
        <span></span>
        <p className="text-lg max-w-md whitespace-pre-line text-[#6B7280] mt-2">
          {ceviri[leanguage].info2}
        </p>
      </div>
    </div>
  );
}
