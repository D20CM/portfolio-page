import React from "react";
import css from "./about.module.css";

export default function About() {
  return (
    <div className={css.aboutPage}>
      <h1>About me...</h1>
      <p>
        A former professional musician, I wrote my first lines of code in the
        late eighties on my primary school's BBC Micro. This early enthusiasm
        for programming was soon thwarted when the BBC Micro was upgraded to an
        Acorn Archimedes - when I eventually found out how to get at the command
        line I was told to stop mucking about with things I didn't understand
        because the school didn't want their new computer broken! I promptly
        abandoned programming and turned my attention to music, leading to a
        career playing bass and guitar in the entertainment and travel
        industries.
      </p>
      <p>
        Through working in the theatres aboard cruise ships I've seen more of
        the world than I ever thought possible. I've also worked contracts in
        luxury hotels in Europe and Japan, and even played guitar and trombone
        in a travelling circus for a couple of years in Denmark.
      </p>
      <p>
        In 2020 the merry go round came to a halt, and I finally had time to
        start mucking about with things I didn't understand again. The process
        of researching a new laptop had led me to a lot of terms I didn't
        understand, so with plenty of time on my hands I simply started googling
        anything and everything about computing that I wasn't aware of. It
        seemed that the more I googled, the less I understood - but my curiosity
        was piqued and I'd started to feel the same thrill that I had in my
        childhood at the BBC Micro writing my first lines of BASIC.
      </p>
      <p>
        That thrill has been with me ever since as I've set about learning to
        code, learning about the web, learning how software works, how things
        are done. The amount of learning ahead of me is simultaneously daunting
        and exciting, but the enjoyment I get from "mucking about with things I
        don't understand" has been an unexpected benefit of the last year -
        something that will ensure I'll be pursuing it more seriously in the
        future.
      </p>
    </div>
  );
}
