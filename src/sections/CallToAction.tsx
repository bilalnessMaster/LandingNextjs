'use client'
import { motion, useAnimate } from "framer-motion";
export default function CallToAction() {
    const  [scope , animate] = useAnimate()
    return (
        <section className="py-24">
            <div className="overflow-x-clip flex p-4">
                <motion.div
                    animate={{
                        x: '-50%'
                    }}
                    transition={{
                        duration : 30 , 
                        ease : 'linear',
                        repeat : Infinity
                    }}
                className="flex flex-none gap-16 text-7xl md:text-8xl font-medium ">
                    { Array.from({ length: 10 }, (_, index) => (
                        <div key={index} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl">
                                &#10038;
                            </span>
                            <span>Try it for free</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
