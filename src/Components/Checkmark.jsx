import { motion } from "framer-motion";

const Checkmark = () => {
  return (
    <motion.svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      className="mx-auto mb-6"
    >
      {/* Circle */}
      <motion.circle
        cx="36"
        cy="36"
        r="34"
        fill="none"
        stroke="#34b233"
        strokeWidth="4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Check */}
      <motion.path
        d="M20 38 L32 50 L52 26"
        fill="none"
        stroke="#008000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      />
    </motion.svg>
  );
};

export default Checkmark;