import React, { useEffect } from "react";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => {
  // Use useEffect to change the background color when the component mounts
  useEffect(() => {
    // Set the background color of the body
    document.body.style.backgroundColor = "#CBE6EF";

    // Cleanup function to reset the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = ""; // Reset to default
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="App-success">
      {/* New GIF */}
      <div className="container">
        <div>
          <h1 className="header_text">Hoorayy!!!</h1>
        </div>
        <div className="gif_container">
          <img
            src="https://i.gifer.com/Pak.gif"
            alt="Cute animated illustration"
            style={{ marginTop: "-60px" }}
          />
        </div>
      </div>
      {/* Personalized success messages */}
      <p className="App-text-success">
        Looking forward to spending Valentine's Day with you!
      </p>
    </div>
  );
};

export default Success;
