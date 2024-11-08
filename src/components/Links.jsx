import useLanguage from "../hooks/useLanguage";

export default function Links() {
  const { currentContent } = useLanguage();

  const navItems = [
    { key: "skills", href: "#" },
    { key: "projects", href: "#" },
    { key: "hireme", isButton: true },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:justify-end">
      <div className="flex justify-center sm:justify-start mb-4 sm:mb-0">
        <div className="flex items-center justify-center w-10 h-10 bg-[#EEEBFF] text-[#7B61FF] font-bold rounded-full">
          <span className="transform rotate-12">B</span>
        </div>
      </div>

      <nav className="flex flex-col sm:flex-row gap-4 items-center sm:ml-auto">
        {navItems.map((item) => {
          const label = currentContent
            ? currentContent[item.key]
            : ceviri["en"][item.key];
          return item.isButton ? (
            <button
              key={item.key}
              className="border-[#3730A3] border-1 text-[#3730A3] w-full sm:w-24 h-10 rounded-md flex items-center justify-center dark:bg-[#FFFFFF] hover:scale-105 "
            >
              {label}
            </button>
          ) : (
            <a
              key={item.key}
              className="text-[#6B7280] no-underline h-10 flex items-center hover:scale-105"
              href={item.href}
            >
              {label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
