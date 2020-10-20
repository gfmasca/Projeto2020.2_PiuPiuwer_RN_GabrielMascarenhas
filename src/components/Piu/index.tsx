// libs
import React from 'react';


// services

// utils

// hooks
import { useAuth } from '../../hooks/useAuth';

// images
import likedImg from '../../assets/images/like.png';
import likeImg from '../../assets/images/notLiked.png';
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

interface PiuProps extends InfoPiu {
    isLiked: boolean;
}

// COMPONENT
const Piu: React.FC<PiuProps> = ({ likers, texto, usuario, isLiked }) => {
    const { user } = useAuth();

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
                <LikeImg source={ isLiked ? likedImg : likeImg} resizeMode="contain" />
            </LikeButton>

            <DeleteButton yourPiu={user.id === usuario.id} >
                <DeleteImg source={deleteImg} resizeMode="contain" />
            </DeleteButton>
        </PiuContainer>
    )
}

export default Piu