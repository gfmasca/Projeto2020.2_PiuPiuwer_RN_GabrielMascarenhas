import React, { useCallback } from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";

import BirdImage from '../../assets/images/bird-singing.png';

import {
    ContentContainer,
    NewPiuContainer,
    NewPiuText,
    NewPiuButton,
    NewPiuImage,
    PiusContainer
} from './styles'; 
import Piu from "../../components/Piu";

const Feed: React.FC = () => {
    const { logout, user } = useAuth()

    const handleLogout = useCallback(() => {
        logout();
    }, []);

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
                    <Piu id={1} texto='eaemeupovo' likers={[1, 2, 3]} usuario={user} />
                </PiusContainer>
            </ContentContainer>
        </SafeAreaView>
    )
}
export default Feed