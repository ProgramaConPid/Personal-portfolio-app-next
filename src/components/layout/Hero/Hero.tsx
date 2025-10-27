// Enable client-side rendering for this component
"use client";

// Animation library
import { motion } from "framer-motion";
// Badge component for displaying skills
import Badge from "@/components/ui/Badge";
// CSS module for styling
import styles from "./hero.module.css";
// Avatar image component
import HeroAvatar from "@/components/ui/Hero_Image/HeroAvatar";
// Custom fonts
import { roboto, montserrat } from "@/app/font/fonts";
// Array of skills/technologies
import { arraySkills } from "@/constant/main";
// Button component
import Button from "@/components/ui/Button";
// Arrow icon for buttons
import { GoArrowRight } from "react-icons/go";
// Animated background particles
import BackgroundParticles from "@/components/ui/BackgroundParticles";

// Hero section component for the portfolio landing page
const Hero = () => {
  return (
    // Main container with fade-in animation
    <motion.div
      className={`container ${styles.hero__container}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated background particles */}
      <BackgroundParticles />

      {/* Text content section with slide-in animation */}
      <motion.div
        className={styles.hero__texts}
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Subtitle with animation */}
        <motion.p
          className={`${styles.hero__habilities} ${roboto.className}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ✨ DEVELOPER - CREATOR - INNOVATIVE
        </motion.p>

        {/* Main title with animated name highlight */}
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

        {/* Info section: position and description */}
        <motion.div
          className={styles.hero__info}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Job position */}
          <h3 className={`${styles.hero__position} ${montserrat.className}`}>
            Fullstack Developer
          </h3>

          {/* Short bio/description */}
          <p className={styles.hero__paragraph}>
            I build modern, scalable web applications using the latest
            technologies. I&apos;m passionate about front- and back-end
            development, focusing on creating exceptional user experiences.
          </p>
        </motion.div>

        {/* Action buttons: projects and contact */}
        <motion.div
          className={styles.hero__buttons}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Button to view projects */}
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

          {/* Button to contact */}
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

        {/* Skills section: list of technologies used */}
        <motion.div
          className={styles.hero__skills}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h5 className={styles.hero__skillsTitle}>Technologies I use:</h5>
          <div className={styles.hero__skillsTechnologies}>
            {/* Map through arraySkills to display each skill as a badge */}
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

      {/* Avatar image with slide-in animation */}
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

// Export Hero component as default
export default Hero;
