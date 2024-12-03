"use client";
import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Point";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorPointer from '@/assets/images/cursor-you.svg'
export default function Hero() {
  
    const [leftDesignScope, LeftDesignAnimate] = useAnimate();
    const [leftPointerScope, LeftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        LeftDesignAnimate([
            [
                leftDesignScope.current, 
                { opacity: 1 }, { duration: 0.5 }],
            [
                leftDesignScope.current, 
                { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        LeftPointerAnimate([
            [
                leftPointerScope.current, 
                { opacity: 1 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                 { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { y: [0, 16, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightDesignAnimate([
            [rightDesignScope.current , {opacity : 1} , {duration : 0.5 , delay: 1.5}],
            [rightDesignScope.current , { y: 0, x:0 } , {duration : 0.5 }],
        ])
        rightPointerAnimate([
            [rightPointerScope.current ,{opacity : 1 } , {duration : 0.5 , delay: 1.5}],
            [rightPointerScope.current ,{opacity : 1 , x:200 , y : 100 } , {duration : 0.5}],
            [rightPointerScope.current ,{opacity : 1 , x:[180,0] , y : 0 } , {duration : 0.5 , ease : 'easeInOut'}],
        ])
    });
    return (
        <section className="py-24 overflow-x-clip" style={{
            cursor :`url(${cursorPointer.src}) auto`
        }}>
            <div className="container relative ">
                <motion.div drag
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    className="absolute -left-32 top-16 hidden lg:block"
                >
                    <Image draggable={false} src={designExample1Image} alt="example 1" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    ref={leftPointerScope}
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Andrea" />
                </motion.div>
                <motion.div drag initial={{opacity: 0 , x:100 , y:200 }} ref={rightDesignScope} className="absolute -right-64 -top-16 hidden lg:block ">
                    <Image  draggable={false} src={designExample2Image} alt="example 2" />
                </motion.div>
            <motion.div ref={rightPointerScope} initial={{opacity : 0 , x:300 , y : 300}} className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Bryan " color="red" />
                </motion.div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold ">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-medium text-center mt-6 ">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools shouldn&apos;t slow you down. Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </p>
                <div className="flex justify-center ">
                    <form
                        action=""
                        className="max-w-lg w-full mx-auto flex border border-white/15 rounded-full p-2 mt-8 justify-between "
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent sm:w-52 outline-none md:flex-1 px-4 "
                        />
                        <Button
                            type="submit"
                            variant="primary"
                            className="whitespace-nowarp "
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
