import React from "react";
import BankCard from "./BankCard";

const BankList = ({ banks }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 mt-16">
            {banks.length > 0 ? (
                banks.map((bank, index) => <BankCard key={index} bank={bank} />)
            ) : (
                <p className="text-gray-600 text-lg mt-10">No banks found.</p>
            )}
        </div>
    );
};

export default BankList;
