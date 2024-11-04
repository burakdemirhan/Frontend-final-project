export default function Links() {
  return (
    <div className="flex">
      <div className="flex items-center justify-center w-10 h-10 bg-[#EEEBFF] text-[#7B61FF] font-bold rounded-full">
        <span className="transform rotate-12"> B</span>
      </div>

      <nav className="flex gap-4  ml-auto items-center">
        <a
          className="text-[#6B7280] no-underline h-10 flex items-center	"
          href=""
        >
          Skills
        </a>{" "}
        <br />
        <a
          className="text-[#6B7280] no-underline h-10 flex items-center	"
          href=""
        >
          Projects
        </a>
        <button className="border-[#3730A3] border-2 text[3730A3] w-24 h-10 rounded-md">
          Hire me
        </button>
      </nav>
    </div>
  );
}
