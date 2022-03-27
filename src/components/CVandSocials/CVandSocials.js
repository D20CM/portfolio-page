import css from "./cvandsocials.module.css";
import scottCV from "../../assets/ScottBrownCVFeb2022.pdf";
import React from "react";
import TechIcon from "../TechIcon/TechIcon";

function CVandSocials() {
  return (
    <div className={css.CVandSocials}>
      <div>
        <h4>Email me:</h4>
        <a href="mailto: scottbrowndev@zohomail.eu" className={css.email}>
          scottbrowndev@zohomail.eu
        </a>
      </div>
      <div>
        <h4>Call me:</h4>
        <p>07974 201346</p>
      </div>
      <div>
        <h4>Download my CV (pdf):</h4>
        <a href={scottCV} download="Scott_Brown_CV.pdf">
          <button>Download CV</button>
        </a>
      </div>
      <h4>Get in touch on social media: </h4>{" "}
      <div className={css.socialLinks}>
        <a href="https://github.com/D20CM" target="_blank" rel="noreferrer">
          <TechIcon technologie={"Github"} />
        </a>
        <a
          href="https://www.linkedin.com/in/scottbrown500/"
          target="_blank"
          rel="noreferrer"
        >
          <TechIcon technologie={"LinkedIn"} />
        </a>
        <a
          href="https://twitter.com/scottydowntown"
          target="_blank"
          rel="noreferrer"
        >
          <TechIcon technologie={"Twitter"} />
        </a>
      </div>
    </div>
  );
}

export default CVandSocials;
