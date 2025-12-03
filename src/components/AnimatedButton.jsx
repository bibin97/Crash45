import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick }) => {
  return (
    <motion.button
      className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 magnetic relative overflow-hidden text-black hover:shadow-2xl hover:shadow-[#f8ba2b]/50"
      style={{ backgroundColor: '#f8ba2b' }}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
export default AnimatedButton;