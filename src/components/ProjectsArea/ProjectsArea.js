import React from "react";
import Project from "../Project/Project";
import css from "./ProjectsArea.module.css";
import projects from "../../data/projectsData";

export default function ProjectsArea() {
  return (
    <div>
      <h2 className={css.others}>Other Projects</h2>
      <div className={css.projectsContainer}>
        {projects.map((project) => {
          return <Project project={project} />;
        })}
      </div>
    </div>
  );
}
