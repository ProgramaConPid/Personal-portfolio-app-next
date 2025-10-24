import Badge from "@/components/ui/Badge";
import styles from "./hero.module.css";
import HeroAvatar from "@/components/ui/Hero_Image/HeroAvatar";
import { roboto, montserrat } from "@/app/font/fonts";
import { arraySkills } from "@/utils/utils";
import Button from "@/components/ui/Button";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className={`container ${styles.hero__container}`}>
      <div className={`${styles.hero__texts}`}>
        <p className={`${styles.hero__habilities} ${roboto.className}`}>
          ✨ DEVELOPER - CREATOR - INNOVATIVE
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
          <Button link="/projects" background={"bg-primary"} rightIcon={<GoArrowRight />}>
            Watch projects
          </Button>
          <Button link="/contact" background={"bg-dark"} rightIcon={<GoArrowRight />}>
            Contact me
          </Button>
        </div>

        <div className={`${styles.hero__skills}`}>
          <h5 className={`${styles.hero__skillsTitle}`}>Technologies I use:</h5>
          <div className={`${styles.hero__skillsTechnologies}`}>
            {arraySkills && (
              arraySkills.map((skill, index) => (
                <Badge key={index} text={skill} textColor={"text-foreground"} background={"secondary-color"} />
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
