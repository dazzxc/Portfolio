import styles from "./Projects.module.css";
import { projects } from "../../data/projects.js";
import Button from "../Button.jsx";

const Card = ({ id, title, text, img, link }) => {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={img} alt={title} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{text}</p>
        <Button buttonText="View Project" to={`/projects/${id}`} />
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="My Projects" className={styles.container}>
      <h2>My Projects</h2>
      <div className={styles.cards}>
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            title={project.title}
            text={project.text}
            img={project.img}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
