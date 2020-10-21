// libs
import React, { useCallback } from 'react';
import { Pressable } from 'react-native';

// services

// utils

// hooks
import { useAuth } from '../../hooks/useAuth';
import { usePius } from '../../hooks/usePius';

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
    DeleteImg,
    DeletePressable
} from './styles'

// INTERFACES
// imports
import InfoPiu from '../../interfaces/InfoPiu';

// new

interface PiuProps extends InfoPiu {
    isLiked: boolean;
}

// COMPONENT
const Piu: React.FC<PiuProps> = ({ id, likers, texto, usuario, isLiked }) => {
    const { user } = useAuth();
    const { likePiu, deletePiu } = usePius()

    const handleLike = useCallback(() => {
        likePiu(isLiked, id);
        // console.log('coe')
    }, [likePiu, isLiked, id]);

    const handleDelete = useCallback(() => {
        deletePiu(id);
    }, [deletePiu, id]);

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
                <Pressable hitSlop={17} onPress={handleLike} >
                    <LikeImg source={ isLiked ? likedImg : likeImg} resizeMode="contain" />
                </Pressable>
            </LikeButton>

            <DeleteButton yourPiu={user.id === usuario.id} >
                <DeletePressable hitSlop={10} onPress={handleDelete}>
                    <DeleteImg source={deleteImg} resizeMode="contain" />
                </DeletePressable>
            </DeleteButton>
        </PiuContainer>
    )
}

export default Piu