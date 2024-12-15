import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    // Load Midtrans Snap.js dynamically when component mounts
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js"; // Midtrans Snap.js URL
    script.setAttribute("data-client-key", "SB-Mid-client-aipU0Myo3pDpeGME"); // Replace with your sandbox client key
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup: Remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleDonate = () => {
    // Fetch the transaction token from your server
    fetch("http://localhost:8080/transaction") // Update this to match your backend endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const transactionToken = data.transactionToken;

        if (window.snap) {
          // Trigger Midtrans Snap popup
          window.snap.pay(transactionToken, {
            onSuccess: function (result) {
              console.log("Payment Success:", result);
              alert("Payment successful!");
            },
            onPending: function (result) {
              console.log("Payment Pending:", result);
              alert("Payment pending! Please follow up later.");
            },
            onError: function (result) {
              console.error("Payment Error:", result);
              alert("Payment failed. Please try again.");
            },
            onClose: function () {
              console.log("Payment popup closed without completing the payment.");
              alert("You closed the payment popup.");
            },
          });
        } else {
          console.error("Midtrans Snap.js not loaded properly.");
        }
      })
      .catch((error) => {
        console.error("Error fetching transaction token:", error);
  
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Support Our Cause</h1>
        <p>Click the donate button to make a contribution.</p>

        <button className="donate-button" onClick={handleDonate}>
          Donate
        </button>

        <p>
          Learn more about React on{" "}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React's Official Documentation
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
