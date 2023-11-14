import React from 'react';
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native';

export default function HomeView() {
  const { t } = useTranslation();

  return (
    <View>
      <Text testID="HomeView-Text">{t('app')}</Text>
    </View>
  );
}
