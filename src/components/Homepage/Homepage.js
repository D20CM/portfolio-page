import React from "react";
import css from "./homepage.module.css";
import FeaturedProject from "../FeaturedProject/FeaturedProject";
import ProjectsArea from "../ProjectsArea/ProjectsArea";
import repAppImage from "../../images/Screenshot.png";
import formAppImage from "../../images/signup-screenshot.png";
import Contact from "../Contact/Contact";
import mentorsPage from "../../images/mentorsPage.PNG";
import CVandSocials from "../CVandSocials/CVandSocials";

export default function Homepage() {
  return (
    <div className={css.homepage} id="homepage-top">
      <div className={css.header}>
        <div className={css.textContainer}>
          <h1>Scott Brown</h1>
          <h2 className={css.subtitle}>Software Developer</h2>
          <p className={css.pitchLandscape}>
            Hi! I'm a full-stack developer with a background in the travel,
            entertainment, and education sectors. I've swapped the life of a
            travelling musician for a new journey into the world of technology,
            and I'm excited to see where this journey takes me! Please take a
            look around at some of the things I've been working on...
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
        image={mentorsPage}
        title={"Mentoree"}
        description={
          "An app for connecting mentors and mentees - connecting people and enabling growth.  Created in a team of 6 over 4 weeks, this app is built in Next.js, with Firebase authentication.  It utilises Next's built in API routes and a Postgres database, testing with Jest and Cypress, and ChakraUI for component styling.  A lot of work went into this project in the planning phase, and we worked through the project using Agile methodolgies and workflows.  You can read more about our process in the Github readme."
        }
        liveURL={"https://mentoree.netlify.app/"}
        repoURL={
          "https://github.com/SchoolOfCode/final-project-repo-404-error-not-found"
        }
        technologies={[
          "Next",
          "Firebase",
          "Postgres",
          "React",
          "Git",
          "Jest",
          "Cypress",
          "Postman",
        ]}
      />
      <FeaturedProject
        image={repAppImage}
        title={"Repertoire Tracker"}
        description={
          "A system to track which pieces of a musician's repertoire have been performed over a given period of time.  Created with Express, and utilising a Postgres database, the system is accessed from a vanilla JavaScript front-end which takes in user input and constructs the appropriate fetch requests from that inputted data.  Visual design aims for a high-contrast dark mode aesthetic appropriate for live use on a dark stage. "
        }
        liveURL={"https://repertoire-tracker.herokuapp.com/"}
        repoURL={"https://github.com/D20CM/performed-repertoire-tracker"}
        technologies={[
          "HTML",
          "CSS",
          "Javascript",
          "Express",
          "Postgres",
          "Git",
          "Postman",
        ]}
      />
      <FeaturedProject
        image={formAppImage}
        title={"Feedback form helper"}
        description={
          "An app to help fellow bootcamp students keep track of, fill out, and submit their twice-daily bootcamp feedback forms.  The app improves the current workflow of this process whilst keeping the vital Google forms-based data collection tools used by coaching staff.  My primary contributions to the project were in creating the back-end API with Express to query the PostgreSQL database."
        }
        liveURL={"https://pedantic-bell-0aa1ac.netlify.app/"}
        repoURL={"https://github.com/D20CM/project-week-backend"}
        technologies={["React", "Postgres", "Express", "Node", "Git"]}
      />
      <ProjectsArea />

      <section className={css.contactArea} id="contact">
        <h2>Get in touch</h2>
        <div className={css.contactContainer}>
          <CVandSocials />
          <Contact />
        </div>
      </section>
    </div>
  );
}
