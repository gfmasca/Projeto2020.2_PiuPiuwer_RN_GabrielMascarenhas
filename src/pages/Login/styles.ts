import styled from "styled-components/native";

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
    height: 92%;
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

    &::placeholder {
        color: #F8F9FA;
    }

`