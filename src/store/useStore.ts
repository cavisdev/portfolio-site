import { create } from "zustand";
import { data } from "../components/Projects_Elements/data";

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
  activeProject: data.projects[0],
  setActiveProject: (obj) => {
      set(() => ({ activeProject: {...obj} }));
  },
}));

export { useStore };
