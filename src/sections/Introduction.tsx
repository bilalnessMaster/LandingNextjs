'use client'
import Tag from "@/components/Tag";
import {useMotionValueEvent, useScroll, useTransform} from 'framer-motion'
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(' ');
export default function Introduction() {
    const [currentWord , setCurrentWord] = useState<number>(0)
    const refContainer = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target : refContainer ,
        offset : ['start end' , 'end end']
    })
    const wordindex = useTransform(scrollYProgress , [0,1] , [0,words.length])
    useEffect(()=>{
        wordindex.on('change' , (lastest)=>{
            setCurrentWord(lastest)
        })
    },[wordindex])
    return (
        <section className="py-28 lg:py-40">    
          <div className="container 0 ">
       
           <div className="sticky top-28 lg:top-40">
           <div className="text-center">
           <Tag>
            Introducing Layers
            </Tag>
           </div>
           <div className="mt-10  text-center  ">
            <p className="text-4xl md:text-6xl font-medium lg:text-7xl
 ">
                <span>Your creative
                process deserves better.
                </span>{" "}
                 <span className="text-white/15 ">
                    {words.map((word , index)=>(
                        <span key={index} className={twMerge("transition text-white/15" , currentWord > index && "text-white ")}>{`${word} `}</span>
                    ))}
                </span>{" "}
                <span className="text-lime-400">
                    That's why we built Layers.
                </span>
            </p>
           </div>
           </div>
           <div className="h-[150vh]" ref={refContainer}>

           </div>
            </div>
        
        </section>

    )
}