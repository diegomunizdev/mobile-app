import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type TitleRedirectorAtomProps = {
  title: string;
  navigateName: string;
};

export default function TitleRedirectorAtom({ title, navigateName }: TitleRedirectorAtomProps) {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate(navigateName as never)}
      testID="TitleRedirectorAtom-TouchableOpacity"
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <Text variant="bodyLarge" testID="TitleRedirectorAtom-Text">
          {title}
        </Text>
        <MaterialCommunityIcons
          name="chevron-right"
          size={24}
          testID="TitleRedirectorAtom-MaterialCommunityIcons"
        />
      </View>
    </TouchableOpacity>
  );
}
