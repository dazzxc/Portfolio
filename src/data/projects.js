import elzhur from "../assets/elzhur.png";
import harryPotter from "../assets/harry-potter.png";
import portfolio from "../assets/portfolio.png";
import eva from "../assets/eva.png";

export const projects = [
  {
    id: 1,
    title: "Elzhur",
    text: "Educational platform interface built with React.",
    description:
      "An educational platform interface built with React. The project focuses on a clear layout, reusable components and convenient navigation.",
    img: elzhur,
    technologies: ["HTML", "JS", "CSS"],
    link: "https://github.com/mygames5/EduX-E-diary",
  },
  {
    id: 2,
    title: "Portfolio",
    text: "My personal portfolio website.",
    description:
      "My personal portfolio website built with React and Vite. It demonstrates my frontend development skills, component architecture and routing.",
    img: portfolio,
    technologies: ["React", "Vite", "CSS Modules","JS"],
    link: "",
  },
  {
    id: 3,
    title: "Harry Potter site",
    text: "Fan-club site",
    description:
      "A fan-club website dedicated to the Harry Potter universe, featuring a visual interface and content related to the fictional world.",
    img: harryPotter,
    technologies: ["HTML", "JS", "CSS"],
    link: "https://github.com/dazzxc/Harry-potter-site",
  },
];
