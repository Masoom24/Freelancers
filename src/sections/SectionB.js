import React from "react";
import "../css/SectionB.css";
import b2 from '../photo/b2.jpg';
import b3 from '../photo/b3.jpg';
import book1 from '../photo/book1.jpg';
import book2 from '../photo/book2.jpg';
import img1 from '../photo/img1.jpg';
const SectionB = () => {
  return (
    <section className="section-two">
      <div className="section-two-container">
        {/* Left Side - Large Image */}
        <div className="large-image">
          <img src={img1} alt="3D Watches" />
          <div className="overlay">
            <h3>Detailed 3D watches - modelled for $150 USD</h3>
            <button className="discover-button">Discover more</button>
          </div>
        </div>

        {/* Right Side - Grid Images */}
        <div className="grid-images">
          {/* Image 2 */}
          <div className="grid-item">
            <img src={b2} alt="Architectural Renderings" />
            <div className="overlay">
              <h3>Realistic architectural renderings - created for $870 USD</h3>
              <button className="discover-button">Discover more</button>
            </div>
          </div>
          {/* Image 3 */}
          <div className="grid-item">
            <img src={book2} alt="Branding and Social Media" />
            <div className="overlay">
              <h3>
                This branding and social media was created for $250 USD
              </h3>
              <button className="discover-button">Discover more</button>
            </div>
          </div>
          {/* Image 4 */}
          <div className="grid-item">
            <img src={book1} alt="Card Game Designs" />
            <div className="overlay">
              <h3>Designs for this kickstarted card game - done for $2500 USD</h3>
              <button className="discover-button">Discover more</button>
            </div>
          </div>
          {/* Image 5 */}
          <div className="grid-item">
            <img src={b3} alt="Architectural Concept" />
            <div className="overlay">
              <h3>
                This architectural concept was designed for $750 USD
              </h3>
              <button className="discover-button">Discover more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionB;
