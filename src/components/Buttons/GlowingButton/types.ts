import React from "react";

export type GlowingButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>
    title: string | JSX.Element
    color: string
}