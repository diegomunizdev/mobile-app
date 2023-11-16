import React from 'react';
import { ScrollView, View } from 'react-native';
import AccountActionsMolecule from '../../molecules/home/AccountActionsMolecule';

export default function AccountActionsOrganism() {
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
    <View style={{ marginVertical: 30 }} testID="AccountActionsOrganism-View">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {options.map((item, index) => (
          <AccountActionsMolecule key={index} name={item.name} icon={item.icon} />
        ))}
      </ScrollView>
    </View>
  );
}
