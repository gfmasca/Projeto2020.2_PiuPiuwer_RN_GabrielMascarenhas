import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const ContentContainer = styled.View`
    height: 94%;
    width: 100%;
`

export const NewPiuContainer = styled.View`
    height: 10%;
    width: 100%;
    background-color: #212529;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 20px 20px 20px;
    align-items: center;
`

export const NewPiuText = styled.Text`
    color: #F8F9FA;
    font-size: 16px;
    letter-spacing: 1.5px;
`

export const NewPiuButton = styled(RectButton)`
    border-radius: 30px;
    width: 60px;
    height: 60px;
    background-color: #E9ECEF;
    align-items: center;
    justify-content: center;
`

export const NewPiuImage = styled.Image`
`

export const PiusContainer = styled.View`
    height: 90%;
    width: 100%;
    background-color: #343A40;
`