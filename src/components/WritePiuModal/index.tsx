// libs
import React, { useCallback, useMemo, useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
// services

// utils

// hooks
import { usePius } from '../../hooks/usePius';

// images
import deleteButton from '../../assets/images/x-mark.png';
// components

// styled-components
import {
    ContentContainer,
    StyledModal,
    InputNewPiu,
    SubmitNewPiu,
    SubmitNewPiuText,
    DeleteButton,
    NewPiuLabel,
    LetterCounter,
    ButtonContainer
} from './styles'

// INTERFACES
// imports

// new
interface NewPiuModalProps { 
    visible: boolean;
    setModalVisibility: Function;
}

// COMPONENT
const NewPiuModal: React.FC<NewPiuModalProps> = ({ visible, setModalVisibility }) => {
    const [newPiuContent, setNewPiuContent] = useState('');
    const [letterNumber, setLetterNumber] = useState(0);
    const { postarPiu } = usePius();
    
    const actionsDisability = useMemo(() => {
        return letterNumber >= 140 || letterNumber <= 0;
    }, [letterNumber])

    const handleModalVisibility = useCallback(() => {
        setModalVisibility(false)
    }, [])

    const handlePostPiu = useCallback(() => {
        postarPiu(newPiuContent);
        setModalVisibility(false);
        setNewPiuContent('');
        setLetterNumber(0);
    }, [postarPiu, setNewPiuContent, setModalVisibility, newPiuContent, setLetterNumber])

    return (
        <StyledModal visible={visible} animationType='slide' onRequestClose={() => {setModalVisibility(false)}} >
            <ContentContainer>
                <ButtonContainer onPress={handleModalVisibility} >
                    <DeleteButton source={deleteButton} resizeMode='contain' />
                </ButtonContainer>
                <NewPiuLabel>Digite seu Piu !</NewPiuLabel>
                <InputNewPiu
                    placeholder='O que vc está piando hoje ?' 
                    underlineColorAndroid="transparent"
                    numberOfLines={10}
                    multiline={true}
                    onChangeText={(text: string) => {
                        setNewPiuContent(text);
                        setLetterNumber(text.length)
                    }}
                    value={newPiuContent}
                />
                <LetterCounter>{letterNumber}{' '}/ 140</LetterCounter>
                <SubmitNewPiu color='#495057' disabled={actionsDisability} title='Piar!' onPress={handlePostPiu} >
                    {/* <SubmitNewPiuText>Piar!</SubmitNewPiuText> */}
                </SubmitNewPiu>
            </ContentContainer>
        </StyledModal>
    )
}

export default NewPiuModal