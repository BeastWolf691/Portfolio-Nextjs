import React from "react";
import {Beer, Code, Hotel, LucideIcon, Swords, WalletCards } from "lucide-react"; // Import des icônes
import Link from "next/link";

// Liste des projets avec les propriétés requises
export const SIDE_PROJECTS: SideProjectProps[] = [
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
        title: "Bar'Aton",
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
export const SideProject = ({ title, description, Logo, url }: SideProjectProps) => {
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

