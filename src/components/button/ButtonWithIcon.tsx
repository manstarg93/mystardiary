import { FC, ReactNode } from "react";
import { ButtonText, ButtonWithIconContainer } from "./ButtonWithIcon.styles";
import Add from '@mui/icons-material/Add'
import { SvgIconProps,SvgIconTypeMap, } from "@mui/material";

interface IButtonWithIconProps{
children: React.ReactNode,
Icon?: React.ReactElement<SvgIconProps>,
onClick?: React.MouseEventHandler<HTMLDivElement>,
color?: string
type?: "button" | "submit" | "reset" | undefined
}

export const ButtonWithIcon:FC<IButtonWithIconProps> = ({children,Icon,onClick,type,color}) => {
    
return (
   
   <ButtonWithIconContainer color={color} onClick={onClick}  >
   {Icon}
    <ButtonText color={color} type={type}>{children}</ButtonText>
   </ButtonWithIconContainer>
)
}