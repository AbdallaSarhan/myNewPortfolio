import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

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
