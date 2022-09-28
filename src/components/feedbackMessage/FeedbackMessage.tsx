import React, { FC, useEffect } from 'react'
import { FeedBackMessageContainer, FeedBackMessageText } from './FeedBackMessage.styles'

interface IFeedBackMessagProps {
    message: string,
    success: boolean 
}

const FeedbackMessage:FC<IFeedBackMessagProps> = ({message, success}) => {

   
    return (
        <FeedBackMessageContainer success={success} message={message}>
            <FeedBackMessageText>{message}</FeedBackMessageText>
        </FeedBackMessageContainer>
       ) 
}

export default FeedbackMessage