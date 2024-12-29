import React, { useState, useEffect } from "react";
import "../css/SectionC.css";

const SectionC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const componentPosition = document.getElementById("section-c").getBoundingClientRect();
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
        <div
            id="section-c"
            className={`section-c ${isVisible ? "visible" : ""}`}
        >
            <div className="content">
                <h1 className="make-it-real">Tap into a</h1>
                <h1 className="freelancer"><b>global talent network</b></h1>

                <div className="features">
                    <div className="feature-item">
                        <h3>Post your job</h3>
                        <p>It's free and easy! Get lots of competitive bids that suit your budget in minutes. Start making your dreams reality.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Choose freelancers</h3>
                        <p>No job is too big or complex. We've got freelancers for jobs of any size or budget, across 2700+ skills. Let our talent bring your ideas to life.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Pay safely</h3>
                        <p>Maintain confidentiality and ensure secure transactions with advanced technologies.Only pay for work when you are 100% satisfied with the outcome. Our milestone payment system protects you every step of the way.</p>
                    </div>
                    <div className="feature-item">
                        <h3>We're here to help</h3>
                        <p>Your time is precious. Let our team of expert recruiters and co-pilots save you time finding talent, even managing your job if needed.</p>
                    </div>
                </div>
                <h3>Create the future.</h3>
                <a href="#" className="get-started-link ">
          Get started now
        </a>
        <span className="right-arrow">➔</span>
            </div>
        </div>
    );
};

export default SectionC;
