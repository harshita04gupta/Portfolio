import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Socials from "./components/Socials";

function App() {
  return (
    <div >
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Socials/>
      <Skills/>
      <Contact/>
      
    </div>
  );
}

export default App;
