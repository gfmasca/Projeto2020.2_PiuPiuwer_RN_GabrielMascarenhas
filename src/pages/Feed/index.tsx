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
import NewPiuModal from "../../components/WritePiuModal";

const Feed: React.FC = () => {
    const { logout, user } = useAuth();
    const { carregarPius, pius, likedPiusIds } = usePius();
    
    const [modalVisibility, setModalVisibility] = useState(false);

    const handleLogout = useCallback(() => {
        logout();
    }, []);

    const handleModalVisibility = useCallback(() => {
        setModalVisibility(true);
    }, [setModalVisibility])

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
                isLiked={likedPiusIds.includes(item.id)}
            />
        )
    }

    return (
        <SafeAreaView>
            <Header />
            <ContentContainer>
                <NewPiuContainer>
                    <NewPiuText>Dê um novo Piu</NewPiuText>
                    <NewPiuButton onPress={handleModalVisibility} ><NewPiuImage source={ BirdImage } /></NewPiuButton>
                </NewPiuContainer>

                <NewPiuModal visible={modalVisibility} setModalVisibility={setModalVisibility} />

                <PiusContainer>
                    
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