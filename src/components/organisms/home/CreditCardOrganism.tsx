import React from 'react';
import { View } from 'react-native';
import CreditCardMolecule from '../../molecules/home/CreditCardMolecule';

export default function CreditCardOrganism() {
  return (
    <View style={{ marginHorizontal: 20 }} testID="CreditCardOrganism-View">
      <CreditCardMolecule />
    </View>
  );
}
