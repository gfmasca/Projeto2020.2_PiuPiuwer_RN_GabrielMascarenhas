// libs
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';


// services
import api from '../services/api';

// utils

// hooks
import { useAuth } from './useAuth';


// INTERFACES
// imports
import InfoPiu from '../interfaces/InfoPiu';

// new
interface PiusContextData {
    carregarPius(): void;
    postarPiu(texto: string): void;
    pius: Array<InfoPiu>;
    setPius(pius: Array<InfoPiu>): void; 
};


const PiusContext = createContext<PiusContextData>({} as PiusContextData );

// COMPONENT
export const PiusProvider: React.FC = ({ children }) => {
    const { user } = useAuth()

    const [pius, setPius] = useState<Array<InfoPiu>>([] as Array<InfoPiu>)

    const carregarPius = useCallback(async () => {
        try {
            const response = await api.get('/pius/');

            setPius(response.data);
        } catch (error) {
            alert('Erro no carregamento dos pius, tente novamente mais tarde.')
        }
    }, [])

    const postarPiu = useCallback(async (texto) => {
        try {
            const piuData = {
                usuario: user.id,
                texto: texto
            }
            console.log(piuData);
    
            const response = await api.post('/pius/', piuData);
            const novoPiu = response.data;
            console.log(novoPiu);
    
            setPius([ novoPiu, ...pius ]);
        } 
        catch(e) {
            console.log(e.response);
        }
    }, [setPius, user, api]);

    return (
        <PiusContext.Provider value={{ carregarPius, pius, setPius, postarPiu }}>
            {children}
        </PiusContext.Provider>
    )
}

export function usePius(): PiusContextData {
    const context = useContext(PiusContext);
    return context;
}

