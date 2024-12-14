import React from 'react';
import { Share2, Eye } from 'lucide-react';
import logo from "./assets/pawmateslogo.png";
import profileicon from "./assets/profile.png";
import './home.css';

const PawMatesHome = () => {
  return (
    <div className="container">
      {/* Left Sidebar */}
      <div className="sidebar">
        {/* Logo Section */}
        <div className="logo-container">
          <img src={logo} alt="Pawmates Logo" className="logo" />
        </div>
        
         {/* Navigation Links */}
         <nav className="nav-menu">
          <button className="nav-item">Home</button>
          <button className="nav-item">Feeding Spot</button>
          <button className="nav-item">Community</button>
          <button className="nav-item profile-btn">
          <img src={profileicon} alt="Pawmates Logo" className="profile-icon" />
            Profile
          </button>
        </nav>

        {/* Logout Button */}
        <button className="logout-btn">Logout</button>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="page-title">Feeding Spot Coblong 小猫</h1>

        {/* Video Player */}
        <div className="video-container">
          <img src="/video-feed.jpg" alt="Cat feed" className="video-feed" />
          <div className="video-controls-overlay">
            <div className="play-button">▶</div>
            <div className="timestamp">1.02</div>
            <div className="progress-bar">
              <div className="progress-bar-fill"></div>
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
            <button className="cam-button cam-active">Cam 1</button>
            <button className="cam-button">Cam 2</button>
            <button className="cam-button">Cam 3</button>
          </div>

          <button className="donate-button">Donasi</button>
        </div>

        {/* Stats Section */}
        <div className="stats-container">
          <div className="stats-header">
            <span className="local-time">Local Time: 14.32.14</span>
            <div className="action-buttons">
              <button>Like</button>
              <button>Snap</button>
              <button><Share2 /></button>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-value">48%</span>
            </div>
            <div className="stat-box">
              <span className="drink-icon">🥤</span>
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
            <span className="message-author">Bagas:</span>
            <span className="message-text">Hi! cute cat</span>
          </div>
          <div className="chat-message">
            <span className="message-time">16/12/2024 22:35</span>
            <span className="message-author">李爱:</span>
            <span className="message-text">我喜欢这只猫</span>
          </div>
          <div className="chat-message">
            <span className="message-time">16/12/2024 22:35</span>
            <span className="message-author">Pica:</span>
            <span className="message-text">Gemes banget</span>
          </div>
          <div className="chat-message">
            <span className="message-time">16/12/2024 22:36</span>
            <span className="message-author">Valdi:</span>
            <span className="message-text">我想收养猫</span>
          </div>
          <div className="chat-message">
            <span className="message-time">16/12/2024 22:36</span>
            <span className="message-author">李花:</span>
            <span className="message-text">我喜欢猫</span>
          </div>
          <div className="chat-message">
            <span className="message-time">16/12/2024 22:37</span>
            <span className="message-author">Pica:</span>
            <span className="message-text">Mau cubit 🐱</span>
          </div>
          <div className="chat-message">
            <span className="message-time">16/12/2024 22:37</span>
            <span className="message-author">Viktor:</span>
            <span className="message-text">Selangkah lebih dekat dengan kucing Coblong</span>
          </div>
          <div className="chat-message">
            <span className="message-time">16/12/2024 22:37</span>
            <span className="message-author">Josia:</span>
            <span className="message-text">Selamat hari monyet sedunia guys</span>
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