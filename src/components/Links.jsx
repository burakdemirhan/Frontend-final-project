import useLanguage from "../hooks/useLanguage";
import { ceviri } from "../language";

export default function Links() {
  const { leanguage } = useLanguage();

  const navItems = [
    { key: "skills", href: "#" },
    { key: "projects", href: "#" },
    { key: "hireme", isButton: true },
  ];

  return (
    <div className="flex justify-center sm:justify-end">
      <nav className="flex flex-col sm:flex-row gap-4 items-center">
        {navItems.map((item) => {
          const label = ceviri[leanguage]
            ? ceviri[leanguage][item.key]
            : ceviri["en"][item.key];
          return item.isButton ? (
            <button
              key={item.key}
              className="border-[#3730A3] border-1 text-[#3730A3] w-full sm:w-24 h-10 rounded-md flex items-center justify-center dark:bg-[#FFFFFF]"
            >
              {label}
            </button>
          ) : (
            <a
              key={item.key}
              className="text-[#6B7280] no-underline h-10 flex items-center"
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
