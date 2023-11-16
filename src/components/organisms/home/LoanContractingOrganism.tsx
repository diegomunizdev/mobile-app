import React from 'react';
import LoanContractingMolecule from '../../molecules/home/LoanContractingMolecule';
import { View } from 'react-native';

export default function LoanContractingOrganism() {
  return (
    <View style={{ marginHorizontal: 20 }} testID="LoanContractingOrganism-View">
      <LoanContractingMolecule />
    </View>
  );
}
