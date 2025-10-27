// Enable client-side rendering for this page
"use client";

// Animation library
import { motion } from "framer-motion";
// Card component for displaying project info
import Card from "@/components/ui/Card/Card";
// CSS module for styling
import styles from "./projects.module.css";
// Array of project data
import { arrayProjects } from "@/constant/main";
// Custom fonts
import { montserrat, roboto } from "../../font/fonts";
// Animated background particles
import BackgroundParticles from "@/components/ui/BackgroundParticles";

// Projects page component
export default function Projects() {
  return (
    // Main section for projects page with background and padding
    <section className="relative overflow-hidden py-20">
      <div className={`container ${styles.projects__section}`}>
        {/* Animated background particles */}
        <BackgroundParticles />

        {/* Page title with animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className={`${styles.projects__sectionTitle} ${montserrat.className}`}
        >
          My Projects
        </motion.h2>

        {/* Subtitle/paragraph with animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className={`${styles.projects__sectionParagraph} ${roboto.className}`}
        >
          A selection of my most recent works
        </motion.p>

        {/* Grid of project cards */}
        <div className={styles.projects__container}>
          {arrayProjects.length > 0 &&
            arrayProjects.map((project, i) => (
              // Animate each card as it appears
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
                {/* Card component for each project */}
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
