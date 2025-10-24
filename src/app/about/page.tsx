import styles from "./about.module.css";
import { FaCode } from "react-icons/fa6";
import { TiLightbulb } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import Badge from "@/components/ui/Badge";
import { roboto, montserrat } from "@/app/font/fonts";

export default function About() {
  return (
    <div className={`container ${styles.about__container}`}>
      <h2 className={`${styles.about__title} ${montserrat.className}`}>
        About Me
      </h2>

      <p className={styles.about__paragraph}>
        Learn more about my background and skills.
      </p>

      <div className={styles.container__boxes}>
        <div className={`${styles.primary__box} ${styles.box}`}>
          <div className={styles.box__header}>
            <figure className={styles.icon__containerCode}>
              <FaCode className={`${styles.box__icon} ${styles.box__iconCode}`} />
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
        </div>
        <div className={`${styles.secondary__box} ${styles.box}`}>
          <div className={styles.box__header}>
            <figure className={styles.icon__containerLight}>
              <TiLightbulb className={`${styles.box__icon} ${styles.box__iconLight}`} />
            </figure>
            <h3 className={styles.box__headerTitle}>Habilities</h3>
          </div>

          <p className={styles.box__text}>Technologies and tools I work with</p>

          <div className={styles.box__containerHabilities}>
            <div className={styles.box__habilities}>
              <h3 className={styles.box__habilitiesTitle}>Frontend</h3>
              <div className={styles.habilities}>
                <Badge
                  text="React"
                  textColor={"text-primary-color"}
                  background={"primary-bg"}
                />
                <Badge
                  text="Next.js"
                  textColor={"text-secondary-color"}
                  background={"secondary-bg"}
                />
                <Badge
                  text="Typescript"
                  textColor={"text-accent-color"}
                  background={"accent-bg"}
                />
                <Badge
                  text="TailwindCSS"
                  textColor={"text-primary-color"}
                  background={"primary-bg"}
                />
              </div>
            </div>
            <div className={styles.box__habilities}>
              <h3 className={styles.box__habilitiesTitle}>Backend</h3>
              <div className={styles.habilities}>
                <Badge
                  text="Node.js"
                  textColor={"text-primary-color"}
                  background={"primary-bg"}
                />
                <Badge
                  text="Express"
                  textColor={"text-secondary-color"}
                  background={"secondary-bg"}
                />
                <Badge
                  text="MongoDB"
                  textColor={"text-accent-color"}
                  background={"accent-bg"}
                />
                <Badge
                  text="MySQL"
                  textColor={"text-primary-color"}
                  background={"primary-bg"}
                />
              </div>
            </div>
            <div className={styles.box__habilities}>
              <h3 className={styles.box__habilitiesTitle}>Tools</h3>
              <div className={styles.habilities}>
                <Badge
                  text="Git"
                  textColor={"text-primary-color"}
                  background={"primary-bg"}
                />
                <Badge
                  text="WebSockets"
                  textColor={"text-secondary-color"}
                  background={"secondary-bg"}
                />
                <Badge
                  text="REST APIs"
                  textColor={"text-accent-color"}
                  background={"accent-bg"}
                />
                <Badge
                  text="Figma"
                  textColor={"text-primary-color"}
                  background={"primary-bg"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.accent__box} ${styles.box}`}>
          <div className={styles.box__header}>
            <figure className={styles.icon__containerHeart}>
              <FaRegHeart className={`${styles.box__icon} ${styles.box__iconHeart}`} />
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
              Mi objetivo es seguir creciendo como desarrollador, contribuir a
              proyectos significativos y colaborar con equipos que compartan mi
              pasión por la excelencia en el desarrollo de software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}