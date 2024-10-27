import { Section } from "./Section";

export const Footer = () => {
    return (
        <footer className="bg-card">
            <Section className="py-8 bg-primary-100 text-primary-900">
                <p className="text-muted-foreground text-center text-sm">
                    © 2024 Steven Riviere. All rights reserved.
                </p>
            </Section>
        </footer>

    );
};