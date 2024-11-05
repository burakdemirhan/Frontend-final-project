import Profile from "../components/Profile";
export default function ProfilePage() {
  return (
    <div>
      <div className="w-4/4 h-px bg-[#BAB2E7] "></div>
      <div className="my-8">
        <h1 className="text-[#1F2937] mb-4"> Profile</h1>
        <Profile />
      </div>
    </div>
  );
}
