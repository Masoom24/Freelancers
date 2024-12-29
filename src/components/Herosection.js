import React, { useEffect, useState, useRef } from "react";
import "../css/herosection.css";
import main from "../video/main.mp4";

const HeroSection = () => {
    const [isLineVisible, setIsLineVisible] = useState(false);
    const videoRef = useRef(null);

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 100) { // When scrolled down 100px or more
            setIsLineVisible(true);
        } else {
            setIsLineVisible(false);
        }
    };

    // Add and remove the scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Slow down the video playback speed
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5; // Slow down the video to half speed (0.5x)
        }
    }, []);

    return (
        <div className="hero">
            {/* Background Video */}
            <video ref={videoRef} className="hero-video" autoPlay loop muted>
                <source src={main} type="video/mp4" />
            </video>

  

            <div className="hero-content">
                {/* Left Section */}
                <div className="hero-left">
                    <h1 className="hero-title">
                        Hire the best freelancers for any job, online.
                    </h1>
                    <ul className="hero-bullets">
                        <li>World's largest freelance marketplace</li>
                        <li>Any job you can possibly think of</li>
                        <li>Save up to 90% & get quotes for free</li>
                        <li>Pay only when you're 100% happy</li>
                    </ul>
                    <div className="hero-buttons">
                        <button className="btn-pink">Hire a Freelancer</button>
                        <button className="btn-transparent">Earn Money Freelancing</button>
                    </div>
                </div>

                {/* Right Section */}
                
            </div>
        </div>
    );
};

export default HeroSection;
