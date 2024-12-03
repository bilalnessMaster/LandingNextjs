"use client";
import { type IntegrantionType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
const IntegrationColumn = (props: {
    integrations: IntegrantionType;
    className?: string;
    reverse? : boolean
                                }) => {
    const { integrations, className  , reverse} = props;
    const [scope , animate ] = useAnimate()
    const [ishovered , setIsHovered] = useState(false)
    const animation  = useRef<AnimationPlaybackControls>()
    useEffect(()=>{
        animation.current = animate([
            [scope.current , {y: reverse ? 0 :"-50%",} , {duration: 30,ease: "linear",repeat: Infinity,}]
        ])
    },[animate , reverse , scope])
    useEffect(()=>{
        if(  animation.current ){
            if(ishovered){
                animation.current.speed = 0.3
            }else{
                animation.current.speed = 1
            }
        }
    },[ishovered])
    return (
        <motion.div
            ref={scope}
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            initial={{
                y : reverse ? "-50%" : 0 , 
              }}
              
            className={twMerge("flex flex-col p-4 gap-4", className)}
        >
            {Array.from({ length: 2 }, (_, index) => (
                <Fragment key={index}>
                    {integrations.map((integration) => (
                        <div
                            key={integration.name}
                            className=" border border-white/10 rounded-3xl p-6  bg-neutral-900 "
                        >
                            <div className="flex justify-center items-center">
                                <Image
                                    className="size-24 "
                                    src={integration.icon}
                                    alt={integration.name}
                                />
                            </div>
                            <h3 className="text-3xl text-center  mt-6 ">
                                {integration.name}
                            </h3>
                            <p className="text-center font-medium text-white/50 mt-2 ">
                                {integration.description}
                            </p>
                        </div>
                    ))}
                </Fragment>
            ))}
        </motion.div>
    );
};

export default IntegrationColumn;
