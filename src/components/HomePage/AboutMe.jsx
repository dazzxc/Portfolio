import { useEffect, useRef, useState } from "react";
import styles from "./AboutMe.module.css";

const AboutMe = ({
  title,
  subtitle,
  intro,
  coreStack,
  experience,
  softSkills,
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    },
    {
      threshold: 0.3,
    },
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

  return (
    <section id="AboutMe" ref={sectionRef} className={styles.about}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.intro}>{intro}</p>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3>Core Stack</h3>
            <ul>
              {coreStack.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h3>Experience</h3>
            <ul>
              {experience.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}:</strong> {item.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.softSkills}>
          <strong>Soft Skills:</strong> {softSkills}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
