import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGift, FaStar, FaCheckCircle, FaFilePdf } from "react-icons/fa";
import { Helmet } from "@vuer-ai/react-helmet-async";
import BackgroundImg from "../assets/backgroundBank.png"; // ✅ background

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl max-w-lg w-full p-6 relative border border-gray-200">
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                    ✕
                </button>

                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <div className="text-gray-700 max-h-72 overflow-y-auto pr-2">
                    {children}
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const BankDetails = ({ banks }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState(null);

    const bank = banks.find((b) => b.id === id);

    if (!bank) return <p>Bank not found</p>;

    // ✅ JSON-LD structured data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": bank.name,
        "url": `https://revobloom.in/bank/${bank.id}`,
        "logo": bank.logo,
        "sameAs": [
            "https://www.instagram.com/revo.bloom",
            "http://t.me/Revobloom",
            "https://wa.me/919534624838?text=Hi%20I%20am%20interested%20in%20credit%20cards%20and%20offers.%20Can%20you%20help%20me%20choose%20the%20best%20one%3F"
        ],
        "makesOffer": bank.cards.map((card) => ({
            "@type": "Offer",
            "itemOffered": {
                "@type": "Product",
                "name": card.name,
                "description": card.description || `${card.name} credit card by ${bank.name}`,
                "brand": bank.name
            },
            "priceCurrency": "INR",
            "price": card.annualFee || "0", // fallback if no fee
            "availability": "https://schema.org/InStock"
        }))
    };

    return (
        <div
            className="min-h-screen relative flex flex-col items-center justify-center px-4"
            style={{
                backgroundImage: `url(${BackgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
           {/* <Helmet>
                <title>{bank.name} | RevoBloom</title>
                <meta
                    name="description"
                    content={`Explore ${bank.name}'s best credit cards and offers on RevoBloom.`}
                />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet> */}

            <Helmet>
                <title>{bank.name} | RevoBloom</title>
                <meta
                    name="description"
                    content={`Explore ${bank.name}'s best credit cards, offers, and rewards on RevoBloom. Apply, Shop & Earn Real ₹Cash!`}
                />
                <link rel="canonical" href={`https://revobloom.in/bank/${bank.id}`} />
                {/* JSON-LD structured data for rich results */}
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>


            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"></div>

            {/* ✅ Help PDF button */}
            {bank.helpPdf && (
                <a
                    href={bank.helpPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-6 right-6 sm:top-4 sm:right-4 flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-600 text-white px-4 py-2 rounded-xl shadow-lg hover:opacity-90 transition transform hover:scale-105 z-50"
                >
                    <FaFilePdf className="text-white" />
                    Help
                </a>
            )}

            {/* Layout: Sidebar + Content */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-6 py-10">
                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-6 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl text-center text-white border border-white/20">
                        <img
                            src={bank.logo}
                            loading="lazy"
                            alt={bank.name}
                            className="mx-auto w-24 h-24 drop-shadow-lg rounded-full bg-white/20 p-2"
                        />
                        <h1 className="mt-4 text-3xl font-extrabold drop-shadow-md">{bank.name}</h1>
                        <p className="mt-2 text-sm opacity-90">{bank.description}</p>

                        <p className="mt-4 inline-block px-4 py-1 bg-white/20 text-sm rounded-full shadow-md">
                            {bank.cards?.length} Credit Cards Available
                        </p>
                    </div>
                </div>

                {/* Cards */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {bank.cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-200 transition-all flex flex-col transform hover:scale-105"
                        >
                            {card.offerPrice && (
                                <span className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                                    Popular
                                </span>
                            )}

                            <h3 className="text-lg font-bold text-gray-900">{card.name}</h3>

                            {card.offerPrice && (
                                <div className="mt-3 flex items-center gap-2 text-green-600 font-semibold">
                                    <FaGift />
                                    <span>Earn {card.offerPrice}</span>
                                </div>
                            )}

                            <div className="mt-3 flex items-center gap-2 text-yellow-500">
                                <FaStar className="fill-yellow-400" />
                                <span className="text-gray-700 text-sm">(4.0/5)</span>
                            </div>

                            {card.features && (
                                <ul className="mt-4 text-sm text-gray-600 space-y-1">
                                    {card.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <FaCheckCircle className="text-green-500 text-xs" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full">
                                <a
                                    href={card.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
                                >
                                    Apply Now
                                </a>
                                {card.terms && (
                                    <button
                                        onClick={() => setOpenIndex(index)}
                                        className="flex-1 bg-white/70 backdrop-blur-md text-gray-800 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
                                    >
                                        Terms
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {openIndex !== null && (
                <Modal
                    isOpen={openIndex !== null}
                    onClose={() => setOpenIndex(null)}
                    title={`${bank.cards[openIndex].name} - Terms & Conditions`}
                >
                    {Array.isArray(bank.cards[openIndex].terms) ? (
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            {bank.cards[openIndex].terms.map((line, idx) => (
                                <li key={idx}>{line}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="whitespace-pre-line text-gray-700">
                            {bank.cards[openIndex].terms}
                        </p>
                    )}
                </Modal>
            )}

            {/* Back Button */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10">
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition"
                >
                    ⬅ Back
                </button>
            </div>
        </div>
    );
};

export default BankDetails;
