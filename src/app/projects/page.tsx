import Card from "@/components/layout/Card/Card";
import styles from "./projects.module.css";
import { arrayProjects } from "@/constant/main";

export default function Projects() {
  return (
    <div className={`container ${styles.projects__section}`}>
      <h2 className={styles.projects__sectionTitle}>My Projects</h2>

      <p className={styles.projects__sectionParagraph}>
        A selection of my most recent works
      </p>

      <div className={styles.projects__container}>
        {arrayProjects.length > 0 &&
          arrayProjects.map((project, i) => (
            <Card
              key={i}
              projectId={project.projectId}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              badgeArray={project.badgeArray}
            />
          ))}
      </div>
    </div>
  );
}
