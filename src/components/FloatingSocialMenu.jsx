import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaComments, FaWhatsapp, FaTelegram, FaYoutube } from "react-icons/fa";

const FloatingSocialMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const socials = [
        { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=61580654630961", color: "bg-blue-700" },
        { icon: <FaYoutube />, link: "https://www.youtube.com/@REVOBLOOM", color: "bg-red-600" },
        { icon: <FaInstagram />, link: "https://www.instagram.com/revo.bloom", color: "bg-pink-500" },
        { icon: <FaTelegram />, link: "http://t.me/Revobloom", color: "bg-blue-500" },
        {
            icon: <FaWhatsapp size={22} />,
            link: "https://wa.me/919534624838?text=Hi%20I%20am%20interested%20in%20credit%20cards%20and%20offers.%20Can%20you%20help%20me%20choose%20the%20best%20one%3F",
            color: "bg-green-500",
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
            {/* Social Links */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col mb-3 space-y-3"
                    >
                        {socials.map((s, index) => (
                            <motion.a
                                key={index}
                                href={s.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg ${s.color}`}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Social Media Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
            >
                <FaComments size={26} />
            </button>
        </div>
    );
};

export default FloatingSocialMenu;
