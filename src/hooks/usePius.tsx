// libs
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';


// services
import api from '../services/api';

// utils

// hooks


// INTERFACES
// imports
import InfoPiu from '../interfaces/InfoPiu';

// new
interface PiusContextData {
    carregarPius(): void;
    pius: Array<InfoPiu>;
    setPius(pius: Array<InfoPiu>): void; 
};


const PiusContext = createContext<PiusContextData>({} as PiusContextData );

// COMPONENT
export const PiusProvider: React.FC = ({ children }) => {
    const [pius, setPius] = useState<Array<InfoPiu>>([] as Array<InfoPiu>)

    const carregarPius = useCallback(async () => {
        try {
            const response = await api.get('/pius/');

            setPius(response.data);
        } catch (error) {
            alert('Erro no carregamento dos pius, tente novamente mais tarde.')
        }
    }, [])

    return (
        <PiusContext.Provider value={{ carregarPius, pius, setPius }}>
            {children}
        </PiusContext.Provider>
    )
}

export function usePius(): PiusContextData {
    const context = useContext(PiusContext);
    return context;
}

