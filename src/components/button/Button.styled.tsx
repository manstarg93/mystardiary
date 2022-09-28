import styled from 'styled-components'
import { variables } from '../../styles/variables'


interface IColorStyles {
    color: string
}

let colorVariables



export const ButtonStyle = styled.button<IColorStyles>`
    cursor: pointer;
border: none;
border-radius: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 10px;
    width: 100%;

`