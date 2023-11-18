import React from 'react';
import { View } from 'react-native';
import TitleRedirectorAtom from '../../atoms/home/TitleRedirectorAtom';
import MyCreditCardsAtom from '../../atoms/home/MyCreditCardsAtom';
import InfoCreditCard from '../../atoms/home/InfoCreditCardAtom';

export default function CreditCardMolecule() {
  return (
    <View style={{ marginBottom: 20, marginTop: 20 }} testID="CreditCardMolecule-View">
      <TitleRedirectorAtom title="Cartão de crédito" navigateName="creditCard" />
      <InfoCreditCard />
      <MyCreditCardsAtom />
    </View>
  );
}
