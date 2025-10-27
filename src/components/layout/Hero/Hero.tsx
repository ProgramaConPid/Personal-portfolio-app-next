"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import styles from "./hero.module.css";
import HeroAvatar from "@/components/ui/Hero_Image/HeroAvatar";
import { roboto, montserrat } from "@/app/font/fonts";
import { arraySkills } from "@/constant/main";
import Button from "@/components/ui/Button";
import { GoArrowRight } from "react-icons/go";
import BackgroundParticles from "@/components/ui/BackgroundParticles";

const Hero = () => {
  return (
    <motion.div
      className={`container ${styles.hero__container}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <BackgroundParticles />

      <motion.div
        className={styles.hero__texts}
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className={`${styles.hero__habilities} ${roboto.className}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ✨ DEVELOPER - CREATOR - INNOVATIVE
        </motion.p>

        <motion.h2
          className={`${styles.hero__title} ${montserrat.className}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hello, I&apos;m{" "}
          <motion.span
            className={styles.hero__titleModifier}
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 15px rgba(99,102,241,0.6)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Felipe Marin
          </motion.span>
        </motion.h2>

        <motion.div
          className={styles.hero__info}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className={`${styles.hero__position} ${montserrat.className}`}>
            Fullstack Developer
          </h3>

          <p className={styles.hero__paragraph}>
            I build modern, scalable web applications using the latest
            technologies. I&apos;m passionate about front- and back-end
            development, focusing on creating exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          className={styles.hero__buttons}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              link="/pages/projects"
              background="bg-primary"
              rightIcon={<GoArrowRight />}
            >
              Watch projects
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              link="/pages/contact"
              background="bg-dark"
              rightIcon={<GoArrowRight />}
            >
              Contact me
            </Button>
          </motion.div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className={styles.hero__skills}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h5 className={styles.hero__skillsTitle}>Technologies I use:</h5>
          <div className={styles.hero__skillsTechnologies}>
            {arraySkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
              >
                <Badge
                  text={skill}
                  textColor="text-foreground"
                  background="secondary-color"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <HeroAvatar />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
