import React from "react";
import css from "./homepage.module.css";
import FeaturedProject from "../FeaturedProject/FeaturedProject";
import ProjectsArea from "../ProjectsArea/ProjectsArea";
import repAppImage from "../../images/Screenshot.png";
import formAppImage from "../../images/signup-screenshot.png";

export default function Homepage() {
  return (
    <div className={css.homepage} id="homepage-top">
      <div className={css.header}>
        <div></div>
        <div className={css.textContainer}>
          <h1>Scott Brown</h1>
          <h2 className={css.subtitle}>Software Developer</h2>
          <p className={css.pitchLandscape}>
            Hi! I'm a full-stack developer with a background in the travel,
            entertainment, and education sectors. I've swapped the life of a
            travelling musician for a different kind of journey into the world
            of technology, and I'm excited to see where this journey takes me!
            Please take a look around at some of the things I've been working
            on...
          </p>
        </div>
      </div>
      <div className={css.pitchPortraitContainer}>
        <p className={css.pitchPortrait}>
          Hi! I'm a full-stack developer with a background in the travel,
          entertainment, and education sectors. I've swapped the life of a
          travelling musician for a different kind of journey into the world of
          technology, and I'm excited to see where this journey takes me! Please
          take a look around at some of the things I've been working on...
        </p>
      </div>

      <h2 className={css.featuredHeader} id="projects">
        Featured Projects
      </h2>
      <FeaturedProject
        image={repAppImage}
        title={"Repertoire Tracker"}
        description={
          "A system to track which pieces of a musician's repertoire have been performed over a given period of time.  Created with Express, and utilising a Postgres database, the system is accessed from a vanilla JavaScript front-end which takes in user input and constructs the appropriate fetch requests from that inputted data.  Visual design aims for a high-contrast dark mode aesthetic appropriate for live use on a dark stage. "
        }
      />
      <FeaturedProject
        image={formAppImage}
        title={"Feedback form helper"}
        description={
          "An app to help fellow bootcamp students keep track of, fill out, and submit their twice-daily bootcamp feedback forms.  The app improves the current workflow of this process whilst keeping the vital Google forms-based data collection tools used by coaching staff.  My primary contributions to the project were in creating the back-end API with Express to query the PostgreSQL database."
        }
      />
      <ProjectsArea />
    </div>
  );
}
