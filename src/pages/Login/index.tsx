import React, { useState } from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import LogoImg from '../../../assets/images/LogotipoEscuro.png';

import {
    ImageView,
    Logo,
    LoginView,
    FormView,
    InputBlockContainer,
    InputLabel,
    InputText,
    SubmitButton,
    SubmitText
} from './styles';

const Login: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <ImageView>
                <Logo source={LogoImg} resizeMode="contain" />
            </ImageView>

            <LoginView> 
                <FormView>
                    <InputBlockContainer>
                        <InputLabel>PiuName</InputLabel>   
                        <InputText placeholder="Insira o nome de usuário" placeholderTextColor="#ccc" />
                    </InputBlockContainer>
                    
                    <InputBlockContainer>
                        <InputLabel>Senha</InputLabel>   
                        <InputText placeholder="Insira sua senha" placeholderTextColor="#ccc"/>
                    </InputBlockContainer>

                    <SubmitButton><SubmitText>Entrar</SubmitText></SubmitButton>
                </FormView>
            </LoginView>

        </SafeAreaView>
    )
}
export default Login