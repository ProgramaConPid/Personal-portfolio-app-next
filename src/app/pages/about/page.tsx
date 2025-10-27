"use client";

import { motion } from "framer-motion";
import styles from "./about.module.css";
import { FaCode } from "react-icons/fa6";
import { TiLightbulb } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import Badge from "@/components/ui/Badge";
import { roboto, montserrat } from "@/app/font/fonts";
import BackgroundParticles from "@/components/ui/BackgroundParticles";

export default function About() {
  return (
    <motion.div
      className={`container ${styles.about__container}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      <BackgroundParticles />
      <motion.h2
        className={`${styles.about__title} ${montserrat.className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className={styles.about__paragraph}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Learn more about my background and skills.
      </motion.p>

      <motion.div
        className={styles.container__boxes}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.div
          className={`${styles.primary__box} ${styles.box}`}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(6,182,212,0.2)",
          }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.box__header}>
            <figure className={styles.icon__containerCode}>
              <FaCode
                className={`${styles.box__icon} ${styles.box__iconCode}`}
              />
            </figure>
            <h3 className={styles.box__headerTitle}>Who I am</h3>
          </div>

          <div className={`${styles.box__containerTexts} ${roboto.className}`}>
            <p className={styles.box__text}>
              I&apos;m a full-stack developer passionate about building modern,
              scalable web applications. With experience in both front- and
              back-end technologies, I specialize in building complete solutions
              from the user interface to the server architecture.
            </p>
            <p className={styles.box__text}>
              My focus is on writing clean, maintainable, and efficient code,
              always looking for best practices and the latest trends in web
              development. I love learning new technologies and tackling complex
              technical challenges.
            </p>
            <p className={styles.box__text}>
              Throughout my career, I&apos;ve worked on a variety of projects
              ranging from interactive web applications to real-time systems
              using WebSockets, always prioritizing user experience and
              performance.
            </p>
          </div>
        </motion.div>

        {/* Box 2 - Habilities */}
        <motion.div
          className={`${styles.secondary__box} ${styles.box}`}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(99,102,241,0.2)",
          }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.box__header}>
            <figure className={styles.icon__containerLight}>
              <TiLightbulb
                className={`${styles.box__icon} ${styles.box__iconLight}`}
              />
            </figure>
            <h3 className={styles.box__headerTitle}>Habilities</h3>
          </div>

          <p className={styles.box__text}>Technologies and tools I work with</p>

          <div className={styles.box__containerHabilities}>
            {/* Frontend */}
            <div className={styles.box__habilities}>
              <h3 className={styles.box__habilitiesTitle}>Frontend</h3>
              <div className={styles.habilities}>
                {["React", "Next.js", "Typescript", "TailwindCSS"].map(
                  (skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Badge
                        text={skill}
                        textColor={"text-primary-color"}
                        background={"primary-bg"}
                      />
                    </motion.div>
                  )
                )}
              </div>
            </div>

            {/* Backend */}
            <div className={styles.box__habilities}>
              <h3 className={styles.box__habilitiesTitle}>Backend</h3>
              <div className={styles.habilities}>
                {["Node.js", "Express", "MongoDB", "MySQL"].map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Badge
                      text={skill}
                      textColor={"text-secondary-color"}
                      background={"secondary-bg"}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className={styles.box__habilities}>
              <h3 className={styles.box__habilitiesTitle}>Tools</h3>
              <div className={styles.habilities}>
                {["Git", "WebSockets", "REST APIs", "Figma"].map((tool, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                  >
                    <Badge
                      text={tool}
                      textColor={"text-accent-color"}
                      background={"accent-bg"}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Box 3 - Motivation */}
        <motion.div
          className={`${styles.accent__box} ${styles.box}`}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(6,182,212,0.25)",
          }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.box__header}>
            <figure className={styles.icon__containerHeart}>
              <FaRegHeart
                className={`${styles.box__icon} ${styles.box__iconHeart}`}
              />
            </figure>
            <h3 className={styles.box__headerTitle}>What motivates me</h3>
          </div>

          <div className={`${styles.box__containerTexts} ${roboto.className}`}>
            <p className={styles.box__text}>
              I&apos;m passionate about technology and its ability to transform
              ideas into reality. Seeing how a line of code can become a useful
              application that improves people&apos;s lives is what drives me
              every day.
            </p>
            <p className={styles.box__text}>
              I enjoy the creative process of solving complex problems and
              finding elegant solutions. The developer community and the culture
              of continuous learning in the tech world are aspects I deeply
              value.
            </p>
            <p className={styles.box__text}>
              My goal is to keep growing as a developer, contribute to
              meaningful projects, and collaborate with teams that share my
              passion for software excellence.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
