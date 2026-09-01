import { type ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollFadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

const ScrollFadeIn = ({
    children,
    delay = 0,
    className = ""
}: ScrollFadeInProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-50px"
    });

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollFadeIn;
