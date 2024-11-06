import useLanguage from "../hooks/useLanguage";

export default function Leanguage() {
  const { leanguage, changeLeanguage } = useLanguage();

  const handleClick = () => {
    changeLeanguage();
  };
  return (
    <div>
      <button onClick={handleClick} className="text-[#777777]">
        {leanguage === "tr" ? (
          <>
            <span className="text-[#4731D3]">Switch</span> TO ENGLISH
          </>
        ) : (
          <>
            <span className="text-[#4731D3]">TÜRKÇEYE</span>'YE GEÇ
          </>
        )}
      </button>
    </div>
  );
}
