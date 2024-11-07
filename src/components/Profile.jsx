import useLanguage from "../hooks/useLanguage";
import { ceviri } from "../language";

export default function Profile() {
  const { leanguage } = useLanguage();

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 p-4">
      <div className="flex flex-col gap-8">
        <h3 className="text-[#4338CA] dark:text-[#B7AAFF]">
          {ceviri[leanguage].profile}
        </h3>
        <ul className="p-0 flex flex-col gap-4">
          {Object.values(ceviri[leanguage].profileDetails).map(
            (detail, index) => (
              <li key={index} className="flex gap-4 text-[#6B7280]">
                <span className="font-semibold w-36 text-[#000000] dark:text-white">
                  {detail.label}:
                </span>
                <span className="flex-1">{detail.value}</span>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="flex flex-col mt-8 lg:mt-0">
        <h2 className="text-[#4338CA] dark:text-[#B7AAFF]">
          {ceviri[leanguage].about}
        </h2>
        <p className="text-lg max-w-md whitespace-pre-line text-[#6B7280] mt-2">
          {ceviri[leanguage].info1}
        </p>
        <p className="text-lg max-w-md whitespace-pre-line text-[#6B7280] mt-2">
          {ceviri[leanguage].info2}
        </p>
      </div>
    </div>
  );
}
