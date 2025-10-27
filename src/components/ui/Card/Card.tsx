// Import the ProjectProps interface for type safety
import { ProjectProps } from "@/interfaces/main";
// Import Badge component for technology tags
import Badge from "@/components/ui/Badge";
// Import CSS module for scoped styles
import styles from "./card.module.css";
// Import Next.js Image component for optimized images
import Image from "next/image";
// Import reusable Button component
import Button from "@/components/ui/Button";
// Import GitHub and external link icons
import { LuGithub } from "react-icons/lu";
import { FaExternalLinkAlt } from "react-icons/fa";
// Import custom fonts for styling
import { montserrat, roboto } from "@/app/font/fonts";

/**
 * Card component to display portfolio project details.
 * Shows project image, title, description, technology badges, and action buttons.
 * @param projectId - Unique identifier for the project
 * @param imageUrl - URL of the project's image
 * @param title - Project title
 * @param description - Project description
 * @param githubLink - Link to the project's GitHub repository
 * @param demoLink - Link to the live demo
 * @param badgeArray - Array of technology badges
 */
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
    // Main card container with unique ID and styles
    <div id={String(projectId)} className={styles.project__card}>
      {/* Project image at the top of the card */}
      <Image
        className={styles.project__image}
        src={imageUrl}
        alt="Project Image"
        height={100}
        width={600}
      />

      {/* Card info section: title, description, technologies */}
      <div className={styles.project__cardInfo}>
        {/* Project title with custom font */}
        <h2 className={`${styles.card__infoTitle} ${montserrat.className}`}>
          {title}
        </h2>

        {/* Project description with custom font */}
        <p className={`${styles.card__infoParagraph} ${roboto.className}`}>
          {description}
        </p>

        {/* Technology badges displayed in a flex container */}
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

      {/* Action buttons for GitHub and Demo links */}
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

// Export the Card component for use in project listings
export default Card;
