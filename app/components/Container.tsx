import React from 'react'

type ContainerProps = {
  className?:string
  children:React.ReactNode
  style?:React.CSSProperties
}

const Container = ({children,className,style}:ContainerProps) => {
  return (
    <div className={className} style={style}>
        {children}
    </div>
  )
}

export default Container