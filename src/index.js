import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import InfoSection from './Components/InfoSection';
import FeatureSection from './Components/FeatureSection';
import HowItWorks from './Components/HowItWorks';
import VerificationSection from './Components/VerificationSection'
import Footer from './Components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <HeroSection />
    <InfoSection />
    <FeatureSection />
    <VerificationSection />
    <HowItWorks />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
