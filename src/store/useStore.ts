import { create } from "zustand";

type Project = {
    name: string;
    image: string;
    description: string;
    skills: Array<string>;
    link: string;
    github: string;
}

interface State {
  darkMode: boolean;
  setDarkMode: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: () => void;
  projectTabOpen: boolean;
  setProjectTabOpen: () => void;
  activeProject: Project;
  setActiveProject: (obj: Project) => void;
}

const useStore = create<State>()((set, get) => ({
  darkMode: true,
  setDarkMode: () => {
    set(() => ({ darkMode: !get().darkMode }));
  },
  mobileMenuOpen: false,
  setMobileMenuOpen: () => {
    set(() => ({ mobileMenuOpen: !get().mobileMenuOpen }));
  },
  projectTabOpen: false,
  setProjectTabOpen: () => {
    set(() => ({ projectTabOpen: !get().projectTabOpen }));
  },
  activeProject: {
    name: "PokéStats",
    image: "./images/Pokestats_Preview.jpg",
    description:
      "Pokestats.info is a passion project, built out of my love for the Pokemon video game franchise. I often found myself looking up the statistics of Pokemon in my spare time, but most websites make it difficult to quickly compare those stats. I went into this project with the goal of creating a layout where it would be much quicker and easier to make those comparisons, and I couldn’t be happier with the result.",
    skills: [
      "React JSX",
      "Javascript",
      "HTML",
      "CSS",
      "RESTful API",
      "Styled-Components",
      "Zustand",
    ],
    link: "https://www.pokestats.info",
    github: "https://github.com/cavisdev/pokestats-react",
  },
  setActiveProject: (obj) => {
      set(() => ({ activeProject: {...obj} }));
  },
}));

export { useStore };
