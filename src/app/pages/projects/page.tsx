"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card/Card";
import styles from "./projects.module.css";
import { arrayProjects } from "@/constant/main";
import { montserrat, roboto } from "../../font/fonts";
import BackgroundParticles from "@/components/ui/BackgroundParticles";

export default function Projects() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className={`container ${styles.projects__section}`}>
        <BackgroundParticles />
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className={`${styles.projects__sectionTitle} ${montserrat.className}`}
        >
          My Projects
        </motion.h2>

        {/* Párrafo */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className={`${styles.projects__sectionParagraph} ${roboto.className}`}
        >
          A selection of my most recent works
        </motion.p>

        {/* Grid de tarjetas */}
        <div className={styles.projects__container}>
          {arrayProjects.length > 0 &&
            arrayProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card
                  projectId={project.projectId}
                  imageUrl={project.imageUrl}
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                  badgeArray={project.badgeArray}
                />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
