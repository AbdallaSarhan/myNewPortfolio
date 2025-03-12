import React from 'react';
import { InlineWidget } from 'react-calendly';
import { FaTimes } from 'react-icons/fa';
import './CalendlyModal.css';

const CalendlyModal = ({ onClose }) => {
  return (
    <div className="calendly-modal-backdrop">
      <div className="calendly-modal">
        <div className="calendly-modal-header">
          <h3>Schedule a Meeting</h3>
          <button className="close-calendly" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="calendly-modal-content">
          <InlineWidget 
            url="https://calendly.com/abdallasarhan/30min"
            styles={{
              height: '650px',
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal; 