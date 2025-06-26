import React, { useState } from "react";
import { FaPlus, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "./ProjectCardStyles.css";

const ProjectCard = (props) => {
  const [flipped, setFlipped] = useState(false);

  // Technical features placeholder (replace with real data as needed)
  const technicalFeatures = props.features || [
    "Built with React Native and TypeScript",
    "Uses AWS for backend services",
    "Real-time notifications",
    "Secure authentication",
    "Offline support"
  ];

  return (
    <div className={`project-card modern-project-card card-flip-container${flipped ? " flipped" : ""}`} style={{ position: 'relative' }}>
      {/* Top left: App Store badge (always visible) */}
      {props.appStore && (
        <a
          href={props.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="app-store-badge-overlay"
        >
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="app-store-badge-img-small"
          />
        </a>
      )}
      {/* Top right: GitHub icon (always visible) */}
      {props.github && (
        <a
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
          className="modern-github-icon"
        >
          <FaGithub />
        </a>
      )}
      <div className="card-flip-inner">
        {/* Front Side - exact original layout */}
        <div className="card-flip-front card-flip-face" style={{ position: 'relative', background: '#fff', borderRadius: '2rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className="img-container modern-img-container">
            <img 
              className="proj-img modern-proj-img" 
              src={props.img} 
              alt={`${props.title} logo`} 
            />
          </div>
          <div className="modern-project-info">
            <div className="modern-project-title">{props.title}</div>
            <div className="modern-project-subtitle">{props.text}</div>
            {/* Minimal Visit Demo link below description */}
            {props.view && !props.appStore && (
              <a
                href={props.view}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-demo-minimal-link"
                style={{ display: 'inline-flex', alignItems: 'center', color: '#2196f3', fontWeight: 500, fontSize: '1.08rem', textDecoration: 'none', margin: '0.7rem 0 0 0', letterSpacing: 0 }}
              >
                Visit {props.title} <FiExternalLink style={{ marginLeft: 6, fontSize: '1.1em' }} />
              </a>
            )}
          </div>
          <div className="modern-project-tags-row">
            {props.tags && props.tags.map((tag, idx) => (
              <span className={`modern-project-tag ${tag.color || ''}`} key={idx}>{tag.label || tag}</span>
            ))}
          </div>
          <div className="modern-project-footer" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: 'auto', width: '100%' }}>
            <div className="modern-project-plus" onClick={() => setFlipped(true)} style={{ cursor: 'pointer' }}>
              <FaPlus />
            </div>
          </div>
        </div>
        {/* Back Side */}
        <div className="card-flip-back card-flip-face" onClick={() => setFlipped(false)}>
          <div className="technical-features-content">
            <div style={{width: '100%', paddingLeft: 0}}>
              <div style={{fontWeight: 700, fontSize: '1.18rem', margin: 0, marginBottom: '1.1rem', color: '#222'}}>Technical Features</div>
              {technicalFeatures.map((feature, idx) => (
                <div key={idx} style={{marginBottom: '0.5rem', color: '#444', fontSize: '1.02rem', lineHeight: 1.7}}>{feature}</div>
              ))}
            </div>
            <div style={{marginTop: '2.2rem', color: '#888', fontSize: '0.98rem', textAlign: 'center', width: '100%'}}>Click anywhere to flip back</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
