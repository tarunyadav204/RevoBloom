import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const gradientThemes = {
    "Kiwi Bank": "from-green-400 via-emerald-500 to-teal-600",
    "Axis Bank": "from-red-500 via-pink-500 to-rose-600",
    "State Bank of India": "from-blue-400 via-indigo-500 to-blue-700",
    "HDFC Bank": "from-purple-500 via-violet-600 to-indigo-700",
    "Yes Bank": "from-cyan-400 via-sky-500 to-blue-600",
    "HSBC Bank": "from-orange-400 via-red-500 to-pink-600",
    "TATA Neu": "from-fuchsia-500 via-purple-600 to-pink-700",
    "IndusInd Bank": "from-amber-400 via-orange-500 to-yellow-600",
    "CLEEVO": "from-green-400 via-lime-500 to-emerald-600", // fresh, techy
    "XYXX": "from-blue-400 via-sky-500 to-indigo-600", // youthful, trendy
    "Bajaj Finserv Prime": "from-yellow-400 via-amber-500 to-orange-600", // finance, premium
    "Cove Dental": "from-cyan-400 via-teal-500 to-emerald-600", // clean, healthcare
    "Times Prime": "from-purple-500 via-fuchsia-600 to-pink-700", // premium, luxury
    "Booking.com": "from-blue-500 via-indigo-600 to-sky-700", // travel, trusted
    "Ceazur": "from-rose-400 via-pink-500 to-red-600", // beauty, bold
    "Puer": "from-teal-400 via-green-500 to-emerald-700", // natural, eco
    "Hyugalife": "from-emerald-400 via-green-500 to-lime-600", // wellness, health
    "Fitspire": "from-orange-400 via-red-500 to-rose-600", // fitness, energy
    "Dot & Key": "from-pink-400 via-rose-500 to-fuchsia-600", // skincare, soft luxury
    "The Ayurveda Company": "from-yellow-400 via-lime-500 to-green-600", // ayurveda, herbal
    "House of Koala": "from-brown-400 via-amber-600 to-orange-700", // earthy, cozy
    "UNI Yes Bank": "from-rose-400 via-pink-500 to-red-600", // beauty, bold
    "RBL Bank": "from-orange-400 via-red-500 to-rose-600", // fitness, energy

    default: "from-gray-400 via-gray-500 to-gray-600",
};

const BankCard = ({ bank }) => {
    const theme = gradientThemes[bank.name] || gradientThemes.default;

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className={`relative rounded-2xl shadow-lg p-6 text-white bg-gradient-to-br ${theme} transform transition duration-300 hover:shadow-2xl`}
        >
            {/* Floating Logo */}
            <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-md"
            >
                <img
                    src={bank.logo}
                    alt={bank.name}
                    className="w-12 h-12 object-contain"
                />
            </motion.div>

            {/* Bank Info */}
            <div className="mt-8 text-center">
                <h3 className="text-xl font-bold drop-shadow-sm">{bank.name}</h3>
                <p className="text-sm mt-2 opacity-90">{bank.description}</p>
                <p className="mt-3 inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full shadow-sm">
                    {bank.cards?.length || 0}{bank.cards?.length > 1 ? "s" : ""} Available
                </p>

            </div>

            {/* Button */}
            <div className="mt-6 text-center">
                <Link to={`/bank/${bank.id}`}>
                    <button className="px-6 py-2 rounded-full bg-white/80 backdrop-blur-md text-gray-900 font-semibold shadow-md hover:bg-white transition">
                        View More
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default BankCard;
