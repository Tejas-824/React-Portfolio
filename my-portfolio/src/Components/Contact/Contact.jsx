import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
  <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Reach out to me whenever you'd like!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={getImageUrl("email.png")} alt="Email icon" />
        <a href="mailto:myemail@email.com">tejasworld024@gmail.com</a>
      </li>
      <li className={styles.link}>
        <img src={getImageUrl("linkedin.png")} alt="linkedin icon" />
        <a href="https://www.linkedin.com/myname">www.linkedin.com/in/tejaswini-gohil-43751429b</a>
      </li>
      <li className={styles.link}>
        <img src={getImageUrl("github.png")} alt="github icon" />
        <a href="https://www.github.com/myname">github.com/Tejas-824/Tejas-824</a>
      </li>
    </ul>
  </footer>
  )
};
