import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
    FaUser,
    FaEnvelope,
    FaCommentDots,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Send email
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        // IMPORTANT: Replace these with your actual EmailJS credentials
        const serviceID = "service_pjhzzq9";
        const templateID = "template_9dt07xl";
        const publicKey = "FMi400Mh1n5HzY1k5";

        emailjs
            .send(serviceID, templateID, formData, publicKey)
            .then(
                () => {
                    setStatus("✅ Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    setStatus("❌ Failed to send message. Try again later.");
                    console.error("EmailJS Error:", error.text);
                }
            );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6 space-y-8">

            {/* Contact Form + Info */}
            <div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl grid md:grid-cols-2">

                {/* Left - Contact Form */}
                <div className="p-8">
                    <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Name */}
                        <div className="relative">
                            <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            />
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <FaCommentDots className="absolute left-3 top-3.5 text-gray-400" />
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:scale-105 transform transition disabled:opacity-50"
                            disabled={status === "Sending..."}
                        >
                            {status === "Sending..." ? "Sending..." : "Send Message"}
                        </button>
                    </form>

                    {/* Status Message */}
                    {status && !status.includes("Sending") && <p className="mt-4 text-center text-sm font-medium">{status}</p>}
                </div>

                {/* Right - Info Card */}
                <div className="bg-gradient-to-br from-blue-700 to-indigo-600 text-white p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                    <p className="flex items-center gap-3 mb-4">
                        <FaEnvelope /> revobloom@gmail.com
                    </p>
                    <p className="flex items-center gap-3 mb-4">
                        <FaPhoneAlt /> +91-9534624838
                    </p>
                    <p className="flex items-center gap-3">
                        <FaMapMarkerAlt /> Patna, Bihar, India
                    </p>
                </div>
            </div>

            {/* Map Container */}
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.596106775194!2d85.11924427504091!3d25.618334077442196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5912616b8703%3A0x49b0665041d80a1e!2sSri%20Sri%20Panchmukhi%20Hanuman%20Temple!5e0!3m2!1sen!2sin!4v1757068082269!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Revobloom Location"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;
