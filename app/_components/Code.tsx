import { ComponentPropsWithoutRef } from "react"

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
        <span
            className="bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent p-1 text-primary rounded-lg"
            {...props}
        />
    )
}