import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Education from "./components/Education";


function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Hero></Hero>
        <Skills></Skills>
        <About></About>
        <Work></Work>
        <Education></Education>
        <Contact></Contact>
        <Footer></Footer>
        <ScrollToTopButton></ScrollToTopButton>

    </div>
  );
}

export default App;
