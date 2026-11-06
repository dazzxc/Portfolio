import styles from "./ProjectPreview.module.css";

function ProjectPreview({ project }) {
  return (
    <div className={styles.imageWrapper}>
      <img
        className={styles.previewImage}
        src={project.img}
        alt={project.title}
      />
    </div>
  );
}

export default ProjectPreview;
