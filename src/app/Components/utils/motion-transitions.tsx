import { exit } from "process";

export const transitionVariantsPage = {
    initial: {
        x: "100%",
        width: "100%",
        
    },
    animate: {
        x: '0%',
        width: '0%',
    },

    exit: {
        x: ['0%', '100%'],
        width: ['0%', '100%'],
    }
}

export const fadeIn =(position: string) => {
    return {
        initial: {
            y: position === 'bottom' ? -80 : 0,
            x: position === 'right' ? 80 : 0,
            opacity: 0
        },
        animate: {
            y: 0,
            x: 0,
            opacity: 1
        },
        exit: {
            y: position === 'bottom' ? -80 : 0,
            x: position === 'right' ? 80 : 0,
            opacity: 0
        }
    }
}