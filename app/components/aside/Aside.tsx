"use client";
import Link from "next/link";
import styles from "./Aside.module.scss";

export default function Aside() {
  return (
    <aside className={styles.AsideContainer}>
      <div className={styles.asideContent}>
        <div className={styles.logo}></div>
        <h1 className={styles.heading}>To-Do List</h1>
      </div>
      <nav className={styles.menuContainer}>
        <ul className={styles.menuLists}>
          <li className={styles.listItem}>
            <Link href="/">Dashboard</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/project">Project</Link>
             
          </li>
          <li className={styles.listItem}>Product</li>
          <li className={styles.listItem}>Order</li>
          <li className={styles.listItem}>Chat</li>
        </ul>
      </nav>
    </aside>
  );
}
