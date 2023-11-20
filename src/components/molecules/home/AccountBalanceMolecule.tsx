import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import TitleRedirectorAtom from '../../atoms/home/TitleRedirectorAtom';
import { useHomeContext } from '../../../contexts/home/homeContext';

export default function AccountBalanceMolecule() {
  const { hideValues } = useHomeContext();
  return (
    <View testID="AccountBalanceMolecule-View">
      <TitleRedirectorAtom title="Saldo em conta" navigateName="availableBalance" />
      <Text testID="AccountBalanceMolecule-Text" variant="titleLarge">
        {hideValues ? 'R$ 1.356,90' : 'R$ ***,**'}
      </Text>
    </View>
  );
}
