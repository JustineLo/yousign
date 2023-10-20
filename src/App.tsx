import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Introduction from "./sections/Introduction";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Introduction />
      <AboutMe />
      <Stack />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
