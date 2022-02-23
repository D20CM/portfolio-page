import React from "react";
import css from "./homepage.module.css";

export default function Homepage() {
  return (
    <div className={css.homepage}>
      <div></div>
      <div className={css.textContainer}>
        <h1>Scott Brown</h1>
        <h2>Software Developer</h2>
        <p>
          Hi! I'm a full-stack developer with a background in the travel,
          entertainment, and education sectors. I've swapped the life of a
          travelling musician for a different kind of journey into the world of
          technology, and I'm excited to see where this journey takes me.
        </p>
      </div>
    </div>
  );
}
