import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserMolecule from '../../molecules/home/UserMolecule';
import ActionsMolecule from '../../molecules/home/ActionsMolecule';

export default function HeaderOrganism() {
  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      flex: 1,
      maxHeight: 120,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

  return (
    <View style={styles.container} testID="HeaderOrganism-View">
      <UserMolecule />
      <ActionsMolecule />
    </View>
  );
}
