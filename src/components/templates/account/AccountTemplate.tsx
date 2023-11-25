import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar, Button, Divider, Text, useTheme } from 'react-native-paper';

export default function AccountTemplate() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
    },
    divider: {
      marginVertical: 20,
    },
  });

  const options = [
    {
      title: 'Dados pessoais',
      subtitle: 'Gerencie seus dados pessoais',
      icon: 'account-circle-outline',
    },
    {
      title: 'Configurações',
      subtitle: 'Gerencie suas configurações',
      icon: 'cog-outline',
    },
  ];

  return (
    <ScrollView style={styles.container} testID="AccountTemplate-container">
      <View
        style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
        testID="AccountMolecule-View"
      >
        <Avatar.Text size={40} label="DM" testID="AccountMolecule-Avatar" />
        <View testID="AccountMolecule-View-user">
          <Text variant="titleMedium" testID="AccountMolecule-Text-username">
            Diego Muniz
          </Text>
          <Text variant="labelMedium" testID="AccountMolecule-Text-username">
            Agência: 0001
          </Text>
          <Text variant="labelMedium" testID="AccountMolecule-Text-username">
            Conta: 18248972-3
          </Text>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={{ gap: 20, flex: 1 }}>
        {options.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <MaterialCommunityIcons
                  name={item.icon as never}
                  size={24}
                  color={theme.colors.primary}
                  testID="AccountTemplate-MaterialCommunityIcons"
                />
                <View>
                  <Text variant="bodyMedium">{item.title}</Text>
                  {item.subtitle ? <Text variant="labelSmall">{item.subtitle}</Text> : null}
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color={theme.colors.tertiary}
                testID="AccountTemplate-MaterialCommunityIcons"
              />
            </TouchableOpacity>
            <Divider style={{ marginTop: 20 }} />
          </View>
        ))}
      </View>
      <Button
        style={{ marginTop: 20 }}
        icon="logout"
        mode="text"
        onPress={() => console.log('Pressed')}
      >
        Sair do aplicativo
      </Button>
    </ScrollView>
  );
}
