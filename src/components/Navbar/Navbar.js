import React from "react";
import css from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={css.navbar}>
      <ul className={css.navlist}>
        <li>
          <a href="#" alt="">
            Home
          </a>
        </li>
        <li>
          <a href="#" alt="">
            About Me
          </a>
        </li>
        <li>
          <a href="#" alt="">
            Projects
          </a>
        </li>
        <li>
          <a href="#" alt="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
