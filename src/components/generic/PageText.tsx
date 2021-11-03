import React from 'react'

interface Props{
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export const PageText = ({className, style, children} : Props) => {
    return (
       <span style={style} className={className}>{children}</span>
    )
}