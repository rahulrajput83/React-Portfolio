import { useInView } from "react-intersection-observer";
import {motion } from "framer-motion";


export function Transition({ children, className, value }) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    })

    return (
        <motion.div key={value}
            className={className}
            ref={ref}
            initial={{ y: 80 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            {children}
        </motion.div>
    )
}