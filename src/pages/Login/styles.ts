import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const ImageView = styled.View`
    align-items: center;
    justify-content: center;
    height: 8%;
    width: 100%;
    overflow: hidden;
    background: #ADB5BD;
`

export const Logo = styled.Image`
    width: 10%;

`

export const LoginView = styled.View`
    height: 94%;
    width: 100%;
    background: #495057;
    align-items: center;
    justify-content: center;
    
`

export const FormView = styled.View`
    border-radius: 16px;
    width: 280px;
    height: 350px;
    padding: 40px;
    background-color: #212529;
    align-items: flex-start;
    justify-content: space-between;
`

export const InputBlockContainer = styled.View`
    width: 100%;
`

export const InputLabel = styled.Text`
    color: #F8F9FA;
    font-size: 17px;
    letter-spacing: 2px;
    margin: 0 0 10px 0;
`

export const InputText = styled.TextInput`
    height: 30px;
    width: 100%;
    color: #F8F9FA;
    border-style: solid;
    border-color: black;
    border-bottom-width: 2px;
`

export const SubmitButton = styled(RectButton)`
    height: 40px;
    width: 100px;
    justify-content: center;
    align-items: center; 
    background-color: #495057;
    border-radius: 10px;
    padding: 10px;
`

export const SubmitText = styled.Text`
    color: #E9ECEF;
    font-size: 15px;
`