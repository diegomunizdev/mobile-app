import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-paper';

export default function MyCreditCardsTemplate() {
  const { goBack } = useNavigation();

  return (
    <View style={{ marginTop: 50, marginHorizontal: 20 }} testID="AccountTemplate-View">
      <TouchableOpacity onPress={() => goBack()} testID="AccountTemplate-TouchableOpacity">
        <MaterialCommunityIcons
          name="chevron-left"
          size={24}
          testID="AccountTemplate-MaterialCommunityIcons"
        />
      </TouchableOpacity>
      <Text variant="titleLarge" style={{ marginTop: 20 }} testID="MyCreditCardsTemplate-Text">
        Meus cartões de crédito
      </Text>
    </View>
  );
}
