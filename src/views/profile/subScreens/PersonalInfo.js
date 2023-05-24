import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

// in source
import Fonts from '../../../constants/Fonts';
import {customTxt} from '../../../constants/fontStyle';

// assets
import ProfileAssets from '../../../../assets/images/profile';

import Header from '../components/Header';

export default function PersonalInfo() {
  const renderLine = (title, content, devider) => {
    return (
      <View style={{marginTop: 12}}>
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
  const renderBody = () => {
    return (
      <View>
        <Image
          source={ProfileAssets.avatar_full}
          style={{height: 344, width: '100%', marginTop: 26}}
        />
        <View style={{marginHorizontal: 20, marginTop: 24}}>
          {renderLine('Alias', 'Mom', true)}
          {renderLine('Date of birth', '17 February 1951', true)}
          {renderLine('Height', '1.57 meters', true)}
          {renderLine('Weight', '69 kg', true)}
          {renderLine('Gender', 'Female', true)}
          {renderLine('Will you be wearing the iUvo ring?', 'Yes', false)}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Personal info'} textRight={true} />
      <ScrollView>{renderBody()}</ScrollView>
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
