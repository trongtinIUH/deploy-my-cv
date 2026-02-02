import React, { useRef, useState, useEffect } from 'react';

const Card = ({ data, onOpenModal }) => {
  const cardRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const mouseLeaveDelay = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      setDimensions({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight
      });
    }
  }, []);

  // Calculate mouse position relative to card center (-0.5 to 0.5)
  const mousePX = dimensions.width ? mouse.x / dimensions.width : 0;
  const mousePY = dimensions.height ? mouse.y / dimensions.height : 0;

  // Card rotation (more dramatic like the example - 30 degrees)
  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`
  };

  // Background parallax movement (40px like the example)
  const bgStyle = {
    backgroundImage: `url(${data.image})`,
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left - dimensions.width / 2,
      y: e.clientY - rect.top - dimensions.height / 2
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (mouseLeaveDelay.current) {
      clearTimeout(mouseLeaveDelay.current);
    }
  };

  const handleMouseLeave = () => {
    mouseLeaveDelay.current = setTimeout(() => {
      setMouse({ x: 0, y: 0 });
      setIsHovered(false);
    }, 1000);
  };

  return (
    <div
      ref={cardRef}
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(data)}
      style={{
        margin: '10px',
        transform: 'perspective(800px)',
        transformStyle: 'preserve-3d',
        cursor: 'pointer'
      }}
    >
      <div
        className={`card ${isHovered ? 'is-hovered' : ''}`}
        style={cardStyle}
      >
        {/* Card Background with parallax */}
        <div 
          className={`card-bg ${isHovered ? 'is-hovered' : ''}`}
          style={bgStyle}
        />
        
        {/* Card Info */}
        <div className={`card-info ${isHovered ? 'is-hovered' : ''}`}>
          <div className="card-info-content">
            <div className="card-title-row">
              <h1 className="card-title">{data.title}</h1>
              <span className="card-icon">{data.icon}</span>
            </div>
            <p className="card-description">{data.preview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;