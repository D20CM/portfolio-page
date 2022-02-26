import React from "react";
import Project from "../Project/Project";
import css from "./ProjectsArea.module.css";

export default function ProjectsArea() {
  return (
    <div>
      <h2>Projects</h2>
      <div className={css.projectsContainer}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
