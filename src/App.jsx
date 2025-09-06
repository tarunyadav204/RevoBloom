import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { banks } from "./data/banks";
import BankDetails from "./pages/BankDetails";
import ContactUs from "./components/ContactUs";
import HeroSection from "./components/HeroSection";
import BankList from "./components/BankList";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import About from "./components/About";
import FloatingSocialMenu from "./components/FloatingSocialMenu";
import { Helmet } from "react-helmet-async";

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
    .filter((bank) => bank.cards.length > 0);

  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <>
            <Helmet>
              <title>RevoBloom | Smart Finance</title>
              <meta
                name="description"
                content="RevoBloom helps you compare and apply for the best credit cards, savings accounts, and cashback offers in India. Discover rewards, travel, and cashback cards from top banks."
              />
              <meta
                name="keywords"
                content="RevoBloom, credit cards, savings accounts, compare cards, cashback, rewards, travel, best credit card India"
              />
              <meta name="author" content="RevoBloom" />

              {/* Open Graph */}
              <meta property="og:title" content="RevoBloom | Smart Finance" />
              <meta
                property="og:description"
                content="Compare and apply for the best credit cards in India. Cashback, rewards, travel cards – all in one place."
              />
              <meta
                property="og:image"
                content="https://revobloom.in/og-image.png"
              />
              <meta property="og:url" content="https://revobloom.in/" />
              <meta property="og:type" content="website" />

              {/* Twitter */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="RevoBloom | Smart Finance" />
              <meta
                name="twitter:description"
                content="Find the perfect credit card for cashback, rewards, or travel. RevoBloom makes it simple."
              />
              <meta
                name="twitter:image"
                content="https://revobloom.in/og-image.png"
              />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
              <HeroSection search={search} setSearch={setSearch} />

              {/* Tabs */}
              <div className="max-w-4xl mx-auto mt-6 px-4">
                <div className="flex justify-center gap-4">
                  {["saving", "credit", "deals"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2 rounded-full font-semibold transition ${activeTab === tab
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
              <BankList banks={filteredBanks} />

              <FloatingSocialMenu />
              <Footer />
            </div>
          </>
        }
      />

      {/* Other Pages */}
      <Route path="/bank/:id" element={<BankDetails banks={banks} />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
