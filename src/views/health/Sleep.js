import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Sleep() {
  return (
    <View style={styles.container}>
      <Text>Sleep</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});
