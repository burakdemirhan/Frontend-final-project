import Main from "./Pages/Main";
import Header from "./Pages/Header";
import Skills from "./Pages/SkillsPage";
import Projects from "./Pages/ProjectsPage";
import Footer from "./Pages/Footer";
import Profile from "./Pages/ProfilePage";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useDark from "./hooks/useDark";

function App() {
  const { darkMode } = useDark();
  return (
    <div
      className={`${
        darkMode ? "dark bg-[#252128] text-[#AEBCCF] " : "bg-white text-black"
      }container mx-auto px-24 py-8`}
    >
      <Header />
      <Main />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
