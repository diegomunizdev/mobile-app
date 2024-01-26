import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export default function MyCreditCardsAtom() {
  const { navigate } = useNavigation();
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flexDirection: 'row',
      padding: 10,
      borderRadius: 10,
      marginTop: 20,
      alignItems: 'center',
    },
    icon: { marginRight: 10, color: theme.colors.primary },
  });

  return (
    <TouchableOpacity
      onPress={() => navigate('myCreditCard' as never)}
      testID="MyCreditCardsAtom-TouchableOpacity"
    >
      <View style={styles.container} testID="MyCreditCardsAtom-View">
        <MaterialCommunityIcons
          name="cards"
          size={24}
          style={styles.icon}
          testID="MyCreditCardsAtom-MaterialCommunityIcons"
        />
        <Text testID="MyCreditCardsAtom-Text">Meus cartões de crédito</Text>
      </View>
    </TouchableOpacity>
  );
}
