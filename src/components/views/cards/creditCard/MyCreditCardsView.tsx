import React from 'react';
import { View } from 'react-native';
import MyCreditCardsTemplate from '../../../templates/cards/creditCard/MyCreditCardsTemplate';

export default function MyCreditCardsView() {
  return (
    <View testID="MyCreditCardsView-View">
      <MyCreditCardsTemplate />
    </View>
  );
}
