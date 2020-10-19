// libs
import React from 'react';


// services

// utils

// hooks

// images
import likeImg from '../../assets/images/like.png';
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
    return (
        // <PiuContainer piuVisibility={ piuVisibility } >
        //     <ProfilePictureContainer>
        //         <img src={ usuario.foto } alt="foto de perfil" />
        //         <div>
        //             <UsernameTimeContainer>
        //                 <h3 className="username">{ usuario.username }</h3>
        //                 <p>{ relativeTime }</p>
        //             </UsernameTimeContainer>
        //             <p>{ texto }</p>
        //         </div>
        //     </ProfilePictureContainer>
        //     <Actions>
        //         <span onClick={ handleLike } ><p>{ likers.length }</p>
        //         {/* if liked src = x else scr = y */}
        //             <img src={ isLiked ? FilledLikeButton : LikeButton } alt="botão de like" />
        //         </span>
        //     </Actions>
            
        //     <DeleteButtonSpan onClick={ handleDelete } yourPiu={ usuario.id === user.id }>
        //         <img src={DeleteButton} alt="botão para salvar o piu" />
        //     </DeleteButtonSpan>
        // </PiuContainer>

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
                <LikeImg source={likeImg} resizeMode="contain" />
            </LikeButton>

            <DeleteButton>
                <DeleteImg source={deleteImg} resizeMode="contain" />
            </DeleteButton>
        </PiuContainer>
    )
}

export default Piu