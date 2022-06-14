import React from "react";
import "./ContactFormStyles.css";

const ContactForm = () => {
  return (
    <div className="form">
      <form action="">
        <label>Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea cols="30" rows="6" placeholder="Type your message"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
