import Button from "../components/Button";
import Leanguage from "../components/Leanguage";
import Links from "../components/Links";

export default function Header() {
  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-end items-center gap-2 mb-4">
        <Button />
        <span className="hidden sm:inline">-</span>
        <Leanguage />
      </div>

      <Links />
    </div>
  );
}
