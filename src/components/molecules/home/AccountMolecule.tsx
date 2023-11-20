import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

type UserMoleculeProps = {
  action?: () => void;
};

export default function AccountMolecule({ action }: UserMoleculeProps) {
  const styles = StyleSheet.create({
    view: {
      flexDirection: 'row',
    },
    textUsername: {
      marginLeft: 8,
    },
  });

  return (
    <TouchableOpacity onPress={action} testID="AccountMolecule-TouchableOpacity">
      <View style={styles.view} testID="AccountMolecule-View">
        <Avatar.Text size={40} label="DM" testID="AccountMolecule-Avatar" />
        <View style={styles.textUsername} testID="AccountMolecule-View-user">
          <Text testID="AccountMolecule-Text-hello">Olá,</Text>
          <Text variant="titleMedium" testID="AccountMolecule-Text-username">
            Diego Muniz
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
