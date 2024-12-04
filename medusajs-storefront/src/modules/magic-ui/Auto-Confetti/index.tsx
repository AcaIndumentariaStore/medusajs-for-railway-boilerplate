"use client";

import React from "react";
import { Confetti } from "../Confetti";

const AutoConfetti = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Confetti
        globalOptions={{
          resize: true,
          useWorker: true,
        }}
        options={{
          particleCount: 200,
          spread: 70,
          origin: { x: 0.5, y: 0.5 },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default AutoConfetti;
