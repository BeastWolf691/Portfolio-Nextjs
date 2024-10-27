import { Badge } from "@/components/ui/badge";
import { Section } from "./Section"
import { ContactCard } from "./ContactCard";

export const Contact = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Contact me</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I will be happy to work with you.
            </h2>
            <div className="flex max-md:flex-col w-full gap-4">
                <ContactCard
                    name="Steven"
                    url="mailto:sriver@hotmail.fr"
                    image="https://media.licdn.com/dms/image/v2/C4D03AQEgklXiswua9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1550703101490?e=1733961600&v=beta&t=51bf_8G5iaN8wqOIjpr7ZeZoqWotJiZ_nfvbZbXeCI8"
                    mediumImage="https://i.pinimg.com/originals/1f/27/c8/1f27c8039293dce7b8a4c732ce744e13.jpg"
                    description="Send me an email for any inquieries" />
                <ContactCard
                    name="Steven Rivière"
                    url="www.linkedin.com/in/stevenriviere"
                    image="https://media.licdn.com/dms/image/v2/C4D03AQEgklXiswua9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1550703101490?e=1733961600&v=beta&t=51bf_8G5iaN8wqOIjpr7ZeZoqWotJiZ_nfvbZbXeCI8"
                    mediumImage="https://img.freepik.com/vecteurs-premium/linkedin-logo_578229-227.jpg"
                    description="Visit my profile on LinkedIn" />
            </div>
        </Section>
    );
};