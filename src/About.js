import React from "react";
import css from "./about.module.css";
import profileImage from "../src/images/scott-sitting.jpg";

export default function About() {
  return (
    <div className={css.aboutPage} id="about">
      <h1>About me...</h1>
      <section className={css.aboutContainer}>
        <img
          src={profileImage}
          alt="scott sitting"
          className={css.profileImage}
        />
        <div>
          <p>
            A former professional musician, I wrote my first lines of code in
            the late eighties on my primary school's BBC Micro. This early
            enthusiasm for programming was soon thwarted when the BBC Micro was
            upgraded to an Acorn Archimedes - when I eventually found out how to
            get at the command line I was told to stop mucking about with things
            I didn't understand because the school didn't want their new
            computer broken! I promptly abandoned programming and turned my
            attention to music, leading to a career playing bass and guitar in
            the entertainment and travel industries.
          </p>
          <p>
            Through working in the theatres aboard cruise ships I've seen more
            of the world than I ever thought possible. I've also worked
            contracts in luxury hotels in Europe and Japan, and even played
            guitar and trombone in a travelling circus for a couple of years in
            Denmark.
          </p>
          <p>
            In 2020 the merry go round came to a halt, and I finally had time to
            start mucking about with things I didn't understand again. The
            process of researching a new laptop had led me to a lot of terms I
            didn't understand, so with plenty of time on my hands I simply
            started googling anything and everything about computing that I
            wasn't aware of. It seemed that the more I googled, the less I
            understood - but my curiosity was piqued and I'd started to feel the
            same thrill that I had in my childhood at the BBC Micro writing my
            first lines of BASIC.
          </p>
          <p>
            That thrill has been with me ever since as I've set about learning
            to code, learning about the web, learning how software works, how
            things are done. Starting with the frequently recommended{" "}
            <a
              href="https://www.freecodecamp.org"
              alt="Free Code Camp website"
              target="_blank"
              rel="noreferrer"
            >
              freeCodeCamp
            </a>{" "}
            courses, and most recently enrolling on a 16 week immersive
            fullstack JavaScript development bootcamp at the{" "}
            <a
              href="https://www.schoolofcode.co.uk/"
              alt="School Of Code website"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              School Of Code
            </a>
            , I've enjoyed every new discovery and "a-ha" moment, worked
            tirelessly through every blocker and bug, and constantly tried to
            improve the standard of code I produced.
          </p>
          <p>
            The bootcamp in particular was a huge learning experience - my tech
            skills have certainly improved, but I think the main takeaway for me
            was the workflows and industry practices that we implemented from
            day one. All work was 100% collaborative - either pair programming
            or working in small teams of 4 - 6 people. We constantly followed
            Agile methodologies and workflows, used version control throughout,
            and were drilled incessantly on the importance of breaking down the
            problem, thinking through the solution, and planning things out in
            detail before writing a single line of code. We also learned about
            approaches such as test driven development and CI/CD, and looked at
            DevOps practices and tools - something I'm extremely keen to explore
            further.
          </p>
          <p>
            The amount of learning ahead of me is simultaneously daunting and
            exciting, but the enjoyment I get from learning about technology and
            development is huge, and I look forward to seeing where this new
            journey can take me.
          </p>
        </div>
      </section>
    </div>
  );
}
