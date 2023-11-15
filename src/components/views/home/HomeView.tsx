import React from 'react';
import { View } from 'react-native';
import HomeTemplate from '../../templates/home/HomeTemplate';

export default function HomeView() {
  return (
    <View style={{ flex: 1 }} testID="HomeView-View">
      <HomeTemplate />
    </View>
  );
}
