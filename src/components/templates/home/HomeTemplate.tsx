import React from 'react';
import HeaderOrganism from '../../organisms/home/HeaderOrganism';
import AccountBalanceOrganism from '../../organisms/home/AccountBalanceOrganism';
import AccountActionsOrganism from '../../organisms/home/AccountActionsOrganism';
import { Divider } from 'react-native-paper';
import CreditCardOrganism from '../../organisms/home/CreditCardOrganism';
import LoanContractingOrganism from '../../organisms/home/LoanContractingOrganism';
import { View } from 'react-native';

export default function HomeTemplate() {
  return (
    <View testID="HomeTemplate-View">
      <HeaderOrganism />
      <AccountBalanceOrganism />
      <AccountActionsOrganism />
      <Divider style={{ marginHorizontal: 20 }} />
      <CreditCardOrganism />
      <Divider style={{ marginHorizontal: 20 }} />
      <LoanContractingOrganism />
    </View>
  );
}
