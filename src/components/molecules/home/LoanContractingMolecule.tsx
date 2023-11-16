import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import TitleRedirectorAtom from '../../atoms/home/TitleRedirectorAtom';

export default function LoanContractingMolecule() {
  return (
    <View style={{ marginBottom: 20, marginTop: 20 }} testID="LoanContractingMolecule-View">
      <TitleRedirectorAtom title="Empréstimo" navigateName="creditCard" />
      <Text testID="LoanContractingMolecule-Text_available-value" variant="bodySmall">
        Valor disponível
      </Text>
      <Text testID="LoanContractingMolecule-Text_value" variant="titleMedium">
        R$ 10.000,00
      </Text>
    </View>
  );
}
