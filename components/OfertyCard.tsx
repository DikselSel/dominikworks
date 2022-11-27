import React, { ReactNode, FC } from 'react'

interface Props{
    title: string,
    description: string,
    icon: ReactNode,
}

const OfertyCard:FC<Props> = ({title,description,icon}) => {
  return (
    <main className="Card">
        <div className="CardHeader">
            <h3>{title}</h3>
            {icon}
        </div>
        <p>{description}</p>
    </main>
  )
}

export default OfertyCard