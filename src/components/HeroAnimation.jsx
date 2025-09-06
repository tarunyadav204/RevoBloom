import { motion } from "framer-motion";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";

const HeroAnimation = () => {
    return (
        <div className="relative flex justify-center mt-10">
            <motion.div
                className="absolute"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: [0, -20, 0], opacity: 1 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <img src={card1} alt="Credit Card" loading="lazy" className="w-72 drop-shadow-2xl" />
            </motion.div>

            <motion.div
                className="absolute left-[-120px] top-10"
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: [0, -10, 0], opacity: 1 }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <img src={card2} alt="Credit Card" loading="lazy" className="w-64 drop-shadow-xl" />
            </motion.div>

            <motion.div
                className="absolute right-[-120px] top-10"
                initial={{ rotate: 10, opacity: 0 }}
                animate={{ rotate: [0, 10, 0], opacity: 1 }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <img src={card3} alt="Credit Card" loading="lazy" className="w-64 drop-shadow-xl" />
            </motion.div>
        </div>
    );
};

export default HeroAnimation;
