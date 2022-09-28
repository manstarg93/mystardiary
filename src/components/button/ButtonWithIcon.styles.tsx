

import styled from 'styled-components'
import { variables } from '../../styles/variables'

interface ButtonPropsStyle {
    color?: string
}

export const ButtonWithIconContainer = styled.div<ButtonPropsStyle>`

cursor: pointer;
border: none;
border-radius: 5px;
color: ${ props => props.color === 'blue' ? variables.lightBlue : variables.white};
background-color: ${ props => props.color === 'blue' ? variables.white : variables.lightBlue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 7px;
cursor: pointer;
    transition: all ease-in-out .3s;

    &:hover{
        color: ${ props => props.color === 'blue' && variables.blue};
        background-color: ${ props => props.color === 'blue' ? variables.white : variables.blue};
    }
`

export const ButtonText = styled.button<ButtonPropsStyle>`
   
    border: none;
    padding: inherit;
    outline: none;
    background-color: inherit;
   cursor: pointer;
    color: ${ props => props.color === 'blue' ? variables.lightBlue : variables.white};
    font-weight: ${ props => props.color === 'blue' ?  'bold': 'normal'}; ;
`

