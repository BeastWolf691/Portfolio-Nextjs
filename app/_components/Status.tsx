import React from "react";
import { Section } from "./Section";
import { Card } from '@/components/ui/card';
import { Code, LucideIcon, Rss, StickyNote } from "lucide-react"; // Import des icônes
import Link from "next/link";

// Composant principal pour afficher les projets
export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Side, fun projects.</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject
                                key={index}
                                title={project.title}
                                description={project.description}
                                Logo={project.Logo}
                                url={project.url} // Utilisation de l'URL dynamique
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4 hover:bg-accent/50 transition-colors">
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">Work</p>
                </Card>
                <Card className="p-4 flex-1">Contact me</Card>
            </div>
        </Section>
    );
};

// Liste des projets avec les propriétés requises
const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "Portfolio",
        description: "Mise en pratique d'un portfolio avec Next.js et TailwindCSS",
        url: "/" // Ajout de l'URL pour chaque projet
    },
    {
        Logo: StickyNote,
        title: "Notes App",
        description: "Application de prise de notes avec gestion de l'état et persistance des données.",
        url: "/notes" // URL fictive pour cet exemple
    },
    {
        Logo: Rss,
        title: "Blog",
        description: "Création d'un blog simple avec des articles dynamiques.",
        url: "/blog" // URL fictive pour cet exemple
    },
];

// Type des propriétés pour le composant SideProject
type SideProjectProps = {
    title: string;
    description: string;
    Logo: LucideIcon; // Type pour les icônes
    url: string;
};

// Composant pour afficher chaque projet
const SideProject = ({ title, description, Logo, url }: SideProjectProps) => {
    return (
        <Link href={url} className="inline-flex items-center gap-4 rounded hover:bg-accent/50 transition-colors p-1 rounded">
            {/*composant React de l'icône ici */}
            <Logo size={40} className="bg-accent text-accent-foreground p-2 rounded-sm" />
            <div>
                <p className="text-lg font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </Link>
    );
};

const WORKS: WorkProps[] = [/*corresponds aux expériences professionnelles*/
    {
        title: "Portfolio",
        role: "Full-stack developer",
        image: "https://media.ldlc.com/r1600/ld/products/00/05/00/25/LD0005002514_2_0005530215_0005530265.jpg",
        date: "2024 - Present",
        url: "/" // URL fictive pour cet exemple
    }
]


type WorkProps = {
    title: string;
    role: string;
    image: string;
    date: string;
    url: string;
};

// Composant pour afficher chaque projet
const Work = ({ title, role, image, date, url }: WorkProps) => {
    return (
        <Link href={url} className="inline-flex items-center gap-4 rounded hover:bg-accent/50 transition-colors p-1 rounded">
            <img
                src={image}
                alt={title}
                className="w-4 h-4 object-contain" />
            <div>
                <p className="text-lg font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground">{role}</p>
            </div>
            <div className="ml-auto">
                <p className="text-sm text-muted-foreground">{date}</p>
            </div>
        </Link>
    );
};
