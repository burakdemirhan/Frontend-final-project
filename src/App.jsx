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
    <div className={`${darkMode ? "dark bg-[#252128]  " : " "} `}>
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-12 lg:px-24 py-8 ">
        <Header />
        <Main />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
