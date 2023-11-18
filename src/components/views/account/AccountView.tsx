import React from 'react';
import { View } from 'react-native';
import AccountTemplate from '../../templates/account/AccountTemplate';

export default function AccountView() {
  return (
    <View style={{ flex: 1 }} testID="AccountView-View">
      <AccountTemplate />
    </View>
  );
}
