import React, { useState, useEffect } from "react";
import "./App.css";
import Success from "./components/Success";
import Asking from "./components/Asking";
import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";
import ReactGA from "react-ga4";

const App = () => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No");
  const [lastRejectedIndex, setLastRejectedIndex] = useState(-1);

  // Track page view on component mount
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  // Handler for accepting the proposal
  const handleAccept = () => {
    setAccepted(true);

    // Track "Yes" button click
    ReactGA.event({
      category: "User Interaction",
      action: "Clicked Yes",
      label: "User accepted the Valentine proposal",
    });
  };

  // Handler for rejecting the proposal
  const handleReject = () => {
    setRejected(true);

    // Track "No" button click
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