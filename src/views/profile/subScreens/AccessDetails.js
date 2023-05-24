import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

// in source
import Fonts from '../../../constants/Fonts';
import {customTxt} from '../../../constants/fontStyle';

import Header from '../components/Header';

export default function AccessDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Access details'} />
      <View style={{marginHorizontal: 15}}>
        <TouchableOpacity style={styles.itemSetting}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt}>
              Password
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.devider} />
        <TouchableOpacity>
          <Text
            style={[
              customTxt(Fonts.SemiBold, 14, '#FF0000').txt,
              {marginTop: 20},
            ]}>
            Deactivate account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  itemSetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  devider: {
    height: 1,
    width: '100%',
    backgroundColor: '#363636',
    marginTop: 12,
  },
});
