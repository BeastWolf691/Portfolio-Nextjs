export type SpacingProps = {
    size?: number
}

export const Spacing = (props: SpacingProps) => {

    return (
        <div style={{ height: props.size }} />
    )
}