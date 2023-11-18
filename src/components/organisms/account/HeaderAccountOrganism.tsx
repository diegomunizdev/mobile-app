import React from 'react';
import UserMolecule from '../../molecules/home/UserMolecule';
import { View } from 'react-native';

export default function HeaderAccountOrganism() {
  return (
    <View style={{ marginVertical: 30 }} testID="HeaderAccountOrganism-View">
      <UserMolecule />
    </View>
  );
}
