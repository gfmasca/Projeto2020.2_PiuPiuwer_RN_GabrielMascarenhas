// libs
import React, { useCallback, useState } from 'react';


// services

// utils

// hooks
import { useAuth } from '../../hooks/useAuth';

// images
import LogoImg from '../../assets/images/LogotipoEscuro.png';

// components

// styled-components
import {
    HeaderContainer,
    Logo,
    LogoutButton,
    LogoutText,
    AuxiliarContainer,
    LogoContainer
} from './styles'

// INTERFACES
// imports

// new
interface HeaderProps {
    isLogin?: boolean
}

// COMPONENT
const Header: React.FC<HeaderProps> = ({ isLogin=false }) => {
    const { logout } = useAuth();
    const [isPressed, setIsPressed] = useState(false);

    const handleLogout = useCallback(() => { 
        logout();
     }, [logout])

    return (
        <HeaderContainer >
            <AuxiliarContainer isLogin={isLogin} >
                <LogoutButton
                    onPressIn={() => {setIsPressed(true)}} 
                    onPressOut={() => {setIsPressed(true)}}
                    isPressed={isPressed}
                    onPress={handleLogout}
                >
                    <LogoutText>Logout</LogoutText>
                </LogoutButton>
            </AuxiliarContainer>
            <LogoContainer>
                <Logo source={LogoImg} resizeMode="contain" />
            </LogoContainer>
            <AuxiliarContainer  isLogin={isLogin} />
        </HeaderContainer>
    )
}

export default Header