import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export default function InfoCreditCardAtom() {
  return (
    <View testID="InfoCreditCard-View">
      <Text testID="InfoCreditCard-Text_current-invoice" variant="bodySmall">
        Fatura atual
      </Text>
      <Text testID="InfoCreditCard-Text_value" variant="titleMedium">
        R$ 2.478,39
      </Text>
      <Text
        testID="InfoCreditCard-Text_available-value"
        variant="bodySmall"
        style={{ marginTop: 10 }}
      >
        Valor disponível: R$ 5.548,39
      </Text>
    </View>
  );
}
