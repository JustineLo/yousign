import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Introduction from "./sections/Introduction";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";
import WhyWorkHere from "./sections/WhyWorkHere";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Introduction />
      <WhyWorkHere />
      <AboutMe />
      <Stack />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
