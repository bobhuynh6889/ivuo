/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import Fonts from '../../../constants/Fonts';
import {customTxt} from '../../../constants/fontStyle';
import Routes from '../../../navigation/Routes';
import NavigationService from '../../../navigation';

// assets
import MarketPlaceAssets from '../../../../assets/images/marketplace';

const data = [
  {
    image: MarketPlaceAssets.img_rapid_res,
  },
  {
    image: MarketPlaceAssets.img_palliative_care,
  },
  {
    image: MarketPlaceAssets.img_disability_care,
    onPress: () => {
      NavigationService.navigate(Routes.DISABILITY_CARE_SCREEN, {});
    },
  },
  {
    image: MarketPlaceAssets.img_companionship,
  },
  {
    image: MarketPlaceAssets.img_dementia_care,
  },
  {
    image: MarketPlaceAssets.img_parkinson_care,
  },
];

const RenderItem = ({item}) => {
  return (
    <TouchableOpacity
      onPress={item?.onPress}
      style={{marginTop: 10, marginLeft: 10}}>
      <Image
        source={item?.image}
        style={{height: 120, width: (Dimensions.get('screen').width - 40) / 2}}
      />
    </TouchableOpacity>
  );
};

export default function Services() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={MarketPlaceAssets.main} style={styles.mainImg} />
      </View>
      <View style={styles.ctnList}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} />
          )}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  mainImg: {
    height: 195,
    width: '100%',
  },
  ctnList: {
    alignItems: 'center',
    marginTop: 27,
    marginRight: 10,
  },
});
