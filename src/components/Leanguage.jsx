import useDark from "../hooks/useDark";
import useLanguage from "../hooks/useLanguage";

export default function Leanguage() {
  const { leanguage, changeLeanguage } = useLanguage();
  const { darkMode } = useDark();

  const handleClick = () => {
    changeLeanguage();
  };

  return (
    <div className="flex justify-center sm:justify-start">
      <button
        onClick={handleClick}
        className="text-[#777777]text-[#777777] text-xs sm:text-sm md:text-base"
      >
        {leanguage === "tr" ? (
          <>
            <span className={darkMode ? "text-[#B7AAFF]" : "text-[#4338CA]"}>
              Switch
            </span>{" "}
            TO ENGLISH
          </>
        ) : (
          <>
            <span className={darkMode ? "text-[#E1E1FF]" : "text-[#4338CA]"}>
              TÜRKÇEYE
            </span>
            'YE GEÇ
          </>
        )}
      </button>
    </div>
  );
}
