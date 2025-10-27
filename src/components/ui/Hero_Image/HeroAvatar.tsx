// Import CSS module for avatar image styling
import styles from "./image.module.css";

/**
 * HeroAvatar component displays a styled avatar with an emoji.
 * Used in the hero section for visual emphasis.
 */
const HeroAvatar = () => {
  return (
    // Container for the avatar image and emoji
    <div className={`hero__avatar ${styles.hero__imageContainer}`}>
      {/* Emoji representing the developer */}
      <span className={styles.hero__emoji}>👨‍💻</span>
    </div>
  );
};

// Export the HeroAvatar component for use in hero sections
export default HeroAvatar;
