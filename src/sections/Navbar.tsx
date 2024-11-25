import Image from "next/image";
import logoImage from '@/assets/images/logo.svg'; 
import Button from "@/components/Button";
const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return <section className='py-4 lg:py-8'>
        <div className="container max-w-5xl">
            <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
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
                </div>
                <div className="flex justify-end items-center gap-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu md:hidden"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>

        
                <Button variant="secondary" className="hidden md:inline-flex items-center">Log In</Button>
                <Button variant="primary"  className="hidden md:inline-flex items-center">Sign up</Button>
                </div>
            </div>
        </div>
    </section>;
}