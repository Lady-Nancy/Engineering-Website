import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Futa from './futa';

const Contacts = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_m9kz80e',      // e.g service_xxxxxx
      'template_izkx2du',     // e.g template_xxxxxx
      formRef.current,
      'sa9eIl7BlSST0bepW'       // e.g XXXXXXXXXXXXXXXXX
    )
    .then(
      (result) => {
        alert('Message sent successfully!');
        e.target.reset(); // clear form after send
      },
      (error) => {
        alert('Failed to send message. Try again.');
        console.error(error.text);
      }
    );
  };

  return (
    <div>
      <section className="contact-us">
        <div className="contact-us1">
          <div className="head">
            <h5><span>+</span> CONTACT US</h5>
            <h1>Get In Touch</h1>
            <h4>
              Please complete the form if you have a project in mind,
              questions to our team of construction experts, or any other inquiries.
            </h4>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="form">
            <input
              className="name"
              type="text"
              name="user_name"
              placeholder="Name*"
              required
            />

            <input
              className="phone"
              type="tel"
              name="user_phone"
              placeholder="Phone number*"
              required
            />

            <input
              className="Email"
              type="email"
              name="user_email"
              placeholder="Email*"
              required
            />

            <textarea
              className="textarea"
              name="message"
              placeholder="Message"
              required
            ></textarea>

            <button type="submit" className="button">
              Send A Request
            </button>
          </form>
        </div>
      </section>

      <Futa />
    </div>
  );
};

export default Contacts;
