import React from "react";
import "./Contact.css";
import contactImage from "./assets/mailz.jpeg";

const Contact = () => {
  const onContactSubmitHandler = (event) => {
    event.preventDefault();
    console.log("clicked");
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
          <form action="" onSubmit={onContactSubmitHandler}>
            <input type="text" placeholder="Name" name="name" />
            {/* {!enteredInputIsValid.name && isTouched && (
                <p className="error-text">Entered name is invalid</p>
              )} */}
            <input type="text" placeholder="Subject" name="subject" />
            {/* {!enteredInputIsValid.subject && isTouched && (
                <p className="error-text">Entered Subject is invalid</p>
              )} */}
            <input type="text" placeholder="Email" name="email" />
            {/* {!enteredInputIsValid.email && isTouched && (
                <p className="error-text">Entered email is invalid</p>
              )} */}
            <textarea placeholder="Message" name="message" />
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
