import { create } from "zustand";
import { data } from "../projects/data";

type Project = {
    name: string;
    image: string;
    description: string;
    skills: Array<string>;
    link: string;
    github: string;
}

interface State {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: () => void;
  activeProject: Project;
  setActiveProject: (obj: Project) => void;
}

const useStore = create<State>()((set, get) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: () => {
    set(() => ({ mobileMenuOpen: !get().mobileMenuOpen }));
  },
  activeProject: data.projects[0],
  setActiveProject: (obj) => {
      set(() => ({ activeProject: {...obj} }));
  },
}));

export { useStore };
