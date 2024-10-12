import { Section } from "./Section"
import { Card } from 'react-bootstrap';


export const Status = () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
            <Card className="flex-[2] flex flex-col gap-2">Side Project</Card>
            <div className="flex-1">
                <Card>Work</Card>
                <Card>Contact me</Card>
            </div>
        </Section>
    )
}