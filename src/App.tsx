import { RouteObject, useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Nav from "./components/Navigation/Nav";
import Projects from "./projects/Projects";
import { Page } from "./styles/App.styles";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/Theme.styles";

function App() {
  const routes: RouteObject[] = [
    { id: "home", element: <Home /> },
    { id: "about", element: <About /> },
    { id: "contact", element: <Contact /> },
    { id: "projects", element: <Projects /> },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {useRoutes(routes)}
      <Home />
      <Nav />
      <About />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
