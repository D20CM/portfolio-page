import React from "react";
import TechIcon from "../TechIcon/TechIcon";
import css from "./techGallery.module.css";

export default function TechGallery({ techs }) {
  return (
    <div className={css.techGallery}>
      {techs.map((tech) => (
        <TechIcon technologie={tech} />
      ))}
    </div>
  );
}
