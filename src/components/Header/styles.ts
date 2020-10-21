import styled, { css } from 'styled-components/native'
import { Pressable } from 'react-native';
import { EvilIcons, SimpleLineIcons } from '@expo/vector-icons'; 

interface AuxiliarContainerProps {
    isLogin: boolean;
    refreshContainer?: boolean;
}

interface LogoutButtonProps {
    isPressed: boolean;
}

export const HeaderContainer = styled.View`
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    height: 6%;
    width: 100%;
    overflow: hidden;
    background: #ADB5BD;
`

export const Logo = styled.Image`
    width: 25px;
`

export const LogoContainer = styled.View`
    /* flex: 1; */
    /* background-color: red; */
`

export const LogoutButton = styled(Pressable)<LogoutButtonProps>`
    /* flex: 1; */
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    background-color: #6C757D;
    border-radius: 20px;
    padding: 10px;
    margin-left: 10px;
    ${props => props.isPressed && css`
        
    `}
`

export const LogoutIcon = styled(SimpleLineIcons)`
`

export const AuxiliarContainer = styled.View<AuxiliarContainerProps>`
    flex: 1;
    ${props => props.isLogin && css`display: none`}
    ${props => props.refreshContainer && css`
        align-items: flex-end;
        padding-right: 20px;
    `}

`

export const RefreshContainer = styled(Pressable)`
    background-color: #6C757D;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
`

export const RefreshIcon = styled(EvilIcons)`
    
`