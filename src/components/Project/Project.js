import React from "react";
import css from "./Project.module.css";
import image from "../../images/dude_128.png";

export default function Project() {
  return (
    <div className={css.projectCard}>
      <div className={css.cardTop}>
        <div className={css.projectImage}>
          <img src={image} alt="some-description" />
        </div>
        <div className={css.projectText}>
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo co
          </p>
        </div>
      </div>

      <div className={css.projectLinks}>
        <button className={css.projectLink}>Live demo</button>
        <button className={css.projectLink}>View code</button>
      </div>
    </div>
  );
}
