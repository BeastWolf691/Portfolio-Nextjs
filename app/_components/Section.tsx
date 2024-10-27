import { PropsWithChildren } from "react"

export const Section = (props: PropsWithChildren<{className?:string}>) => {
    return <section className={`max-w-4xl px-4 mx-auto ${props.className}`}>{props.children}</section>

}