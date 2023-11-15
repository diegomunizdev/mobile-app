import React from 'react';
import { View } from 'react-native';
import TitleRedirectorAtom from '../../atoms/home/TitleRedirectorAtom';
import { Text, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CreditCardMolecule() {
  const theme = useTheme();

  return (
    <View style={{ marginBottom: 20, marginTop: 20 }}>
      <TitleRedirectorAtom title="Cartão de crédito" navigateName="creditCard" />
      <Text variant="bodySmall">Fatura atual</Text>
      <Text variant="titleMedium">R$ 2.478,39</Text>
      <Text variant="bodySmall" style={{ marginTop: 10 }}>
        Valor disponível: R$ 5.548,39
      </Text>
      <View
        style={{
          backgroundColor: theme.colors.background,
          flexDirection: 'row',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
          alignItems: 'center',
        }}
      >
        <MaterialCommunityIcons
          name="cards"
          size={24}
          style={{ marginRight: 10, color: theme.colors.primary }}
        />
        <Text>Meus cartões de crédito</Text>
      </View>
    </View>
  );
}
