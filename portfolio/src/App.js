import React, { useState, useEffect } from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
// import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import { Routes, Route } from "react-router-dom";
import { ProjectDetails } from "./routes/ProjectDetails";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show the modal after 1 second
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <Modal onClose={closeModal} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/project/:title" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
