import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Divider, Text } from 'react-native-paper';

export default function AvailableBalanceTemplate() {
  const { goBack } = useNavigation();

  return (
    <View style={{ marginTop: 50, marginHorizontal: 20 }} testID="AccountTemplate-View">
      <TouchableOpacity onPress={() => goBack()} testID="AccountTemplate-TouchableOpacity">
        <MaterialCommunityIcons
          name="chevron-left"
          size={24}
          testID="AccountTemplate-MaterialCommunityIcons"
        />
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <MaterialCommunityIcons
          name="cash"
          size={24}
          color="#33cc33"
          testID="AccountTemplate-MaterialCommunityIcons"
        />
        <Text
          style={{ marginLeft: 5 }}
          variant="titleMedium"
          testID="AvailableBalanceTemplate-Text"
        >
          Saldo disponível
        </Text>
      </View>
      <Text
        style={{ marginBottom: 20 }}
        variant="headlineMedium"
        testID="AvailableBalanceTemplate-Text"
      >
        R$ 1.356,90
      </Text>
      <Divider />
      <Text variant="titleMedium" style={{ marginTop: 20 }} testID="AvailableBalanceTemplate-Text">
        Histórico
      </Text>
    </View>
  );
}
