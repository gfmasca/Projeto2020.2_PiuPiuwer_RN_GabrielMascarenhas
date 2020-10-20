import styled from 'styled-components/native'
import { RectButton } from "react-native-gesture-handler";

export const ContentContainer = styled.View`
    background-color: #343A40;
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`

export const DeleteButton = styled.Image`
    width: 20px;
    height: 20px;
    position: absolute;
    left: 10px;
    top: 10px;
`

export const StyledModal = styled.Modal`
`

export const NewPiuLabel = styled.Text`
    font-size: 20px;
    color: #f8f8f8;    
    margin-top: 100px;
`

export const InputNewPiu = styled.TextInput`
    background-color: #6C757D;
    width: 350px;
    height: 100px;
    border-radius: 30px;
    margin: 50px 0 0 0;
    align-items: flex-start;
    justify-content: flex-start;
    /* vertical-align: top; */
    padding: 10px;

`

export const LetterCounter = styled.Text`
    color: #ADB5BD;
    margin-top: 10px;
    margin-bottom: 30px;
`

export const SubmitNewPiu = styled.Button`
    width: 500px;
    height: 50px;
    background-color: #CED4DA;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`

export const SubmitNewPiuText = styled.Text`
`

export const ButtonContainer = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    position: absolute;
    left: 10px;
    top: 10px;
`