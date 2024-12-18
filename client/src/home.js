// import React, { useState, useEffect } from 'react';
// import { Share2, Eye} from 'lucide-react';
// import logo from "./assets/pawmateslogo.png";
// import profileicon from "./assets/profile.png";
// import FishFood from "./assets/FishFood.png";
// import SparklingWater from "./assets/SparklingWater.png";
// import catcam from "./assets/catcam.png";
// import catcam2 from "./assets/catcam2.png";
// import catcam3 from "./assets/catcam3.png";
// import { useNavigate } from "react-router-dom";
// import './home.css';

// const PawMatesHome = () => {
//   const [currentCam, setCurrentCam] = useState('cam1');
//   const [donationAmount, setDonationAmount] = useState('');
//   const navigate = useNavigate();

//   const getCamImage = () => {
//     switch(currentCam) {
//       case 'cam1':
//         return catcam;
//       case 'cam2':
//         return catcam2;
//       case 'cam3':
//         return catcam3;
//       default:
//         return catcam;
//     }
//   };

//   const handleLogout = (e) => {
//     e.preventDefault();
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId');
//     navigate("/");
//   };

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
//     script.setAttribute("data-client-key", "SB-Mid-client-aipU0Myo3pDpeGME");
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);
  
//   const handleDonate = () => {
//     if (!donationAmount) {
//       alert("Please enter a donation amount.");
//       return;
//     }
//     fetch("http://localhost:8080/transaction", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ gross_amount: donationAmount }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const transactionToken = data.transactionToken;

//         if (window.snap) {
//           window.snap.pay(transactionToken, {
//             onSuccess: function (result) {
//               console.log("Payment Success:", result);
//             },
//             onPending: function (result) {
//               console.log("Payment Pending:", result);
//             },
//             onError: function (result) {
//               console.error("Payment Error:", result);
//             },
//             onClose: function () {
//               console.log("Payment popup closed without completing the payment.");
//             },
//           });
//         } else {
//           console.error("Midtrans Snap.js not loaded properly.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching transaction token:", error);
//       });
//   };

//   return (
//     <div className="container">
//       {/* Left Sidebar */}
//       <div className="sidebar">
//         <div className="logo-container">
//           <img src={logo} alt="Pawmates Logo" className="logo" />
//         </div>
        
//         <nav className="nav-menu">
//           <button className="nav-item">Home</button>
//           <button className="nav-item">Feeding Spot</button>
//           <button className="nav-item">Community</button>
//           <button className="nav-item profile-btn">
//             <img src={profileicon} alt="Profile" className="profile-icon" />
//             Profile
//           </button>
//         </nav>

//         <button className="logout-btn" onClick={handleLogout}>Logout</button>
//       </div>

//       {/* Main Content */}
//       <main className="main-content">
//         <h1 className="page-title">Feeding Spot Coblong 小猫</h1>

//         {/* Video Player with Fixed Aspect Ratio */}
//         <div className="video-container">
//           <div className="video-wrapper">
//             <img src={getCamImage()} alt="Cat feed" className="video-feed" />
//             <div className="video-controls-overlay">
//               <div className="play-button">▶</div>
//               <div className="progress-bar">
//                 <div className="progress-bar-fill"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Video Controls */}
//         <div className="controls-section">
//           <div className="views">
//             <Eye className="eye-icon" />
//             <span>101</span>
//           </div>
          
//           <div className="camera-controls">
//             <button 
//               className={`cam-button ${currentCam === 'cam1' ? 'cam-active' : ''}`}
//               onClick={() => setCurrentCam('cam1')}
//             >
//               Cam 1
//             </button>
//             <button 
//               className={`cam-button ${currentCam === 'cam2' ? 'cam-active' : ''}`}
//               onClick={() => setCurrentCam('cam2')}
//             >
//               Cam 2
//             </button>
//             <button 
//               className={`cam-button ${currentCam === 'cam3' ? 'cam-active' : ''}`}
//               onClick={() => setCurrentCam('cam3')}
//             >
//               Cam 3
//             </button>
//           </div>
//           <input
//             type="number"
//             placeholder="Nominal"
//             className="input-field"
//             value={donationAmount}
//             onChange={(e) => setDonationAmount(e.target.value)}
//           />
//           <button 
//             className="donate-button" 
//             onClick={handleDonate}
//             disabled={!donationAmount}
//           >
//             Donasi
//           </button>
//         </div>

