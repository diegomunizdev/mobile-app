import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import AccountActionsMolecule from '../../molecules/home/AccountActionsMolecule';

export default function AccountActionsOrganism() {
  const styles = StyleSheet.create({
    container: { marginVertical: 30 },
  });

  const options = [
    {
      name: 'Área pix',
      icon: 'star-box',
    },
    {
      name: 'Extrato',
      icon: 'script-text-outline',
    },
    {
      name: 'Recarga',
      icon: 'cellphone',
    },
    {
      name: 'Pagar',
      icon: 'barcode',
    },
    {
      name: 'Transferir',
      icon: 'cash-minus',
    },
    {
      name: 'Investir',
      icon: 'chart-bar',
    },
    {
      name: 'Caixinhas',
      icon: 'cash-lock',
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      testID="AccountActionsOrganism-container"
    >
      {options.map((item, index) => (
        <AccountActionsMolecule key={index} name={item.name} icon={item.icon} />
      ))}
    </ScrollView>
  );
}
