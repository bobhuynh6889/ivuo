import {View, Text, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';

export default function FloatDropDown() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bgView}>
        <View style={styles.ctnView}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgView: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: '#111111',
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctnView: {
    width: '80%',
    backgroundColor: 'black',
    height: 200,
    borderRadius: 8,
  },
});
