import React from "react";
import styles from "./About.module.css"; 
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
   <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img src={getImageUrl("about.png")} alt="working img" className={styles.aboutImg} />
      <ul className={styles.aboutItems}>

        <li className={styles.aboutItem}>
          <img src={getImageUrl("click.png")} alt="cursor" className={styles.aboutImg} />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>I am a frontend developer and i make responsive and optimized sites.</p>
          </div>
     </li>

     <li className={styles.aboutItem}>
          <img src={getImageUrl("server.png")} alt="server" className={styles.aboutImg}/>
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>I can develop fast and optimized APIs.</p>
          </div>
     </li>

     <li className={styles.aboutItem}>
     <img src={getImageUrl("click.png")} alt="cursor" className={styles.aboutImg} />
          <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
            <p>I have created Design system.</p>
          </div>
     </li>
      </ul>
      </div>
   </section>
  )
};