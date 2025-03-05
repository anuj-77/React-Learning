import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the corresponding CSS file

function HomePage() {
  return (
    <div className="homepage-container">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/login" className="nav-item">Login</Link></li>
            <li><Link to="/signup" className="nav-item">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">Welcome to Our Platform</h1>
          <p className="hero-subtitle">Your gateway to a world of opportunities.</p>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </section>
        <section className="features-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features">
            <div className="feature">
              <h3 className="feature-title">User-Friendly Interface</h3>
              <p className="feature-description">Navigate our platform with ease and efficiency.</p>
            </div>
            <div className="feature">
              <h3 className="feature-title">Secure and Reliable</h3>
              <p className="feature-description">Your data's security is our top priority.</p>
            </div>
            <div className="feature">
              <h3 className="feature-title">24/7 Support</h3>
              <p className="feature-description">We're here to help, anytime you need us.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Our Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
