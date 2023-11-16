import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export default function MyCreditCardsAtom() {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={() => console.log('meus cartões')}
      testID="MyCreditCardsAtom-TouchableOpacity"
    >
      <View
        style={{
          backgroundColor: theme.colors.background,
          flexDirection: 'row',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
          alignItems: 'center',
        }}
        testID="MyCreditCardsAtom-View"
      >
        <MaterialCommunityIcons
          name="cards"
          size={24}
          style={{ marginRight: 10, color: theme.colors.primary }}
          testID="MyCreditCardsAtom-MaterialCommunityIcons"
        />
        <Text testID="MyCreditCardsAtom-Text">Meus cartões de crédito</Text>
      </View>
    </TouchableOpacity>
  );
}
