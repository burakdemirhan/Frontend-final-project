import useDark from "../hooks/useDark";

export default function Button() {
  const { darkMode, toggleDarkMode } = useDark();
  const handleClick = () => {
    toggleDarkMode();
  };
  return <button onClick={handleClick}>Dark Mode</button>;
}
