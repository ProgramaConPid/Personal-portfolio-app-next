import { ProjectProps } from "@/interfaces/main";
import Badge from "@/components/ui/Badge";
import styles from "./card.module.css";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { LuGithub } from "react-icons/lu";
import { FaExternalLinkAlt } from "react-icons/fa";
import { montserrat, roboto } from "@/app/font/fonts";

const Card = ({
  projectId,
  imageUrl,
  title,
  description,
  githubLink,
  demoLink,
  badgeArray,
}: ProjectProps) => {
  return (
    <div id={String(projectId)} className={styles.project__card}>
      <Image className={styles.project__image} src={imageUrl} alt="Project Image" height={100} width={600} />

      <div className={styles.project__cardInfo}>
        <h2 className={`${styles.card__infoTitle} ${montserrat.className}`}>{title}</h2>

        <p className={`${styles.card__infoParagraph} ${roboto.className}`}>{description}</p>

        <div className={styles.card__infoTechnologies}>
          {badgeArray.map((badge, i) => (
            <Badge
              key={i}
              text={badge.text}
              textColor={badge.textColor}
              background={badge.background}
            />
          ))}
        </div>
      </div>

      <div className={styles.project__cardButtons}>
        <Button
          leftIcon={<LuGithub className={styles.button__icon} />}
          background={"bg-dark"}
          link={githubLink}
          flex="flex-1"
        >
          GitHub
        </Button>
        <Button
          leftIcon={<FaExternalLinkAlt className={styles.button__icon} />}
          background={"bg-primary"}
          link={demoLink}
          flex="flex-1"
        >
          Demo
        </Button>
      </div>
    </div>
  );
};

export default Card;
