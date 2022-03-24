import React from "react";
import css from "./Project.module.css";

export default function Project({ project }) {
  const { title, screenshot, codeLink, liveLink, description } = project;

  const photourl = screenshot;
  console.log(photourl);

  return (
    <div className={css.projectCard}>
      <div className={css.cardTop}>
        <div className={css.projectImageDiv}>
          <img
            src={screenshot}
            alt="some-description"
            className={css.projectImage}
          />
        </div>
        <div className={css.projectText}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className={css.projectLinks}>
        <a href={liveLink} target="_blank" rel="noreferrer noopener">
          <button className={css.projectLink}>Live demo</button>
        </a>
        <a href={codeLink} target="_blank" rel="noreferrer noopener">
          <button className={css.projectLink}>View code</button>
        </a>
      </div>
    </div>
  );
}
