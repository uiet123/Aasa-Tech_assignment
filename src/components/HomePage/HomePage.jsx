import React from "react";
import assets from "../../assets/assets";
import "./HomePage.css";
import "../Navbar/Navbar.css"

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="header">
        <div className="homepage-content">
        <div className='navbar'>
        <img src={assets.aasa} alt="" />
        <button type="button" className="get-started">
        Get Started
      </button>
    </div>
          <div className="headings">
          <h1>Master the Art of Digital Illustration</h1>
          <h2>
            A 4-Week Course Designed for Beginners & Enthusiasts!
          </h2>
          </div>
          
          <img
            className="heading-image"
            src={assets.home}
            alt="laptop"
          />
          <div className="headings-1">
          <p>
            Learn to create stunning digital artwork with step-by-step guidance
            from industry experts.
          </p>
          <p>
            No prior experience required. Just your creativity! Enroll now for ₹7,999.
          </p>
          </div>
          
          <div className="headings-2">
          <button type="button" className="cta-button">
            Secure Your Spot for Just ₹79
          </button>
          <p className="coupon-text">
            Use a coupon code within 15 minutes to unlock a special bonus pack!
          </p>
          </div>
         
        </div>

        {/* Section: Without Proper Training */}
        <div className="homepage-content-mid">
          <h3>Without Proper Training, You Might:</h3>
          <ul className="challenges-list">
            <li>Struggle with complex software tools</li>
            <li>Feel stuck without structured learning</li>
            <div className="challenge-last">
              <img src={assets.cross} alt="" />
              <li>Miss out on monetizing your skills</li>
            </div>
          </ul>
        </div>

        {/* Section: What You Get */}
        <div className="homepage-content-last">
          <h3>With This Course, You Get:</h3>
          <ul className="benefits-list">
            <li>
              <img src={assets.globe} alt="Hands-on Lessons icon" />
              <span>Hands-on Lessons – Learn digital painting, shading & composition.</span>
            </li>
            <li>
              <img src={assets.circle} alt="Tool Mastery icon" />
              <span>Tool Mastery – Master Procreate, Photoshop, & Illustrator.</span>
            </li>
            <li>
              <img src={assets.dollar} alt="Exclusive Resource Pack icon" />
              <span>Exclusive Resource Pack – Brushes, templates & textures.</span>
            </li>
            <li>
              <img src={assets.live} alt="Live Mentorship icon" />
              <span>Live Mentorship – Weekly Q&A sessions with industry pros.</span>
            </li>
            <li>
              <img src={assets.maps} alt="Project-Based Learning icon" />
              <span>Project-Based Learning – Build a stunning portfolio.</span>
            </li>
            <li>
              <img src={assets.at_the_rate} alt="Certificate of Completion icon" />
              <span>Certificate of Completion – Boost your creative career.</span>
            </li>
            <li>
              <img src={assets.newspaper} alt="Community Access icon" />
              <span>Community Access – Network with fellow artists.</span>
            </li>
          </ul>
          <button type="button" className="cta-button">
            Book Now at ₹49
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
