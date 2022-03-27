import React from "react";
import HTML from "../../images/tech-icons/HTML.ico";
import CSS from "../../images/tech-icons/CSS.ico";
import Javascript from "../../images/tech-icons/Javascript.ico";
import Next from "../../images/tech-icons/Next.ico";
import ReactIcon from "../../images/tech-icons/React.ico";
import NodeIcon from "../../images/tech-icons/Node.ico";
import Git from "../../images/tech-icons/Git.ico";
import Github from "../../images/tech-icons/Github.ico";
import Jest from "../../images/tech-icons/Jest.ico";
import Express from "../../images/tech-icons/Express.ico";
import Postgres from "../../images/tech-icons/Postgres.ico";
import LinkedIn from "../../images/tech-icons/LinkedIn.ico";
import Twitter from "../../images/tech-icons/Twitter.ico";
import Firebase from "../../images/tech-icons/Firebase.ico";
import Cypress from "../../images/tech-icons/Cypress.ico";
import Postman from "../../images/tech-icons/Postman.ico";

import css from "./techIcon.module.css";

export default function TechIcon({ technologie }) {
  return (
    <>
      {(() => {
        switch (technologie) {
          case "HTML":
            return (
              <div className={css.techIconWithName}>
                <img src={HTML} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}>HTML</p>
              </div>
            );

          case "CSS":
            return (
              <div className={css.techIconWithName}>
                <img src={CSS} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}>CSS</p>
              </div>
            );

          case "Javascript":
            return (
              <div className={css.techIconWithName}>
                <img src={Javascript} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}>Javascript</p>
              </div>
            );

          case "Next":
            return (
              <div className={css.techIconWithName}>
                <img src={Next} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}>Next JS</p>
              </div>
            );

          case "Node":
            return (
              <div className={css.techIconWithName}>
                <img src={NodeIcon} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}>Node JS</p>
              </div>
            );

          case "React":
            return (
              <div className={css.techIconWithName}>
                <img src={ReactIcon} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}>React</p>
              </div>
            );

          case "Git":
            return (
              <div className={css.techIconWithName}>
                <img src={Git} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}>Git</p>
              </div>
            );

          case "Github":
            return (
              <div className={css.techIconWithName}>
                <img src={Github} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}></p>
              </div>
            );

          case "Jest":
            return (
              <div className={css.techIconWithName}>
                <img src={Jest} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}>Jest</p>
              </div>
            );

          case "Express":
            return (
              <div className={css.techIconWithName}>
                <img src={Express} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}>Express</p>
              </div>
            );

          case "Postgres":
            return (
              <div className={css.techIconWithName}>
                <img src={Postgres} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}>PostgreSQL</p>
              </div>
            );
          case "LinkedIn":
            return (
              <div className={css.techIconWithName}>
                <img src={LinkedIn} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}></p>
              </div>
            );
          case "Twitter":
            return (
              <div className={css.techIconWithName}>
                <img src={Twitter} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}></p>
              </div>
            );
          case "Firebase":
            return (
              <div className={css.techIconWithName}>
                <img src={Firebase} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}>Firebase</p>
              </div>
            );
          case "Cypress":
            return (
              <div className={css.techIconWithName}>
                <img src={Cypress} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}>Cypress</p>
              </div>
            );
          case "Postman":
            return (
              <div className={css.techIconWithName}>
                <img src={Postman} alt="" className={css.techIcon}></img>
                <p className={css.techNameDisplay}>Postman</p>
              </div>
            );

          default:
            return null;
        }
      })()}
    </>
  );
}
