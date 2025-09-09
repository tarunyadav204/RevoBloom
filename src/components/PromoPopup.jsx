import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ Import multiple GIFs
import Gif1 from "../assets/popupAssets/offer.gif";
import Gif2 from "../assets/popupAssets/offer2.gif";

const gifs = [
    { src: Gif1, link: "https://www.revobloom.in/bank/axis" },
    { src: Gif2, link: "https://www.revobloom.in/bank/tide" },
];

const PromoPopup = ({ isOpen, onClose }) => {
    const [index, setIndex] = useState(0);

    // Auto slide every 4 seconds
    useEffect(() => {
        if (!isOpen) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % gifs.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [isOpen]);

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + gifs.length) % gifs.length);
    };

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % gifs.length);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="relative w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 z-10"
                            onClick={onClose}
                        >
                            <FaTimes size={18} />
                        </button>

                        {/* Prev Button */}
                        <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 z-10"
                            onClick={prevSlide}
                        >
                            <FaChevronLeft />
                        </button>

                        {/* Next Button */}
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 z-10"
                            onClick={nextSlide}
                        >
                            <FaChevronRight />
                        </button>

                        {/* GIF Slide with Swipe */}
                        <motion.img
                            key={index} // re-render on index change
                            src={gifs[index].src} // updated
                            alt="Promo Offer"
                            className="w-full h-auto object-contain"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(e, info) => {
                                if (info.offset.x < -100) {
                                    nextSlide();
                                } else if (info.offset.x > 100) {
                                    prevSlide();
                                }
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />

                        {/* Dots Indicator */}
                        <div className="absolute bottom-12 w-full flex justify-center gap-2">
                            {gifs.map((_, i) => (
                                <span
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`w-3 h-3 rounded-full cursor-pointer transition-all ${i === index ? "bg-purple-600 scale-110" : "bg-gray-300"
                                        }`}
                                ></span>
                            ))}
                        </div>

                        {/* Apply Now Button */}
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                            <a
                                href={gifs[index].link} // <-- dynamic link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-full text-white font-semibold text-sm
        bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600
        shadow-md hover:shadow-lg transition-all"
                            >
                                Apply Now
                            </a>
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PromoPopup;
