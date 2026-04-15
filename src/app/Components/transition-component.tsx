"use client"

import { fadeIn } from '@/app/Components/utils/motion-transitions'
import { motion } from 'framer-motion'

interface MotionTransitionProps {
    children: React.ReactNode
    position: 'right'| 'bottom'
    className?: string
}

const MotionTransition = (props: MotionTransitionProps) => {
    const { children, position, className } = props

    return (
        <motion.div
        variants={fadeIn(position)}
        initial="initial"
        animate="animate"
        exit="exit"
        className={className} 
        transition={{
            type: "tween",
            duration: 1.4,
            delay: 0.5,
            ease: [0.25, 0.25, 0.25, 0.75]
        }}
        
        >
            {children} 
            </motion.div>           
    );
}

export default MotionTransition;