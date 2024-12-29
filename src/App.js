import React from "react";
import AppNavbar from "./components/AppNavbar";
import HeroSection from "./components/Herosection";
import Footer from "./components/Footer";
import { AppProvider } from "./context/AppContext";
import MainComponent from "./components/Maincomponet";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import './App.css'
const App = () => {
    return (
        <BrowserRouter> {/* Wrap everything with BrowserRouter */}
            <AppNavbar />
            <HeroSection />
           
            <AppProvider>
                <MainComponent />
            </AppProvider>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
