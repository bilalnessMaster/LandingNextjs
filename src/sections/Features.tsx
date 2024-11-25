import { Feature } from "@/components/Feature";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import { space } from "postcss/lib/list";
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
                        className="md:col-span-2 lg:col-span-1"
                        title="Real-time Collaboration"
                        description=" Work together seamlessly with conflict-editing"
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
                            <Avatar className="-ml-6 border-transparent">
                                <div className="bg-neutral-700 rounded-full size-full inline-flex justify-center items-center gap-1">
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
                        className="md:col-span-2 lg:col-span-1"
                        title="interactive Prototyping "
                        description="Engage your clients with prototypes that react to user actions"
                    >
                        <div className="aspect-video py-6 ">
                            <p className="text-4xl text-center max-w- text-white/15 font-extrabold">
                                We've achieved{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    incredible
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </Feature>
                    <Feature
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                        title="Keyboard Quick Actions"
                        description="Powerful commands to help you create  designs more quickly"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4 ">
                            <Key className="w-28">shift</Key>
                            <Key>alt</Key>
                            <Key>C</Key>
                        </div>
                    </Feature>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {features.map((feature) => (
                        <div
                            className="border gap-3 border-white/15 inline-flex items-center justify-center  px-3 md:px-5 md:py-2 py-1.5 rounded-2xl bg-neutral-900"
                            key={feature}
                        >
                            <span
                                className="bg-lime-400 
                                    inline-flex items-center justify-center
                                    size-5 rounded-full  text-xl  text-neutral-950"
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
