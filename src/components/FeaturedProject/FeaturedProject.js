import React from "react";
import css from "./featuredProject.module.css";
import image from "../../images/retro.png";

export default function FeaturedProject() {
  return (
    <section className={css.project}>
      <div className={css.projectLeft}>
        <img className={css.projectImage} src={image} alt="something"></img>
        <div className={css.projectLinks}>
          <button className={css.projectLink}>Live demo</button>
          <button className={css.projectLink}>View code</button>
        </div>
      </div>
      <div className={css.projectRight}>
        <h2 className={css.projectTitle}>Project Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo co
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo co
        </p>
        <div className={css.techIconsArea}>
          <div className={css.techIcon}></div>
          <div className={css.techIcon}></div>
          <div className={css.techIcon}></div>
          <div className={css.techIcon}></div>
          <div className={css.techIcon}></div>
        </div>
      </div>
    </section>
  );
}
