import React, { useState } from "react";
import emailjs from "emailjs-com";
import css from "./contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = process.env.REACT_APP_SERVICE_ID;
      const templateId = process.env.REACT_APP_TEMPLATE_ID;
      const userId = process.env.REACT_APP_USER_ID;
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
      console.log("email has been sent ", process.env.REACT_APP_SERVICE_ID);
    } else {
      alert("Please fill in all fields.");
    }
  };

  //   const isValidEmail = (email) => {
  //     const regex =
  //       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return regex.test(String(email).toLowerCase());
  //   };

  return (
    <div id="contact-form" className={css.contactForm}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <button onClick={submit}>Send Message</button>
      {/* <span classsName={emailSent ? css.visible : css.hidden}> */}
      <div classsName={css.thanks}>Thanks for getting in touch!</div>
    </div>
  );
};

export default Contact;
