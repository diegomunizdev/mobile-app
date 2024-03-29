import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserMolecule from '../../molecules/home/UserMolecule';
import ActionsMolecule from '../../molecules/home/ActionsMolecule';
import { useNavigation } from '@react-navigation/native';

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
    <View style={styles.container} testID="HeaderOrganism-View">
      <UserMolecule action={() => navigate('account' as never)} />
      <ActionsMolecule />
    </View>
  );
}
