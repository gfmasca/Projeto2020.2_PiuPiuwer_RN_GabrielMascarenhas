// libs
import React from 'react';


// services

// utils

// hooks

// images
import LogoImg from '../../assets/images/LogotipoEscuro.png';

// components

// styled-components
import {
    ImageView,
    Logo
} from './styles'

// INTERFACES
// imports

// new

// COMPONENT
const Header: React.FC = () => {
    return (
        <ImageView >
            <Logo source={LogoImg} resizeMode="contain" />
        </ImageView>
    )
}

export default Header