import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import Fonts from '../../../constants/Fonts';
import {customTxt} from '../../../constants/fontStyle';
import NavigationService from '../../../navigation';

// assets
import ProfileAssets from '../../../../assets/images/profile';

export default function header({title, textRight}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          NavigationService.goBack();
        }}>
        <Image source={ProfileAssets.ic_back} style={styles.styleIcon} />
      </TouchableOpacity>
      <View>
        <Text style={customTxt(Fonts.SemiBold, 24, '#FFFFFF').txt}>
          {title}
        </Text>
      </View>
      {!textRight && <View style={styles.styleIcon} />}
      {textRight && (
        <TouchableOpacity>
          <Text style={customTxt(Fonts.SemiBold, 12, '#EA7101').txt}>EDIT</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  styleIcon: {
    height: 30,
    width: 30,
  },
});
