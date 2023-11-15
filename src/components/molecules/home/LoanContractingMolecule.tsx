import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import TitleRedirectorAtom from '../../atoms/home/TitleRedirectorAtom';

export default function LoanContractingMolecule() {
  return (
    <View style={{ marginBottom: 20, marginTop: 20 }}>
      <TitleRedirectorAtom title="Empréstimo" navigateName="creditCard" />
      <Text variant="bodySmall">Valor disponível</Text>
      <Text variant="titleMedium">R$ 10.000,00</Text>
    </View>
  );
}
