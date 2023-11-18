import React from 'react';
import HeaderAccountOrganism from '../../organisms/account/HeaderAccountOrganism';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AccountTemplate() {
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
      <HeaderAccountOrganism />
    </View>
  );
}
