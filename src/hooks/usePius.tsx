// libs
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';


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
    likedPiusIds: Array<number>;
    likePiu(isLiked: boolean, thisPiuId: number): void;
    deletePiu(id: number): void;
};


const PiusContext = createContext<PiusContextData>({} as PiusContextData );

// COMPONENT
export const PiusProvider: React.FC = ({ children }) => {
    const { user } = useAuth()

    const [pius, setPius] = useState<Array<InfoPiu>>([] as Array<InfoPiu>);

    const carregarPius = useCallback(async () => {
        try {
            const response = await api.get('/pius/');

            setPius(response.data);
        } catch (error) {
            alert('Erro no carregamento dos pius, tente novamente mais tarde.')
        }
    }, [setPius, api])

    const postarPiu = useCallback(async (texto) => {
        try {
            const piuData = {
                usuario: user.id,
                texto: texto
            }
            const response = await api.post('/pius/', piuData);
            const novoPiu = response.data;
            setPius([ novoPiu, ...pius ]);
        } 
        catch(e) {
            console.log(e.response);
        }
    }, [setPius, user, api, pius, carregarPius]);

    const deletePiu = useCallback(async (id) => {
        const piusAtualizados = pius.filter(piu => piu.id !== id);
        setPius(piusAtualizados);
        const response = await api.delete(`/pius/${id}/`);
    }, [api, pius, setPius])

    const likePiu = useCallback(async (isLiked, thisPiuId) => {
        // criar [] <- mudando os pius(estado) atualizando ele do jeito que eu quero, dps setando os proprio piu como esse cara

        const piusAtualizados = pius.map((piu) => {

            if ( !isLiked && piu.id === thisPiuId) {
                return {
                    ...piu,
                    likers: [
                        ...piu.likers,
                        user
                    ]
                }
            } else if (isLiked && piu.id === thisPiuId ) {
                return {
                    ...piu, 
                    likers: piu.likers.filter(liker => liker.id !== user.id)
                }
            } else {
                return piu;
            }
            
        });

        setPius( piusAtualizados );

        await api.post('pius/dar-like/', {
            usuario: user.id,
            piu: thisPiuId,
        } );

    }, [ pius, setPius, user, api ]);

    const likedPiusIds = useMemo(() => {
        const likedPius = pius.filter(piu => {
            const likersIds = piu.likers.map(user => user.id);
            return likersIds.includes(user.id);
        })
        return likedPius.map(piu => piu.id);
    }, [pius, user]);

    return (
        <PiusContext.Provider value={{ carregarPius, pius, setPius, postarPiu, likedPiusIds, likePiu, deletePiu }}>
            {children}
        </PiusContext.Provider>
    )
}

export function usePius(): PiusContextData {
    const context = useContext(PiusContext);
    return context;
}

