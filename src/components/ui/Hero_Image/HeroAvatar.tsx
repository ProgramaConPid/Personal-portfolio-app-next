import styles from "./image.module.css";

const HeroAvatar = () => {
  return (
    <div className={`hero__avatar ${styles.hero__imageContainer}`}>
      <span className={styles.hero__emoji}>👨‍💻</span>
    </div>
  );
};

export default HeroAvatar;
