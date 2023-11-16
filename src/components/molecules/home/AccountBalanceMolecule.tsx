import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import TitleRedirectorAtom from '../../atoms/home/TitleRedirectorAtom';

export default function AccountBalanceMolecule() {
  return (
    <View testID="AccountBalanceMolecule-View">
      <TitleRedirectorAtom title="Saldo em conta" navigateName="creditCard" />
      <Text testID="AccountBalanceMolecule-Text" variant="titleLarge">
        R$ 1.356,90
      </Text>
    </View>
  );
}
