import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

// in source
import Fonts from '../../../constants/Fonts';
import {customTxt} from '../../../constants/fontStyle';

// image
import JournalAssets from '../../../../assets/images/journal';

export default function Activities() {
  return (
    <View style={styles.container}>
      <View style={styles.ctnEdit}>
        <Text style={customTxt(Fonts.SemiBold, 14, '#EA7101').txt}>EDIT</Text>
        <TouchableOpacity>
          <Image
            source={JournalAssets.ic_plus}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={JournalAssets.ic_empty}
          style={{height: 75, width: 75}}
        />
      </View>
      <TouchableOpacity style={styles.btnRec}>
        <Image
          source={JournalAssets.ic_recommedation}
          style={{height: 20, width: 20, marginRight: 4}}
        />
        <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
          RECOMMENDATIONS
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    justifyContent: 'space-between',
    paddingBottom: 48,
  },
  ctnEdit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 28,
  },
  btnRec: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#5A5D60',
    borderRadius: 8,
    marginHorizontal: 105,
    alignItems: 'center',
  },
});
