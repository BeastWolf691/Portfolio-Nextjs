import React from "react";
import { Section } from "./Section"
import { Card } from '@/components/ui/card';
import { Code, LucideIcon, Rss, StickyNote } from "lucide-react";
import Link from "next/link";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2 w-full">
                    <p className="text-lg text-muted-foreground">Side, fun projects.</p>
                <div className="flex flex-col gap-4">
                    {SIDE_PROJECTS.map((project, index) => (
                        <SideProject
                            key={index}
                            title={project.title}
                            description={project.description}
                            Logo={project.Logo}
                            url="/"
                        />
                    ))}
                </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4 hover:bg-accent/50 transition-colors">
                <Card className="p-4 flex-1">Work</Card>
                <Card className="p-4 flex-1">Contact me</Card>
            </div>
        </Section>
    );
};

const SIDE_PROJECTS = [
{
    Logo: Code,
    title: "Portfolio",
    description: "mise en pratique d'un portfolio avec Nextjs et TailwindCSS en autodidacte"
},
{
    Logo: StickyNote,
    title: "Portfolio",
    description: "mise en pratique d'un portfolio avec Nextjs et TailwindCSS en autodidacte"
},
{
    Logo: Rss,
    title: "Portfolio",
    description: "mise en pratique d'un portfolio avec Nextjs et TailwindCSS en autodidacte"
},
    ]


type SideProjectProps = {
    title: string;
    description: string;
    Logo: LucideIcon;
    url: string;
};

const SideProject = (props: SideProjectProps) => {
    const { title, description, Logo, url } = props;

    return (
        <Link href={url} className="inline-flex items-center gap-4 rounded">
            <Logo size={16} className="bg-accent text-accent-foreground p-3 rounded-sm" />
            <div>
                <p className="text-lg font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </Link>
    );
};
