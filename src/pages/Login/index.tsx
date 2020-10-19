import React, { useCallback, useState } from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import LogoImg from '../../../assets/images/LogotipoEscuro.png';
import Header from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";

import {
    LoginView,
    FormView,
    InputBlockContainer,
    InputLabel,
    InputText,
    SubmitButton,
    SubmitText
} from './styles';

const Login: React.FC = () => {
    const { login } = useAuth();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = useCallback(() => {
        login({ username, password });
    }, [login, username, password])

    return (
        <SafeAreaView style={{ flex: 1 }} >
            {/* <ImageView>
                <Logo source={LogoImg} resizeMode="contain" />
            </ImageView> */}

            <Header />

            <LoginView> 
                <FormView>
                    <InputBlockContainer>
                        <InputLabel>PiuName</InputLabel>   
                        <InputText 
                            placeholder="Insira o nome de usuário"
                            placeholderTextColor="#ccc"
                            value={username}
                            onChangeText={ text => setUsername(text) }
                        />
                    </InputBlockContainer>
                    
                    <InputBlockContainer>
                        <InputLabel>Senha</InputLabel>   
                        <InputText 
                            secureTextEntry
                            placeholder="Insira sua senha" 
                            placeholderTextColor="#ccc"
                            value={password}
                            onChangeText={ text => setPassword(text) }
                        />
                    </InputBlockContainer>

                    <SubmitButton onPress={ handleLogin } ><SubmitText>Entrar</SubmitText></SubmitButton>
                </FormView>
            </LoginView>

        </SafeAreaView>
    )
}
export default Login