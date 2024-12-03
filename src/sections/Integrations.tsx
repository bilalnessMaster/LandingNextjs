import Tag from "@/components/Tag";

import figmaIcom from '@/assets/images/figma-logo.svg'
import notionIcom from '@/assets/images/notion-logo.svg'
import slackIcom from '@/assets/images/slack-logo.svg'
import relumeIcom from '@/assets/images/relume-logo.svg'
import framerIcom from '@/assets/images/framer-logo.svg'
import githubIcom from '@/assets/images/github-logo.svg'

import IntegrationColumn from "@/components/Intergrantion";
const integrations = [
    { name: "Figma", icon: figmaIcom, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: notionIcom, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slackIcom, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: relumeIcom, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: framerIcom, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: githubIcom, description: "GitHub is the leading platform for code collaboration." },
];

export type IntegrantionType = typeof integrations;
export default function Integrations() {
    return <section className="py-24 overflow-hidden">
                <div className="container">
                    <div className="grid lg:grid-cols-2 items-center lg:gap-16">

                  <div className="">
                  <Tag>
                        Integrations
                    </Tag>
                    <h2 className="text-6xl mt-5 font-medium ">
                        Plays well with{" "} <span className="text-lime-400">others</span>
                    </h2>
                    <p className="mt-4 text-lg text-white/50">
                        Layers seamlessly connects with your favorite tools, making it easy to plug into any workflow and collaborate across platforms.
                    </p>
                  </div>
                    <div>
                    <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,_transparent,_black_50%,_black_90%,_transparent)] grid md:grid-cols-2">
                    <IntegrationColumn  integrations={integrations}/>
                    <IntegrationColumn reverse={true} integrations={integrations.slice().reverse()} className="hidden md:flex"/>
                    </div>
                    </div>
                    </div>
                </div>


    </section>;
}
