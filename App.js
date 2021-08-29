import React from 'react'
import { View, Button, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
  display: flex;
  background-color: papayawhip;
`

const ButtonContainer = styled.TouchableOpacity`
  elevation: 8;
  border-radius: 10px;
  padding-vertical: 10px;
  padding-horizontal: 12px;
`

const ButtonText = styled.Text`
  font-size: 18;
  color: #fff;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
`

const AppButton = ({ onPress, title }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
)

const App = () => (
  <StyledView>
    <AppButton title="Hey there!" size="sm" backgroundColor="#007bff" />
  </StyledView>
)

export default App
