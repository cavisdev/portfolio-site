import { ThemeProvider } from "styled-components";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Nav from "./components/Navigation/Nav";
import Projects from "./projects/Projects";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/Theme.styles";
import Footer from "./footer/Footer";
import { Page } from "./styles/App.styles";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
