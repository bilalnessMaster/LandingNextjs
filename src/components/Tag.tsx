
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props : HTMLAttributes<HTMLDivElement>){
    const {className , children  } = props   
    return (
            <div className={twMerge("inline-flex items-center border border-lime-400 rounded-full gap-2 px-3 py-1  text-lime-400 uppercase " , className)}>
                <span >
                    &#10038;
                </span>
                <span className="text-sm">{children}</span>
            </div>
        )
}