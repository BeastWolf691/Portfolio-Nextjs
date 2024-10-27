import React from "react";
import { Section } from "./Section";
import { Card } from '@/components/ui/card';
import { SIDE_PROJECTS, SideProject } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { Work, WORKS } from "./Work";

// Composant principal pour afficher les projets
export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Side, fun projects.</p>
                    <div className="flex flex-col gap-5">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject
                                key={index}
                                {...project} // Utilisation de l'URL dynamique
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Work</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work
                                key={index}
                                {...work}  // Utilisation de l'URL dynamique
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Contact me</p>
                    <ContactCard
                        name="Steven"
                        url="mailto:sriver@hotmail.fr"
                        image="https://media.licdn.com/dms/image/v2/C4D03AQEgklXiswua9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1550703101490?e=1733961600&v=beta&t=51bf_8G5iaN8wqOIjpr7ZeZoqWotJiZ_nfvbZbXeCI8"
                        mediumImage="https://i.pinimg.com/originals/1f/27/c8/1f27c8039293dce7b8a4c732ce744e13.jpg"
                        description="Send me an email for any inquieries" />
                    <ContactCard
                        name="Steven Rivière"
                        url="https://www.linkedin.com/in/stevenriviere/"
                        image="https://media.licdn.com/dms/image/v2/C4D03AQEgklXiswua9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1550703101490?e=1733961600&v=beta&t=51bf_8G5iaN8wqOIjpr7ZeZoqWotJiZ_nfvbZbXeCI8"
                        mediumImage="https://img.freepik.com/vecteurs-premium/linkedin-logo_578229-227.jpg"
                        description="Visit my profile on LinkedIn" />
                </Card>
            </div>
        </Section>
    );
};
