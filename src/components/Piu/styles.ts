import styled from 'styled-components/native'

export const PiuContainer = styled.View`
    height: 100px;
    width: 100%;
    flex-direction: row;
    background-color: #6C757D;
    padding: 10px;
    position: relative;
    justify-content: space-between;
    border-style: solid;
    border-color: #CED4DA;
    border-bottom-width: 2px;
`

export const PiuMainContentContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const UserImg = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 28px;
`

export const PiuTextContainer = styled.View`
    margin: 0 0 0 10px;
`

export const Username = styled.Text`
    color: #ADB5BD;
    font-weight: bold;
`

export const PiuText = styled.Text`
    color: #E9ECEF;
`

export const LikeButton = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    margin: 0 0 0 80px;
`

export const Likes = styled.Text`
    margin: 0 8px 0 0;
    color: #212529;
`

export const LikeImg = styled.Image`
    width: 30px;
    height: 30px;
`

export const DeleteButton = styled.View`
`

export const DeleteImg = styled.Image`
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0px;

`