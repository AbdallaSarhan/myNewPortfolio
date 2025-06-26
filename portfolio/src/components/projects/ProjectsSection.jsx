import React, { useRef, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";
import "./ProjectCardStyles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectsSection = () => {
  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth > 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollByAmount = 360;
  const handleScroll = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollBy({ left: 360, behavior: "smooth" });
      setTimeout(() => {
        el.scrollBy({ left: -360, behavior: "smooth" });
      }, 1200);
    }
  }, []);

  return (
    <div className="projects-grid-horizontal-outer" style={{ position: 'relative', width: '100%' }}>
      {showArrows && (
        <>
          {/* Left Arrow */}
          <button
            className="scroll-arrow scroll-arrow-left-outer"
            onClick={() => handleScroll(-scrollByAmount)}
            aria-label="Scroll left"
            type="button"
          >
            <FaChevronLeft size={28} />
          </button>
          {/* Right Arrow */}
          <button
            className="scroll-arrow scroll-arrow-right-outer"
            onClick={() => handleScroll(scrollByAmount)}
            aria-label="Scroll right"
            type="button"
          >
            <FaChevronRight size={28} />
          </button>
        </>
      )}
      <div className="projects-grid horizontal-scroll-projects" ref={scrollRef} style={{ display: 'flex', gap: '2rem', minWidth: 0, boxSizing: 'border-box', overflowX: 'auto', width: '100%' }}>
        {ProjectCardData.slice(0, 7).map((project, idx) => (
          <ProjectCard key={project.id || idx} {...project} />
        ))}
        <div className="horizontal-scroll-end-spacer" />
      </div>
    </div>
  );
};

export default ProjectsSection; 