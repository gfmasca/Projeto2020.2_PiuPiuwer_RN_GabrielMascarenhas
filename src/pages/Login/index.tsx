import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LogoImg from '../../../assets/images/LogotipoEscuro.png';

import {
    ImageView,
    Logo,
    LoginView,
    FormView,
    InputBlockContainer,
    InputLabel,
    InputText
} from './styles';

const Login: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }} >
                {/* <DivContainer>
                <div id="form-container">
                    <form onSubmit={ handleLogin }>
                        <fieldset> Entrar no PiuPiuwer</fieldset>

                        <InputBlock onChange={(e) => { setUsername(e.target.value) }} title="PiuName ou Email" id="username" placeholder="Ex: @mandioca123" type="text" login={true}/>

                        <InputBlock onChange={(e) => { setPassword(e.target.value) }} title=" Senha" id="password" type="password" login={true}/>
                        
                        <ButtonContainer>
                            <DefaultLink label="Não tenho uma conta" destiny="/signin" />                        
                            <ButtonDefault type="submit" label="Entrar" loading={loading} />
                        </ButtonContainer>
                    </form>
                    <p>{ errorMessage }</p>
                </div>
                <div id="logo-container">
                    <img src={LogoImg} alt="Logotipo"/>
                </div>
            </DivContainer> */}

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
                        <InputText placeholder="Insira sua senha" />
                    </InputBlockContainer>
                </FormView>
            </LoginView>

        </SafeAreaView>
    )
}
export default Login