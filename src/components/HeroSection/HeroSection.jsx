import React from "react";
import "./HeroSection.css";
import assets from "../../assets/assets";
const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-section">
        <div className="play-section">
            <div className="play-button">
          <img src={assets.playbutton} alt="" />
          </div>
          <div className="review">
            <div className="review-1">
              <span>Aditi Verma</span>
              <p>22</p>
              <p>
                I always wanted to learn digital art, but tutorials were
                confusing. This course made everything so simple! Now, I m
                taking commissions online!
              </p>
            </div>
            <div className="review-1">
              <span>Rajesh Khanna</span>
              <p >30</p>
              <p>
                Switching from traditional art to digital felt overwhelming, but
                this course changed everything! The structured lessons helped me
                master Procreate in weeks!
              </p>
            </div>
          </div>
        </div>
        <div className="hero-section-2">
            <h4>Is This Right for You?</h4>
            <span>Everybody is fond of Digital Art! You need it too.</span>
            <img src={assets.hero_image} alt="" />
        </div>
        <div className="hero-section-3">
            <h3>Not Satisfied Yet?
            </h3>
            <span className="span1">We got you! Here are few extra features</span>
            <ul className="benefits-list">
            <li>
              <img src={assets.calender} alt="Hands-on Lessons icon" />
              <span>Sketching Basics – Shape, form, and proportion
              fundamentals</span>
            </li>
            <li>
              <img src={assets.dots} alt="Tool Mastery icon" />
              <span>Digital Painting – Master shading, blending &
              coloring techniques</span>
            </li>
            <li>
              <img src={assets.dollar} alt="Exclusive Resource Pack icon" />
              <span>Tool Mastery – Hands-on with Procreate,
Photoshop & Illustrator
</span>
            </li>
            <li>
              <img src={assets.live} alt="Live Mentorship icon" />
              <span>Portfolio Building – Craft stunning pieces to
              showcase your skills</span>
            </li>
            <li>
              <img src={assets.trend} alt="Project-Based Learning icon" />
              <span>Bonus: Monetization Guide – How to sell your
              art & get freelance gigs</span>
            </li>
            <li>
              <img src={assets.contact} alt="Certificate of Completion icon" />
              <span>Certificate of Completion – Boost your creative career.</span>
            </li>
            <li>
              <img src={assets.profile} alt="Community Access icon" />
              <span>Live Mentorship – Weekly Q&A sessions with
              industry pros</span>
            </li>
          </ul>
          <button type="button" className="cta-button">
            Book Now at ₹49
          </button>
        </div>
        <div class="enroll-section">
    <h2>Enroll Now for ₹7,999</h2>
    
    <div class="enroll-options">
        <div class="enroll-option">Secure Your Spot for Just ₹79</div>
        <div class="enroll-option">Bonus Offer: Apply a coupon code within 15 minutes to unlock:</div>
        <div class="enroll-option">Exclusive Brush & Texture Pack</div>
        <div class="enroll-option">Extra Live Q&A Session with Mentors</div>
    </div>

    <p class="enroll-text">WE Offer everything you need at ₹7,999—but wait... 👀</p>

    <div class="discount-banner">
        Use a Special Code & Unlock a Game-Changing Discount to avail the same course at a discounted price!
    </div>
    <button type="button" className="cta-button">
            Book Now at ₹49
          </button>
</div>

      </div>
    </div>
  );
};

export default HeroSection;
