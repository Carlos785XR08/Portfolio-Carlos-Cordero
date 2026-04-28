"use client";
import { div } from "motion/react-client";
import {transitionVariantsPage} from "./utils/motion-transitions";
import {AnimatePresence, motion} from "framer-motion";   

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[linear-gradient(120deg,rgba(2,6,23,0.95)_0%,rgba(11,58,66,0.9)_50%,rgba(97,218,251,0.85)_100%)] backdrop-blur-md"
          variants={transitionVariantsPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{delay: 0.2, duration: 0.6, ease: "easeInOut"}}
          >
        

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default TransitionPage;