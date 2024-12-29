import React from "react";
import "../css/Footer.css";
import logo from '../photo/logo.png';

// Import icons (can use react-icons or custom icons)
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Column 1 - Logo & Language */}
      <FooterColumn 
        content={[
          <Logo />,
          <LanguageSelector />
        ]} 
      />
      
      {/* Column 2 - Freelancer Links */}
      <FooterColumn 
        columnTitle="Freelancer" 
        content={freelancerLinks()} 
      />
      
      {/* Column 3 - About Links */}
      <FooterColumn 
        columnTitle="About" 
        content={aboutLinks()} 
      />
      
      {/* Column 4 - Terms Links */}
      <FooterColumn 
        columnTitle="Terms" 
        content={termsLinks()} 
      />
      
      {/* Column 5 - Partners */}
      <FooterColumn 
        columnTitle="Partners" 
        content={partnersLinks()} 
      />
      
      {/* Column 6 - Apps & Social Icons */}
      <FooterColumn 
        columnTitle="Apps & Social" 
        content={[
          <Apps />, 
          <SocialIcons />
        ]} 
      />
    </footer>
  );
};

// Sub-components for different sections
const FooterColumn = ({ columnTitle, content }) => (
  <div className="footer-column">
    {columnTitle && <h3>{columnTitle}</h3>}
    {content}
  </div>
);

const Logo = () => (
  <div className="logo">
    <img src={logo} alt="Logo" />
    <p>India / English</p>
  </div>
);

const LanguageSelector = () => (
  <div className="language-selector">
    <p>Help & Support <br/> <br/> <a href="/india">Accessibility</a></p>
  </div>
);

const freelancerLinks = () => (
  <div>
    <p><a href="/categories">Categories</a></p>
    <p><a href="/projects">Projects</a></p>
    <p><a href="/contests">Contests</a></p>
    <p><a href="/freelancers">Freelancers</a></p>
    <p><a href="/enterprise">Enterprise</a></p>
    <p><a href="/ai-development">AI Development</a></p>
    <p><a href="/membership">Membership</a></p>
    <p><a href="/preferred-freelancer">Preferred Freelancer Program</a></p>
    <p><a href="/project-management">Project Management</a></p>
    <p><a href="/local-jobs">Local Jobs</a></p>
    <p><a href="/photo-anywhere">Photo Anywhere</a></p>
    <p><a href="/showcase">Showcase</a></p>
    <p><a href="/api-developers">API for Developers</a></p>
    <p><a href="/get-verified">Get Verified</a></p>
    <p><a href="/desktop-app">Desktop App</a></p>
  </div>
);

const aboutLinks = () => (
  <div>
    <p><a href="/about-us">About Us</a></p>
    <p><a href="/how-it-works">How it Works</a></p>
    <p><a href="/security">Security</a></p>
    <p><a href="/investor">Investor</a></p>
    <p><a href="/sitemap">Sitemap</a></p>
    <p><a href="/stories">Stories</a></p>
    <p><a href="/news">News</a></p>
    <p><a href="/team">Team</a></p>
    <p><a href="/awards">Awards</a></p>
    <p><a href="/press-releases">Press Releases</a></p>
    <p><a href="/careers">Careers</a></p>
  </div>
);

const termsLinks = () => (
  <div>
    <p><a href="/privacy-policy">Privacy Policy</a></p>
    <p><a href="/terms-conditions">Terms and Conditions</a></p>
    <p><a href="/copyright-policy">Copyright Policy</a></p>
    <p><a href="/code-of-conduct">Code of Conduct</a></p>
    <p><a href="/fees-charges">Fees and Charges</a></p>
  </div>
);

const partnersLinks = () => (
  <div>
    <p><a href="/escrow">Escrow.com</a></p>
    <p><a href="/loadshift">Loadshift</a></p>
    <p><a href="/warrior-forum">Warrior Forum</a></p>
  </div>
);

const Apps = () => (
  <div className="app-icons">
    <img src="apple_app_logo.png" alt="Apple App Store" />
    <img src="google_play_logo.png" alt="Google Play" />
  </div>
);

const SocialIcons = () => (
  <div className="social-icons">
    <FaFacebook />
    <FaTwitter />
    <FaYoutube />
    <FaInstagram />
  </div>
);

export default Footer;
