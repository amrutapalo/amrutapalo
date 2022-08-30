import React, { useRef, useState } from "react";
import "./Contact.css";
import contactImage from "./assets/mailz.jpeg";
import emailjs from '@emailjs/browser';

const isEmpty = (value) => (value.trim() === "" ? true : false);

const Contact = () => {
  const form = useRef();
  const [enteredInputIsInvalid, setEnteredInputIsInvalid] = useState({
    name: false,
    email: false,
    message: false,
  });

  let nameIsInvalid = false;
  let emailIsInvalid = false;
  let messageIsInvalid = false;

  const onContactSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("clicked");
    const form_submitted = form.current;
    const nameInput = form_submitted["name"].value;
    const emailInput = form_submitted["email"].value;
    const messageInput = form_submitted["message"].value;

    nameIsInvalid = isEmpty(nameInput);
    emailIsInvalid = isEmpty(emailInput);
    messageIsInvalid = isEmpty(messageInput);
    console.log(nameIsInvalid, emailIsInvalid, messageIsInvalid);

    setEnteredInputIsInvalid({
      name: nameIsInvalid,
      email: emailIsInvalid,
      message: messageIsInvalid,
    });

    console.log(enteredInputIsInvalid);

    if (!nameIsInvalid && !emailIsInvalid && !messageIsInvalid) {
      console.log("all valid");
      await emailjs.sendForm(
        "service_12zp0cn",
        "template_7sq9bii",
        form.current,
        "mcYuAx8nf9nZk0jPO"
      );
      event.target.reset();
    }
  };

  return (
    <div className="contact-container container">
      <div className="contact-title title">
        <h2 className="contact-primary-text">Contact Me</h2>
        <div className="contact-secondary-text secondary-text">
          Always available if the right opportunity comes along.
        </div>
        <i className="fa-solid fa-horizontal-rule"></i>
      </div>
      <div className="contact-content">
        <div className="contact-left">
          <div className="contact-left-title">
            <h2 className="contact-left-primary-text">Get In Touch 📧</h2>
          </div>
          <div className="social-media-icons">
            <a href="https://www.linkedin.com/in/amruta-palo-7135b0171">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/amrutapalo/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCr3t1o_4tU6uUvAndiSA06w">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="https://twitter.com/amrutapalo">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className="contact-text">Send Your Email Here!</div>
          <div className="contact-image">
            <img src={contactImage} alt="Contact Image" />
          </div>
        </div>
        <div className="contact-right">
          {/* onSubmit={onContactSubmitHandler} ref={form} */}
          <form action="" onSubmit={onContactSubmitHandler} ref={form}>
            <input type="text" placeholder="Name" name="name" />
            {enteredInputIsInvalid.name && (
              <p className="error-text">Entered name is invalid</p>
            )}
            <input type="text" placeholder="Email" name="email" />
            {enteredInputIsInvalid.email && (
              <p className="error-text">Entered email is invalid</p>
            )}
            <input type="text" placeholder="Subject" name="subject" />
            <textarea placeholder="Message" name="message" />
            {enteredInputIsInvalid.message && (
              <p className="error-text">Please enter a message</p>
            )}
            <button type="submit" className="button">
              SEND
            </button>
            {/* {didSubmit ? <p>Thankyou!</p> : ""} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
