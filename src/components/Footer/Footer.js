import React from "react";
import css from "./footer.module.css";
import TechIcon from "../TechIcon/TechIcon";

function Footer() {
  return (
    <div className={css.footer}>
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
  );
}

export default Footer;
