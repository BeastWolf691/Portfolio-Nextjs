import Link from "next/link";

export const WORKS: WorkProps[] = [/*corresponds aux expériences professionnelles*/
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
export const Work = ({ title, role, image, date, url }: WorkProps) => {
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