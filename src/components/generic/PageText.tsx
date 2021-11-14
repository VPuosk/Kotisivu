import React from 'react'

interface Props{
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export const PageText = ({className, style, children} : Props) => {
    const newStyle = {...style, color: 'var(--color-foreground)'}
    return (
       <span style={newStyle} className={className}>{children}</span>
    )
}