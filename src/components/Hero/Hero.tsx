import Badge from "../ui/Badge";
import styles from "./hero.module.css";
import HeroAvatar from "@/components/ui/Hero_Image/HeroAvatar";
import { roboto, montserrat } from "@/app/font/fonts";
import { arraySkills } from "@/interfaces/main";

const Hero = () => {
  return (
    <div className={`container ${styles.hero__container}`}>
      <div className={`${styles.hero__texts}`}>
        <p className={`${styles.hero__habilities} ${roboto.className}`}>
          ✨ DEVELOPER - CREADOR - INNOVADOR
        </p>

        <h2 className={`${styles.hero__title} ${montserrat.className}`}>
          Hello, I&apos;am <span className={`${styles.hero__titleModifier}`}>Felipe Marin</span>
        </h2>

        <div className={`${styles.hero__info}`}>
          <h3 className={`${styles.hero__position} ${montserrat.className}`}>
            Fullstack Developer
          </h3>

          <p className={`${styles.hero__paragraph}`}>
            I build modern, scalable web applications using the latest
            technologies. I&apos;m passionate about front- and back-end
            development, focusing on creating exceptional user experiences.
          </p>
        </div>

        <div className={`${styles.hero__buttons}`}>
          <button
            className={`${styles.hero__button} ${styles.hero__buttonProjects}`}
          >
            Watch projects
          </button>
          <button
            className={`${styles.hero__button} ${styles.hero__buttonContact}`}
          >
            Contact me
          </button>
        </div>

        <div className={`${styles.hero__skills}`}>
          <h5 className={`${styles.hero__skillsTitle}`}>Technologies I use:</h5>
          <div className={`${styles.hero__skillsTechnologies}`}>
            {arraySkills && (
              arraySkills.map((skill, index) => (
                <Badge key={index} text={skill} />
              ))
            )}
          </div>
        </div>
      </div>

      <HeroAvatar />
    </div>
  );
};

export default Hero;
