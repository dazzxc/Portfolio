import { useState } from "react";

import Navbar from "../components/HomePage/navbar.jsx";
import MainSection from "../components/HomePage/MainSection.jsx";
import AboutMe from "../components/HomePage/AboutMe.jsx";
import ScrollSpy from "../components/HomePage/ScrollSpy.jsx";
import Projects from "../components/HomePage/Projects.jsx";
import Contacts from "../components/HomePage/Contacts.jsx";

function HomePage() {
  const menuItems = [
    { id: 1, title: "Home", href: "#MainSection" },
    { id: 2, title: "About me", href: "#AboutMe" },
    { id: 3, title: "My Projects", href: "#My Projects" },
    { id: 4, title: "Contacts", href: "#Contacts" },
  ];

  const [activeSection, setActiveSection] = useState("MainSection");

  return (
    <>
      <ScrollSpy menuItems={menuItems} setActiveSection={setActiveSection} />

      <Navbar menuItems={menuItems} activeSection={activeSection} />

      <MainSection
        title="Hi my name Artem Dudarew"
        description="I'm Web-Developer from Russia"
        buttonText="Contact me"
        buttonTextAbout="About me"
      />

      <AboutMe
        title="Artem Dudarev — Frontend Developer (React)"
        subtitle="3rd-year student at RANEPA (West Branch). I build web applications with React and Vite."
        intro="I specialize in building responsive, user-friendly web applications from scratch using React and Vite."
        coreStack={[
          "React (Hooks, Component Architecture)",
          "JavaScript (ES6+)",
          "HTML, CSS, SCSS",
          "Git workflow & Team collaboration",
        ]}
        experience={[
          {
            title: "My Portfolio",
            desc: "Built from scratch with React + Vite. Implemented filtering and responsive UI.",
          },
          {
            title: "Elzhur",
            desc: "Collaborated in a team, responsible for layout and reusable components.",
          },
          {
            title: "Harry Potter Fan Site",
            desc: "Thematic fan-club interface with a magical atmosphere, smooth animations, and fully responsive design.",
          },
        ]}
        softSkills="Fast learner • Detail-oriented • Team player • Proactive"
      />

      <Projects />
      <Contacts />
    </>
  );
}

export default HomePage;
