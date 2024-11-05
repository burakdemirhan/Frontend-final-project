import Button from "../components/Button";
import Leanguage from "../components/Leanguage";
import Links from "../components/Links";

export default function Header() {
  return (
    <div className="">
      <div className="flex justify-end items-center gap-2 mb-4 ">
        <Button />
        <span>-</span>
        <Leanguage />
      </div>
      <Links className="ml-auto" />
    </div>
  );
}
