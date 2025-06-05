import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={`${styles.header}`}>
      <h1 className={`${styles.logo}`}>To-Do</h1>
    </div>
  );
}
