import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

export default function PublicRoutes() {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('app')}</Text>
    </View>
  );
}
