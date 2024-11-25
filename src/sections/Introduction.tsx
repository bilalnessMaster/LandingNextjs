import Tag from "@/components/Tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return (
        <section className="py-28 lg:py-40">    
          <div className="container 0 ">
       
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
                 <span className="text-white/15">
                    {text}
                </span>{" "}
                <span className="text-lime-400">
                    That's why we built Layers.
                </span>
            </p>
           </div>
            </div>
        
        </section>

    )
}