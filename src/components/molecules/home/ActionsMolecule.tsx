import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';

import { useHomeContext } from '../../../contexts/home/homeContext';

export default function ActionsMolecule() {
  const theme = useTheme();

  const { hideValues, setHideValues } = useHomeContext();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: 15,
    },
  });

  return (
    <View style={styles.container} testID="ActionsMolecule-container">
      <TouchableOpacity
        testID="ActionsMolecule-TouchableOpacity_icon"
        onPress={() => setHideValues(!hideValues)}
      >
        <MaterialCommunityIcons
          testID="ActionsMolecule-MaterialCommunityIcons_icon-eye"
          name={hideValues ? 'eye-outline' : 'eye-off-outline'}
          size={24}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity testID="ActionsMolecule-TouchableOpacity_icon-bell" onPress={() => {}}>
        <MaterialCommunityIcons
          testID="ActionsMolecule-MaterialCommunityIcons_icon-bell"
          name="bell-outline"
          size={24}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
}
