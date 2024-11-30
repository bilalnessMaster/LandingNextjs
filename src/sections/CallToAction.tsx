'use client'
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function CallToAction() {
    const  [scope , animate] = useAnimate()
    const [isHover , setIsHover] = useState(false)
    const Animation  = useRef<AnimationPlaybackControls>();
    useEffect(()=>{
        Animation.current = animate([
            [scope.current , { x : '-50%'},{duration : 30 , ease : 'linear' , repeat: Infinity}]
        ])
    },[])
    useEffect(()=>{
        if (Animation.current){
            if(isHover){
                Animation.current.speed = 0.5
            }else {
                Animation.current.speed = 1
            }
        }
    },[isHover])
    
    return (
        <section className="py-24">
            <div className="overflow-x-clip flex p-4">
                <motion.div
                onMouseEnter={()=> setIsHover(true)}
                onMouseLeave={()=> setIsHover(false)}
                ref={scope}
                className="flex flex-none gap-16 text-7xl md:text-8xl font-medium group ">
                    { Array.from({ length: 10 }, (_, index) => (
                        <div key={index} className="flex items-center gap-16">
                            <span className="text-lime-400  transition-all text-7xl">
                                &#10038;
                            </span>
                            <span className="group-hover:text-lime-400">Try it for free</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
