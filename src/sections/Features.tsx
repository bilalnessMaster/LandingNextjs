import { Feature } from "@/components/Feature";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from '@/assets/images/avatar-owen-garcia.jpg';
import Image from "next/image";
import Avatar from "@/components/Avatar";

import Key from "@/components/Key";
const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container ">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Where power meets{" "}
                    <span className="text-lime-400">simplicity</span>{" "}
                </h2>
                <div className="grid mt-12 grid-cols-1 md:grid-cols-4 gap-8 lg:grid-cols-3">
                    <Feature
                        className="md:col-span-2 lg:col-span-1 group"
                        title="Real-time Collaboration"
                        description=" Work together  seamlessly with conflict-editing"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="avatare 1"
                                    className="rounded-full "
                                />
                            </Avatar>
                            <Avatar className="z-30 -ml-6 border-indigo-600 shadow ">
                                <Image
                                    src={avatar2}
                                    alt="avatare 1"
                                    className="rounded-full "
                                />
                            </Avatar>
                            <Avatar className="z-20 -ml-6 border-yellow-500">
                                <Image
                                    src={avatar3}
                                    alt="avatare 1"
                                    className="rounded-full "
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:border-green-400 transition">
                                <div className="relative bg-neutral-700 rounded-full size-full inline-flex justify-center items-center gap-1">
                                    <Image src={avatar4} className="
                                     absolute size-full rounded-full group-hover:opacity-100 opacity-0 transition" alt='avatar 4 ' />
                                    {Array.from({ length: 3 }, (_, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className="size-1.5 rounded-full bg-white "
                                            ></span>
                                        );
                                    })}
                                </div>
                            </Avatar>
                        </div>
                    </Feature>
                    <Feature
                        className="md:col-span-2 lg:col-span-1 group"
                        title="interactive Prototyping "
                        description="Engage your clients with prototypes that react to user actions"
                    >
                        <div className="aspect-video py-6 ">
                            <p className="text-4xl text-center max-w- text-white/15 font-extrabold">
                                We&apos;ve achieved{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                    <span>
                                    incredible
                                    </span>
                                    <video src={"/gif-incredible.mp4"} autoPlay loop muted playsInline className="absolute bottom-full left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:opacity-100 duration-500 rounded-md transition "/>
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </Feature>
                    <Feature
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
                        title="Keyboard Quick Actions"
                        description="Powerful commands to help you create  designs more quickly"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4 ">
                            <Key className="w-28  outline-2 outline outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500">shift</Key>
                            <Key className="outline-2 outline outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 delay-150">alt</Key>
                            <Key className="outline-2 outline outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 delay-300">C</Key>
                        </div>
                    </Feature>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {features.map((feature) => (
                        <div
                            className="border gap-3 border-white/15 inline-flex items-center justify-center  px-3 md:px-5 md:py-2 py-1.5 rounded-2xl bg-neutral-900 hover:scale-105 transition duration-500 group"
                            key={feature}
                        >
                            <span
                                className="bg-lime-400 
                                    inline-flex items-center justify-center
                                    size-5 rounded-full  text-xl  text-neutral-950
                                    group-hover:rotate-45 transition duration-500"
                            >
                                &#10038;
                            </span>
                            <span className=" md:font-medium md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
