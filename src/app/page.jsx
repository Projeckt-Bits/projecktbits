import Image from "next/image";
import styles from "./page.module.scss";
import TaskBar from "../app/components/taskbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <TaskBar />
      <h2>Hello World!</h2>
    </main>
  );
}
