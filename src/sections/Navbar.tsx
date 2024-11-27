'use client'
import Image from "next/image";
import logoImage from '@/assets/images/logo.svg'; 
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence , motion } from "framer-motion";
const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen , setIsOpen] = useState(true)
    console.log(isOpen);
    
    return <>
    <section className='py-4 lg:py-8 fixed w-full top-0 z-50 '>
        <div className="container max-w-5xl">
            <div className="border border-white/15  rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3   p-2 px-4 md:pr-2 items-center">
                <div>
                    <Image src={logoImage} alt='layer logo' 
                    className="h-9 md:h-auto w-auto ml-2 "
                    />
                </div>
                <div className=" gap-6 items-center font-medium hidden lg:flex ">
                    {
                        navLinks.map((link , index)=>(
                            <a key={index} href={link.href}>{link.label}</a>
                        ))
                    }
                </div >
                <div className="flex justify-end items-center gap-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu md:hidden cursor-pointer"
                onClick={()=>setIsOpen(!isOpen)}
                >
                
                <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition",isOpen && "rotate-45 -translate-y-1")}></line>
                <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition" , isOpen && "opacity-0")}></line>
                <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition",isOpen && "-rotate-45 translate-y-1")}></line>
                </svg>

        
                <Button variant="secondary" className="hidden md:inline-flex items-center">Log In</Button>
                <Button variant="primary"  className="hidden md:inline-flex items-center">Sign up</Button>
                </div>
            </div>
            <AnimatePresence >


           {isOpen  && <motion.div 
                initial={{
                    height : 0
                }}
                animate={{
                    height : 'auto'
                }}
                exit = {{
                    height : 0
                }}
           
           className="block md:hidden overflow-hidden">
            <div className="items-center gap-4 py-4 flex flex-col">

                    {
                        navLinks.map((link , index)=>(
                            <a className="" key={index} href={link.href}>{link.label}</a>
                        ))
                    }
                    <Button variant="secondary" className="inline-flex items-center">Log In</Button>
                    <Button variant="primary"  className="inline-flex items-center">Sign up</Button>

            </div>
            </motion.div >
            
            }
                
            </AnimatePresence>
            </div>
        </div>
    </section>
    <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]">

    </div>
    </>
}
