import React, { FC,   } from 'react'
import { ModalBackDrop, ModalContainer } from './Modal.styles'
import {createPortal} from 'react-dom'
interface IModalProps {
    children: React.ReactNode,
    show: boolean,
    close: React.MouseEventHandler<HTMLDivElement>
}

const Modal:FC<IModalProps> = ({children,show,close}) => {

    return( createPortal( <>
        <ModalContainer show={show}>
            {children}
        </ModalContainer>
        <ModalBackDrop onClick={close} show={show}/>
        </>,document.getElementById('modal') as HTMLElement)
   )

 
}

export default Modal