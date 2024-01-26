import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type AccountActionsMoleculeProps = {
  name: string;
  icon: string;
};

export default function AccountActionsMolecule({ name, icon }: AccountActionsMoleculeProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      padding: 10,
      marginHorizontal: 10,
      borderRadius: 50,
    },
  });

  return (
    <TouchableOpacity onPress={() => {}} testID="AccountActionsMolecule-TouchableOpacity">
      <View
        testID="AccountActionsMolecule-View"
        style={{ flexDirection: 'column', alignItems: 'center' }}
      >
        <View testID="AccountActionsMolecule-View_icon" style={styles.container}>
          <MaterialCommunityIcons
            testID="AccountActionsMolecule-MaterialCommunityIcons_icon"
            name={icon as never}
            size={30}
            color={theme.colors.primary}
          />
        </View>
        <Text testID="AccountActionsMolecule-Text" variant="labelSmall">
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
