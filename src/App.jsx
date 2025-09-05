import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { banks } from "./data/banks";
import BankDetails from "./pages/BankDetails";
import ContactUs from "./components/ContactUs";
import HeroSection from "./components/HeroSection";
import BankList from "./components/BankList";
import Footer from "./components/Footer";
import About from "./components/About";
import FloatingSocialMenu from "./components/FloatingSocialMenu";

function App() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("credit"); // default tab

  // Filter banks by search + tab
  const filteredBanks = banks
    .filter((bank) => bank.name.toLowerCase().includes(search.toLowerCase()))
    .map((bank) => ({
      ...bank,
      cards: bank.cards.filter((card) => card.type === activeTab),
    }))
    .filter((bank) => bank.cards.length > 0); // only show banks with cards for this tab

  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
            {/* Hero / Search */}
            <HeroSection search={search} setSearch={setSearch} />

            {/* Tabs */}
            <div className="w-full mt-6 px-3 sm:px-6">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {["saving", "credit", "deals"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition 
                      ${activeTab === tab
                        ? "bg-indigo-600 text-white shadow-lg"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                  >
                    {tab === "saving" && "Saving Accounts"}
                    {tab === "credit" && "Credit Cards"}
                    {tab === "deals" && "Brand Cashbacks"}
                  </button>
                ))}
              </div>
            </div>

            {/* Bank List */}
            <div className="flex-1 px-2 sm:px-4 mt-4">
              <BankList banks={filteredBanks} />
            </div>

            {/* Floating Social Menu */}
            <FloatingSocialMenu />

            {/* Footer */}
            <Footer />
          </div>
        }
      />

      {/* Bank Details Page */}
      <Route path="/bank/:id" element={<BankDetails banks={banks} />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
