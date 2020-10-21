// libs
import React, { useCallback, useMemo, useState } from 'react';
import { ActivityIndicator } from 'react-native';
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
    setModalVisibility(setter: boolean): void;
}

// COMPONENT
const NewPiuModal: React.FC<NewPiuModalProps> = ({ visible, setModalVisibility }) => {
    const [newPiuContent, setNewPiuContent] = useState('');
    const [letterNumber, setLetterNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const { postarPiu } = usePius();
    
    const actionsDisability = useMemo(() => {
        return letterNumber >= 140 || letterNumber <= 0;
    }, [letterNumber])

    const handleModalVisibility = useCallback(() => {
        setModalVisibility(false)
    }, [setModalVisibility])

    const handlePostPiu = useCallback(async () => {
        setIsLoading(true);
        await postarPiu(newPiuContent);
        setIsLoading(false);
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
                <LetterCounter unvalidPiu={actionsDisability} >{letterNumber}{' '}/ 140</LetterCounter>
                { isLoading 
                    ? <ActivityIndicator color='black' />
                    : <SubmitNewPiu color='#495057' disabled={actionsDisability} title='Piar!' onPress={handlePostPiu} />
                }
            </ContentContainer>
        </StyledModal>
    )
}

export default NewPiuModal