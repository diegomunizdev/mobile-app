import React from 'react';
import { ScrollView } from 'react-native';
import HomeTemplate from '../../templates/home/HomeTemplate';

export default function HomeView(): JSX.Element {
  return (
    <ScrollView style={{ flex: 1 }} testID="HomeView-container">
      <HomeTemplate />
    </ScrollView>
  );
}
