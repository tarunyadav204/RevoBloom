import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import Logo from "../assets/logoRemove.png";

const HeroSection = ({ search, setSearch }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    // Detect mobile screen
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Track scroll
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="relative text-white py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
            <div className="text-center max-w-2xl mx-auto relative z-10">
                {/* Animated Sticky Logo (only mobile) */}
                <motion.img
                    src={Logo}
                    alt="Revobloom Logo"
                    className="mx-auto mb-6 drop-shadow-lg"
                    initial={{ x: 0, y: 0, scale: 1 }}
                    animate={
                        isMobile
                            ? scrollY < 100
                                ? {
                                    x: scrollY * 0.6, // smooth right move
                                    y: -scrollY * 0.4, // smooth up move
                                    width: 112, // same as w-28
                                }
                                : {
                                    position: "fixed",
                                    top: "10px",
                                    right: "12px",
                                    x: 0,
                                    y: 0,
                                    width: 68, // smaller logo (same as w-12)
                                }
                            : { x: 0, y: 0, width: 112 }
                    }
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                />

                {/* Typing Effect Title */}
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                    Find the Perfect
                    <br />
                    <TypeAnimation
                        sequence={[
                            "Credit Card 💳", 2000,
                            "Bank Account 🏦", 2000,
                            "Brand Cashback 🎁", 2000,
                            "Financial Service 📈", 2000,
                        ]}
                        wrapper="span"
                        speed={30}
                        repeat={Infinity}
                        cursor={true}
                        className="block text-yellow-300"
                    />
                </h1>

                <p className="text-lg opacity-90 mb-6">
                    Compare top banks, get exclusive rewards, and apply in minutes.
                </p>
                <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition">
                    Find My Best Card
                </button>
            </div>

            {/* Floating Cards - show only on desktop */}
            {!isMobile && (
                <>
                    <div className="absolute -top-10 right-20 animate-bounce">
                        <img
                            src={card1}
                            className="w-64 drop-shadow-2xl rounded-xl"
                            alt="Card"
                        />
                    </div>
                    <div className="absolute top-20 left-10 animate-bounce-slow">
                        <img
                            src={card2}
                            className="w-52 drop-shadow-2xl rounded-xl"
                            alt="Card"
                        />
                    </div>
                </>
            )}

            {/* Search Bar */}
            <div className="flex justify-center mt-12 relative z-10">
                <input
                    type="text"
                    placeholder="Search Bank..."
                    className="px-4 py-3 w-80 rounded-full border focus:ring-2 focus:ring-yellow-400 focus:outline-none text-black shadow-md"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </header>
    );
};

export default HeroSection;
