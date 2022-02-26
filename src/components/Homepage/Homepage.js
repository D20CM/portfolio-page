import React from "react";
import css from "./homepage.module.css";
import FeaturedProject from "../FeaturedProject/FeaturedProject";
import ProjectsArea from "../ProjectsArea/ProjectsArea";

export default function Homepage() {
  return (
    <div className={css.homepage}>
      <div className={css.header}>
        <div></div>
        <div className={css.textContainer}>
          <h1>Scott Brown</h1>
          <h2 className={css.subtitle}>Software Developer</h2>
          <p className={css.pitchLandscape}>
            Hi! I'm a full-stack developer with a background in the travel,
            entertainment, and education sectors. I've swapped the life of a
            travelling musician for a different kind of journey into the world
            of technology, and I'm excited to see where this journey takes me.
          </p>
        </div>
      </div>
      <div className={css.pitchPortraitContainer}>
        <p className={css.pitchPortrait}>
          Hi! I'm a full-stack developer with a background in the travel,
          entertainment, and education sectors. I've swapped the life of a
          travelling musician for a different kind of journey into the world of
          technology, and I'm excited to see where this journey takes me.
        </p>
      </div>

      <h2>Featured Projects</h2>
      <FeaturedProject />
      <FeaturedProject />
      {/* <ProjectsArea /> */}
    </div>
  );
}
