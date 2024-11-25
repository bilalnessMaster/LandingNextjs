import {type IntegrantionType} from '@/sections/Integrations'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

const IntegrationColumn = (props : {
    integrations : IntegrantionType
    className? : string
}) => {
    const {integrations , className } = props
  return (
    <div className={twMerge("flex flex-col p-4 gap-4", className )}>
    {integrations.map((integration)  => (
        <div key={integration.name} className=" border border-white/10 rounded-3xl p-6  bg-neutral-900 ">
        <div className="flex justify-center items-center">
            <Image className="size-24 " src={integration.icon} alt={integration.name}/>
            </div>
            <h3 className="text-3xl text-center  mt-6 ">{integration.name}</h3>
            <p className="text-center font-medium text-white/50 mt-2 ">{integration.description}</p>
        </div>
    ))}
</div>
  )
}

export default IntegrationColumn