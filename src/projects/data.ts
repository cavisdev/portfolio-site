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
      image: "./images/Pokestats_Preview.webp",
      description:
        "Pokestats.info is a passion project, built out of my love for the Pokemon video game franchise. I often found myself looking up the statistics of Pokemon in my spare time, but most websites make it difficult to quickly compare those stats. I went into this project with the goal of creating a layout where it would be much quicker and easier to make those comparisons, deepening my API knowledge and learning about web workers along the way.",
      skills: [
        "React JS",
        "Javascript",
        "HTML",
        "CSS",
        "REST",
        "UI/UX",
        "styled-components",
        "zustand",
        "Web Workers"
      ],
      link: "https://www.pokestats.info",
      github: "https://github.com/cavisdev/pokestats-react",
    },
    {
      name: "Stone Valley",
      image: "./images/SVB_Preview.webp",
      description:
        "Stone Valley Bakery was a project for a fictional bakery. My goal was to design a virtual storefront for a local business, complete with a menu and ordering system. Through this project, I pushed myself to learn more TypeScript and how to write the language within the context of styled-components and zustand.",
      skills: [
        "React JS",
        "Typescript",
        "HTML",
        "CSS",
        "UI/UX",
        "React Router",
        "styled-components",
        "zustand",
        "Embla Carousel",
      ],
      link: "https://stonevalley.netlify.app/",
      github: "https://github.com/cavisdev/stone-valley-bakery",
    },
    {
      name: "Photomaster",
      image: "./images/Photomaster_Preview.webp",
      description:
        "I built this site as a CSS study, with the goal of recreating the old children's toy 'Viewmaster'. The layout was made to be simple, as to place most of my focus on responsiveness and animation.",
      skills: [
        "React JS",
        "TypeScript",
        "HTML",
        "CSS",
        "styled-components",
        "zustand",
      ],
      link: "https://photomaster.netlify.app/",
      github: "https://github.com/cavisdev/password-generator",
        },
    {
      name: "Password Generator",
      image: "./images/PassGen_Preview.webp",
      description:
        "This password generator was a simple school project I decided to rebuild within the React framework. I appreciate how useful this is as a tool, and wanted to test my coding knowledge to make this app simpler than my first JS pass.",
      skills: [
        "React JS",
        "JavaScript",
        "HTML",
        "CSS",
        "Styled-Components",
        "Zustand",
      ],
      link: "https://cavis-passgen.netlify.app/",
      github: "https://github.com/cavisdev/password-generator",
        },
    ],
};

export { data };
