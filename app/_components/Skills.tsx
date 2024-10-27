import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactLogo } from "./icons/ReactLogo";
import { Code } from "./Code";
import { TailwindLogo } from "./icons/TailwindLogo";
import { PhpLogo } from "./icons/PhpLogo";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I love working on...
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <ReactLogo size={32}
                        className="animate-spin"
                        style={{ animationDuration: "5s" }} />
                    <h3 className="text-2xl font-semibold tracking-tight">React</h3>
                    <p className="text-sm text-muted-foreground">
                        My main framework is <Code>React</Code>. I also work with <Code>Next.js</Code>{" "}
                        to manage both backend and frontend functionalities.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <PhpLogo size={32} />
                    <h3 className="text-2xl font-semibold tracking-tight">PHP</h3>
                    <p className="text-sm text-muted-foreground">
                        For backend development, I primarily use <Code>PHP</Code> to handle server-side logic and
                        database interactions, providing a solid foundation for dynamic web applications.
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <TailwindLogo size={32} />
                    <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
                    <p className="text-sm text-muted-foreground">
                        For styling, I rely on <Code>Tailwind CSS</Code>, which simplifies custom design
                        within <Code>React</Code> and <Code>Next.js</Code> projects.
                    </p>
                </div>
            </div>
        </Section>
    );
};