import AULogo from "../assets/AU.jpg";
import AxisBank from "../assets/AxisBank.svg";
import FederalBank from "../assets/federalBank.svg";
import HDFCbank from "../assets/HDFCbank.svg";
import HSBCbank from "../assets/HSBCbank.jpg";
import IndusIndBank from "../assets/indusBank.webp";
import KiwiBank from "../assets/Kiwibank_logo_(original).svg";
import RBLBank from "../assets/rblLogo.png";
import RioBank from "../assets/rioBank.png";
import SBIbank from "../assets/SBIbank.svg";
import YesBank from "../assets/yesbank.jpeg";
import TideBank from "../assets/tidelogo.png";
import ICICIBank from "../assets/iciciBank.png";
import TATAlogo from "../assets/tataNeu.jpg";
import Cleevo from "../assets/cleevo.jpeg";
import XYXX from "../assets/xyxx.jpeg";
import Bajaj from "../assets/bajaj.jpeg";
import Cove from "../assets/clove.jpeg";
import Times from "../assets/timesPrime.jpeg";
import Booking from "../assets/booking.jpeg";
import Ceazur from "../assets/ceazur.jpeg";
import Puer from "../assets/puer.jpeg";
import HyugaLife from "../assets/hyugalife.jpeg";
import Fitspire from "../assets/fitspire.jpeg";
import DotKey from "../assets/dotkey.jpeg";
import House from "../assets/house.jpeg";
import TAC from "../assets/TAC.webp";
import UniBank from "../assets/UniBank.jpg";


