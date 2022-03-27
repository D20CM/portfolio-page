import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import css from "./contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();
  // useEffect(() => {
  //   console.log("Name: ", name, "Email: ", email, "Message: ", message);
  // }, [name, email, message]);

  const submit = (e) => {
    e.preventDefault();

    if (name && email && message) {
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

      setName("");
      setEmail("");
      setMessage("");
      // setEmailSent(true);
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
    <section id="contact">
      <form
        ref={form}
        onSubmit={submit}
        id="contact-form"
        className={css.contactForm}
      >
        <label>Name</label>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={name}
          className={css.nameInput}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Your email address"
          name="email"
          value={email}
          className={css.emailInput}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Message</label>

        <textarea
          placeholder="Your message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className={css.messageInput}
        ></textarea>
        <input type="submit" value="Send" className={css.submit} />

        <div className={emailSent ? css.thanks : css.notSent}>
          Thanks for getting in touch!
        </div>
      </form>
    </section>
  );
};

export default Contact;
