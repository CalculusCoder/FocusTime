import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { fontSizes, spacing } from '../utilities/sizes';

const FocusHistory = ({ history }) => {
  if(!history || !history.length) return <Text style={styles.title}>We have'nt focused on anything yet </Text>

  const renderItem = ({ item }) => <Text style={styles.item}>{item}</Text>;

  return (
    <View>
      <Text style={styles.title}>Things we have focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: 'bold',
  },
  item: {
    fontSize: fontSizes.md,
    color: 'white'
  },
});

export { FocusHistory };
