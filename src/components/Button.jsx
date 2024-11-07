import useDark from "../hooks/useDark";

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
        <div className="w-14 h-6 bg-[#4731D3] rounded-3xl	 peer peer-checked:bg-[#3A3A3A] transition duration-300">
          <div
            className={`w-6 h-5 bg-[#FFE86E] rounded-full absolute top-0.5 left-0.5 transform ${
              darkMode ? "translate-x-7" : ""
            } transition-transform duration-300`}
          />
        </div>
      </label>
      <span className="text-gray-600">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </div>
  );
}
