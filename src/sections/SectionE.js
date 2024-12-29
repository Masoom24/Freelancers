import React from "react";
import "../css/SectionE.css";

const SectionE = () => {
  return (
    <section className="section-e-container">
      <div className="section-e-content">
        {/* Left Column */}
        <div className="section-e-left">
          <h2>
            Get work done in <span className="pink-text"> over 2700</span> different categories
          </h2>
        </div>

        {/* Right Column with Categories */}
        <div className="section-e-right">
          <div className="category-column">
            <ul>
              <li><a href="#">Website Design</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">Android Apps</a></li>
              <li><a href="#">iPhone Apps</a></li>
              <li><a href="#">Software Architecture</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Logo Design</a></li>
              <li><a href="#">Public Relations</a></li>
              <li><a href="#">Logistics</a></li>
              <li><a href="#">Proofreading</a></li>
              <li><a href="#">Translation</a></li>
              <li><a href="#">Research</a></li>
            </ul>
          </div>

          <div className="category-column">
            <ul>
              <li><a href="#">Research Writing</a></li>
              <li><a href="#">Article Writing</a></li>
              <li><a href="#">Web Scraping</a></li>
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">HTML 5</a></li>
              <li><a href="#">Javascript</a></li>
              <li><a href="#">Data Processing</a></li>
              <li><a href="#">Python</a></li>
              <li><a href="#">Wordpress</a></li>
              <li><a href="#">Web Search</a></li>
              <li><a href="#">Finance</a></li>
            </ul>
          </div>

          <div className="category-column">
            <ul>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Linux</a></li>
              <li><a href="#">Manufacturing</a></li>
              <li><a href="#">Data Entry</a></li>
              <li><a href="#">Content Writing</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Excel</a></li>
              <li><a href="#">Ghostwriting</a></li>
              <li><a href="#">Copywriting</a></li>
              <li><a href="#">Accounting</a></li>
              <li><a href="#">MySQL</a></li>
              <li><a href="#">C++ Programming</a></li>
            </ul>
          </div>

          <div className="category-column">
            <ul>
              <li><a href="#">Banner Design</a></li>
              <li><a href="#">Illustration</a></li>
              <li><a href="#">Link Building</a></li>
              <li><a href="#">C# Programming</a></li>
              <li><a href="#">PHP</a></li>
              <li><a href="#">3D Modelling</a></li>
              <li><a href="#">Photoshop</a></li>
              <li><a href="#">Technical Writing</a></li>
              <li><a href="#">Blogging</a></li>
              <li><a href="#">Internet Marketing</a></li>
              <li><a href="#">eCommerce</a></li>
              <li><a href="#" className="pink-text">View more</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionE;
