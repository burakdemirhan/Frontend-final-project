import useDark from "../hooks/useDark";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function Button() {
  const { darkMode, toggleDarkMode } = useDark();
  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <div className="flex items-center space-x-3">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={darkMode}
          onChange={handleClick}
        />
        <div className="w-14 h-6 bg-[#4731D3] rounded-3xl peer peer-checked:bg-[#3A3A3A] transition duration-300">
          <div
            className={`w-6 h-6 bg-transparent transform flex justify-center items-center ${
              darkMode ? "translate-x-7" : ""
            } transition-transform duration-300`}
          >
            {darkMode ? (
              <IoMoon className="text-white" size={20} />
            ) : (
              <IoSunny className="text-yellow-500" size={20} />
            )}
          </div>
        </div>
      </label>
      <span className="text-gray-600  text-xs sm:text-sm md:text-base">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </div>
  );
}
