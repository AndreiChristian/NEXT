import React from "react";
import styles from "../../styles/pagesStyles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.about__heading}>About Me</h1>
      <div className={styles.about__content}>
        <p>
          {` Hi there! I'm a full stack developer who loves to code and dogs.
          Pupper Palette is a product of these two passions. My goal is to
          provide a platform for dog lovers and artists to celebrate the beauty
          of our four-legged friends through digital art.`}
        </p>
        <p>
          {`When I'm not coding or playing with dogs, you'll find me exploring new
          places, reading a good book, or experimenting with new technologies.`}
        </p>
      </div>
      <div className={styles.about__contact}>
        <h2 className={styles.about__subheading}>Contact Me</h2>
        <ul>
          <li>
            <a href="mailto:your-email@example.com">
              Email: your-email@example.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              Github: yourusername
            </a>
          </li>
          {/* Add other contact details as needed */}
        </ul>
      </div>
    </div>
  );
};

export default About;
