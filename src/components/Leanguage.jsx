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
            <span className="text-[#4731D3]">Türkçe</span>'YE GEÇ
          </>
        ) : (
          <>
            <span className="text-[#4731D3]">Switch</span> TO ENGLISH
          </>
        )}
      </button>
    </div>
  );
}
