import { RouteObject, useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components"
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Navigation/Nav";
import Projects from "./components/projects/Projects";
import { useStore } from "./store/useStore";
import { Page } from "./styles/App.styles";
import { GlobalStyle } from "./styles/GlobalStyle"
import { lightTheme, darkTheme } from "./styles/Theme.styles"

function App() {
  const darkMode = useStore((state) => state.darkMode)
    
  let routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/projects", element: <Projects /> },
  ];

  let element = useRoutes(routes);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Page>
      <Nav />
      {element}
      </Page>
      <Footer />
    </ThemeProvider>
  )
}

export default App
