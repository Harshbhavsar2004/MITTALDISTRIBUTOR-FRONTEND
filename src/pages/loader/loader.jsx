import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingAnimation = () => {
  const loadingRef = useRef(null);

  useEffect(() => {
    // Animation for the text scaling and glowing
    gsap.fromTo(
      loadingRef.current,
      { opacity: 0.5, scale: 0.8, textShadow: "0px 0px 10px #2196f3" },
      {
        opacity: 1,
        scale: 1.2,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        textShadow: "0px 0px 20px #42a5f5",
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div
      className="loading-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
      }}
    >
      <h1
        ref={loadingRef}
        style={{
          fontSize: '5rem',
          fontWeight: 'bold',
          color: '#1976d2',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        MD
      </h1>
    </div>
  );
};

export default LoadingAnimation;