//         {/* Stats Section */}
//         <div className="stats-container">
//           <div className="stats-header">
//             <span className="local-time">Local Time: 14.32.14</span>
//             <div className="action-buttons">
//               <button>Like</button>
//               <button>Snap</button>
//               <button><Share2 /></button>
//             </div>
//           </div>

//           <div className="stats-grid">
//             <div className="stat-box">
//               <img className="drink-icon" alt="Fish Food" src={FishFood}/>
//               <span className="stat-value">48%</span>
//             </div>
//             <div className="stat-box">
//               <img className="drink-icon" alt="Fish Food" src={SparklingWater}/>
//               <span className="stat-value">60%</span>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Chat Section */}
//       <aside className="chat-section">
//         <h2 className="chat-title">Live Chat</h2>
//         <div className="chat-messages">
//           <div className="chat-message">
//             <span className="message-time">16/12/2024 22:30</span>
//             <span className="message-author">Bagas:</span>
//             <span className="message-text">Hi! cute cat</span>
//           </div>
//           <div className="chat-message">
//             <span className="message-time">16/12/2024 22:35</span>
//             <span className="message-author">李爱:</span>
//             <span className="message-text">我喜欢这只猫</span>
//           </div>
//           <div className="chat-message">
//             <span className="message-time">16/12/2024 22:35</span>
//             <span className="message-author">Pica:</span>
//             <span className="message-text">Gemes banget</span>
//           </div>
//           <div className="chat-message">
//             <span className="message-time">16/12/2024 22:36</span>
//             <span className="message-author">Valdi:</span>
//             <span className="message-text">我想收养猫</span>
//           </div>
//           <div className="chat-message">
//             <span className="message-time">16/12/2024 22:36</span>
//             <span className="message-author">李花:</span>
//             <span className="message-text">我喜欢猫</span>
//           </div>
//           <div className="chat-message">
//             <span className="message-time">16/12/2024 22:37</span>
//             <span className="message-author">Pica:</span>
//             <span className="message-text">Mau cubit 🐱</span>
//           </div>
//           <div className="chat-message">
//             <span className="message-time">16/12/2024 22:37</span>
//             <span className="message-author">Viktor:</span>
//             <span className="message-text">Selangkah lebih dekat dengan kucing Coblong</span>
//           </div>
//           <div className="chat-message">
//             <span className="message-time">16/12/2024 22:37</span>
//             <span className="message-author">Josia:</span>
//             <span className="message-text">Selamat hari monyet sedunia guys</span>
//           </div>
//         </div>
//         <div className="chat-input">
//           <input type="text" placeholder="Send a message" />
//           <button className="send-button">➤</button>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default PawMatesHome;
import React, { useState, useEffect } from 'react';
import { Share2, Eye} from 'lucide-react';
import logo from "./assets/pawmateslogo.png";
import profileicon from "./assets/profile.png";
import FishFood from "./assets/FishFood.png";
import SparklingWater from "./assets/SparklingWater.png";
import catcam from "./assets/catcam.png";
import catcam2 from "./assets/catcam2.png";
import catcam3 from "./assets/catcam3.png";
import { useNavigate } from "react-router-dom";
import './home.css';

