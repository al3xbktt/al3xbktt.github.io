import React, { useState, useEffect } from 'react';
import './InteractiveCard.css';

interface InteractiveCardProps {
  title: string;
  imageUrl: string;
  link: string;
  className?: string;
  borderColor?: string;
  textColor?: string;
  imagePosition?: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  title,
  imageUrl,
  link,
  className = '',
  borderColor = 'rgb(36, 36, 36)',
  textColor = 'rgb(204, 204, 204)',
  imagePosition = 'center'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device on component mount
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1200); 
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className={`interactive-card-wrapper ${className}`}
    style={{     
         minHeight: '400px', // Safe default
    }}>
      <a
        href={link}
        className="card-link"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        aria-label={`View ${title} project`}
      >
        <div 
          className="card"
          style={{
            borderColor: borderColor,
            borderRadius: '32px',
          }}
        >
          {/* Image container */}
          <div className="image-container">
            <div 
              className="image-wrapper" 
              style={{ 
                transform: (isHovered || isMobile) ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease'
              }}
            >
              <img
                src={imageUrl}
                alt={`${title} project screenshot`}
                className="card-image"
                loading="lazy"
                style={{ objectPosition: imagePosition }}
              />
            </div>
          </div>
          
          {/* Info overlay - always visible on mobile */}
          <div 
            className="info-overlay"
            style={{
              background: 'linear-gradient(rgba(20, 20, 20, 0) 0%, rgb(20, 20, 20) 100%)',
              opacity: (isHovered || isMobile) ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          >
            <div 
              className="content"
              style={{
                opacity: (isHovered || isMobile) ? 1 : 0,
                transition: 'opacity 0.3s ease 0.1s'
              }}
            >
              <div className="title">
                <h4 style={{ color: textColor }}>{title}</h4>
              </div>
              <div className="icon">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 256 256" 
                  width="24"
                  height="24"
                  style={{ fill: textColor }}
                >
                  <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default InteractiveCard;