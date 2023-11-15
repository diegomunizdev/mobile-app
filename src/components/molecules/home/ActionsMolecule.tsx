import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function ActionsMolecule() {
  const theme = useTheme();

  return (
    <View style={{ flexDirection: 'row' }} testID="ActionsMolecule-View">
      <TouchableOpacity
        testID="ActionsMolecule-TouchableOpacity_icon-eye"
        onPress={() => console.log('ocultar valores')}
      >
        <MaterialCommunityIcons
          testID="ActionsMolecule-MaterialCommunityIcons_icon-eye"
          name="eye-outline"
          size={24}
          style={{ marginRight: 10 }}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity
        testID="ActionsMolecule-TouchableOpacity_icon-bell"
        onPress={() => console.log('notificação')}
      >
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
