import React from "react";
import Logo from "../assets/logoRemove.png"; // <-- Save your new Revobloom logo here
import { Helmet } from "react-helmet-async";
const About = () => {
    return (
        <>
            <Helmet>
                <title>About RevoBloom | RevoBloom</title>
                <meta name="description" content="About RevoBloom — we help you find the best credit cards, savings and deals in India." />
                <meta property="og:title" content="About RevoBloom | RevoBloom" />
                <meta property="og:description" content="Learn about RevoBloom..." />
                <meta property="og:image" content="https://revobloom.in/og-image.png" />
                <link rel="canonical" href="https://revobloom.in/about" />
            </Helmet>

            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 px-4">
                <div className="max-w-3xl w-full shadow-2xl rounded-2xl overflow-hidden border bg-white">

                    {/* Header */}
                    <div className="p-10 text-center">
                        <img
                            src={Logo}
                            alt="Revobloom Logo"
                            className="w-28 h-28 mx-auto mb-6 drop-shadow-lg"
                        />

                        <p className="text-gray-600 leading-relaxed mb-4">
                            Welcome to <span className="font-semibold">Revobloom</span>, your trusted
                            platform for discovering and comparing the best credit card offers from
                            top banks. We’re here to make financial decisions easier, smarter, and
                            more rewarding.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            With our simple and transparent approach, you can explore card benefits,
                            rewards, and cashback opportunities—all in one place. Whether you’re a
                            frequent shopper, traveler, or someone building credit, Revobloom is here
                            to guide you.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our mission is to empower you to make confident financial choices and
                            bloom into opportunities that help you grow and thrive.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="bg-gradient-to-r from-pink-600 to-blue-600 text-white text-center py-4">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Revobloom. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
