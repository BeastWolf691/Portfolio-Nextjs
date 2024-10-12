import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"
import Link from "next/link"

const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
    return <span className="bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent p-1 text-primary rounded-lg" {...props} />
}

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
            <div className="flex-[2] flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary">Steven RIVIERE</h2>
                <h3 className="text-3xl font-caption">I&apos;m a Full Stack Developer</h3>
                <p className="text-base">
                    I love creating projects on <Code>Next.js</Code> and <Code>TailwindCSS</Code> to make my life easier. I&apos;m always looking for new challenges and I&apos;m always looking for new ways to improve my skills.
                    Melvynx's Youtube channel is a great help for self-training <Code className="inline">https://www.youtube.com/@melvynxdev</Code>, currently at <Link href="https://www.m2iformation.fr/"  target="_blank" className="inline"> 
                    <Code>M2I</Code></Link>.
                    </p>
            </div>
            <div className="flex-1 max-md:m-auto ml-auto">
                <img src="https://media.licdn.com/dms/image/v2/C4D03AQEgklXiswua9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1550703101490?e=1733961600&v=beta&t=51bf_8G5iaN8wqOIjpr7ZeZoqWotJiZ_nfvbZbXeCI8" 
                className="w-full h-auto max-w-sm max-md:w-60" 
                alt="Steven's picture" />
            </div>
        </Section>
    )
}