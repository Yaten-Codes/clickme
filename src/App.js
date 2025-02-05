<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga4'; // Import ReactGA
=======
import React, { useState } from "react";
import "./App.css";
import Success from "./components/Success";
import Asking from "./components/Asking";
import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";
import ReactGA from "react-ga4"; // Import Google Analytics

// Initialize Google Analytics (only if not done elsewhere)
ReactGA.initialize("G-NGVJV2DDML");
>>>>>>> 50a2b6cdadf69c33f71db41c2ec1060463546090

ReactGA.initialize('G-NGVJV2DDML'); // Initialize GA4 with your Measurement ID

<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
  // Handler for accepting the proposal
  const handleAccept = () => {
    setAccepted(true);

    // Track "Yes" button click in Google Analytics
    ReactGA.event({
      category: "User Interaction",
      action: "Clicked Yes",
      label: "User accepted the Valentine proposal",
    });
  };

  // Handler for rejecting the proposal
  const handleReject = () => {
    setRejected(true);

    // Track "No" button click in Google Analytics
    ReactGA.event({
      category: "User Interaction",
      action: "Clicked No",
      label: "User rejected the Valentine proposal",
    });

    // Array of rejection messages
    const rejectionTexts = [
      "Are you sure?",
      "Maybe try again?",
      "Think again!",
      "Loser :(",
    ];

    // Randomly select a rejection message
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * rejectionTexts.length);
    } while (randomIndex === lastRejectedIndex);

    setLastRejectedIndex(randomIndex);
    setNoButtonText(rejectionTexts[randomIndex]);
  };

  return (
    <div className="App">
      <div className="App-body">
        {/* Asking to be my Valentine */}
        {!accepted && (
          <Asking
            gif={rejected ? madBear : flowerBear}
            altText={rejected ? "Rejected Bear" : "I love you Bear"}
            handleAccept={handleAccept}
            handleReject={handleReject}
            noButtonText={noButtonText}
          />
        )}

        {/* She said YES! */}
        {accepted && <Success />}
      </div>
    </div>
  );
};

export default App;
>>>>>>> 50a2b6cdadf69c33f71db41c2ec1060463546090
