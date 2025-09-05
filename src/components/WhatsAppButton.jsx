import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/9534624838?text=Hello%2C%20I%20need%20assistance%20with%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
        >
            <FaWhatsapp className="w-7 h-7 text-white" />
        </a>
    );
};

export default WhatsAppButton;
