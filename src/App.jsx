import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Hero from './components/Hero/Hero.jsx';
import WhyChoose from "./components/WhyChoose/WhyChoose.jsx";
import About from "./pages/About.jsx"; // About Page
import Contact from "./pages/Contact.jsx"; // Contact Page
import Vegetables from "./pages/Vegetables.jsx"; // New Vegetables Page
import Fruits from "./pages/Fruits.jsx"; // New Fruits Page
import Grains from "./pages/Grains.jsx"; // New Grains Page
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import MealPlan from "./pages/MealPlan.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
    const [showPopup, setShowPopup] = useState(false);
    const HandlePopup = () => {
        setShowPopup(true);
    };

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <Router>
            <div className='overflow-x-hidden'>
                <Navbar HandlePopup={HandlePopup} />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <Banner />
                            <WhyChoose />
                            <Banner />
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/vegetables" element={<Vegetables />} />
                    <Route path="/fruits" element={<Fruits />} />
                    <Route path="/grains" element={<Grains />} />
                    <Route path="/MealPlan" element={<MealPlan />} />
                </Routes>
                <Footer />
                <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
            </div>
        </Router>
    );
};

export default App;
