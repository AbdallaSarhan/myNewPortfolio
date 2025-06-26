import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatAgent.css';
import { FaComments, FaTimes, FaPaperPlane, FaCalendar, FaCode, FaEnvelope, FaUser, FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import CalendlyModal from './CalendlyModal';

const projectInfo = {
  quiqpost: {
    description: "A community platform connecting travelers with people needing item delivery. Users can post their travel plans and others can request item deliveries.",
    features: [
      "Travel plan posting",
      "Item delivery requests",
      "Real-time tracking",
      "User verification system",
      "Secure messaging"
    ],
    tech: ["React Native", "Firebase", "Node.js", "MongoDB"],
    links: {
      demo: "https://apps.apple.com/ca/app/quiqpost/id6737566141?uo=2",
      github: "https://github.com/yourusername/quiqpost"
    }
  },
  platepal: {
    description: "A food discovery app that helps users find and save global recipes. Users can swipe through various dishes and save their favorites.",
    features: [
      "Recipe discovery",
      "Swipe interface",
      "Favorite collection",
      "Global cuisine categories",
      "Easy-to-follow recipes"
    ],
    tech: ["React Native", "Firebase", "Node.js"],
    links: {
      demo: "https://apps.apple.com/ca/app/platepal/id6741442946",
      github: "https://github.com/yourusername/platepal"
    }
  },
  geosnap: {
    description: "A location-based photo sharing app that lets users capture and share moments at specific locations.",
    features: [
      "Location-based photo sharing",
      "Map integration",
      "Photo clustering",
      "Location discovery",
      "Social features"
    ],
    tech: ["React Native", "Firebase", "Google Maps API"],
    links: {
      demo: "https://apps.apple.com/ca/app/geosnap/id123456789",
      github: "https://github.com/yourusername/geosnap"
    }
  },
  campunity: {
    description: "A platform for camping enthusiasts to connect, share experiences, and find camping spots.",
    features: [
      "Camping spot discovery",
      "Community reviews",
      "Trip planning",
      "Weather integration",
      "Equipment sharing"
    ],
    tech: ["React Native", "Firebase", "Weather API"],
    links: {
      demo: "https://apps.apple.com/ca/app/campunity/id123456789",
      github: "https://github.com/yourusername/campunity"
    }
  }
};

const ChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi! I\'m your AI assistant. How can I help you today?',
      suggestions: [
        { text: 'View Projects', icon: <FaCode />, action: 'view_projects' },
        { text: 'Book Appointment', icon: <FaCalendar />, action: 'book_appointment' }
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSuggestionClick = (action) => {
    if (action === 'view_projects') {
      navigate('/projects');
      setIsOpen(false);
    } else if (action === 'book_appointment') {
      setShowCalendly(true);
      setMessages(prev => [...prev, 
        { type: 'user', content: 'Book Appointment' },
        { type: 'bot', content: 'I\'ve opened the scheduling calendar for you.' }
      ]);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: inputMessage }]);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'I can help you with that. What would you like to do?',
        suggestions: [
          { text: 'View Projects', icon: <FaCode />, action: 'view_projects' },
          { text: 'Book Appointment', icon: <FaCalendar />, action: 'book_appointment' }
        ]
      }]);
    }, 1000);

    setInputMessage('');
  };

  return (
    <>
      {!showCalendly && (
        <div className="chat-agent">
          {!isOpen ? (
            <button 
              className="chat-toggle"
              onClick={() => setIsOpen(true)}
            >
              <FaComments />
              <span>Chat with AI</span>
            </button>
          ) : (
            <div className="chat-container">
              <div className="chat-header">
                <h3>Chat with AI Assistant</h3>
                <button 
                  className="close-chat"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="chat-messages">
                {messages.map((message, index) => (
                  <div key={index}>
                    <div className={`message ${message.type}`}>
                      {message.content}
                    </div>
                    {message.suggestions && (
                      <div className="suggestions">
                        {message.suggestions.map((suggestion, idx) => (
                          <button
                            key={idx}
                            className="suggestion-bubble"
                            onClick={() => handleSuggestionClick(suggestion.action)}
                          >
                            {suggestion.icon && <span className="suggestion-icon">{suggestion.icon}</span>}
                            {suggestion.text}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <form className="chat-input" onSubmit={handleSendMessage}>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                />
                <button type="submit">
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          )}
        </div>
      )}
      {showCalendly && <CalendlyModal onClose={() => setShowCalendly(false)} />}
    </>
  );
};

export default ChatAgent; 