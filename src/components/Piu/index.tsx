// libs
import React from 'react';


// services

// utils

// hooks
import { useAuth } from '../../hooks/useAuth';

// images
import liked from '../../assets/images/like.png';
import deleteImg from '../../assets/images/x-mark.png';

// components

// styled-components
import {
    PiuContainer,
    PiuMainContentContainer,
    UserImg,
    PiuTextContainer,
    Username,
    PiuText,
    LikeButton,
    Likes,
    LikeImg,
    DeleteButton,
    DeleteImg
} from './styles'

// INTERFACES
// imports
import InfoPiu from '../../interfaces/InfoPiu';

// new


// COMPONENT
const Piu: React.FC<InfoPiu> = ({ likers, texto, usuario }) => {
    const { user } = useAuth()
    return (
        <PiuContainer>
            <PiuMainContentContainer>
                <UserImg source={{uri: usuario.foto}} />
                <PiuTextContainer>
                    <Username>{ usuario.username }</Username>
                    <PiuText>{ texto }</PiuText>
                </PiuTextContainer>
            </PiuMainContentContainer>

            <LikeButton>
                <Likes>{ likers.length }</Likes>
                <LikeImg source={liked} resizeMode="contain" />
            </LikeButton>

            <DeleteButton yourPiu={user.id === usuario.id} >
                <DeleteImg source={deleteImg} resizeMode="contain" />
            </DeleteButton>
        </PiuContainer>
    )
}

export default Piu