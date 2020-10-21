import styled, { css } from 'styled-components/native'
import { Pressable } from 'react-native';

interface AuxiliarContainerProps {
    isLogin: boolean;
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
    width: 90px;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    background-color: #6C757D;
    border-radius: 8px;
    padding: 10px;
    margin-left: 10px;
    ${props => props.isPressed && css`
        
    `}
`

export const LogoutText = styled.Text`
`

export const AuxiliarContainer = styled.View<AuxiliarContainerProps>`
    flex: 1;
    ${props => props.isLogin && css`display: none`}
`
