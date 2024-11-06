import Profile from "../components/Profile";
import useLanguage from "../hooks/useLanguage";
import { ceviri } from "../language";
export default function ProfilePage() {
  const { leanguage } = useLanguage();
  return (
    <div>
      <div className="w-4/4 h-px bg-[#BAB2E7] "></div>
      <div className="my-8">
        <h1 className="text-[#1F2937] mb-4"> {ceviri[leanguage].profile} </h1>
        <Profile />
      </div>
    </div>
  );
}
