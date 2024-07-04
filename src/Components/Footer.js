import React from 'react';
import '../Css/Footer.css'; 
import newLogo from '../images/newLogo.png';  
import icon1 from '../images/logo1.png'; 
import icon2 from '../images/logo2.png'; 
import icon3 from '../images/logo3.png'; 
import icon4 from '../images/logo4.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={newLogo} alt="Logo" className="footer-logo" />
          <p>&#169; R Singhania</p>
        </div>
        <div className="footer-center">
          <div className="footer-column">
            <h2 className="footer-heading">Company</h2>
            <ul>
              <li>About</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading1">Terms</h2>
            <ul>
              <li>Data Privacy</li>
              <li>Terms</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading1">Related</h2>
            <ul>
              <li>Find Buyer</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <div className="circle"><img src={icon1} alt="Icon 1" /></div>
            <div className="circle"><img src={icon2} alt="Icon 2" /></div>
            <div className="circle"><img src={icon3} alt="Icon 3" /></div>
            <div className="circle"><img src={icon4} alt="Icon 4" /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
