import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Introduction from "./sections/Introduction";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Introduction />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
