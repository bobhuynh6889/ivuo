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

// assets
import MarketPlaceAssets from '../../../../assets/images/marketplace';

const data = [
  {
    image: MarketPlaceAssets.image_jar,
  },
  {
    image: MarketPlaceAssets.image_utensils,
  },
  {
    image: MarketPlaceAssets.image_palm,
  },
  {
    image: MarketPlaceAssets.image_vegetable,
  },
  {
    image: MarketPlaceAssets.image_chopper,
  },
  {
    image: MarketPlaceAssets.image_cordless,
  },
];

const RenderItem = ({item}) => {
  return (
    <TouchableOpacity style={{marginRight: 10, marginTop: 10}}>
      <Image
        source={item?.image}
        style={{height: 120, width: (Dimensions.get('screen').width - 40) / 2}}
      />
    </TouchableOpacity>
  );
};

export default function Goods() {
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
    marginHorizontal: 15,
    marginTop: 27,
  },
});
