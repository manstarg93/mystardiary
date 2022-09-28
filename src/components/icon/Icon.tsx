import { FC } from "react";
import {SvgIconProps} from '@mui/material'
import { IconsContainer } from "./Icon.styles";
interface IIconProps {
    Icon: React.ReactElement<SvgIconProps>
    onClick?: React.MouseEventHandler<HTMLDivElement> 
}
const Icons:FC<IIconProps> = ({Icon,onClick}) => {
return <IconsContainer onClick={onClick}>{Icon}</IconsContainer>

}

export default Icons