const PawMatesHome = () => {
  const [currentCam, setCurrentCam] = useState('cam1');
  const [donationAmount, setDonationAmount] = useState('');
  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }));
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getCamImage = () => {
    switch(currentCam) {
      case 'cam1':
        return catcam;
      case 'cam2':
        return catcam2;
      case 'cam3':
        return catcam3;
      default:
        return catcam;
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate("/");
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", "SB-Mid-client-aipU0Myo3pDpeGME");
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  const handleDonate = () => {
    if (!donationAmount) {
      alert("Please enter a donation amount.");
      return;
    }
    fetch("http://localhost:8080/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gross_amount: donationAmount }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const transactionToken = data.transactionToken;

        if (window.snap) {
          window.snap.pay(transactionToken, {
            onSuccess: function (result) {
              console.log("Payment Success:", result);
            },
            onPending: function (result) {
              console.log("Payment Pending:", result);
            },
            onError: function (result) {
              console.error("Payment Error:", result);
            },
            onClose: function () {
              console.log("Payment popup closed without completing the payment.");
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
    <div className="container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Pawmates Logo" className="logo" />
        </div>
        
        <nav className="nav-menu">
          <button className="nav-item">Home</button>
          <button className="nav-item">Feeding Spot</button>
          <button className="nav-item">Community</button>
          <button className="nav-item profile-btn">
            <img src={profileicon} alt="Profile" className="profile-icon" />
            Profile
          </button>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="page-title">Feeding Spot Coblong 小猫</h1>

        {/* Video Player with Fixed Aspect Ratio */}
        <div className="video-container">
          <div className="video-wrapper">
            <img src={getCamImage()} alt="Cat feed" className="video-feed" />
            <div className="video-controls-overlay">
              <div className="play-button">▶</div>
              <div className="progress-bar">
                <div className="progress-bar-fill"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Controls */}
        <div className="controls-section">
          <div className="views">
            <Eye className="eye-icon" />
            <span>101</span>
          </div>
          
          <div className="camera-controls">
            <button 
              className={`cam-button ${currentCam === 'cam1' ? 'cam-active' : ''}`}
              onClick={() => setCurrentCam('cam1')}
            >
              Cam 1
            </button>
            <button 
              className={`cam-button ${currentCam === 'cam2' ? 'cam-active' : ''}`}
              onClick={() => setCurrentCam('cam2')}
            >
              Cam 2
            </button>
            <button 
              className={`cam-button ${currentCam === 'cam3' ? 'cam-active' : ''}`}
              onClick={() => setCurrentCam('cam3')}
            >
              Cam 3
            </button>
          </div>
          <input
            type="number"
            placeholder="Nominal"
            className="input-field"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
          />
          <button 
            className="donate-button" 
            onClick={handleDonate}
            disabled={!donationAmount}
          >
            Donasi
          </button>
        </div>

        {/* Stats Section */}
        <div className="stats-container">
          <div className="stats-header">
            <span className="local-time">Local Time: {localTime}</span>
            <div className="action-buttons">
              <button>Like</button>
              <button>Snap</button>
              <button><Share2 /></button>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-box">
              <img className="drink-icon" alt="Fish Food" src={FishFood}/>
              <span className="stat-value">48%</span>
            </div>
            <div className="stat-box">
              <img className="drink-icon" alt="Fish Food" src={SparklingWater}/>
              <span className="stat-value">60%</span>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Section */}
      <aside className="chat-section">
  <h2 className="chat-title">Live Chat</h2>
  <div className="chat-messages">
    <div className="chat-message">
      <span className="message-time">16/12/2024 22:30</span>
      <span className="message-author">Bagas:</span> Hi! cute cat
    </div>
    <div className="chat-message">
      <span className="message-time">16/12/2024 22:35</span>
      <span className="message-author">李爱:</span> 我喜欢这只猫
    </div>
    <div className="chat-message">
      <span className="message-time">16/12/2024 22:35</span>
      <span className="message-author">Pica:</span> Gemes banget
    </div>
    <div className="chat-message">
      <span className="message-time">16/12/2024 22:36</span>
      <span className="message-author">Valdi:</span> 我想收养猫
    </div>
    <div className="chat-message">
      <span className="message-time">16/12/2024 22:36</span>
      <span className="message-author">李花:</span> 我喜欢猫
    </div>
    <div className="chat-message">
      <span className="message-time">16/12/2024 22:37</span>
      <span className="message-author">Pica:</span> Mau cubit 🐱
    </div>
    <div className="chat-message">
      <span className="message-time">16/12/2024 22:37</span>
      <span className="message-author">Viktor:</span> Selangkah lebih dekat dengan kucing Coblong
    </div>
    <div className="chat-message">
      <span className="message-time">16/12/2024 22:37</span>
      <span className="message-author">Josia:</span> Selamat hari monyet sedunia guys
    </div>
  </div>
  <div className="chat-input">
    <input type="text" placeholder="Send a message" />
    <button className="send-button">➤</button>
  </div>
</aside>
    </div>
  );
};

export default PawMatesHome;