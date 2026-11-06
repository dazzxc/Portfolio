import { useEffect } from "react";

const ScrollSpy = ({ menuItems, setActiveSection }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = "";

      menuItems.forEach((item) => {
        const sectionId = item.href.substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sectionId;
          }
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        currentSection = menuItems[menuItems.length - 1].href.substring(1);
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Вызываем сразу при загрузке

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems, setActiveSection]);

  return null;
};

export default ScrollSpy;
