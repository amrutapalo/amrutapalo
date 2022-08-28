import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-title title">
        <div className="contact-primary-text">Contact Me</div>
        <div className="contact-secondary-text">
          Always available if the right opportunity comes along.
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-left">
          <div className="contact-left-title">
            <div className="contact-left-primary-text">Get In Touch</div>
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
            <a href="#">
              <i></i>
            </a>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-form-container">
          {/* onSubmit={onContactSubmitHandler} ref={form} */}
            <form action="">
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
                SUBMIT
              </button>
              {/* {didSubmit ? <p>Thankyou!</p> : ""} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
