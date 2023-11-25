import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

export default function MyCreditCardsTemplate() {
  return (
    <ScrollView style={{ marginHorizontal: 20 }} testID="AccountTemplate-View">
      <Text variant="titleLarge" style={{ marginTop: 20 }} testID="MyCreditCardsTemplate-Text">
        Meus cartões de crédito
      </Text>
    </ScrollView>
  );
}
