"use client";
import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai'

const WhatsAppButton = () => {
  const redirectToWhatsApp = () => {
    const url = 'https://wa.me/+5491123456789';
    window.location.href = url;
  };

  return (
    <>
      <button 
        onClick={redirectToWhatsApp}
        style={{
          position: 'fixed',
          bottom: '20px', 
          right: '20px',
          borderRadius: '50%', 
          padding: '6px',
          backgroundColor: '#a2d1ad', 
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          zIndex: 1000
        }}
      >
        <AiOutlineWhatsApp 
          className="fab fa-whatsapp"
          style={{ 
            color: 'white', 
            fontSize: '42px'
          }}
        ></AiOutlineWhatsApp>
      </button>
      <style jsx global>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
