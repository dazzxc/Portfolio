import styles from "./ProjectInfo.module.css";
import Button from "../Button.jsx";

function ProjectInfo({ project }) {
  return (
    <div className={styles.info}>
      <span className={styles.label}>PROJECT DETAILS</span>

      <h1 className={styles.title}>{project.title}</h1>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.tags}>
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className={styles.actions}>
        <Button buttonText="Back to home" to="/" />

        {project.link && (
          <Button
            link={project.link}
            buttonText="View"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProjectInfo;
