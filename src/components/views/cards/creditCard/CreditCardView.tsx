import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export default function CreditCardView() {
  const theme = useTheme();

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <Text variant="titleLarge" style={{ marginTop: 20 }} testID="MyCreditCardsTemplate-Text">
            Meus cartões de crédito
          </Text>
          <View style={{ marginTop: 30 }}>
            <Text variant="bodySmall">Fatura atual</Text>
            <Text variant="headlineMedium">R$ 2.478,39</Text>
          </View>
          <Text variant="bodySmall" style={{ marginTop: 40 }}>
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
            <Text>Meus cartões</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
