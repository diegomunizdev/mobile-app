import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export default function CreditCardView() {
  const theme = useTheme();
  const { goBack } = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 50, marginHorizontal: 20 }}>
        <TouchableOpacity onPress={() => goBack()}>
          <MaterialCommunityIcons name="chevron-left" size={24} />
        </TouchableOpacity>
        <View style={{ marginBottom: 20, marginTop: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <Text variant="bodyLarge">Cartão de crédito</Text>
            <MaterialCommunityIcons name="chevron-right" size={24} />
          </View>
          <Text variant="bodySmall">Fatura atual</Text>
          <Text variant="titleMedium">R$ 2.478,39</Text>
          <Text variant="bodySmall">Valor disponível: R$ 5.548,39</Text>
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
    </View>
  );
}
