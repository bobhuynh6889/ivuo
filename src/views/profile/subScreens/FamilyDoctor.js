import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

// in source
import Fonts from '../../../constants/Fonts';
import {customTxt} from '../../../constants/fontStyle';

// assets
import ProfileAssets from '../../../../assets/images/profile';

import Header from '../components/Header';

export default function FamilyDoctor() {
  const renderLine = (title, content, devider) => {
    return (
      <View style={{marginTop: 12, marginHorizontal: 20}}>
        <Text style={customTxt(Fonts.Regular, 13, '#FFFFFF').txt}>{title}</Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            {marginTop: 4},
          ]}>
          {content}
        </Text>
        {devider && <View style={styles.devider} />}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Family doctor'} textRight={true} />
      <ScrollView style={{marginTop: 27}}>
        {renderLine('Full Name', 'Dr Lilly Lie', true)}
        {renderLine('Mobile Number', '+65 6220 7572', true)}
        {renderLine('Clinic or Hospital', 'Everton Clinic', false)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  devider: {
    height: 1,
    width: '100%',
    backgroundColor: '#363636',
    marginTop: 12,
  },
});
