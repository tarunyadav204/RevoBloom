import React from "react";
import { FaInstagram, FaTelegramPlane, FaWhatsapp, FaEnvelope } from "react-icons/fa";
// Import the Link component
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 text-center py-10 mt-16">
            {/* Navigation Links - Use Link component */}
            <div className="flex justify-center gap-8 mb-6">
                <Link to="/about" className="hover:text-white transition">About</Link>
                <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </div>

            {/* Social Media Icons - These are external, so <a> is correct */}
            <div className="flex justify-center gap-6 mb-6 text-2xl">
                <a
                    href="https://www.instagram.com/revo.bloom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition"
                >
                    <FaInstagram />
                </a>
                <a
                    href="http://t.me/Revobloom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition"
                >
                    <FaTelegramPlane />
                </a>
                <a
                    href="https://wa.me/919534624838?text=Hi%20I%20am%20interested%20in%20credit%20cards%20and%20offers.%20Can%20you%20help%20me%20choose%20the%20best%20one%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition"
                >
                    <FaWhatsapp />
                </a>
                <a
                    href="mailto:revobloom@google.com"
                    className="hover:text-yellow-400 transition"
                >
                    <FaEnvelope />
                </a>
            </div>

            {/* Copyright */}
            <p className="text-sm opacity-70">
                © {new Date().getFullYear()} RevoBloom • All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;
