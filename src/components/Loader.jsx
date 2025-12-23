import React, { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">
      <div className="loader-container">
        <div className="loader-bg-grid"></div>
        <div className="loader-gradient-orb orb-1"></div>
        <div className="loader-gradient-orb orb-2"></div>
        <div className="loader-gradient-orb orb-3"></div>

        <div className="loader-content">
          <div className="loader-symbol">
            <svg viewBox="0 0 100 100" className="loader-svg">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4169E1" />{" "}
                  <stop offset="100%" stopColor="#87CEFA" />{" "}
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="45" className="loader-circle-bg" />
              <circle
                cx="50"
                cy="50"
                r="45"
                className="loader-circle-progress"
                style={{
                  strokeDashoffset: 283 - (283 * progress) / 100,
                }}
              />
              <text
                x="50"
                y="50"
                textAnchor="middle"
                dominantBaseline="middle"
                className="loader-percentage"
              >
                {progress}%
              </text>
            </svg>
          </div>

          <div className="loader-text-container">
            <h1 className="loader-title">
              {"LOADING".split("").map((letter, index) => (
                <span
                  key={index}
                  className="loader-letter"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <p className="loader-subtitle">Good things loading</p>
          </div>

          <div className="loader-bar-container">
            <div className="loader-bar-track">
              <div
                className="loader-bar-fill"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #4169E1, #87CEFA)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
