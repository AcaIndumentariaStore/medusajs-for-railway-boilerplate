"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath.startsWith("/ar/products")) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, []);

  const redirectToWhatsApp = () => {
    const url =
      "https://api.whatsapp.com/message/GV5YHAXA4U2IK1?autoload=1&app_absent=0";
    window.location.href = url;
  };

  if (!showButton) return null;

  return (
    <>
      <button
        onClick={redirectToWhatsApp}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          padding: "6px",
          backgroundColor: "#a2d1ad",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        <AiOutlineWhatsApp
          className="fab fa-whatsapp"
          style={{
            color: "white",
            fontSize: "42px",
          }}
        ></AiOutlineWhatsApp>
      </button>
      <style jsx global>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
