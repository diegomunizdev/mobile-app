import React from 'react';
import { ScrollView, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider, Text } from 'react-native-paper';

export default function AvailableBalanceTemplate() {
  return (
    <ScrollView style={{ marginHorizontal: 20 }} testID="AccountTemplate-View">
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
    </ScrollView>
  );
}
