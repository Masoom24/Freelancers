import React from "react";
import "../css/SectionD.css";

// Import images
import img1 from "../images/the-new-york.svg";
import img2 from "../images/cnbc.svg";
import img3 from "../images/wall-street.svg";
import img4 from "../images/cnn.svg";
import img5 from "../images/bloomberg.svg";
import img6 from "../images/yahoo.svg";
import img7 from "../images/business.svg";
import img8 from "../images/forbes.svg";
import book1 from '../photo/book1.jpg';
import book2 from '../photo/book2.jpg';
import b2 from '../photo/b2.jpg';
import b3 from '../photo/b3.jpg';
import b8 from '../photo/b8.jpg';

const SectionD = () => {
  return (
    <section className="section-d-container">
      {/* Top Row - SVG images (img1 to img8) */}
      <div className="image-gallery">

      <h5 className="H5">As used by</h5>
        <img src={img1} alt="New York" />
        <img src={img2} alt="CNBC" />
        <img src={img3} alt="Wall Street" />
        <img src={img4} alt="CNN" />
        <img src={img5} alt="Bloomberg" />
        <img src={img6} alt="Yahoo" />
        <img src={img7} alt="Business" />
        <img src={img8} alt="Forbes" />
      </div>

      {/* Bottom Row - Photo images (book1, book2, b2, b3, b8) */}
      <div className="section-d-content">
        {/* Left side - 4 photos in 2x2 grid */}
        <div className="photo-images-left">
          <div className="photo-item">
            <img src={book1} alt="Book 1" />
            <div className="overlay">
              <h3>Book 1</h3>
              <button className="discover-button">Discover more</button>
            </div>
          </div>
          <div className="photo-item">
            <img src={book2} alt="Book 2" />
            <div className="overlay">
              <h3>Book 2</h3>
              <button className="discover-button">Discover more</button>
            </div>
          </div>
          <div className="photo-item">
            <img src={b2} alt="Photo 2" />
            <div className="overlay">
              <h3>Photo 2</h3>
              <button className="discover-button">Discover more</button>
            </div>
          </div>
          <div className="photo-item">
            <img src={b3} alt="Photo 3" />
            <div className="overlay">
              <h3>Photo 3</h3>
              <button className="discover-button">Discover more</button>
            </div>
          </div>
        </div>

        {/* Right side - 1 photo that covers two rows */}
        <div className="photo-images-right">
          <div className="photo-item large-photo">
            <img src={b8} alt="Photo 4" />
            <div className="overlay">
              <h3>Photo 4</h3>
              <button className="discover-button">Discover more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionD;
