import React, { useCallback, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import HomeTemplate from '../../templates/home/HomeTemplate';


const HomeView = (): JSX.Element => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  }, []);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          testID="HomeView-RefreshControl"
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      testID="HomeView-container"
    >
      <HomeTemplate />
    </ScrollView>
  );
};

export default HomeView;
