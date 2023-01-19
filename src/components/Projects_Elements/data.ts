type Data = {
    projects: Array<Project>;
}

type Project = {
    name: string;
    image: string;
    description: string;
    skills: Array<string>;
    link: string;
    github: string;
}

const data: Data = {
  projects: [
    {
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
    {
      name: "Stone Valley",
      image: "./images/SVB_Preview.jpg",
      description:
        "Stone Valley Bakery was a project for a fictional bakery. My goal was to design a website for a local business, as an online storefront complete with a menu and ordering system. Through this project, I pushed myself to learn more TypeScript and how to write the language in context of Styled-Components and Zustand.",
      skills: [
        "React JSX",
        "Typescript",
        "HTML",
        "CSS",
        "Styled-Components",
        "Zustand",
        "Embla Carousel",
      ],
      link: "https://github.com/cavisdev/stone-valley-bakery",
      github: "https://github.com/cavisdev/stone-valley-bakery",
        },
    ],
};

export { data };
