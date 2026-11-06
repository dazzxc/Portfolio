import { useParams, Link } from "react-router";
import { projects } from "../data/projects.js";
import ProjectInfo from "../components/ProjectDetailsPage/ProjectInfo.jsx";
import ProjectPreview from "../components/ProjectDetailsPage/ProjectPreview.jsx";

import styles from "../components/ProjectDetailsPage/ProjectDetails.module.css";

function ProjectDetailsPage() {
  const { projectId } = useParams();

  const project = projects.find((item) => item.id === Number(projectId));

  if (!project) {
    return (
      <main className={styles.page}>
        <h1>Project not found</h1>
        <Link to="/">Back to Home</Link>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ProjectInfo project={project} />
          <ProjectPreview project={project} />
        </div>
      </div>
    </main>
  );
}

export default ProjectDetailsPage;
