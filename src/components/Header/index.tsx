// libs
import React, { useCallback, useState } from 'react';
import { ActivityIndicator } from 'react-native';

// services

// utils

// hooks
import { useAuth } from '../../hooks/useAuth';
import { usePius } from '../../hooks/usePius';

// images
import LogoImg from '../../assets/images/LogotipoEscuro.png';

// components

// styled-components
import {
    HeaderContainer,
    Logo,
    LogoutButton,
    AuxiliarContainer,
    LogoContainer,
    RefreshContainer,
    RefreshIcon,
    LogoutIcon
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
    const { carregarPius } = usePius();
    const [isPressed, setIsPressed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = useCallback(() => { 
        logout();
     }, [logout])

    const handleRefresh = useCallback(async () => {
        setIsLoading(true);
        await carregarPius();
        setIsLoading(false);
    }, [carregarPius, setIsLoading]);

    return (
        <HeaderContainer >
            <AuxiliarContainer isLogin={isLogin} >
                <LogoutButton
                    onPressIn={() => {setIsPressed(true)}} 
                    onPressOut={() => {setIsPressed(true)}}
                    isPressed={isPressed}
                    onPress={handleLogout}
                >
                    <LogoutIcon name="logout" size={20} color="black" />   
                    {/* <LogoutText>Logout</LogoutText> */}
                </LogoutButton>
            </AuxiliarContainer>
            <LogoContainer>
                <Logo source={LogoImg} resizeMode="contain" />
            </LogoContainer>
            <AuxiliarContainer refreshContainer isLogin={isLogin}>
                <RefreshContainer onPress={handleRefresh} hitSlop={5}>
                    {
                        isLoading 
                        ? <ActivityIndicator color='black' />
                        : <RefreshIcon name="refresh" size={28} color="black" />    
                    }
                </RefreshContainer>
            </AuxiliarContainer>
        </HeaderContainer>
    )
}

export default Header