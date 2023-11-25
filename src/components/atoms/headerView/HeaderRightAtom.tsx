import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HeaderRightAtom() {
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity onPress={goBack} testID="HeaderRightAtom-TouchableOpacity">
      <MaterialCommunityIcons
        name="chevron-left"
        size={30}
        testID="HeaderRightAtom-MaterialCommunityIcons"
      />
    </TouchableOpacity>
  );
}
