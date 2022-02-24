import React from "react";
import css from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={css.navbar}>
      <ul className={css.navlist}>
        <li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
