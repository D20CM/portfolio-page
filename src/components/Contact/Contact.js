import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { init } from "@emailjs/browser";
// import emailjs from "@emailjs/browser";
import css from "./contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();
  const userId = init("ivTRwVue-TVwBW4N8");

  const submit = (e) => {
    e.preventDefault();

    // if (name && email && message) {
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const userId = process.env.REACT_APP_USER_ID;

    // const templateParams = {
    //   name,
    //   email,
    //   message,
    // };

    emailjs
      .sendForm(serviceId, templateId, form.current, userId)
      .then((result) => console.log(result))
      .then((error) => console.log(error));

    setEmailSent(true);

    // setName("");
    // setEmail("");
    // setMessage("");
    // setEmailSent(true);
    // console.log("email has been sent ", process.env.REACT_APP_SERVICE_ID);
    // } else {
    //   alert("Please fill in all fields.");
    // }
  };

  //   const isValidEmail = (email) => {
  //     const regex =
  //       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return regex.test(String(email).toLowerCase());
  //   };

  return (
    <form
      ref={form}
      onSubmit={submit}
      id="contact-form"
      // className={css.contactForm}
    >
      <label>Name</label>
      <input
        type="text"
        placeholder="Your Name"
        name="name"
        // onChange={(e) => {
        //   setName(e.target.value);
        // }}
      />
      <label>Email</label>
      <input
        type="email"
        placeholder="Your email address"
        name="email"
        // onChange={(e) => {
        //   setEmail(e.target.value);
        // }}
      />
      <label>Message</label>

      <textarea
        placeholder="Your message"
        name="message"
        // onChange={(e) => {
        //   setMessage(e.target.value);
        // }}
      ></textarea>
      <input type="submit" value="Send" />

      <div className={emailSent ? css.thanks : css.notSent}>
        Thanks for getting in touch!
      </div>
    </form>
  );
};

export default Contact;