export const banks = [
    {
        id: "kiwi",
        name: "Kiwi Bank",
        logo: KiwiBank,
        description:
            "Apply for the Kiwi Credit Card and start enjoying a world of exclusive offers and exciting benefits today.",
        cards: [
            {
                name: "KIWI Credit Card",
                link: "https://bitl.in/P5OkjQA6",
                offerPrice: "₹800",
                type: "credit",
                terms: `
        About your Reward
        You will receive a confirmation message on WhatsApp about your Reward within 72 hours of application ID generation.
        Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of card activation.

        Eligibility Criteria
        Age: 25 - 60 yrs
        Salaried Only
        CIBIL Score: 720+
        Minimum Income: ₹1.8 Lakhs per annum

        Documents Needed
        ID Proof
        Income Proof: 3 months latest Bank Statement
        PAN Card

        Essential Info
        Activate card by making a minimum transaction of ₹100 within 30 days of issuance
        Please use the Aadhaar Linked Mobile Number
        Existing Yes Bank credit card holders are not eligible
        If you have ever registered on KIWI APP, you will not be eligible for Rewards
      `,
                features: [
                    "Cashback on all purchases",
                    "Zero annual fee for 1st year",
                    "Reward points on dining",
                ],
            },
        ],
    },
    {
        id: "rio",
        name: "Rio Bank",
        logo: RioBank,
        description: "Enjoy cashback and lifestyle rewards with the Rio Credit Card.",
        cards: [
            {
                name: "RIO Credit Card",
                link: "https://bitl.in/PcF7eT9K",
                offerPrice: "₹700",
                type: "credit",
                terms: `
About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of application ID generation.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of card activation.
Eligibility Criteria

Age: 21 to 60 years
Minimum Income: ₹25,000/Month
CIBIL Score: 720+
Occupations Allowed- Salaried or Self Employed
Documents Needed

ID Proof-PAN Card
Income Proof: 3 months latest Bank Statement
Essential Info

Please use the Aadhar Linked Mobile Number to complete the application
Existing Yes bank credit card holders are not eligible for Rewards
If you have ever downloaded/registered on Rio App before applying via Profit Share, you will not be eligible for Rewards
`,
                features: [
                    "5% cashback on shopping",
                    "Free airport lounge access",
                    "Fuel surcharge waiver",
                ],
            },
        ],
    },
    {
        id: "hsbc",
        name: "HSBC Bank",
        logo: HSBCbank,
        description: "Premium banking cards with cashback and lifestyle benefits.",
        cards: [
            {
                name: "HSBC Live Plus Credit Card",
                link: "https://bitl.in/PiAPOOxN",
                offerPrice: "₹1020",
                type: "credit",
                terms: `About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of application ID generation.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of card activation.
NOTE: A Minimum transaction of ₹100 is required within 30 days to activate the card.
Eligibility Criteria

Age: 21 to 65 years
Employment status: Only Salaried
Salaried: Minimum monthly income of ₹55,000
Cibil Score: 750+
You must reside in Chennai, Gurgaon, Delhi National Capital Region (NCR), Pune, Noida, Hyderabad, Mumbai, Bangalore, Kochi, Coimbatore, Jaipur, Chandigarh, Ahmedabad or Kolkata
New to Credit allowed for salaried only
Fees & Charges

Joining Fees: ₹999 + GST
Annual Fees: ₹999 + GST, get annual fee waiver on spending ₹2,00,000 or more in a year
Documents Needed

Address Proof
ID proof
Income proof
PAN Card/Form 60
Essential Info

Please use your Aadhaar linked Mobile number to complete the application
If you were/are using any HSBC Credit card, you are not eligible for the Rewards
Card upgrades/limit enhancements are not a part of Rewards
No Rewards on HSBC Bank app applications
`,
                features: [
                    "Dining offers",
                    "Reward points on every spend",
                    "Complimentary airport lounge visits",
                ],
            },
            {
                name: "HSBC Platinum Credit Card",
                link: "https://bitl.in/PXZE2yC4",
                offerPrice: "₹1500",
                type: "credit",
                terms: `About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of application ID generation.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of card activation.
NOTE: A Minimum transaction of ₹100 is required within 30 days to activate the card.
Eligibility Criteria

Age: 21 to 65 years
Employment status: Only Salaried
Salaried: Minimum monthly income of ₹55,000
Cibil Score: 750+
You must reside in Chennai, Gurgaon, Delhi National Capital Region (NCR), Pune, Noida, Hyderabad, Mumbai, Bangalore, Kochi, Coimbatore, Jaipur, Chandigarh, Ahmedabad or Kolkata
New to Credit allowed for salaried only
Fees & Charges

Joining Fees: Nil
Annual Fees: Nil
Documents Needed

Address Proof
ID proof
Income proof
PAN Card/Form 60
Essential Info

Please use your Aadhaar linked Mobile number to complete the application
If you were/are using any HSBC Credit card, you are not eligible for the Rewards
Card upgrades/limit enhancements are not a part of Rewards
To apply for this card, you must live in Bangalore, Chennai, Gurgaon, Hyderabad, Mumbai, New Delhi, Noida or Pune
No Rewards on HSBC Bank app applications`,
                features: [
                    "Cashback on shopping",
                    "Travel discounts",
                    "Fuel surcharge waiver",
                ],
            },
        ],
    },
    {
        id: "au",
        name: "AU Small Finance Bank",
        logo: AULogo,
        description: "AU Bank cards with travel and shopping rewards.",
        cards: [
            {
                name: "AU Altura Credit Card",
                link: "https://bitl.in/PPtoJKig",
                offerPrice: "₹750",
                type: "credit",
                terms: `About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of application ID generation.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of card activation.
NOTE: A Minimum transaction of ₹100 is required within 30 days to activate the card.
About AU Bank Altura Credit Card

LIFETIME FREE CREDIT CARD
Enjoy the limitless spending and wide variety of benefits like cashback, Fuel waiver, railway lounge benefits & More!
5% Cashback on minimum ₹2,500 retail spends done within first 60 days of card setup (Maximum cashback per statement cycle is ₹150)
Features of the Card

2% Cashback on all retail spends done at Grocery stores, Departmental stores and Utility bill payments (Maximum cashback per statement cycle is ₹50)
1% Cashback on all other retail spends (Maximum cashback per statement cycle is ₹50)
Get additional cashback of ₹50 on completing a minimum of ₹10,000 retail spends in every statement cycle
2 complimentary lounge access per calendar quarter, using VISA Card at railway stations in these cities – New Delhi, Kolkata (Sealdah), Jaipur, Ahmedabad and Agra
1% Fuel Surcharge Waiver for fuel transactions done between ₹400 and ₹5,000 across all fuel stations in the country
Convert your transactions worth INR 2,000 or more into easy EMI options on selected tenure of your choice
Partner Offers

10% Instant Discount upto ₹1,000 per month on Flipkart Orders Above ₹10,000
Additional 10% Off upto ₹1000 on Myntra
10% off on Groceries & daily essentials (Upto ₹300 per month) on JioMart Orders Above ₹1500
15% instant discount upto ₹300 per month on Tata CLiQ Orders Above ₹500
Flat ₹100 off on Groceries upto ₹100 on Blinkit app orders above ₹1000
Eligibility Criteria 

Required Age: 21-60 years
Employment status: Salaried or self-employed
Salaried: Starting from ₹25,000 Monthly
Self Employed: Starting from ₹25,000 Monthly
Customers need to have an Existing card (6 months old) with a minimum limit of ₹30,000
No Delayed Payments in the last 12 months
Required Credit Score: 700+
Fees & Charges 

Joining Fees: Nil
Annual Fees: Nil
Documents Needed 

Valid PAN Card
Aadhar Card - should be linked to Mobile (For EKYC)
Address proof
Income Proof (if opted for Income surrogate)
Essential Info

Please use your Aadhar linked Mobile number to complete the application
If you were/are an existing AU Bank customer (Savings/Current Account/Credit cards/Loans), you are not eligible for the Rewards
If you apply for a different card upon redirecting, you will be eligible for the Rewards applicable on the card applied
No Rewards on AU Bank App applications `,
                features: [
                    "Travel rewards",
                    "Cashback on online shopping",
                    "Dining privileges",
                ],
            },
            {
                name: "AU LIT Credit Card",
                link: "https://bitl.in/Px28VKLo",
                offerPrice: "₹513",
                type: "credit",
                terms: `About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of application ID generation.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of card activation.
NOTE: A Minimum transaction of ₹100 is required within 30 days to activate the card.
Eligibility Criteria 

Existing Credit Card holder of any bank
Employment status: Salaried or self-employed
Starting from Rs 25,000 Monthly Salary
Income: Rs 25,000 per month (Salaried and self-Employed)
Age: 21-60 years
Credit Score: 700+
No delay payments in past 12 months
Fees & Charges 

Joining Fees: Nil
Annual Fees: Nil
Documents Needed

Valid PAN Card
Aadhar Card - should be linked to Mobile (For EKYC)
Address proof
Income Proof (if opted for Income surrogate)
Essential Info

Please use your Aadhar linked Mobile number to complete the application
If you were/are an existing AU Bank customer (Savings/Current Account/Credit cards/Loans), you are not eligible for the Rewards
If you apply for a different card upon redirecting, you will be eligible for the Rewards applicable on the card applied
No Rewards on AU Bank App applications`,
                features: [
                    "Customizable card benefits",
                    "Low annual fee",
                    "Entertainment rewards",
                ],
            },
        ],
    },
    {
        id: "yes",
        name: "Yes Bank",
        logo: YesBank,
        description: "Yes Bank cards with lifestyle perks.",
        cards: [
            {
                name: "Yes Bank Pop-Club Credit Card",
                link: "https://bitl.in/PuPkgbaP",
                offerPrice: "₹750",
                type: "credit",
                terms: `About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of successful application submission.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of successful card disbursal.
NOTE: A Minimum transaction of ₹100 is required within 30 days to activate the card.
About Yes Bank Pop-Club Credit Card

₹5000 worth of Joining Benefits
Joining Benefits includes ₹750 Cleartrip Voucher, 5 free Blinkit deliveries, 3-month Zomato Gold Mini Membership, 6-month PharmEasy Plus membership, 2 free Rapido bike rides every month worth ₹100 and a Cult Sport Voucher worth ₹500 & 500 POPcoins upon card activation
Earn 10 POPcoins on every ₹100 spent on online transactions
Other Amazing Offers 

Earn extra 5% Popcoins on POP UPI with POP RuPay Credit Card
Earn 2 POPcoins on every ₹100 spent on offline transactions
Extra 1500 POPcoins on spending ₹1.5 Lakhs worth transactions annually
Exclusive vouchers from Zomato, Blinkit, Cleartrip, Cult, Pharmeasy and Rapido
1% Fuel surcharge waiver
Eligibility Criteria

Age: 21 to 60 years
Employment: Both Salaried and Self Employed
Cibil Score: 730+
New to Credit: Not Allowed
Customer shall have an existing credit card (other Bank) with minimum ₹50,000 credit limit and 6-month vintage
Fees & Charges

Lifetime FREE Credit Card
Joining Fees: Nil
Annual Fees: Nil
Documents Needed

ID Proof: PAN Card
Address Proof: Aadhaar Number mandatory
Income Proof: No Income doc required, approval based on any other existing credit card vintage and credit limit
Essential Info

If you were/are using any Yes Bank credit card, you are not eligible for Rewards
Please use your Aadhar linked Mobile number to complete the application`,
                features: ["Shopping rewards", "Dining offers", "Fuel surcharge waiver"],
            },
        ],
    },
    {
        id: "axis",
        name: "Axis Bank",
        logo: AxisBank,
        description:
            "Wide range of Axis Bank credit cards for shopping, travel, and fuel benefits.",
        cards: [
            {
                name: "Axis Indian Oil Rupay Credit Card",
                link: "https://bitl.in/PyCNGiPr",
                offerPrice: "₹1000",
                type: "credit",
                terms: `About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of application ID generation.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of card activation.
NOTE: A Minimum transaction of ₹100 is required within 30 days to activate the card.
Eligibility Criteria

Employment Status: Salaried or Self-employed
Income: ₹15,000 per month (Salaried)
Income: ₹30,000 per month (self-employed)
Age: 21-65 years
Cibil Score: 735+
New to Credit not allowed
Fees & Charges

Joining Fees: ₹500 + GST
Annual fees: ₹500 + GST
Documents Needed

ID Proof
Address Proof
Income Proof
PAN Card / Form 60
How to Avail the Offer

You will be redirected to Axis website
Click Login/Join Now and do OTP verification
Select Axis IOCL Rupay Credit Card and provide the required details
Application will be submitted and a confirmation SMS will be sent on approval of the application
Get your application status within 10 minutes
NOTE: Please ensure that when you initiate the VKYC process, your location is within a 50km radius of your Aadhaar or communication address
Essential Info

Please use your Aadhar linked Mobile number to complete the application
If you are an existing Axis Bank customer, please use the already registered mobile number to complete your application
Your full name is mandatory to apply for Axis Credit card, applications with a single name will not be accepted
If you were/are using any AXIS Credit card, you are not eligible for Rewards
If you apply for a different card upon redirecting, you will be eligible for the Rewards applicable on the card applied
No Rewards on Axis Bank App applications`,
                features: ["Fuel cashback", "Dining offers", "Reward points on spends"],
            },
            {
                name: "Axis Airtel Credit Card",
                link: "https://bitl.in/PxczXzES",
                offerPrice: "₹1000 + ₹500",
                type: "credit",
                terms: `About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of application ID generation.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of card activation.
NOTE: A Minimum transaction of ₹100 is required within 30 days to activate the card.
Eligibility Criteria

Required Age: 21-70 years
Employment status: Salaried or Self-Employed
Income: Starting from ₹15,000 per month (Salaried), Starting from ₹30,000 per month (self-employed)
Cibil Score: 730 and above
New to Credit not allowed
Available across major cities in India
Fees & Charges

Joining Fees: ₹500 + GST
Annual fees: ₹500 + GST (waived off on annual spends over ₹2,00,000)
Interest rate: Upto 3.6% per month
Cash Withdrawal Fee: Min. ₹500 Upto 2.5% of the cash withdrawal amount
Documents Needed

PAN Card/Form 60
ID Proof
Address proof
Bank Statement or Income proof
Coloured photographs
How to Avail the Offer

You will be redirected to Axis website
Click Login/Join Now and do OTP verification
Select Axis Airtel Credit Card and provide the required details
Application will be submitted and a confirmation SMS will be sent on approval of the application
Get your application status within 10 minutes
NOTE: Please ensure that when you initiate the VKYC process, your location is within a 50km radius of your Aadhaar or communication address
Essential Info

Please use your Aadhar linked Mobile number to complete the application
As per Axis Bank guidelines, please ensure to provide your full name as applications with a single name will be rejected
Please use the phone number linked to your Axis Bank account or FD, as applications with a different number will be rejected by Axis
If you were/are using any AXIS Credit card, you are not eligible for Rewards
If you apply for a different card upon redirecting, you will be eligible for the Rewards on the card applied
Cashback earned will be deducted from your next month credit card statement
No Rewards on Axis Bank App applications`,
                features: [
                    "Cashback on Airtel bills",
                    "Shopping rewards",
                    "Dining discounts",
                ],
            },
            {
                name: "Axis MyZone Credit Card",
                link: "https://bitl.in/PjiTD9x6",
                offerPrice: "₹1200",
                type: "credit",
                terms: `About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of application ID generation.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of card activation.
NOTE: A Minimum transaction of ₹100 is required within 30 days to activate the card.
Eligibility Criteria

Required Age: 21-65 years
Employment status: Salaried or Self-Employed
Income: ₹15,000 per month (Salaried), ₹20,000 per month (self-employed)
Cibil Score: 730 and above
New to Credit not allowed
Fees & Charges

Joining Fees: ₹500 + GST
Annual Fees: ₹500 + GST
Documents Needed

PAN Card/Form 60
Aadhaar Card
Address proof
Bank statement or Income Proof
How to Avail the Offer

You will be redirected to Axis website
Click Login/Join Now and do OTP verification
Select Axis Airtel Credit Card and provide the required details
Application will be submitted and a confirmation SMS will be sent on approval of the application
Get your application status within 10 minutes
NOTE: Please ensure that when you initiate the VKYC process, your location is within a 50km radius of your Aadhaar or communication address
Essential Info

Please use your Aadhar linked Mobile number to complete the application
As per Axis Bank guidelines, please ensure to provide your full name as applications with a single name will be rejected
Please use the phone number linked to your Axis Bank account or FD, as applications with a different number will be rejected by Axis
If you were/are using any AXIS Credit card, you are not eligible for Rewards
If you apply for a different card upon redirecting, you will be eligible for the Rewards on the card applied
No Rewards on Axis Bank App applications`,
                features: [
                    "Entertainment discounts",
                    "Reward points on shopping",
                    "Travel offers",
                ],
            },
            {
                name: "Axis Flipkart Credit Card",
                link: "https://bitl.in/PoK8YpgT",
                offerPrice: "₹1000 + ₹350",
                type: "credit",
                terms: `About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of application ID generation.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of card activation.
NOTE: A Minimum transaction of ₹100 is required within 30 days to activate the card.
Eligibility Criteria

Age: 21 to 60 years
Cibil Score: 730 and above
Employment: Both salaried and self-employed individuals are eligible
Salaried: Minimum monthly income of ₹25,000
Self-Employed: Minimum income as filed in ITR ₹3.6 lac/year
New to Credit not allowed
Fees & Charges

Joining Fees: Nil (Limited period offer)
Annual fees: ₹500 + GST
Get annual fee waiver on spending ₹3,50,000 or more in a year
Documents Needed

ID Proof: PAN Card/Form 60/Passport
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or salary slips/Form 16/ITR Return
Photograph: Recent passport-sized photo
Essential Info

Please use your Aadhar linked Mobile number to complete the application
As per Axis Bank guidelines, please ensure to provide your full name as applications with a single name will be rejected
Please use the phone number linked to your Axis Bank account or FD, as applications with a different number will be rejected by Axis
If you were/are using any AXIS Credit card, you are not eligible for Rewards
If you apply for a different card upon redirecting, you will be eligible for the Rewards on the card applied
No Rewards on Axis Bank App applications`,
                features: [
                    "Cashback on Flipkart",
                    "Dining discounts",
                    "Fuel surcharge waiver",
                ],
            },
            {
                name: "Axis Privilege Credit Card",
                link: "https://bitli.in/86DQVf3",
                offerPrice: null,
                type: "credit",
                terms: `About Axis Privilege Credit Card -

Get 12,500 Edge Reward Points worth Rs 2,500 on spending Rs 2.5L within your card anniversary year
Get 2 complimentary domestic lounge access per quarter (eight annually) with a Rs 50,000 spend in the past three months
Enjoy exclusive Wednesday Offers with 15% off on flights & hotels (Goibibo, MMT) and 10% off on Swiggy, Amazon Fresh, & Tira (upto Rs 1,000)
Avail Buy 1 Get 1 offer on movie tickets via the District app - upto Rs 250 off, once per month
Get 10,000 Edge Reward Points worth Rs 2,000 on spending Rs 2.5 lakh annually, and enjoy an annual fee waiver on spending Rs 5 lakh
Enjoy exclusive dining privileges with 25% off upto Rs 800 and additional benefits through the Axis Bank Dining Delights Program with EazyDiner
Enjoy a 1% fuel surcharge waiver on transactions between Rs 400 and Rs 4,000, with savings of upto Rs 400 per statement cycle

Fees & List of Charges -

Joining Fees: Rs 1500 + GST
Annual fees: Rs 1500 + GST

Documents Needed -

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or Salary slips
Photograph: Recent passport-sized photo

Eligibility Criteria -

Required Age: 21-65 years
Employment status: Salaried or self-employed
Salaried Income: Rs 50,000/monthly
Self Employed: ITR > Rs 6 Lakhs/annum
Cibil Score: 736+
New to Credit not allowed

How to Avail the Offer

User will be redirected to Axis website
Click Login/Join Now and do OTP verification
Select Axis Privilege Credit Card and provide the required details
Application will be submitted, and a confirmation SMS will be sent on approval of the application
Get your application status within 10 minutes`,
                features: [
                    "Reward points on travel & shopping",
                    "Dining benefits",
                    "Exclusive lifestyle offers"
                ],
            },
            {
                name: "Axis Magnus Credit Card",
                link: "https://bitli.in/7lqvY3E",
                offerPrice: null,
                type: "credit",
                terms: `About Axis Magnus Credit Card -

Unlimited lounge visits globally with Priority Pass, including 4 guest visits annually and unlimited domestic lounge access
Get Rs 12,500 Welcome Voucher from Luxe Gift Cards, The Postcard Hotels, or Yatra upon card activation (Select Any one)
Get Upto 15% off on International & Domestic stays at Oberoi & Trident Hotels
Earn 12 Edge Reward Points per Rs 200 on spends upto Rs 1.5 lakh, and 35 Edge Reward Points per Rs 200 on incremental spends above Rs 1.5 lakh
Also, earn 5X Reward Points on all spends via Travel Edge
Save upto 30% at over 4,000 Restaurants across India through Axis Bank’s Dining Delights program (upto Rs 1000)
Enjoy a 1% Fuel Surcharge waiver on transactions between Rs 400 and Rs 4,000 (capped at Rs 400 per month)

Fees & List of all charges

Joining Fees: Rs 12,500 + GST
Annual Fees: Rs 12,500 + GST
Annual Fee Waiver: On spending Rs 25,00,000 or more in a year

Documents Needed

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or Salary slips
Photograph: Recent passport-sized photo

Eligibility Criteria

Required Age: 21-65 years
Employment Status: Salaried or Self-employed
Salaried Income: Rs 1,50,000/monthly
Self Employed: ITR > Rs 18,00,000/annum
Cibil Score: 735+
New to Credit not allowed

How to Avail the Offer

User will be redirected to Axis Bank's website
Click Login/Join Now and do OTP verification
Select Axis Magnus Credit Card and provide the required details
Application will be submitted and a confirmation SMS will be sent on approval of the application`,
                features: [
                    "Premium lifestyle & travel rewards",
                    "Complimentary lounge access",
                    "Milestone benefits"
                ],
            },
            {
                name: "Axis IOCL Rupay Credit Card",
                link: "https://bitli.in/vVkK0G7",
                offerPrice: null,
                type: "credit",
                terms: `About Axis IOCL Rupay Credit Card -

This card gives 100% Cashback (upto Rs 250) on all IOCL fuel spends made within 30 days of Card Activation
Earn upto 4% value back on fuel spends made at Indian Oil outlets (Rs 100 = 20 Reward Points, max. 1000 Reward Points per month)
Earn Reward Points on UPI Payments by linking the card to UPI
Earn 1% value back on online shopping spends

Other features of the card -

10% Instant Discount on movie tickets via BookMyShow website
Save upto 15% on dining bills at a wide number of partner restaurants via Eazy Diner
1% Fuel Surcharge Waiver

Fees & List of Charges -

Joining Fees: Rs 500 + GST
Annual fees: Rs 500 + GST

Documents Needed -

ID Proof
Address Proof
Income Proof
PAN Card/Form 60

Eligibility Criteria -

Employment Status: Salaried or Self-employed
Income: Rs 15,000 per month (Salaried)
Income: Rs 30,000 per month (self-employed)
Age: 21-65 years
Cibil Score: 735+
New to Credit not allowed`,
                features: [
                    "Fuel surcharge waiver",
                    "Cashback on fuel spends",
                    "Dining rewards"
                ],
            },
            {
                name: "Axis LIC Signature Credit Card",
                link: "https://bitli.in/sYftnhn",
                offerPrice: null,
                type: "credit",
                terms: `About Axis LIC Signature Credit Card -

Lifetime FREE Credit Card - No Joining/Annual fees
Earn 2 Reward Points* for every Rs 100 spent on LIC Premium payment and foreign currency transactions
1 Reward Point* for every Rs 100 spent on all other transactions (Valid on all transactions except fuel transactions, wallet load and EMI conversions)
8 complimentary airport lounge access in a year at select domestic airports (2 complimentary lounge access per quarter)
1% surcharge waiver on fuel spends at all petrol pumps across India (Valid on transaction between Rs 400 to Rs 4000, Maximum monthly benefit upto Rs 400)

Fees & List of all charges

Lifetime FREE Credit Card
Joining Fees: Nil
Annual Fees: Nil

Documents Needed

PAN Card/Form 60
ID Proof
Address Proof
Bank Statement/Income Proof

Eligibility Criteria

Required Age: 21-65 years
Employment status: Salaried or Self-Employed
Salaried: Minimum Rs 5 lakh Annual
Self-Employed: Rs 6 lakh ITR
Cibil Score: 735+
New to Credit not allowed

How to Avail the Offer

User will be redirected to Axis Bank's website
Fill in the requested details
Select LIC Axis Signature Credit Card and submit the OTP
The application will be submitted and application number will be generated
Video kyc link will be sent via SMS
Axis Bank’s representative will connect for further process`,
                features: [
                    "LIC premium payment rewards",
                    "Cashback on spends",
                    "Travel & dining discounts"
                ],
            },
            {
                name: "Axis LIC Platinum Credit Card",
                link: "https://bitli.in/HebXkh2",
                offerPrice: null,
                type: "credit",
                terms: `About Axis LIC Platinum Credit Card -

Lifetime free Credit Card (No Joining/Annual fees)
Earn 2 Reward Points for every Rs 100 spent on LIC Premium payment and foreign currency transactions
1 Reward Point for every Rs 100 spent on all other transactions (Valid on all transactions except fuel transactions, wallet load and EMI conversions)
1% surcharge waiver on fuel spends at all petrol pumps across India (Valid on transaction between Rs 400 to Rs 4000, Maximum monthly benefit upto Rs 400

Fees & List of all charges

Lifetime FREE Credit Card
Joining Fees: Nil
Annual Fees: Nil

Documents Needed

PAN Card/Form 60
ID Proof
Address Proof
Bank Statement/Income Proof

Eligibility Criteria

Required Age: 21-65 years
Employment status: Salaried or Self-Employed
Salaried: Minimum Rs 3 lakh Annual
Self-Employed: Rs 4.5 lakh ITR
Cibil Score: 735+
New to Credit not allowed

How to Avail the Offer

User will be redirected to Axis Bank's website
Fill in the requested details
Select Axis LIC Platinum Credit Card and submit the OTP
The application will be submitted and application number will be generated
Video kyc link will be sent via SMS
Axis Bank’s representative will connect for further process`,
                features: [
                    "Reward points on LIC premium payments",
                    "Shopping & lifestyle benefits",
                    "Fuel surcharge waiver"
                ],
            },
            {
                name: "Axis Amaze Savings Account",
                link: "https://bitli.in/vz9lWQb",
                offerPrice: null,
                type: "credit",
                terms: `About Axis Amaze Savings Account -

Maintain your Savings account with Zero balance by simply opting for a Rs 200/month plan (minimum 6-month subscription) with completely digital application process
Earn 2,000 Edge Reward points each month by spending Rs 20,000 through your debit card or UPI merchant payments via the Axis Pay or 'open' mobile banking app
Enjoy Welcome benefits worth Rs 5,999 that include a 3-month Amazon Prime membership worth Rs 599, 10 complimentary movie tickets worth Rs 4,000, a 3-month Swiggy One membership worth Rs 400, a Swiggy Dineout voucher worth Rs 500 and an Uber ride package worth Rs 500 upon completing your first debit card transaction within 30 days of account opening
Enjoy free ATM withdrawals across all banks, along with no fees for domestic banking transactions, debit card usage, and chequebook issuance
Manage your finances seamlessly through Axis Bank's mobile banking app, 'open', and internet banking, with access to over 250 banking services

Eligibility Criteria -

Age: 21 yrs and Above

Documents Needed -

PAN Card
Aadhaar Card

How to open Axis Amaze Savings Account -

User will be redirected to the Axis Bank's official website
Complete the application in the same session
NOTE: Application approval depends solely on Axis’s verification process`,
                features: [
                    "Zero balance savings account",
                    "Cashback on transactions",
                    "Free debit card benefits"
                ],
            },
            {
                name: "Axis Cashback Credit Card",
                link: "https://bitli.in/th7rKQf",
                offerPrice: null,
                type: "credit",
                terms: `About Axis Cashback Credit Card -

Earn upto Rs 4,000 cashback monthly on online spends with 2% on the first Rs 5,000, 5% on the next Rs 35,000, and 7% on spends above Rs 40,000
You earn 5,000 EDGE Reward points (worth Rs 1,000) upon the first transaction within 30 days of card issuance
Enjoy 25% instant discount (upto Rs 800) on dining via EazyDiner, once a month per cardholder, on a minimum bill of Rs 2,500
Earn 0.75% unlimited cashback on offline and travel spends, along with 0.5% cashback on online utility bill payments (capped at Rs 100 per month)*

Fees & List of all charges

Joining Fees: Rs 1,000 + GST
Annual fees: Rs 1,000 + GST
Annual fee is waived on an annual spends of more than Rs 4,00,000

Documents Needed

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or Salary slips
Photograph: Recent passport-sized photo

Eligibility Criteria

Required Age: 21-65 years
Employment status: Salaried or Self-Employed
Salaried Income: Rs 50,000 per month
Self Employed Income: ITR > Rs 6 Lakhs/annum
Cibil Score: 736+
New to Credit not allowed

How to Avail the Offer

User will be redirected to Axis website
Complete the application in the same session`,
                features: [
                    "Flat cashback on all spends",
                    "Dining & shopping offers",
                    "Annual fee waiver on milestone spends"
                ],
            },
            {
                name: "Axis Easy Access Savings Account",
                link: "https://bitli.in/esZMlk4",
                offerPrice: null,
                type: "saving",
                terms: `About Axis Easy Access Savings Account -

Get upto 25% cashback every time you shop on Ajio or Flipkart - exclusively via Grab Deals (Upto Rs 1000 monthly)
Get a Rs 500 shopping voucher via Grab Deals on completing your first Debit Card transaction within 30 days of account opening. Redeem it across 150+ popular brands
Enjoy Buy 1 Get 1 free movie ticket (worth upto Rs 200) on BookMyShow with your Online Rewards Debit Card
Earn accelerated EDGE Reward Points on your Physical Online Rewards Debit Card: 10X on travel bookings, 5X on electronics, 3X on online food delivery, and 2X at clothing stores including Ajio
Comprehensive insurance benefits with your Physical Online Rewards Debit Card: Rs 5 lakh Personal Accident Cover, Rs 1 crore Air Accident Cover, and Rs 50,000 Purchase Protection
Spend Rs 1,00,000 annually with your Online Rewards Debit Card and get 2,000 bonus EDGE Reward Points
Enjoy 1% cashback on every online purchase made with your E-Debit Card

Eligibility Criteria -

Age: 21 yrs and Above
Minimum Funding Required: Rs 6,200 or more

Documents Needed -

PAN Card
Aadhaar Card

How to open Axis Easy Access Savings Account -

User will be redirected to the Axis Bank's official website
Complete the application in the same session
NOTE: Application approval depends solely on Axis’s verification process
`,
                features: [
                    "Easy account opening",
                    "Cashback on transactions",
                    "Free digital banking"
                ],
            },
            {
                name: "Axis Privilege Amex Credit Card",
                link: "https://bitli.in/s7bGtqw",
                offerPrice: null,
                type: "credit",
                terms: `About Axis Privilege Amex Credit Card -

Lifetime FREE Credit Card (No Joining/Annual Fees)
Get 8 free visits per year (2 per quarter) to domestic airport lounges. Just spend Rs 50,000 in the previous 3 months
Enjoy 1 complimentary movie ticket per month (upto Rs 250) via District App using the promo code AXISPRIVILEGE
Unlock exclusive Saturday-only discounts on popular platforms like Zomato, Blinkit, Swiggy, Instamart, and Yatra
Spend Rs 2.5 Lakhs in a card anniversary year to unlock a milestone reward of 10,000 EDGE Points, valued at Rs 2,000
Get Rs 800 off and 20% extra discount at top restaurants with Axis Bank Dining Delights via EazyDiner
Earn 10 EDGE Points for every Rs 200 spent on regular purchases, redeemable for vouchers, merchandise, travel, and more
Save 1% (upto Rs 400 monthly) on fuel transactions between Rs 400 and Rs 4,000 at all fuel stations as fuel surcharge waiver

Fees & List of all charges -

Lifetime FREE Credit Card
Joining Fees: Nil
Annual Fees: Nil

Documents Needed -

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or Salary slips
Photograph: Recent passport-sized photo

Eligibility Criteria -

Required Age: 21-65 years
Employment status: Salaried or Self-Employed
Salaried Income: Rs 50,000/monthly
Self Employed: ITR>Rs 6 Lakhs/annum
Cibil Score: 736+
New to Credit: Not allowed

How to Avail the Offer -

User will be redirected to the Axis Bank Credit Cards page
Complete the application in the same session`,
                features: [
                    "Reward points on all purchases",
                    "Exclusive Amex lifestyle privileges",
                    "Dining & entertainment offers"
                ],
            },
            {
                name: "Axis Samsung Signature Credit Card",
                link: "https://bitli.in/wahzcqH",
                offerPrice: null,
                type: "credit",
                terms: `About Axis Samsung Signature Credit Card -

10% Cashback on Samsung products and services, including EMI transactions (Capped at Rs 2,500 monthly and Rs 10,000 annually)
4 Complimentary Domestic Airport Lounge visits per year, subject to Rs 50,000 spend in the last 3 months
Get a 15% discount up to Rs 500 at over 4,000 restaurants across the country. This offer is valid twice every month on a minimum order amount of Rs 1,500
Welcome benefit of 2500 Edge Reward Points upon completing 3 transactions within 30 days of card issuance
Earn 10 Edge Reward Points per Rs 100 on international transactions and with preferred partners like Myntra, Tata 1mg, Urban Company, and Zomato
Earn 5 Edge Reward Points per Rs 100 on all other domestic and international transactions
1% Fuel Surcharge waiver on transactions between Rs 400 and Rs 5,000 (capped at Rs 500 per month)
Joining Fee: Rs 500 + GST and Annual Fee: Rs 500 + GST
Annual fee is waived on an annual spends of more than Rs 2,00,000

Fees & List of all charges -

Joining Fee-Rs 500 + GST
Annual Fee-Rs 500 + GST, Annual fee waived off an Annual Spends more than Rs 2,00,000

Documents Needed -

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or salary slips
Photograph: Recent passport-sized photo

Eligibility Criteria -

Age: 21 to 65 years
Employment: Both salaried and self-employed individuals
Minimum Monthly Income: Rs 25,000 for Salaried and Rs 3,60,000 per annum for Self-Employed
Credit Score: 735+
New-to-Credit: Not Eligible

How to Avail the Offer -

You will be redirected to the AXIS Bank Credit Cards page
Complete the application in the same session`,
                features: [
                    "Exclusive Samsung benefits",
                    "Cashback on electronics & gadgets",
                    "Travel & dining rewards"
                ],
            }
        ],
    },
    {
        id: "hdfc",
        name: "HDFC Bank",
        logo: HDFCbank,
        description: "HDFC Bank cards with cashback and lifestyle rewards.",
        cards: [
            {
                name: "HDFC Bank Credit Card",
                link: "https://bitl.in/PW3RBoHV",
                offerPrice: "₹750",
                type: "credit",
                terms: `About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of application ID generation.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of card activation.
NOTE: A Minimum transaction of ₹100 is required within 30 days to activate the card.
Eligibility Criteria

Required Age: 21-65 years
Employment status: Salaried or Self-Employed
Minimum Income: ₹20,000 per month (Salaried)
Minimum Income: ₹50,000 per month (Self-Employed)
Credit score: 700+
You should be citizen of India or a Non-Resident Indian
Fees & Charges

Joining Fees: Starting at ₹500 + GST (Depending upon the card selected)
Annual Fees: Starting at ₹500 + GST (Depending upon the card selected)
Documents Needed

Address Proof: Aadhaar, Passport, Latest utility bills
ID proof: PAN, Voter ID, Passport
Income proof: Bank Statement, Salary Slips
Essential Info

Please use your Aadhaar linked Mobile number to complete the application
No Rewards applicable for employees of HDFC, HDB, CHBL & CSC - Main or Group of Companies
Existing Credit Card holders of HDFC Bank will not be eligible for Rewards
Card upgrades/limit enhancements are not a part of Rewards
If you apply for a different card upon redirecting, you will be eligible for the Rewards applicable on the card applied
Leads will track whenever a user starts a form. Hence, there can be multiple tracking for 1 lead. This will get fixed at the time of validation
No Rewards on HDFC Bank app applications`,
                features: ["Cashback on shopping", "Dining discounts", "Fuel surcharge waiver"],
            },
            {
                name: "HDFC Swiggy Credit Card",
                link: "https://bitl.in/PJAY8HGK",
                offerPrice: "₹800",
                type: "credit",
                terms: `About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of application ID generation.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of card activation.
NOTE: A Minimum transaction of ₹100 is required within 30 days to activate the card.
About HDFC Swiggy Credit Card

Get 10% Cashback on Swiggy (Instamart, Food delivery, Genie & Dine out) capped at ₹1500/month
5% Cashback on Online Shopping Spends on Amazon, Flipkart, Myntra, Nykaa etc - capped at ₹1500/month
₹1000 worth of discount coupons for food delivery and dining out on Swiggy
Free Swiggy One Membership for 3 months as welcome benefit
Upto 50 days of interest-free period on your Swiggy HDFC Bank Credit Card from the date of purchase
Get zero lost card liability waivers on fraudulent transactions and Credit Card loss, upon prompt reporting
Eligibility Criteria

Required Age: 21-65 years
Employment status: Salaried or Self-Employed
Minimum Income: ₹25,000 per month (Salaried)
Minimum ITR: ₹6,00,000 per annum (Self-Employed)
Credit score: 750+
New to Credit allowed for Salaried & Self-Employed both
Fees & Charges

Joining Fees: ₹500 + Taxes
Annual Fees: ₹500 + Taxes
Documents Needed

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or salary slips
Photograph: Recent passport-sized photo
Essential Info

Please use your Aadhaar linked Mobile number to complete the application
No Rewards Applicable for Employees of HDFC, HDB, CHBL & CSC- Main or Group of Companies
Existing Credit Card holders of HDFC Bank will not be eligible for Rewards
Card upgrades/limit enhancements are not eligible for Rewards
No Rewards on HDFC Bank App applications`,
                features: ["Free Swiggy delivery", "Cashback on food orders", "Dining rewards"],
            },
            {
                name: "HDFC Pixel Play Credit Card",
                link: "https://bitli.in/kG91rpl",
                offerPrice: null,
                type: "credit",
                terms: `About HDFC Pixel Play Credit Card -

5% Cashback on choice of any 2 categories, capped at 500 cash points/month per category. 1 - Dining & Entertainment Category (BookMyShow & Zomato) 2 -Travel Category (MakeMyTrip & Uber) 3 - Grocery Category (Blinkit & Reliance Smart Bazaar) 4 - Electronics Category (Croma & Reliance Digital) 5 - Fashion Category (Nykaa & Myntra)
3% Cashback on choice of any one e-commerce platform, capped at 500 cash points/month - Amazon, Flipkart or PayZapp
1% unlimited Cashback on other spends excluding fuel, rent, EMI, e-wallet loading, and government transactions
5% Cashback on Smartbuy capped at 500 cash points monthly. Offer is valid on Successful Transactions completed on SmartBuy under categories IGP, Flights, Hotels, Bus, Rail, Instant Vouchers, Apple Imagine Tresor only. This Offer is not valid on offers given by individual merchants under offers section
1% Cashback on UPI Spends capped at 500 cash points monthly (Applicable only for PIXEL RuPay Credit Card holders)
1% Fuel surcharge waiver, capped at Rs 250 per statement cycle, applicable on transactions between Rs 400 to Rs 5000
Upto 25% off on restaurant bills via Swiggy Dineout (capped at Rs 300/month, Swiggy app only)

Other Amazing Offers -

Leverage revolving credit facilities at nominal interest rates
Get zero lost card liability waivers on fraudulent transactions and Credit Card loss, upon prompt reporting

Fees & List of all charges -

Lifetime FREE Credit Card
Joining Fees: Nil
Annual Fees: Nil

Documents Needed -

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or salary slips
Photograph: Recent passport-sized photo

Eligibility Criteria -

Required Age: 21-65 years
Employment status: Both salaried and self-employed individuals
Salaried Income: Rs 25,000 per month
Self Employed: Rs 50,000 per month
Cibil Score: 750+

How to Avail the Offer -

User will be redirected to HDFC Pixel Credit Cards page
Complete the application in the same session`,
                features: [
                    "Cashback on online shopping",
                    "Dining discounts",
                    "Entertainment rewards"
                ],
            },
            {
                name: "HDFC Bank IRCTC Card",
                link: "https://bitli.in/RutdR0y",
                offerPrice: null,
                type: "credit",
                terms: `About HDFC IRCTC Credit Card -

Get 5 Reward points for every Rs 100 spent on IRCTC ticketing website & Rail Connect App
1 Reward point on every Rs 100 spent on all other spends
Additional 5% Cashback on train ticket bookings via HDFC Bank SmartBuy
Credit Card to UPI - The HDFC IRCTC Credit Card can be linked to your UPI
Welcome voucher worth Rs 500 on card activation within first 37 days of Card Activation
Annual fee waiver on annual spends of Rs 1,50,000 or more

Other Amazing Offers -

8 complimentary access to select IRCTC Executive Lounges every year (2 per quarter)
1% fuel surcharge waiver at all fuel stations across India (on minimum transaction of INR 400 & maximum transaction of INR 5,000. Maximum waiver of INR 250 per statement cycle)
Interest Free Credit Period : Up to 50 days of interest free period on your HDFC Bank Rupay IRCTC Credit Card from the date of purchase
Revolving Credit : Available at a nominal interest rate on your HDFC Bank Rupay IRCTC Credit

Fees & List of all charges

Joining Fees: Rs 500 + GST.
Annual Fees: Rs 500 + GST.

Documents Needed

Address Proof - Aadhaar, Passport, Latest utility bills
ID proof - PAN, Voter ID, Passport
Income proof - Bank Statement, Salary Slips

Eligibility Criteria

Required Age: 21 - 60 years
Employment status: Salaried or Self-Employed
Minimum Income: Rs 25,000 per month (Salaried)
Minimum Income: Rs 6 lakhs per annum (Self-Employed)

How to Avail the Offer

User will be redirected to HDFC Bank's website
Click Login/Join Now and do OTP verification
Select HDFC Bank Credit Card and provide the required details
Application will be submitted, and a confirmation SMS will be sent on approval of the application`,
                features: [
                    "Railway ticket booking benefits",
                    "Cashback on IRCTC transactions",
                    "Travel rewards"
                ],
            },
            {
                name: "HDFC Bank UPI RuPay Credit Card",
                link: "https://bitli.in/0jMysBQ",
                offerPrice: null,
                type: "credit",
                terms: `About HDFC RuPay Credit Card -

Rupay Card Pay Via UPI
3% Cashpoints on Groceries, SuperMarket & Dining spends & PayZapp transactions. (Maximum of 500 Points can be earned in a calendar month)
2% Cashpoints on Utility spends (Maximum of 500 Points can be earned in a calendar month)
1% Cashpoints on other spends (Excluding Rent, Wallet loads, EMI, Fuel, Insurance Payments & Government categories) (Maximum of 500 Points can be earned in a calendar month
Smart EMI : Convert credit card spends of Rs. 2,500 or more into Smart EMIs post your purchases with competitive interest rates and flexible repayment tenures.
Milestone Benefits : Get lucrative vouchers on meeting minimum monthly spending criteria.

Other Amazing Offers -

Leverage revolving credit facilities at nominal interest rates.
Get liability waivers on fraudulent transactions and Credit Card loss, upon prompt reporting.
You earn rewards on all spends that can be redeemed for exciting gifts, vouchers or free flight tickets.
The CashPoints earned on HDFC Bank UPI RuPay Credit Card can be redeemed against the statement balance at the rate of 1 CashPoint = Rs. 0.25, and can be done via Net Banking login, or physical redemption form

Fees & List of all charges

Joining Fees: Starting at Rs. 500 + GST. (Depending upon the card selected)
Annual Fees: Starting at Rs. 500 + GST. (Depending upon the card selected)

Documents Needed

Address Proof - Aadhaar, Passport, Latest utility bills
ID proof - PAN, Voter ID, Passport
Income proof - Bank Statement, Salary Slips

Eligibility Criteria

Required Age: 21 - 65 years
Employment status: Salaried or Self-Employed
Minimum Income: Rs. 20,000 per month (Salaried)
Minimum Income: Rs. 50,000 per month (Self-Employed)
Credit score: 700+
You should be citizen of India or a Non-Resident Indian

How to Avail the Offer

User will be redirected to HDFC Bank's website
Click Login/Join Now and do OTP verification
You will see the cards you are eligible for, select the card and provide the required details
Application will be submitted and a confirmation SMS will be sent on approval of the application
Profit will track within 72 Hours after Application ID Generation of Card Approval`,
                features: [
                    "Zero joining fee",
                    "Cashback on UPI spends",
                    "Reward points on daily purchases"
                ],
            },
            {
                name: "HDFC Bank Marriott Credit Card",
                link: "https://bitli.in/rLYJrMv",
                offerPrice: null,
                type: "credit",
                terms: `About HDFC Bank Marriott Credit Card -

1 Free Night Award on Joining fee realization (up to a value of 15,000 Marriott Bonvoy Points)
Complimentary Marriott Bonvoy Silver Elite Status Earn 8 Marriott Bonvoy Points per Rs. 150 spent at hotels participating in Marriott Bonvoy*
Earn 4 Marriott Bonvoy Points per Rs. 150 spent on travel, dining & entertainment*
Earn 2 Marriott Bonvoy Points per Rs. 150 spent on all other applicable purchases*
10 Elite Night Credits (ENCs) under the Marriott Bonvoy Program

Other Amazing Offers -

Avail up to 50 days of interest free period on your HDFC Bank Marriott Bonvoy Credit Card from the date of purchase (subject to the submission of the charge by the Merchant).
Complimentary Golf Access 2 per quarter across the world (Green Fee Waiver)
12 Complimentary access within India (both at domestic and international terminals) using the Marriott Bonvoy HDFC Bank Credit Card each year
12 Complimentary access outside India using the Marriott Bonvoy HDFC Bank Credit Card each year
Zero Lost card liability: In the unfortunate event of losing your Marriott Bonvoy HDFC Bank Credit Card, on reporting it immediately to our 24-hour call centre, you have zero liability on any fraudulent transactions made on your Credit card.
Revolving Credit: Enjoy Revolving Credit on your Marriott Bonvoy HDFC Bank Credit Card at nominal interest rate. Refer to the Fees and Charges section to know more.
Get 1 Free Night Award on milestone spends of Rs 6 Lac, Rs 9Lac, & Rs 15Lac Respectively in an anniversary year.

Fees & List of all charges

Joining Fees: Rs 3000 + GST.
Annual Fees: Rs 3000 + GST.

Documents Needed

Address Proof - Aadhaar, Passport, Latest utility bills
ID proof - PAN, Voter ID, Passport
Income proof - Bank Statement, Salary Slips

Eligibility Criteria

Required Age: 21 - 60 years
Employment status: Salaried or Self-Employed
Minimum Income: Gross Monthly Income> Rs 1,00,000 (Salaried)
Minimum Income: Rs 15 lakhs per annum (Self-Employed)

How to Avail the Offer

User will be redirected to HDFC Bank's website
Click Login/Join Now and do OTP verification
Select HDFC Bank Marriott Credit Card and provide the required details
Complete your VKYC within 72 Hours after Application ID Generation of your application`,
                features: [
                    "Complimentary Marriott Bonvoy membership",
                    "Hotel booking benefits",
                    "Travel & dining rewards"
                ],
            },
            {
                name: "HDFC Shoppers Stop Credit Card",
                link: "https://bitli.in/o3qUx4o",
                offerPrice: null,
                type: "credit",
                terms: `About HDFC Shoppers Stop Credit Card -

Welcome benefit Shoppers Stop voucher of Rs. 500, redeemable on any bill value
Complimentary First Citizen Silver Edge membership worth Rs. 350
Earn 3% Reward points on every SS Spends & 1 % Reward Points on Non- SS Spends (Maximum capping of Rs.500 per month on Shoppers Stop spends & Rs. 1000 per month for non-shoppers stop spends)
Get Rs. 2500 worth FREE shopping in a year Earn Rs.500 per month for a min. purchase of Rs. 15,000 on Shoppers Stop over the weekend (capped to maximum once in a month and 5 times in a year)
Link your Rupay Credit card with UPI and avail 'Scan n Pay'

Other Amazing Offers -

Bank Reward pts redemption value will be Re 1 against 1 RP when availed against Shoppers Stop voucher.

Fees & List of all charges

Joining Fees: Rs. 299
Annual Fees: Rs. 299

Documents Needed

Address Proof - Aadhaar, Passport, Latest utility bills
ID proof - PAN, Voter ID, Passport
Income proof - Bank Statement, Salary Slips

Eligibility Criteria

Required Age: 21 - 65 years
Employment status: Salaried or Self-Employed
Minimum Income: Rs. 20,000 per month (Salaried)
Minimum Income: Rs. 50,000 per month (Self-Employed)
Credit score: 700+
You should be citizen of India or a Non-Resident Indian

How to Avail the Offer

User will be redirected to HDFC Bank's website
Click Login/Join Now and do OTP verification
You will see the cards you are eligible for, select the card and provide the required details
Your Profit will track within 72 Hours after Application ID Generation of Card Approval`,
                features: [
                    "Exclusive Shoppers Stop discounts",
                    "Reward points on fashion spends",
                    "Lifestyle perks"
                ],
            },
            {
                name: "HDFC Pixel Go Credit Card",
                link: "https://bitli.in/l8398iH",
                offerPrice: null,
                type: "credit",
                terms: `About HDFC Pixel Go Credit Card -

Lifetime Free Card
Earn 1% cashback on all eligible transactions. Cashback is excluded on fuel, rent, EMI, e-wallet loading, and government-related spends
5% Cashback on Smartbuy capped at 500 points monthly. Offer is valid on Successful Transactions completed on SmartBuy under categories like IGP, Flights, Hotels, Bus, Rail, Instant Vouchers, Apple Imagine Tresor only. This Offer is not valid on offers given by individual merchants under offers section
1% Cashback on UPI Spends, (capped at 500 cash points monthly; Applicable only for PIXEL RuPay Credit Card holders)
Exclusive dining offers, Upto 25% discount on partner restaurants via Swiggy Dineout (capped at Rs 300 per month)
Up to 25% off on restaurant bills via Swiggy Dineout (capped at Rs 300/month, Swiggy app only)
1% Fuel surcharge waiver capped at 1% applicable for transactions between Rs 400 to Rs 5000 & Maximum waiver of Rs 250 per statement cycle
Joining Fee: Nil & Annual Fee: Nil

Fees & List of all charges -

Joining Fee: Nil
Annual Fee: Nil

Documents Needed -

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or Salary slips
Photograph: Recent passport-sized photo

Eligibility Criteria -

Age: 21 to 65 years
Employment: Both salaried and self-employed individuals
Salaried Income: Rs 20,000 per month
Self Employed: Rs 50,000 per month
Credit Score: 750+

How to Avail the Offer -

You will be redirected to the HDFC Pixel Go Credit Cards page
Complete the application in the same session`,
                features: [
                    "Cashback on shopping",
                    "Dining discounts",
                    "Fuel surcharge waiver"
                ],
            }
        ],
    },
    {
        id: "sbi",
        name: "State Bank of India",
        logo: SBIbank,
        description: "SBI Cards with cashback, shopping, and premium perks.",
        cards: [
            {
                name: "SBI Cashback Credit Card",
                link: "https://bitl.in/POOxrKOu",
                offerPrice: "₹1200",
                type: "credit",
                terms: `About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of successful application submission.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of successful card disbursal.
About SBI Cashback Credit Card

You can apply for up to 3 Add-on cards at no additional cost against every primary card
5% Cashback on Online spends
1% Cashback on Offline Spends
1% Fuel Surcharge waiver upto ₹100 per statement cycle applicable on transactions between ₹500 – ₹3000
Eligibility Criteria

Employment Status: Salaried or Self-employed
Income: ₹30,000 per month
Required Age: 21-60 years
New to credit: Only for Salaried
Credit Card holders are preferred
No delay payments in last 12 months
Card Holders should be an Indian Citizens or a Non-Resident Indian
Fees & Charges

Joining Fee: ₹999 + GST
Annual Fee: ₹999 + GST - Second year onwards
Annual Fees will be waived on annual spends of ₹2 Lacs
Documents Needed

ID Proof
Address Proof
Income Proof
Photograph
Essential Info

Please use your Aadhar linked Mobile number to complete the application
Existing SBI Credit Card holders are not eligible for Rewards
If you apply for a different card upon redirecting you will be eligible for the Rewards applicable on the card applied
No Rewards on SBI Bank App applications`,
                features: ["Flat cashback on all spends", "Dining discounts", "Travel rewards"],
            },
            {
                name: "SBI SimplyCLICK Credit Card",
                link: "https://bitli.in/17jnWsw",
                offerPrice: "₹500 Voucher",
                type: "credit",
                terms: ` About SBI Simply Click Credit Card -

Get Amazon gift card worth Rs.500 on payment of Annual Fee of Rs.499+taxes
Earn 10X Reward Points on online spends with exclusive partners like Apollo 24x7/BookMyShow/ Cleartrip/ Dominos/ Myntra/ Netmeds/ Yatra/Swiggy
Earn 5X Reward Points on all other online spends except Utility payments (Capped at Rs,10,000 Reward points/month)

Other Amazing Offers -

Earn 1 reward point per Rs.100 on all other spends
10% instant off during big sales on amazon, flipkart etc
Get Cleartrip or Yatra e-voucher worth Rs 2,000 on annual online spends of Rs.1 Lakh & additional e-voucher worth Rs 2,000 on annual online spends of Rs.2 Lakh
1% fuel surcharge waiver for each transaction done between Rs.500 & Rs.3000, capped at Rs.100 per statement cycle

Fees & List of all charges

Joining Fee: Rs.499 + GST
Annual Fee: Rs.499 + GST, from second year onwards. Renewal Fee reversed if annual spends for last year >= Rs. 1,00,000

Documents Needed

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or salary slips
Photograph: Recent passport-sized photo

Eligibility Criteria

Age: 21 to 65 years
Employment: Both salaried and self-employed individuals are eligible
Income: Minimum monthly income of Rs 25,000
Self-Employed: Minimum income as filed in ITR Rs.4,80,000 lac/year
Credit Score: Minimum credit score of 720+
New-to-Credit: Allowed for salaried & self-employed both

How to Avail the Offer

User will be redirected to SBI Bank Credit Cards page
Click Login/Join Now and provide the required details
Your application will be submitted and you will receive the application number
Kindly save the Application Number for future reference
SBI representative will call you within 2-4 days to complete the fulfillment
`,
                features: [
                    "Online shopping rewards",
                    "Dining offers",
                    "Reward points on every purchase",
                ],
            },
            {
                name: "SBI SimplySAVE Credit Card",
                link: "https://bitli.in/afeThI9",
                offerPrice: null,
                type: "credit",
                terms: `About SBI Simply Save Credit Card -

Spend Rs 2000 or more in first 60 days and get 2000 Bonus Reward Points
Enjoy 10 Reward Points per Rs 150 spent on Dining, Movies, Departmental Stores and Grocery Spends
10% instant discount during big sales
Annual fee waiver on yearly spends above Rs 1 Lakh

Other Amazing Offers -

Earn 1 Reward Point per Rs 150 spent on all your other spends (4 Reward Points = Re 1)
Get Rs 100 cashback on your first ATM cash withdrawal, if done within 30 days of receiving your card
1% Fuel Surcharge waiver upto Rs 100 per statement cycle on transaction between Rs 500 to Rs 3000
Add on cards for your parents, spouse, children or siblings above the age of 18

Fees & List of all charges

Joining Fee: Rs 499
Annual Fee: Rs 499 second year onwards

Documents Needed

ID Proof
Address Proof
Income Proof
PAN Card/Form 60

Eligibility Criteria

Employment Status: Salaried or Self-employed
Income: Rs 30,000 per month and above
Required Age: 21-65 Years
Credit Score - 650+
New to credit - Only for Salaried
Credit Card holders are preferred
No delay payments in last 12 months
Card Holders should be an Indian Citizens or a Non Resident Indian

How to Avail the Offer

Click on the Orange Button and the user will be redirected to SBI Bank Credit Cards page
Click Login/Join Now and provide the required details
Your application will be submitted and you will receive the application number
Kindly save the Application Number for future reference
SBI representative will call you within 2-4 days to complete the fulfillment`,
                features: [
                    "Reward points on grocery & dining spends",
                    "Fuel surcharge waiver",
                    "Exclusive cashback offers"
                ],
            },
            {
                name: "SBI Prime Credit Card",
                link: "https://bitli.in/06ke49m",
                offerPrice: null,
                type: "credit",
                terms: `About SBI Prime Credit Card -

Welcome e-gift Voucher worth Rs 3,000 from any of the following brands: Bata/Hush Puppies, Pantaloons, Aditya Birla Fashion, Shoppers Stop and Yatra.com
Get 10 Reward Points per Rs 100 spent on Dining, Groceries, Departmental stores and Movies
Enjoy Complimentary Club Vistara Silver membership with 1 upgrade voucher
Earn 9 Club Vistara Points for every Rs 100 spent on Vistara flights

Other Amazing Offers -

Pay your card outstanding bill with Reward Points (4 Reward Points = Re 1)
4 complimentary visits per calendar year to International Priority Pass Lounges, outside India (Max 2 visits per quarter)
8 complimentary visits per calendar year to Domestic Lounges in India (Max 2 visits per quarter)
2 reward points per ₹100 spent on retail purchases (except fuel)
E-Gift Voucher worth Rs 7,000 from Yatra.com/Pantaloons on achieving annual spends of Rs 5 Lakhs
Get complimentary Air Accident Liability Cover of Rs 50 lakhs
Enjoy 20 Reward Points per Rs 100 spent on your birthday (Reward points on Birthday spends: one day before, on birthday and one day after, is capped at 2000 per calendar year)

Fees & List of all charges

Joining Fee: Rs 2999 + GST
Annual Fee: Rs 2999 + GST Second year onwards

Documents Needed

ID Proof
Address Proof
Income Proof
PAN Card/Form 60

Eligibility Criteria

Employment Status: Salaried or Self-employed
Income: Rs 30,000 per month and above
Required Age: 21-65 years
Credit Score: 650+
New to credit: Only for Salaried
Credit Card holders are preferred
No delay payments in last 12 months
Card Holders should be an Indian Citizens or a Non Resident Indian

How to Avail the Offer

You will be redirected to SBI Bank Credit Cards page
Click Login/Join Now and provide the required details
Your application will be submitted and you will receive the application number
Kindly save the Application Number for future reference
SBI representative will call you within 2-4 days to complete the fulfillment`,
                features: [
                    "Complimentary airport lounge access",
                    "Milestone benefits",
                    "Dining & lifestyle rewards"
                ],
            },
            {
                name: "SBI BPCL Credit Card",
                link: "https://bitli.in/DXnNzTE",
                offerPrice: null,
                type: "credit",
                terms: `About SBI BPCL Credit Card -

Get 2,000 Activation Bonus Reward Points worth Rs 500 on payment of joining fee
4.25% Valueback - 13X Reward Points on fuel purchases at BPCL petrol pumps
3.25% + 1% Fuel surcharge waiver on every BPCL transaction Upto Rs 4000
5X Reward Points on every Rs 100 spent at Groceries, Departmental Stores, Movies & Dining
Get 1 Reward Point for every Rs 100 spent on non-fuel retail purchases
10% Instant Discount with SBI Card during Big E-commerce Sales

Fees & List of all charges

Joining Fees: Rs 499 + GST
Annual Fees: Rs 499 + GST from second year onwards

Documents Needed

ID proof
Address proof
Income proof
Valid PAN card/Form 60

Eligibility Criteria

Required Age: 23-60 years
Employment status: Salaried or Self-Employed
Minimum Income: Rs 30,000 & Above per month
Credit Score - 650+
New to credit - Only for Salaried
Credit Card holders are preferred
No delay payments in last 12 months
Card Holders should be an Indian Citizens or a Non Resident Indian

How to Avail the Offer

User will be redirected to SBI Bank Credit Cards page
Click on Start Apply journey and provide the required details
Your application will be submitted and you will receive your application number
Please save the application Number for future reference
SBI representative will call you within 2-4 days to complete the fulfillment
Your profit will be tracked within 72 Hours after Application ID Generation upon completion of the application`,
                features: [
                    "Fuel surcharge waiver at BPCL pumps",
                    "Reward points on fuel spends",
                    "Shopping & dining discounts"
                ],
            },
            {
                name: "SBI Miles Credit Card",
                link: "https://bitli.in/dTkih9k",
                offerPrice: null,
                type: "credit",
                terms: `About SBI Miles Credit Card -

Get 1500 Travel Credits as a Welcome Gift on spends of Rs 30,000 within 60 days of card issuance
Earn 2 Travel Credits for every Rs 200 spent on travel and Earn 1 Travel Credit for every Rs 200 on all other spends
Redeem your Travel Credits for Air Miles, Hotel Points, Travel Bookings, or choose from a variety of exciting catalogue products
Get an additional Domestic Lounge Access for every Rs 1 lakh spent
Earn 5000 Bonus Travel Credits on annual spends of Rs 5 lakhs
Get your Annual Fee waived by spending Rs 6 Lakh in a membership year
Enjoy a low 3.0% Foreign Currency Mark-up on International transactions
Get 1% Fuel Surcharge Waiver at all petrol pumps, maximum surcharge waiver of Rs 250 per month, per statement cycle
Complimentary Priority Pass Program for the first 2 years

Fees & List of all charges

Annual Fee (one-time): Rs 1499 + GST
Renewal Fee (per annum): Rs 1499 + GST
However, fee is reversed if annual spends in the membership year >= Rs 6,00,000

Documents Needed

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or salary slips
Photograph: Recent passport-sized photo

Eligibility Criteria

Age: 21 to 65 years
Employment Status: Salaried or Self-Employed
Income (Salaried): Rs 60,000
Self-Employed: Rs.7,20,000 lakhs
Credit Score: Minimum credit score of 750+ with no delayed payments in the past 12 months
New to Credit: Not Allowed

How to Avail the Offer

You will be redirected to the SBI Bank Credit Cards page
Complete the required details and submit the application`,
                features: [
                    "Air miles on every spend",
                    "Travel rewards & discounts",
                    "Airport lounge access"
                ],
            },
            {
                name: "SBI Elite Credit Card",
                link: "https://bitli.in/Var37df",
                offerPrice: null,
                type: "credit",
                terms: `About SBI Elite Credit Card -

Rs 5,000 worth of Welcome e-Gift vouchers from popular brands like Yatra, Pantaloons, Hush Puppies, or Shoppers Stop
Free movie ticket worth Rs 6000 every year. Transaction valid for at least 2 tickets per booking per month. Maximum discount is Rs 500 for 2 tickets only
Get 5X Reward Points on Dining, Departmental Stores and Grocery Spends
Earn 2 Reward Points per Rs 100 on all other spends except fuel
1% fuel surcharge waiver at all fuel stations in India for transaction valued between Rs 500 to Rs 4000. Maximum Surcharge waiver of Rs 250 per month, per statement cycle
Get 6 complimentary International Airport lounge visits every year (2 visits per quarter)
Enjoy 2 complimentary Domestic Airport lounge visits every quarter
Lowest Foreign Currency Mark-up charge at 1.99% on International usage

Fees & List of all charges

Joining Fees: Rs 4999 + GST
Annual Fees: Rs 4999 + GST (Spend Based Reversal of Annual Fee on spends of Rs 10 Lakhs)

Documents Needed

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or salary slips
Photograph: Recent passport-sized photo

Eligibility Criteria

Age: 21 to 65 years
Employment Status: Salaried or Self-Employed
Income (Salaried): Rs 60,000 per month
Self-Employed: Rs 7,20,000 per annum
Credit Score: Minimum credit score of 750+ with no delayed payments in the past 12 months
New to Credit: Not Allowed

How to Avail the Offer

You will be redirected to the SBI Bank Credit Cards page
Complete the required details and submit the application`,
                features: [
                    "Complimentary movie tickets",
                    "Exclusive lifestyle & dining benefits",
                    "Reward points on all spends"
                ],
            },
            {
                name: "SBI IRCTC Credit Card",
                link: "https://bitli.in/ELlBuzd",
                offerPrice: null,
                type: "credit",
                terms: `About SBI IRCTC Rupay Credit Card -

Save 1% transaction charges on Railway ticket bookings on www.irctc.co.in
Buy tickets through irctc.co.in & IRCTC Mobile App for AC1, AC2, AC3, Executive Chair car and Chair Car and earn up to 10% Value Back as Reward Points
Enjoy 4 complimentary Railway Lounge access in a year, Max 1 per quarter
Get 1 Reward point for every Rs 125 spent on Non-Fuel Retail purchases, including Railway ticket purchases at www.irctc.co.in
Enjoy freedom from paying the 1% fuel surcharge across all Petrol Pumps in India, on transactions of Rs 500 - Rs 3,000, exclusive of GST and other charges
Get 350 activation Bonus Reward Points on single transaction of Rs 500 or more within 45 days of card issuance. Fuel and Cash spend are not included
Earn 500 Reward Points on payment of Renewal fee
Joining Fee- Rs 500+GST and Renewal Fee- Rs 500+GST

Fees & List of all charges

Annual Fee-Rs 500 + GST
Renewal Fee-Rs 500 + GST from second year onwards

Documents Needed

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or salary slips
Photograph: Recent passport-sized photo

Eligibility Criteria

Age: 21 to 65 years
Employment: Both salaried and self-employed individuals
Minimum Income - Rs 30,000 per month
650+ with no delayed payments in the past 12 months
New-to-Credit: Allowed only for Salaried applicants

How to Avail the Offer

You will be redirected to the SBI Bank Credit Cards page
Complete the application in the same session`,
                features: [
                    "Reward points on railway bookings",
                    "Travel discounts & lounge access",
                    "Dining offers"
                ],
            }
        ],
    },
    {
        id: "icici",
        name: "ICICI Bank",
        logo: ICICIBank,
        description:
            "ICICI Bank offers a wide range of credit and debit cards designed to provide cashback, rewards, travel perks, and lifestyle benefits.",
        cards: [
            {
                name: "ICICI Credit Card",
                link: "https://bitli.in/Q94lntm",
                offerPrice: null,
                type: "credit",
                terms: `About ICICI Bank Credit Card -

Lifetime FREE – Select Variants of ICICI Bank Credit Card are offered without any joining or Annual Fee
Discount on Online Sales – With ICICI Credit Card, you can avail great discount offers on Amazon/FlipKart Sale
Earn 2 Reward Points on every Rs 100 spent for all retail purchases except fuel
Get 1 Reward Point on every Rs 100 spent on utilities and insurance categories

Other Amazing Offers -

You can use ICICI Bank Credit Card to avail discounts over many websites like MakeMyTrip, Sterling Resorts, Haier, McDonalds etc.
You earn rewards on all spends that can be redeemed for exciting gifts, vouchers or free flight tickets

Fees & List of Charges -

Joining Fees: Lifetime Free (Depending upon the card selected)
Annual Fees: Lifetime Free (Depending upon the card selected)

Documents Needed -

PAN Card
Aadhaar Card
Bank Statement

Eligibility Criteria -

Age group: 21-65 years
Employment status: Salaried
Minimum Income: Rs 50,000 per month (Salaried)
Credit score: 750+
You should be citizen of India or a Non-Resident Indian

How to Avail the Offer

User will be redirected to ICICI Bank Credit Cards
Enter your Mobile Number, PAN, DoB and Employment Type and Do OTP verification
Provide your basic details along with Bank Statement (using Account Aggregator or Net banking Login)
You will see the cards you are eligible for, select the card and provide the required details`,
                features: [
                    "Cashback on online shopping",
                    "Travel discounts",
                    "Reward points on fuel",
                ],
            },
        ],
    },
    {
        id: "indus",
        name: "IndusInd Bank",
        logo: IndusIndBank,
        description: "IndusInd cards with cashback, lifestyle, and travel benefits.",
        cards: [
            {
                name: "IndusInd Legend Credit Card",
                link: "https://bitl.in/PHiFJ21U",
                offerPrice: "₹800",
                type: "credit",
                terms: `About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of application ID generation.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of card activation.
NOTE: A Minimum transaction of ₹100 is required within 30 days to activate the card.
About IndusInd Legend Credit Card

LIFETIME FREE Card - No Joining & Annual Fees
Earn 2 Reward Points on purchase of ₹100 | 1 Reward Point = ₹0.75
₹100 spent = 1 Reward Point on weekdays spends
₹100 spent = 2 Reward Points on weekends spends
Buy 1 Get 1 Free on BookMyShow - 3 Free tickets every month
Instant Discount on Swiggy, EazyDinner & more brands
One complimentary access to Domestic airport lounge each quarter
Get Priority pass membership
Lowest Forex Markup Charge in the market – 1.8%
Earn 4,000 bonus Reward Points on spending ₹6,00,000 or more within one year from the date of issue of your credit card
Partner Discounts

Ajio: Upto ₹400 Off on Orders Above ₹2000
PVR: Get ₹100 Off on purchase of Food & Beverage on Orders Above ₹350
Lifestyle: Additional 15% Off on Lifestyle on Orders Above ₹1999
EaseMyTrip: Get Upto ₹1000 Off on Flight & Hotel bookings
Eazydiner: Get 15% discount (upto ₹500) on Orders Above ₹1500
Eligibility Criteria

New to Credit: Allowed
Employment Status: Salaried or Self-employed
Salaried Income: Rs 80,000 per month
Self Employed Income: Rs 1,00,000 per month
Credit Score: 650+
Required Age: 21-65 years
No delayed payments in the last 12 months
Good to have

Existing active credit card with a limit more than Rs 50,000 of any bank
Existing Home or Auto Loan
Fees & Charges

Lifetime Free Card
Joining Fee: Nil
Annual Fee: Nil
Annual Fee Waiver: Not applicable
Documents Needed

No physicals documents required
Keep your Aadhaar and PAN number handy
Essential Info

Please use your Aadhar linked Mobile number to complete the application
If you were/are using any IndusInd Credit card, you are not eligible for the Rewards
If you apply for a different card upon redirecting you will be eligible for the Reward rates applicable on the card applied
If incorrect PAN or Aadhaar details are entered, please return to Profit Share and reapply to ensure you are eligible for Rewards
Acceptance and approval of the application: Based on successful verification only - sole discretion of IndusInd Bank
No Rewards on IndusInd Bank App applications`,
                features: ["Travel perks", "Cashback on shopping", "Dining offers"],
            },
            {
                name: "IndusInd Platinum Credit Card",
                link: "https://bitl.in/PWNMk84U",
                offerPrice: "₹600",
                type: "credit",
                terms: `About your Reward

You will receive a confirmation message on WhatsApp about your Reward within 72 hours of application ID generation.
Reward will be received through an Amazon Gift Card on WhatsApp within 75 days of card activation.
NOTE: A Minimum transaction of ₹100 is required within 30 days to activate the card.
About IndusInd Platinum Credit Card

LIFETIME FREE CARD - No Joining Fees | No Annual Fees
Earn 1.5 Reward Points (1 Reward Point= ₹0.65) on every ₹150 spent
Great discounts on Ajio, PVR, Lifestyle, Easemytrip, EazyDiner and more
1% fuel waiver charge on all petrol pumps across India
Get complimentary ICICI Lombard Travel insurance under the Travel Plus Program
Partner Discounts

Flat 10% off sitewide on boAt products
Get 10% instant discount Upto Rs 250 on minimum purchase of Rs 2000 on BigBasket
PVR: Get Rs 100 Off on Food & Beverage Orders Above Rs 350
Lifestyle: Get Additional 15% Off on Lifestyle Orders Above Rs 1999
Amazing offers on major e commerce like Swiggy, Titan, Reliance & more
For more amazing discount offers, Check Here : https://www.indusmoments.com/offers/search
Eligibility Criteria

Monthly Income: ₹20,000 for Salaried & ₹30,000 for Self-Employed
Age group: 21-65 years
Credit Score: 650+
No Delayed Payments in the last 12 months
New to Credit is Allowed
Fees & Charges

Lifetime Free Card
Joining Fees: Nil
Annual Fees: Nil
Annual Fee Waiver: Not applicable
Documents Needed

ID Proof
Address Proof
Income Proof
PAN Card/Form 60
Essential Info

Please use your Aadhar linked Mobile number to complete the application
If you were/are using any IndusInd Credit card, you are not eligible for the Rewards
If you apply for a different card upon redirecting you will be eligible for the rewards rates applicable on the card applied
If incorrect PAN or Aadhaar details are entered, please return to Profit Share and reapply to ensure you are eligible for Rewards
Acceptance and approval of the application: Based on successful verification only - sole discretion of IndusInd Bank
No Rewards on IndusInd Bank App applications`,
                features: [
                    "Lifestyle rewards",
                    "Reward points on every spend",
                    "Fuel surcharge waiver",
                ],
            },
            {
                name: "IndusInd Tiger Credit Card",
                link: "https://bitli.in/y1iy6iJ",
                offerPrice: null,
                type: "credit",
                terms: `About Indusind Tiger Credit Card -

Earn Upto 6 Reward points per Rs 100 spent (for spends above Rs 5L a year)
Convert 1 Reward Point in to 1.2 Airmiles (CV Points or Intermiles)
8 Complementary Domestic and 2 International Airport lounge access a year
Get one complimentary movie ticket (upto Rs 500) on bookmyshow.com every 6 months in a calendar year (2 in a year)
4 Complimentary Golf course access per year
Lower Forex mark of 1.5% on all your International Spends

Fees & List of all charges

Lifetime Free Card
Joining Fee: Nil
Annual Fee: Nil

Documents Needed

PAN card/Form 60
ID proof/Aadhar Card
Address proof
Bank statement or Income Proof

Eligibility Criteria

Employment Status: Salaried or Self-employed
Salaried Income: Rs 20,000 per month
Self Employed Income: Rs 30,000 per month
Credit Score: 700+, New to Credit: Allowed
Required Age: 21-65 years
No delayed payments in the last 12 months

How to Avail the Offer

User will be redirected to IndusInd Credit Card website
Provide your PAN and Mobile Number and complete OTP verification
Provide the necessary details and select the Tiger Card from the offers page
Your application will be submitted, and a confirmation SMS will be sent on approval of your application from the Bank`,
                features: [
                    "Exclusive lifestyle rewards",
                    "Cashback on shopping",
                    "Dining and travel perks"
                ],
            },
            {
                name: "IndusInd Platinum Aura Edge Credit Card",
                link: "https://bitli.in/t791hQh",
                offerPrice: null,
                type: "credit",
                terms: `About IndusInd Platinum Aura Edge Credit Card -

LIFETIME FREE CARD - No Joining Fees | No Annual Fees
Earn Upto 4X Saving Points (Rewards) on every purchase that you make
Great discounts on Ajio, PVR, Lifestyle, Easemytrip, EazyDiner and more!
1% fuel waiver charge on all petrol pumps across India
Get complimentary ICICI Lombard Travel insurance under the Travel Plus Program
Complimentary personal air accident insurance cover of upto Rs 25 lakhs
Personalize your Reward Plans according to your card usage. Choose from:
Platinum Aura Shop Plan | Platinum Aura Home Plan | Platinum Aura Travel Plan | Platinum Aura Party Plan

Partner Discounts

Flat 10% off sitewide on boAt products
Get 10% instant discount upto Rs 250 on minimum purchase of Rs 2000 on BigBasket
PVR: Get Rs 100 Off on Food & Beverage Orders Above Rs 350
Lifestyle: Get Additional 15% Off on Lifestyle Orders Above Rs 1999
Amazing offers on major e commerce like Swiggy, Titan, Reliance & more
For more amazing discount offers, Check Here : https://www.indusmoments.com/offers/search

Fees & List of all charges

Lifetime Free Card
Joining Fees: Nil
Annual Fees: Nil

Documents Needed

ID Proof
Address Proof
Income Proof
PAN Card/Form 60

Eligibility Criteria

New to Credit is Allowed
Employment Status: Salaried or Self-employed
Monthly Income: Rs 20,000 for Salaried
Monthly Income: Rs 25,000 for Self-Employed
Credit Score: 650+
Age group: 21-65 years
No Delayed Payments in the last 12 months

Good to have -

Existing active credit card with a limit more than Rs 50,000 of any bank
Existing Home or Auto Loan

How to Avail the Offer

User will be redirected to IndusInd Bank’s website
Complete the verification process
Select the Credit Card which IndusInd Bank Offers you based on your eligibility`,
                features: [
                    "Reward points on all spends",
                    "Exclusive dining offers",
                    "Travel discounts"
                ],
            },
            {
                name: "IndusInd Legend Credit Card",
                link: "https://bitli.in/hmb1T4r",
                offerPrice: null,
                type: "credit",
                terms: `About IndusInd Legend Credit Card -

LIFETIME FREE Card - No Joining & Annual Fees
Rs 100 spent = 1 Reward Point on weekdays spends
Rs 100 spent = 2 Reward Points on weekends spends
Buy 1 Get 1 Free on BookMyShow - 3 Free tickets every month

Other Amazing Offers -

Instant Discount on Swiggy, EazyDinner & more brands
Lowest Forex Markup Charge of 1.8%
ICICI Lombard General Travel Insurance
Earn 4,000 bonus Reward Points on spending Rs 6,00,000 or more within one year from issue of your credit card

Partner Discounts

Flat 10% off sitewide on boAt products
Get 10% instant discount upto Rs 250 on minimum purchase of Rs 2000 on BigBasket
PVR: Get Rs 100 Off on purchase of Food & Beverage on Orders Above Rs 350
Lifestyle: Additional 15% Off on Lifestyle on Orders Above Rs 1999
Amazing offers on major e commerce like Swiggy, Titan, Reliance & more
For more amazing discount offers, Check Here : https://www.indusmoments.com/offers/search

Fees & List of all charges

Lifetime Free Card
Joining Fee: Nil
Annual Fee: Nil

Documents Needed

ID Proof
Address Proof
Income Proof
PAN Card/Form 60

Eligibility Criteria

New to Credit: Allowed
Employment Status: Salaried or Self-employed
Salaried Income: Rs 80,000 per month
Self Employed Income: Rs 1,00,000 per month
Credit Score: 650+
Required Age: 21-65 years
No delayed payments in the last 12 months

Good to have -

Existing active credit card with a limit more than Rs 50,000 of any bank
Existing Home or Auto Loan

How to Avail the Offer

User will be redirected to IndusInd Bank’s website
Complete the verification process
Select the Credit Card which IndusInd Bank Offers you based on your eligibility`,
                features: [
                    "Premium lifestyle rewards",
                    "Travel perks",
                    "Cashback on shopping"
                ],
            },
            {
                name: "IndusInd Ezy Dinner Credit Card",
                link: "https://bitli.in/bi68wN6",
                offerPrice: null,
                type: "credit",
                terms: `About IndusInd EazyDiner Credit Card -

Zero Joining Fee (EazyDiner Platinum Credit Card)
Earn upto 10 Reward Points on every Rs 100 spent on Dining, Shopping & Entertainment with EazyDiner Cards
Get a 12 month Complimentary EazyDiner Prime Membership, along with 2000 EazyPoints and Rs 5000 worth of The Postcard Hotel vouchers with the EazyDiner Signature Card
Enjoy 2 Complimentary BookMyShow tickets worth Rs 200 each every month with the EazyDiner Signature Card
Get 8 Complimentary Domestic Airport Lounge access with EazyDiner Signature Card (2 per every quarter)
You get a 3 month Complimentary EazyDiner Prime Membership with the EazyDiner Platinum Card
Get 2,000 Reward Points and a 3-month EazyDiner Prime Membership renewal every time you spend Rs 30,000 within 90 days using your EazyDiner Platinum Card

Fees & List of all charges

Joining Fee: Nil (EazyDiner Platinum) / Rs 1999 + GST (EazyDiner Signature)
Annual Fee: Nil (EazyDiner Platinum) / Rs 1999 + GST (EazyDiner Signature)

Documents Needed

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or Salary slips
Photograph: Recent passport-sized photo

Eligibility Criteria -

Required Age: 21-65 years
Employment: Both salaried and self-employed individuals
Minimum Income: Rs 75,000 p.m (EazyDiner Signature)
Minimum Income: Rs 25,000 p.m (EazyDiner Platinum)
Credit Score: 650+
No delayed payments in the last 12 months

How to Avail the Offer

User will be redirected to IndusInd Bank’s website
Complete the application in the same session`,
                features: [
                    "Special dining discounts",
                    "Reward points on restaurant spends",
                    "Cashback on lifestyle purchases"
                ],
            },
            {
                name: "IndusInd Platinum RuPay Credit Card",
                link: "https://bitli.in/2jjw1iE",
                offerPrice: null,
                type: "credit",
                terms: `About IndusInd Platinum Credit Card -

LIFETIME FREE CARD - No Joining Fees | No Annual Fees
Earn 1.5 Reward Points (1 Reward Point= Rs 0.65) on every Rs 150 spent
Great discounts on Ajio, Swiggy, PVR, Lifestyle, EazyDiner and more!
1% fuel waiver charge on all petrol pumps across India
Get complimentary ICICI Lombard Travel insurance under the Platinum Travel Plus

Other Amazing Offers -

Unique feature Total Protect which covers you for a sum upto the credit limit on your credit card. Unauthorized transactions in case of loss/theft of card if reported within 48 hours of the fraud & also Counterfeit Fraud
Redeem your reward points against Miles on partner airlines and Air Vistara, Cash Credit & Payment with Rewards

Partner Discounts

Flat 10% off sitewide on boAt products
Get 10% instant discount Upto Rs 250 on minimum purchase of Rs 2000 on BigBasket
PVR: Get Rs 100 Off on Food & Beverage Orders Above Rs 350
Lifestyle: Get Additional 15% Off on Lifestyle Orders Above Rs 1999
Amazing offers on major e commerce like Swiggy, Titan, Reliance & more
For more amazing discount offers, Check Here : https://www.indusmoments.com/offers/search

Fees & List of all charges

Lifetime Free Card
Joining Fees: Nil
Annual Fees: Nil

Documents Needed

ID Proof
Address Proof
Income Proof
PAN Card/Form 60

Eligibility Criteria

New to Credit: Allowed
Employment Status: Salaried or Self-employed
Salaried Income: Rs. 20,000 per month
Self Employed Income: Rs. 30,000 per month
Credit Score: 650+
Required Age: 21 - 65 years
No delayed payments in the last 12 months

Good to have -

Existing active credit card with a limit more than Rs 50,000 of any bank
Existing Home or Auto Loan

How to Avail the Offer

User will be redirected to IndusInd Bank’s website
Complete the verification process
Select the Credit Card which IndusInd Bank Offers you based on your eligibility`,
                features: [
                    "Reward points on all spends",
                    "Fuel surcharge waiver",
                    "Dining & lifestyle benefits"
                ],
            }
        ],
    },
    {
        id: "tata-neu",
        name: "TATA Neu",
        logo: TATAlogo,
        description:
            "TATA Neu Credit Card offers exciting cashback, reward points, and lifestyle benefits on everyday purchases.",
        cards: [
            {
                name: "TATA Neu Credit Card",
                link: "https://bitli.in/Z8GyCdS",
                offerPrice: null,
                type: "credit",
                terms: `About Tata Neu HDFC Bank Credit Card -

You get up to 10% savings as Tata NeuCoins for all Tata brands like BigBasket, Air Asia, Tata 1mg, Croma, TataCliQ, Westside, Titan, Tanishq, etc. Applicable for transactions done on TataNeu app/website and registering for Tata NeuPass
Up to 1.5% savings on all UPI spends via Tata Neu App using NeuCard.(maximum of Rs 500 per month)
Get 12 free airport lounge access (8 domestic + 4 International) Per annum on NeuCard Infinity. 4 Domestic lounge access on NeuCard Plus

Other Amazing Offers -

1% fuel surcharge waiver at all fuel stations across India on transaction of Rs 400 - Rs 5,000. (Max. waiver of Rs 250 / 500 per statement cycle for Plus/Infinity
Leverage revolving credit facilities at nominal interest rates
Get zero lost card liability waivers on fraudulent transactions and Credit Card loss, upon prompt reporting

Fees & List of all charges

Zero Joining Fee
Annual/Renewal Fee: NeuCard Infinity - Rs 1499 + GST, Renewal Fee of Rs 1,499 waived off on spends of Rs 3 lakh or more in the preceding year
Annual/Renewal Fee: Neu Plus Card - Rs 499+GST, Renewal Fee of Rs 499 waived off on spends of Rs 1 lakh or more in the preceding year

Documents Needed

Address Proof - Aadhaar, Passport, Latest utility bills
ID proof - PAN, Voter ID, Passport
Income proof - Bank Statement, Salary Slips

Eligibility Criteria

Required Age: 21 - 65 years
Employment status: Salaried or Self-Employed
Minimum Income: Rs 25,000 per month (Salaried)
Minimum Income: Rs 6 lakhs per annum (Self-Employed)

How to Avail the Offer

You will be redirected to Tata Digital page
Click Login/Join Now and do OTP verification
You will see the cards you are eligible for, select the card and provide the required details
Complete your VKYC within 72 hours of your application`,
                features: ["Cashback on Tata Neu", "Dining rewards", "Travel benefits"],
            },
        ],
    },
    {
        id: "rbl",
        name: "RBL Bank",
        logo: RBLBank,
        description: "RBL cards with lifestyle and travel perks.",
        cards: [
            {
                name: "RBL ShopRite Credit Card",
                link: "https://bitli.in/7sHk9tS",
                offerPrice: null,
                type: "credit",
                terms: `About RBL Bank Shoprite Credit Card -

Earn 20 reward points for every Rs 100 spent on Grocery shopping (1 RP – Rs 0.25)
Amazing Discount on merchant websites like Tata Cliq, Zomato, Swiggy, Zepto and more
Earn 1 reward point for every Rs 100 spent on other purchases
Get 10% discount (Upto Rs 100) on movie tickets on BookMyShow - 15 times a calendar year
Fuel surcharge waiver at all fuel stations for transactions between Rs 500 and Rs 4000 (Max monthly Waiver – Rs 100

Fees & List of all charges -

Joining Fee: Lifetime FREE
Annual Fee: Nil
Fee of Rs 99 + GST is charged for redeeming reward points on RBL Bank Credit Cards

Documents Needed -

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar Authentication is required at the time of KYC

Eligibility Criteria -

Required Age: 21 - 65 years
Employment status: Both Salaried and Self-Employed individuals are eligible
Income: Minimum monthly income of Rs 15,000
Self-Employed: Minimum income as filed in ITR Rs 2 lac/year
Credit score: Minimum credit score of 720+
New to Credit: Not Allowed

How to Avail the Offer -

User will be redirected to the RBL Bank Credit Cards page
Complete the required details and submit the application
Keep a screenshot of the application submit page for future reference`,
                features: [
                    "Cashback on shopping",
                    "Dining discounts",
                    "Fuel surcharge waiver"
                ],
            },
            {
                name: "RBL Indianoil Credit Card",
                link: "https://bitli.in/ryDA3ym",
                offerPrice: null,
                type: "credit",
                terms: `About RBL Bank Indian Oil Credit Card -

Earn 10 Fuel points on every Rs 100 spent at Indian Oil fuel stations (Maximum 1,000 fuel points per month)
Welcome benefit of 1000 fuel points worth Rs 500 on first transaction worth Rs 500 or more within 30 days of card issuance
Get 1 fuel point on Rs 100 spent on every other purchases
1 Fuel Point = Rs 0.5, redeemable at Indian Oil Fuel Stations
Fuel surcharge waiver at all fuel stations for transactions between Rs 500 and Rs 4000 (Max monthly waiver – Rs 100)

Fees & List of all charges -

Joining Fee: Rs 500 + GST
Annual Fee: Rs 500 + GST 2nd year onwards (waived off on spends of Rs 1.75 Lacs and above in the previous year
Fee of Rs 99 + GST is charged for redeeming reward points on RBL Bank Credit Cards

Documents Needed -

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar Authentication is required at the time of KYC

Eligibility Criteria -

Required Age: 21-65 years
Employment status: Both salaried and self-employed individuals are eligible
Income: Minimum monthly income of Rs 15,000
Self-Employed: Minimum income as filed in ITR Rs 2 lac/year
Credit Score: Minimum credit score of 720+
New to Credit: Not Allowed

How to Avail the Offer -

User will be redirected to the RBL Bank Credit Cards page
Complete the required details and submit the application
Keep a screenshot of the application submit page for future reference`,
                features: [
                    "Fuel rewards",
                    "Shopping discounts",
                    "Dining offers"
                ],
            },
            {
                name: "RBL Indianoil Xtra Credit Card",
                link: "https://bitli.in/ySdxayC",
                offerPrice: null,
                type: "credit",
                terms: `About RBL Bank Indian Oil XTRA Credit Card -

Earn 15 Fuel points on every Rs 100 spent at Indian Oil fuel stations (Max 2,000 fuel points per month)
Welcome benefit of 3000 fuel points worth Rs 1500 on first transaction worth Rs 500 or more within 30 days of card issuance
Get 2 fuel point on Rs 100 spent on every other purchases
1 Fuel Point = Rs 0.5 redeemable at Indian Oil Fuel Stations
Fuel surcharge waiver at all fuel stations for transaction between Rs 500 and Rs 4000 (Max monthly Waiver – Rs 100)

Fees & List of all charges -

Joining Fee: Rs 1500 + GST
Annual Fee: Rs 1500 + GST 2nd year onwards (waived off on spends of INR 2.75 Lacs and above in the previous year
Fee of Rs 99 + GST is charged for redeeming reward points on RBL Bank Credit Cards

Documents Needed -

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar Authentication is required at the time of KYC

Eligibility Criteria -

Required Age: 21-65 years
Employment status: Both salaried and self-employed individuals are eligible
Income: Minimum monthly income of Rs 15,000
Self-Employed: Minimum income as filed in ITR Rs 2 lac/year
Credit score: Minimum credit score of 720+
New to Credit: Not Allowed

How to Avail the Offer -

User will be redirected to the RBL Bank Credit Cards page
Complete the required details and submit the application
Keep a screenshot of the application submit page for future reference`,
                features: [
                    "Extra fuel benefits",
                    "Reward points on spends",
                    "Dining discounts"
                ],
            },
            {
                name: "RBL IRCTC Credit Card",
                link: "https://bitli.in/RdbViOd",
                offerPrice: null,
                type: "credit",
                terms: `About RBL Bank IRCTC Credit Card -

Get 500 Reward Points as a Welcome Benefit when you make a purchase of Rs 500 or more within 30 days of card issuance
Earn 5 Reward Points for every Rs 200 spent on train ticket bookings via the IRCTC website or app. 1 Reward Point = Rs 1 on IRCTC
Earn upto 3 Reward Points for every Rs 200 spent on FASTag recharges made via RBL Bank digital channels, and 2 Reward Points for every Rs 200 spent on flight and hotel bookings through the IRCTC website or app. Earn upto 1,000 Reward Points per month across both categories.
Get upto 8 complimentary visits per year (2 per quarter) to IRCTC Executive Lounges at select railway stations, with access to facilities like a 2-hour lounge stay, buffet meals, tea/coffee, newspapers, magazines, and changing rooms

Other Features of the Card -

Receive 500 Reward Points upon reaching quarterly spends of Rs 75,000 (excluding wallet transactions, cash withdrawals, rent, utilities, fuel, and insurance)
Cancellation protection cover worth upto Rs 5,000 on trains cancelled by India Railways within 24 hours of the scheduled train time
Cancellation protection coverage of upto Rs 5,000 for trains canceled by Indian Railways within 24 hours of the scheduled departure

Fees & List of all charges -

Joining Fee: Rs 500 + GST
Annual Fee: Rs 500 + GST
Fee of Rs 99 + GST is charged for redeeming reward points on RBL Bank Credit Cards

Documents Needed -

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or Salary slips
Photograph: Recent passport-sized photo

Eligibility Criteria -

Required Age: 21-65 years
Employment status: Both Salaried and Self-Employed individuals are eligible
Salaried Income: Rs 15,000 per month
Self Employed: ITR > Rs 2 Lakhs per annum
Credit score: 720+
New to Credit: Not Allowed

How to Avail the Offer -

User will be redirected to the RBL Bank Credit Cards page
Complete the required details and submit the application`,
                features: [
                    "Railway booking rewards",
                    "Cashback on IRCTC spends",
                    "Dining and lifestyle offers"
                ],
            },
        ],
    },
    {
        id: "federal",
        name: "Federal Bank",
        logo: FederalBank,
        description: "Federal Bank credit cards for shopping and lifestyle perks.",
        cards: [
            {
                name: "Scapia Credit Card",
                link: "https://bitli.in/5oQeyHQ",
                offerPrice: null,
                type: "credit",
                terms: `About Federal Bank Scapia Credit Card -

Lifetime FREE Credit Card - No Joining or Annual Fees
Enjoy international transactions without any additional foreign currency markup fees
Unlock unlimited domestic lounge, complimentary dining, shopping or spa by spending Rs 10,000 on the card every month
Earn 20 Scapia Coins per Rs 100 on travel bookings (flights & hotels) via the Scapia app. Earn 10 Scapia Coins per Rs 100 on most online & offline spends
1% surcharge waiver of upto Rs 500 per month on fuel transactions worth upto Rs 5,000
Scapia Coins can be redeemed on Scapia App for any travel (Flight/Stays/Train/Bus) bookings for 100% of the booking value
5 Scapia Coins = Rs 1

Fees & List of all charges

Lifetime FREE Credit Card
Joining Fee: Nil
Annual Fee: Nil

Documents Needed

ID Proof: PAN Card/Form 60
Address Proof: Aadhaar, Passport, or utility bills
Income Proof: Bank statements or Salary slips
Photograph: Recent passport-sized photo

Eligibility Criteria

Age: 23 to 40 years
Employment: Both salaried and self-employed individuals
Salaried Income: Rs 30,000/Monthly
Self Employed: Rs 4,00,000/Annually
Credit Score: 730+
New to Credit: Not Allowed

How to Avail the Offer

User will be redirected to Scapia Credit card application page
Complete the application in the same session
Application will be submitted and a confirmation SMS will be sent on approval of the application`,
                features: ["Cashback on shopping", "Travel rewards", "Dining offers"],
            },
        ],
    },
    {
        id: "tide",
        name: "Tide Bank",
        logo: TideBank,
        description: "Tide account and card with exclusive benefits.",
        helpPdf: "https://example.com/tide-help.pdf",
        cards: [
            {
                name: "Tide Account",
                link: "https://bitl.in/PmwVTfs6",
                offerPrice: "₹180",
                type: "saving",
                terms: `Important T&C's: 

You need to make a deposit of ₹50 within one day to get Cashback
KYC completion is mandatory to avail Cashback
KYC should be completed within 7 days to avail Cashback
Coupon code compulsory for getting Cashback
Your Earnings Hub registered Mobile Number & Tide Account Registered Mobile Number have to be the same
Valid only on PlayStore
About your Cashback:

Upon successfully Opening the Account and completing KYC, you will receive a confirmation message on WhatsApp confirming your Cashback within 36 hours.
Within 15 days of KYC completion, you will receive your Cashback through an Amazon Gift Card on WhatsApp or via UPI transfer, based on your preference.
Your Cashback is only applicable if:

You use coupon codes mentioned here or on Tide.`,
                features: [
                    "Free account opening",
                    "Cashback on transactions",
                    "Business perks",
                ],
            },
        ],
    },

    {
        id: "uni",
        name: "UNI Yes Bank",
        logo: UniBank, // add your logo variable or URL here
        description:
            "Get the UNI Yes Bank Credit Card and enjoy exclusive rewards, offers, and financial freedom with simple transactions.",
        cards: [
            {
                name: "UNI Yes Bank Credit Card",
                link: "https://app.uni.club/yuBA/1u0stg5j",
                offerPrice: "₹750", // update if any joining/offer price is available
                type: "credit",
                terms: `You will  receive Free Digital Gold worth そ750 within 14 days. This will be given through 75,000 Uni Coins which can be converted to Digital Gold on Uni App.`,
                features: [
                    "Easy EMI conversion",
                    "Rewards on every spend",
                    "Contactless payment enabled",
                ],
            },
        ],
    },


    {
        id: "cleevo",
        name: "CLEEVO",
        logo: Cleevo,
        description: "Get exciting cashback offers with CLEEVO.",
        cards: [
            {
                name: "CLEEVO Offer",
                link: "https://bitl.in/PJuMr1AM",
                offerPrice: "25% Cashback",
                type: "deals",
                features: ["Flat 25% cashback on purchases"],
            },
        ],
    },
    {
        id: "xyxx",
        name: "XYXX",
        logo: XYXX,
        description: "Exclusive cashback offers on XYXX products.",
        cards: [
            {
                name: "XYXX Offer",
                link: "https://bitl.in/PhfDQ1fZ",
                offerPrice: "5% Cashback",
                type: "deals",
                features: ["5% cashback on all purchases"],
            },
        ],
    },
    {
        id: "bajaj",
        name: "Bajaj Finserv Prime",
        logo: Bajaj,
        description: "Special rewards with Bajaj Finserv Prime.",
        cards: [
            {
                name: "Bajaj Finserv Prime Offer",
                link: "https://bitl.in/PYpEOQl3",
                offerPrice: "Earn ₹300",
                type: "deals",
                features: ["Earn ₹300 reward on subscription"],
            },
        ],
    },
    {
        id: "cove-dental",
        name: "Cove Dental",
        logo: Cove,
        description: "Cashback offers on Cove Dental services.",
        cards: [
            {
                name: "Cove Dental Offer",
                link: "https://bitl.in/P6TXvUvX",
                offerPrice: "40% Cashback",
                type: "deals",
                features: ["Flat 40% cashback on services"],
            },
        ],
    },
    {
        id: "times-prime",
        name: "Times Prime",
        logo: Times,
        description: "Earn rewards with Times Prime membership.",
        cards: [
            {
                name: "Times Prime Offer",
                link: "https://bitl.in/PCbn7qvs",
                offerPrice: "Earn ₹300",
                type: "deals",
                features: ["Earn ₹300 reward on membership"],
            },
        ],
    },
    {
        id: "booking",
        name: "Booking.com",
        logo: Booking,
        description: "Get cashback on Booking.com reservations.",
        cards: [
            {
                name: "Booking.com Offer",
                link: "https://bitl.in/PXhLRVA7",
                offerPrice: "3% Cashback",
                type: "deals",
                features: ["3% cashback on travel bookings"],
            },
        ],
    },
    {
        id: "ceazur",
        name: "Ceazur",
        logo: Ceazur,
        description: "Cashback deals on Ceazur products.",
        cards: [
            {
                name: "Ceazur Offer",
                link: "https://bitl.in/PuL33hso",
                offerPrice: "35% Cashback",
                type: "deals",
                features: ["Flat 35% cashback on products"],
            },
        ],
    },
    {
        id: "puer",
        name: "Puer",
        logo: Puer,
        description: "Exclusive cashback on Puer purchases.",
        cards: [
            {
                name: "Puer Offer",
                link: "https://bitl.in/PqzycG0a",
                offerPrice: "20% Cashback",
                type: "deals",
                features: ["20% cashback on purchases"],
            },
        ],
    },
    {
        id: "hyugalife",
        name: "Hyugalife",
        logo: HyugaLife,
        description: "Cashback on Hyugalife health and wellness products.",
        cards: [
            {
                name: "Hyugalife Offer",
                link: "https://bitl.in/P1rgKLw8",
                offerPrice: "6% Cashback",
                type: "deals",
                features: ["6% cashback on health products"],
            },
        ],
    },
    {
        id: "fitspire",
        name: "Fitspire",
        logo: Fitspire,
        description: "Fitness offers with Fitspire.",
        cards: [
            {
                name: "Fitspire Offer",
                link: "https://bitl.in/PKyRZFIO",
                offerPrice: "15% Cashback",
                type: "deals",
                features: ["15% cashback on fitness and health products"],
            },
        ],
    },
    {
        id: "dot-key",
        name: "Dot & Key",
        logo: DotKey,
        description: "Get cashback on Dot & Key skincare products.",
        cards: [
            {
                name: "Dot & Key Offer",
                link: "https://bitl.in/POsLpEl9",
                offerPrice: "10% Cashback",
                type: "deals",
                features: ["10% cashback on skincare"],
            },
        ],
    },
    {
        id: "ayurveda-company",
        name: "The Ayurveda Company",
        logo: TAC,
        description: "Cashback offers on Ayurveda Company products.",
        cards: [
            {
                name: "Ayurveda Company Offer",
                link: "https://bitl.in/PQZs9ypP",
                offerPrice: "12% Cashback",
                type: "deals",
                features: ["12% cashback on Ayurveda products"],
            },
        ],
    },
    {
        id: "house-of-koala",
        name: "House of Koala",
        logo: House,
        description: "Special discounts and cashback with House of Koala.",
        cards: [
            {
                name: "House of Koala Offer",
                link: "https://bitl.in/POdGDAJE",
                offerPrice: "20% Cashback + 15% Discount",
                type: "deals",
                features: ["20% cashback + 15% discount on purchases"],
            },
        ],
    }
];

export default banks;


