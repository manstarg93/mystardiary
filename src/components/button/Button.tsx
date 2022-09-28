import React, { FC } from 'react'
import { ButtonStyle } from './Button.styled'


interface ButtonProps{

    children: React.ReactNode,
    color: string
}
const Button:FC<ButtonProps> = ({children, color}) => {
    
    return(
        <ButtonStyle color={color}>
            {children}
        </ButtonStyle>
    )
}

export default Button