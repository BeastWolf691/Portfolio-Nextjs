import React from "react";
import { Section } from "./Section";
import { Card } from '@/components/ui/card';
import { ArrowUpRight, Beer, Code, Hotel, LucideIcon, Swords, WalletCards } from "lucide-react"; // Import des icônes
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
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Work</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((project, index) => (
                            <Work
                                key={index}
                                title={project.title}
                                role={project.role}
                                image={project.image}
                                date={project.date}
                                url={project.url} // Utilisation de l'URL dynamique
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Contact me</p>
                    <ContactCard name="@Steven" image="https://media.licdn.com/dms/image/v2/C4D03AQEgklXiswua9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1550703101490?e=1733961600&v=beta&t=51bf_8G5iaN8wqOIjpr7ZeZoqWotJiZ_nfvbZbXeCI8" mediumImage="https://i.pinimg.com/originals/1f/27/c8/1f27c8039293dce7b8a4c732ce744e13.jpg" description="I&apos;m a Full Stack Developer"/>
                    <ContactCard name="Steven Rivière" image="https://media.licdn.com/dms/image/v2/C4D03AQEgklXiswua9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1550703101490?e=1733961600&v=beta&t=51bf_8G5iaN8wqOIjpr7ZeZoqWotJiZ_nfvbZbXeCI8" mediumImage="https://img.freepik.com/vecteurs-premium/linkedin-logo_578229-227.jpg" description="I&apos;m a Full Stack Developer"/>
                </Card>
            </div>
        </Section>
    );
};

const ContactCard = (props: { 
    image: string; 
    mediumImage: string, 
    name: string, 
    description: string 
}) => {
    return (
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
            <div className="relative">
                <img
                    src={props.image}
                    alt={props.name}
                    className="w-10 h-10 rounded-full object-contain" />
                <img
                    src={props.mediumImage}
                    alt={props.name}
                    className="w-5 h-5 absolute -bottom-1 -right-1 rounded-full object-contain" />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.name}</p>
                </div>

                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
        </Card>
    );
}

// Liste des projets avec les propriétés requises
const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "Portfolio",
        description: "Portfolio avec Next.js et TailwindCSS.",
        url: "https://github.com/BeastWolf691/Portfolio-Nextjs.git"
    },
    {
        Logo: Swords,
        title: "StarWars",
        description: "Application mobile d'affiche cinéma avec Kotlin",
        url: "https://github.com/BeastWolf691/ProjectAppStarWars.git" // URL fictive pour cet exemple
    },
    {
        Logo: WalletCards,
        title: "CardDeck",
        description: "Application de cartes streameurs avec PHP.",
        url: "https://github.com/BeastWolf691/Projet-Streamers"
    },
    {
        Logo: Hotel,
        title: "Hotel",
        description: "Application vitrine d'un hôtel en PHP avec une base de données MySQL.",
        url: "https://github.com/BeastWolf691/ProtoHotel.git"
    },
    {
        Logo: Beer,
        title: "CardDeck",
        description: "Application de gestion de bars et commandes avec Node et React.",
        url: "https://github.com/BeastWolf691/TP-React-Node-AppBars.git"
    }
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
        <Link href={url} target="_blank" className="inline-flex items-center gap-4 rounded hover:bg-accent/50 transition-colors p-1 rounded">
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
        title: "Stage",
        role: "Backend developer",
        image: "https://media.licdn.com/dms/image/v2/D4D0BAQFgGxwDufob4w/company-logo_100_100/company-logo_100_100/0/1720802371819/ubya_logo?e=1738195200&v=beta&t=6O7I_puSg2270U4XPxR5Rp1Jxfyt0-7i5BsEi8PUghA",
        date: "2024 - Present",
        url: "https://ubya.ai/"
    },
    {
        title: "Bénévole",
        role: "Backend developer C#",
        image: "https://avatars.githubusercontent.com/u/155840840?s=200&v=4",
        date: "2024 - Present",
        url: "https://github.com/Le-Village-ECO/Mods.git"
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
        <Link href={url} target="_blank" className="inline-flex items-center gap-4 rounded hover:bg-accent/50 transition-colors p-1 rounded">
            <img
                src={image}
                alt={title}
                className="w-12 h-12 rounded object-contain" />
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{title}</p>
                </div>

                <p className="text-xs text-muted-foreground">{role}</p>
            </div>
            <p className="text-xs text-muted-foreground">{date}</p>

        </Link>
    );
};
