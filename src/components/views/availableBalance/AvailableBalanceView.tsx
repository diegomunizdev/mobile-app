import React from 'react';
import { View } from 'react-native';
import AvailableBalanceTemplate from '../../templates/availableBalance/AvailableBalanceTemplate';

export default function AvailableBalanceView() {
  return (
    <View testID="AvailableBalanceView-View">
      <AvailableBalanceTemplate />
    </View>
  );
}
