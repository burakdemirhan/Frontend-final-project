import Profile from "../components/Profile";
import useLanguage from "../hooks/useLanguage";
export default function ProfilePage() {
  const { currentContent } = useLanguage();
  return (
    <div>
      <div className="w-4/4 h-px  "></div>
      <div className="my-8">
        <h1 className="text-[#1F2937] mb-4 dark:text-[#AEBCCF] ">
          {" "}
          {currentContent.profile}{" "}
        </h1>
        <Profile />
      </div>
    </div>
  );
}
