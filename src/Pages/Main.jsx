import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import burkidad from "../assets/burkidad.jpg";
import { ceviri } from "../language";
import useLanguage from "../hooks/useLanguage";
export default function Main() {
  const { leanguage } = useLanguage();
  return (
    <div className="flex items-center justify-around gap-8 ">
      <div className=" flex flex-col pt-12">
        <div className="flex  items-center gap-4 my-4">
          <div className="w-32 h-px bg-[#3730A3] "></div>
          <span className="text-[#4338CA]">Burak Demirhan</span>
        </div>

        <h1 className="text-2xl font-bold">{ceviri[leanguage].title}</h1>
        <p className="mt-4 text-gray-700">{ceviri[leanguage].desc}</p>

        <div className="mt-6 space-x-4">
          <button className="px-4 py-2 bg-[#3730A3] text-white rounded-md">
            {ceviri[leanguage].hireme}
          </button>
          <a href="https://github.com/burakdemirhan">
            <button className="px-4 py-2 bg-white text-[#3730A3]  border border-[#3730A3] rounded-md">
              <FontAwesomeIcon icon={faGithub} /> Github
            </button>
          </a>
          <a href="https://www.linkedin.com/in/burak-demirhan-518962216/">
            <button className="px-4 py-2 bg-white  text-[#3730A3]  border border-[#3730A3] rounded-md">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </button>
          </a>
        </div>
      </div>

      <img className="rounded-md w-1/4 h-auto mt-5 ml-20 " src={burkidad} />
    </div>
  );
}
