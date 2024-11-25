import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"




const Key = (props : HTMLAttributes<HTMLDivElement>) => {
    const {children , className , ...othreProps} = props
    return (
    <div className={twMerge("size-14 rounded-2xl font-medium text-neutral-950 text-xl bg-neutral-300 inline-flex justify-center items-center ",className)}
    {...othreProps}
    >
        {children}
    </div>
  )
}

export default Key