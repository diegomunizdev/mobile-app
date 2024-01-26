import React from 'react';
import { Divider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import HeaderOrganism from '../../organisms/home/HeaderOrganism';
import AccountBalanceOrganism from '../../organisms/home/AccountBalanceOrganism';
import AccountActionsOrganism from '../../organisms/home/AccountActionsOrganism';
import CreditCardOrganism from '../../organisms/home/CreditCardOrganism';
import LoanContractingOrganism from '../../organisms/home/LoanContractingOrganism';

export default function HomeTemplate() {
  const styles = StyleSheet.create({
    divider: {
      marginHorizontal: 20,
    },
  });

  return (
    <View testID="HomeTemplate-container">
      <HeaderOrganism />
      <AccountBalanceOrganism />
      <AccountActionsOrganism />
      <Divider style={styles.divider} />
      <CreditCardOrganism />
      <Divider style={styles.divider} />
      <LoanContractingOrganism />
    </View>
  );
}
