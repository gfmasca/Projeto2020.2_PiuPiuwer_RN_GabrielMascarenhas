import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { FlatList, RectButton, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";
import Piu from "../../components/Piu";
import { usePius } from "../../hooks/usePius";
import InfoPiu from "../../interfaces/InfoPiu";

import BirdImage from '../../assets/images/bird-singing.png';

import {
    ContentContainer,
    NewPiuContainer,
    NewPiuText,
    NewPiuButton,
    NewPiuImage,
    PiusContainer
} from './styles'; 
import { render } from "react-dom";

const Feed: React.FC = () => {
    const { logout, user } = useAuth();
    const { carregarPius, pius } = usePius();

    const handleLogout = useCallback(() => {
        logout();
    }, []);

    useEffect(() => {
        carregarPius();
    }, [])

    const renderItem= ({ item }: {item: InfoPiu}) => {
        return (
            <Piu 
                favoritado_por={item.favoritado_por}
                horario={item.horario}
                id={item.id}
                likers={item.likers}
                texto={item.texto}
                usuario={item.usuario}
                key={item.id}
            />
        )
    }

    return (
        <SafeAreaView>
            <Header />
            {/* <RectButton onPress={ handleLogout } ><Text>Logout</Text></RectButton> */}
            <ContentContainer>
                <NewPiuContainer>
                    <NewPiuText>Dê um novo Piu</NewPiuText>
                    <NewPiuButton><NewPiuImage source={ BirdImage } /></NewPiuButton>
                </NewPiuContainer>

                <PiusContainer>
                    {/* <ScrollView showsVerticalScrollIndicator={false}>
                        { pius.map(piu => {
                            return (
                                <Piu 
                                    favoritado_por={piu.favoritado_por}
                                    horario={piu.horario}
                                    id={piu.id}
                                    likers={piu.likers}
                                    texto={piu.texto}
                                    usuario={piu.usuario}
                                    key={piu.id}
                                />
                            )
                        } ) }
                    </ScrollView> */}
                    <FlatList 
                        data={pius}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => item.id.toString()}
                    />
                    {/* <Piu id={1} texto='eaemeupovo' likers={[1, 2, 3]} usuario={user} /> */}
                </PiusContainer>
            </ContentContainer>
        </SafeAreaView>
    )
}
export default Feed