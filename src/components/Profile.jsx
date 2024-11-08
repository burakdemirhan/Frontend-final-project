import useLanguage from "../hooks/useLanguage";

export default function Profile() {
  const { currentContent } = useLanguage();

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 p-4">
      <div className="flex flex-col gap-8 rounded-xl border-2 border-purple-100 bg-gradient-to-r bg-opacity-30 p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ">
        <h3 className="text-[#4338CA] dark:text-[#B7AAFF] text-white text-2xl font-bold mb-4 ">
          {currentContent.profile}
        </h3>
        <ul className="p-0 flex flex-col gap-4 text-white text-lg">
          {Object.values(currentContent.profileDetails).map((detail, index) => (
            <li key={index} className="flex gap-4 text-[#6B7280]">
              <span className="font-semibold w-36 text-[#000000] dark:text-white">
                {detail.label}:
              </span>
              <span className="flex-1">{detail.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col mt-8 lg:mt-0  border-2 border-purple-100 bg-gradient-to-r  bg-opacity-30 p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
        <h2 className="text-[#4338CA] dark:text-[#B7AAFF]">
          {currentContent.about}
        </h2>
        <p className="text-lg max-w-md whitespace-pre-line text-[#6B7280] mt-2">
          {currentContent.info1}
        </p>
        <p className="text-lg max-w-md whitespace-pre-line text-[#6B7280] mt-2">
          {currentContent.info2}
        </p>
      </div>
    </div>
  );
}
