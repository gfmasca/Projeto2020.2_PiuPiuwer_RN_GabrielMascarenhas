import React, { useCallback, useState } from "react";
import { ActivityIndicator } from "react-native";
// import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from 'yup';


import LogoImg from '../../../assets/images/LogotipoEscuro.png';
import Header from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";
import getValidationErrors from "../../utils/getValidationErrors";

import {
    LoginView,
    FormView,
    InputBlockContainer,
    InputLabel,
    InputText,
    SubmitButton,
    SubmitText,
    ErrorMessage
} from './styles';

const Login: React.FC = () => {
    const { login } = useAuth();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<Array<string>>([]);
    // const [usernameError, setUsernameError] = useState('');
    // const [passwordError, setPasswordError] = useState('');
    const [isLoading, setSetIsLoading] = useState(false);

    const handleLogin = useCallback(async () => {
        try {
            setSetIsLoading(true);
            const schema = Yup.object().shape({
                username: Yup.string().required('PiuName obrigatório'),
                password: Yup.string().required('Senha obrigatória')
            });

            // const dateToApi = {
            //     username: username,
            //     password: password
            // }

            await schema.validate({ username, password }, { abortEarly: false });
            // await schema.validate(dateToApi, { abortEarly: false });
            

            await login({ username, password });
            // await login(dateToApi);

            setSetIsLoading(false)
        }
        catch (err) {
            setSetIsLoading(false)
            if (err instanceof Yup.ValidationError) {
                const yupErrors = getValidationErrors(err);
                setErrors([yupErrors.username, yupErrors.password])
            }
        }
    }, [login, username, password, setSetIsLoading, getValidationErrors, setErrors])

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <Header isLogin />

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

                    <SubmitButton onPress={ handleLogin } >
                        {isLoading 
                            ? <ActivityIndicator color='black' />
                            : <SubmitText>Entrar</SubmitText>                   
                        }
                    </SubmitButton>
                </FormView>
                <ErrorMessage>
                    {
                        (errors[0] === undefined 
                        ? ''
                        : errors[0])
                        
                    }
                </ErrorMessage>
                <ErrorMessage>
                    {
                        (errors[1] === undefined 
                        ? ''
                        : errors[1])
                        
                    }

                </ErrorMessage>
            </LoginView>

        </SafeAreaView>
    )
}
export default Login