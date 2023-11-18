import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

type UserMoleculeProps = {
  action?: () => void;
};

export default function UserMolecule({ action }: UserMoleculeProps) {
  const styles = StyleSheet.create({
    textUsername: {
      marginLeft: 8,
    },
  });

  return (
    <TouchableOpacity testID="UserMolecule-TouchableOpacity" onPress={action}>
      <View style={{ flexDirection: 'row' }} testID="UserMolecule-View">
        <Avatar.Text size={40} label="DM" testID="UserMolecule-Avatar" />
        <View style={styles.textUsername} testID="UserMolecule-View-user">
          <Text testID="UserMolecule-Text-hello">Olá,</Text>
          <Text testID="UserMolecule-Text-username" variant="titleMedium">
            Diego Muniz
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
