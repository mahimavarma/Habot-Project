import React from 'react';
import '../Css/HowItWorks.css'; 
import Pic1 from '../images/Pic1.png';
import Pic2 from '../images/Pic2.png';
import Pic3 from '../images/Pic3.png';
import Pic4 from '../images/Pic4.png';
import Pic5 from '../images/Pic5.png';
import Pic6 from '../images/Pic6.png';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h1 className="heading">How it works?</h1>
      <p className="description">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
      potential buyers, and build successful business relationships, sharing valuable feedback.</p>
      <div className="grid-container">
        <div className="square colored">
          <img src={Pic1} alt="Location Icon" className="logo" />
          <p className="square-text1">Select Your Role and Sign Up</p>
        </div>
        <div className="square">
          <img src={Pic2} alt="Location Icon" className="logo" />
          <p className="square-text">Buyers Post Your Requirements</p>
        </div>
        <div className="square colored">
          <img src={Pic3} alt="Location Icon" className="logo" />
          <p className="square-text3">Review, Select, and Contact the Best Suppliers</p>
        </div>
        <div className="square">
          <img src={Pic4} alt="Location Icon" className="logo" />
          <p className="square-text">Suppliers Complete your profile and get notified for opportunities</p>
        </div>
        <div className="square colored">
          <img src={Pic5} alt="Location Icon" className="logo" />
          <p className="square-text">Contact to Buyers and Share your Quote for the service</p>
        </div>
        <div className="square">
          <img src={Pic6} alt="Location Icon" className="logo" />
          <p className="square-text">Both the Parties can Connect and Make Business Leave a Feedback</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
