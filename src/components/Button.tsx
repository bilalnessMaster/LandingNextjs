import { cva } from "class-variance-authority";
import { button } from "framer-motion/client";
import { ButtonHTMLAttributes } from "react";


const classes = cva('border  h-12 rounded-full px-6 font-medium' , {
    variants : {
        variant : {
            primary    : 'border-line-400 bg-lime-400 text-neutral-950',
            secondary : 'border-white text-white bg-transparent'
        },
        size : {
            sm :  "h-10"
        }
    }
})
export default function Button(props : {variant: 'primary' | 'secondary' , size? : 'sm' } & ButtonHTMLAttributes<HTMLButtonElement>){

    const {variant , className ,children ,size } = props ;
    return (
        <button className={classes({variant : variant,size: size , className :className})}>
        {children}
    </button>
    )
}