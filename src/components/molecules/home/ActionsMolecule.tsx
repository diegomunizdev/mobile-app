import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useHomeContext } from '../../../contexts/home/homeContext';

export default function ActionsMolecule() {
  const theme = useTheme();

  const { hideValues, setHideValues } = useHomeContext();

  return (
    <View style={{ flexDirection: 'row' }} testID="ActionsMolecule-View">
      <TouchableOpacity
        testID="ActionsMolecule-TouchableOpacity_icon"
        onPress={() => setHideValues(!hideValues)}
      >
        <MaterialCommunityIcons
          testID="ActionsMolecule-MaterialCommunityIcons_icon-eye"
          name={hideValues ? 'eye-outline' : 'eye-off-outline'}
          size={24}
          style={{ marginRight: 10 }}
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
