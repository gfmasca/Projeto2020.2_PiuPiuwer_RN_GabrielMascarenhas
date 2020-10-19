import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';

import api from '../services/api';

interface UserAuth {
    username: string;
    password: string;
}

export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    sobre: string;
    foto: string
}

interface AuthState {
    token: string;
    user: User;
} 

interface AuthContextData {
    user: User;
    login(user: UserAuth): void;
    token: string;
    logout(): void;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData );

export const AuthProvider: React.FC = ({ children }) => {

    const [data, setData] = useState<AuthState>({} as AuthState);

    useEffect(() => {
        async function carregarDadosDoUsuario() {
            const user = localStorage.getItem('@PiuPiuwer:user');
            const token = localStorage.getItem('@PiuPiuwer:token');

            if (user && token) {
                api.defaults.headers.authorization = `JWT ${token}`;
                setData({ user: JSON.parse(user), token });
            }
        }

        carregarDadosDoUsuario();
    }, []);

    const login = useCallback( async (cred: UserAuth) => {

        try {
            const response = await api.post('/login/', cred);
            const token = response.data.token;
            if (!!token) {
                api.defaults.headers.authorization = `JWT ${token}`;
                const userResponse = await api.get(`usuarios/?search=${cred.username}`);
                const user = userResponse.data[0];
    
                localStorage.setItem('@PiuPiuwer:user', JSON.stringify(user));
                localStorage.setItem('@PiuPiuwer:token', token);
    
                setData({token: token, user: user});
            }
        }
        
        catch {
            
        }
        
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('@PiuPiuwer:user');
        localStorage.removeItem('@PiuPiuwer:token');
        setData({} as AuthState)
    }, [])

    return (
        <AuthContext.Provider value={{ user: data.user, login, token: data.token, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// NAO ENTENDI DIREITO ESSE AUTHCONTEXT
export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    return context
}