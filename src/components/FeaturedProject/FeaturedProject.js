import React from "react";
import css from "./featuredProject.module.css";
// import image from "../../images/Screenshot.png";

export default function FeaturedProject({
  title,
  image,
  description,
  technologies,
}) {
  return (
    <>
      <section className={css.project}>
        <div className={css.projectLeft}>
          <img className={css.projectImage} src={image} alt="something"></img>
          <div className={css.projectLinks}>
            <button className={css.projectLink}>Live demo</button>
            <button className={css.projectLink}>View code</button>
          </div>
        </div>
        <div className={css.projectRight}>
          <h2 className={css.projectTitle}>{title}</h2>
          <p>{description}</p>
          <div className={css.techIconsArea}>
            <div className={css.techIcon}></div>
            <div className={css.techIcon}></div>
            <div className={css.techIcon}></div>
            <div className={css.techIcon}></div>
            <div className={css.techIcon}></div>
          </div>
        </div>
      </section>
      <hr className={css.projectSeperator} />
    </>
  );
}
