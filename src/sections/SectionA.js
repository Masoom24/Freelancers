import React, { useState, useEffect } from "react";
import "../css/SectionA.css";

import adobe from "../photo/adobe.svg";
import facebook from "../photo/facebook.svg";
import deloitte from "../photo/deloitte.svg";
import nasa from "../photo/nasa.webp";
import ibm from "../photo/ibm.svg";
import airbus from "../photo/airbus.svg";
import telstra from "../photo/telstra-.svg";
import fujitsu from "../photo/fujitsu.svg";
import google from "../photo/google.svg";

const SectionA = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const componentPosition = document.getElementById("new-component").getBoundingClientRect();
        if (componentPosition.top <= window.innerHeight && componentPosition.bottom >= 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="new-component" className={`new-component ${isVisible ? "visible" : ""}`}>
            <div className="image-gallery">
                <h5>As used by</h5>
                <img src={adobe} alt="Adobe" />
                <img src={facebook} alt="Facebook" />
                <img src={deloitte} alt="Deloitte" />
                <img src={nasa} alt="NASA" />
                <img src={ibm} alt="IBM" />
                <img src={airbus} alt="Airbus" />
                <img src={telstra} alt="Telstra" />
                <img src={fujitsu} alt="Fujitsu" />
                <img src={google} alt="Google" />
            </div>
            <section className="section-g-container">
  <div className="section-g-left">
    <h2>
      <span className="pink-text">Make it real</span> with Freelancer
    </h2>
    <div className="section-g-content-grid">
      {/* Row 1 */}
      <div className="content-item">
        <h1>The best talent</h1>
        <span>
          Discover reliable professionals by exploring their portfolios and immersing yourself in the feedback shared on their profiles.
        </span>
      </div>
      <div className="content-item">
        <h1>Quality work</h1>
        <span>
          With Freelancer's talent pool of over 60 million professionals at your fingertips, you'll find quality talent to get what you need done.
        </span>
      </div>
      {/* Row 2 */}
      <div className="content-item">
        <h1>Fast bids</h1>
        <span>
          Get quick, no-obligation quotes from skilled freelancers. 80% of jobs receive bids within 60 seconds. Your idea is just moments from reality.
        </span>
      </div>
      <div className="content-item">
        <h1>Be in control</h1>
        <span>
          Stay in the loop while on the move. Chat with your freelancers and get real-time updates with our mobile app. Anytime, anywhere.
        </span>
      </div>
    </div> <br/>
    {/* Bottom Section */}
    <div className="section-g-bottom">
      <h1>Make your dreams a reality.</h1>
      <div className="get-started">
        <a href="#" className="get-started-link ">
          Get started now
        </a>
        <span className="right-arrow">➔</span>
      </div>
    </div>
  </div>
</section>


        </div>
    );
};

export default SectionA;
