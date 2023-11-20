import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AccountMolecule from '../../molecules/home/AccountMolecule';
import ActionsMolecule from '../../molecules/home/ActionsMolecule';

export default function HeaderOrganism() {
  const { navigate } = useNavigation();

  const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      height: 150,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

  return (
    <View style={styles.container} testID="HeaderOrganism-container">
      <AccountMolecule action={() => navigate('account' as never)} />
      <ActionsMolecule />
    </View>
  );
}
