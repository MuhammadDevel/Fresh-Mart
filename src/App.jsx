import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // ❌ Router hata diya
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import Hero from './components/Hero.jsx';
import WhyChoose from "./components/WhyChoose.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Vegetables from "./pages/vegetables.jsx";
import Fruits from "./pages/fruits.jsx";
import Grains from "./pages/grains.jsx";
import Footer from "./components/Footer.jsx";
import Popup from "./components/Popup.jsx";
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
    );
};

export default App;
