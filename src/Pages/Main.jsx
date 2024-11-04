import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Main() {
  return (
    <div className="pt-12">
      <div className="flex items-center gap-4 my-4">
        <div className="w-32 h-px bg-[#3730A3] "></div>
        <span className="text-[#4338CA]">Burak Demirhan</span>
      </div>

      <h1 className="text-2xl font-bold">
        If You Love Something Set It Free Unless It's A Tiger
      </h1>
      <p className="mt-4 text-gray-700">
        Hi, I’m Burak. I’m a full-stack developer. If you are looking for a
        developer who can craft solid and scalable frontend products with great
        user experiences, let’s shake hands with me.
      </p>

      <div className="mt-6 space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Hire me
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md">
          <FontAwesomeIcon icon={faGithub} /> Github
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </button>
      </div>
    </div>
  );
}
