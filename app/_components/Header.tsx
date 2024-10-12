import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import {Button} from "../_components/button";
import Link from "next/link";
import { LinkedInIcon } from "./icons/LinkedInIcon";


export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-xl font-bold text-primary">StevenR.com</h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link className="size-6 p-0" target="_blank" href="https://github.com/BeastWolf691">
                        <GithubIcon size={24} className="text-foreground"/>
                    </Link>
                    <Link className="size-6 p-0" target="_blank" href="https://www.linkedin.com/in/stevenriviere/">
                        <LinkedInIcon size={24} className="text-foreground"/>
                    </Link>

                </ul>
            </Section>
        </header>
    )
}