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
import { Helmet } from "@vuer-ai/react-helmet-async";

function App() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("credit");

  const filteredBanks = banks
    .filter((bank) => bank.name.toLowerCase().includes(search.toLowerCase()))
    .map((bank) => ({
      ...bank,
      cards: bank.cards.filter((card) => card.type === activeTab),
    }))
    .filter((bank) => bank.cards.length > 0);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Helmet>
              <title>RevoBloom | Smart Finance</title>
              <meta
                name="description"
                content="RevoBloom helps you compare and apply for the best credit cards, savings accounts, and cashback offers in India."
              />
              <meta name="keywords" content="RevoBloom, credit cards, savings accounts, cashback, rewards" />
              <meta name="author" content="RevoBloom" />
              <meta property="og:title" content="RevoBloom | Smart Finance" />
              <meta property="og:description" content="Compare and apply for the best credit cards in India." />
              <meta property="og:image" content="https://revobloom.in/og-image.png" />
              <meta property="og:url" content="https://revobloom.in/" />
              <meta property="og:type" content="website" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="RevoBloom | Smart Finance" />
              <meta name="twitter:description" content="Find the perfect credit card for cashback, rewards, or travel." />
              <meta name="twitter:image" content="https://revobloom.in/og-image.png" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
              <HeroSection search={search} setSearch={setSearch} />

              {/* Tabs */}
              <div className="max-w-full sm:max-w-2xl md:max-w-4xl mx-auto mt-4 px-4 sm:px-6 md:px-8">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                  {["saving", "credit", "deals"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition ${activeTab === tab
                          ? "bg-indigo-600 text-white shadow-lg"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        } text-sm sm:text-base flex-1 sm:flex-auto text-center`}
                    >
                      {tab === "saving" && "Saving Accounts"}
                      {tab === "credit" && "Credit Cards"}
                      {tab === "deals" && "Brand Cashbacks"}
                    </button>
                  ))}
                </div>
              </div>


              {/* Bank List */}
              <div className="px-4 sm:px-6 md:px-8 mt-6">
                <BankList
                  banks={filteredBanks}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                />
              </div>

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
