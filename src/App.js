import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Hero></Hero>
        <Skills></Skills>
        <About></About>
        <Work></Work>
        <Contact></Contact>
        <Footer></Footer>

    </div>
  );
}

export default App;
