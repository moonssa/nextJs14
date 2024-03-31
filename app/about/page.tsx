import styles from "../../styles/about.module.css";
export const metadata = {
  title: "About",
};
export default function About() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>About us</h3>
      <div className={styles.categories}>
        <span>
          Welcome to the official for the NewYork Times Best Seller list
          Explore.
        </span>
        <span>We Hope you enjoy your stay!</span>
      </div>
    </div>
  );
}
