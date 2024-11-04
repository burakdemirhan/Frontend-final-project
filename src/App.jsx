import Main from "./Pages/Main";
import Header from "./Pages/Header";
import Skills from "./Pages/SkillsPage";
import Projects from "./Pages/ProjectsPage";
import Footer from "./Pages/Footer";
import "./index.css";
import "./App.css";
import Profile from "./Pages/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Header />
      <Main />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
