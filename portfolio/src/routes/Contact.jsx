import React from "react";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/common/Footer";
import HeroImg2 from "../components/contact/HeroImg2";
import Navbar from "../components/common/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="I'd love to hear from you" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
