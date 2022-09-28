import { FC } from "react";

import { InputContainer, InputLabel, InputText, TextAreaText } from "./InputComponent.styles";


interface IInputprops {
label?: string,
name?: string,
type?: string,
value?: string,
onChange?: React.ChangeEventHandler<HTMLInputElement>,
placeholder?: string,
required: boolean | undefined
}

interface ITextAreaProps extends IInputprops {
rows: number,
cols: number,
changed: React.ChangeEventHandler<HTMLTextAreaElement>
}

export const Input:FC<IInputprops> = ({label,name,type,value,onChange,required}) => {

    return( <InputContainer>
        <InputLabel htmlFor={name}>{label}  </InputLabel>
        <InputText required={required} type={type} value={value} name={name} onChange={onChange}/>
    </InputContainer>)
}

export const TextArea:FC<ITextAreaProps> = ({label,name,rows,cols,value,changed,required}) => {
    return(
        <InputContainer>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <TextAreaText required={required} rows={rows} cols={cols} value={value} name={name} onChange={changed}/>
        </InputContainer>
    )
}