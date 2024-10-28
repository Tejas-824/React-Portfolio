import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils"; 

export const Hero =()=> {
return (
     <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Tejaswini Gohil</h1>
        <p className={styles.description}> I am a Frontend Developer specializing in React, creating responsive, user-friendly web applications. Interested in working together? Let's connect!</p>
        <a href="mailto:myemail@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("profile.png")} alt="image" className={styles.heroImg}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
</section>
)
};