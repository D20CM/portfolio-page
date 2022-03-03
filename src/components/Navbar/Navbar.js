import React from "react";
import css from "./navbar.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className={css.navbar}>
      <ul className={css.navlist}>
        <li>
          <li>
            <HashLink smooth to="/#homepage-top">
              Home
            </HashLink>
          </li>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <HashLink smooth to="/#projects">
            Projects
          </HashLink>
        </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
