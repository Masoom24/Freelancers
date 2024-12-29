import React from "react";
import "../css/SectionG.css";

const SectionG = () => {
  return (
    <section className="section-g-container">
      <div className="section-g-left">
        {/* Split the "Power your organisation's competitive advantage" */}
        <h2>
          <span>Power your</span>
          <span>organisation's</span>
          <span>competitive</span>
          <span className="pink-text">advantage</span>
        </h2>
        <h2>
          Freelancer Enterprise  </h2>

       <span>
          Company budget? Get more done for less. Use our workforce <br/> of millions to help your business achieve more.
          </span> <br/>
        <a href="#" className="view-more pink-text">View more</a>

        <h2>Freelancer API</h2>
        <span>
          Millions of professionals on demand. Why hire people when  <br/>you can simply integrate our talented cloud workforce instead?
        </span><br/>
        <a href="#" className="view-more pink-text">View more</a>
      </div>
    </section>
  );
};

export default SectionG;
