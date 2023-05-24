import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import React from 'react';

import Header from '../../../profile/components/Header';
import MarketplaceAssets from '../../../../../assets/images/marketplace';
import Fonts from '../../../../constants/Fonts';
import {customTxt} from '../../../../constants/fontStyle';

const data = [
  {
    img: MarketplaceAssets.img_econ,
    title: 'ECON',
    content1: 'Personalised home care by trained',
    content2: 'teams for quality round-the-clock',
    content3: 'care in your own home.',
    phone: '+65 6228 1188',
  },
  {
    img: MarketplaceAssets.img_enale_guide,
    title: 'ENABLING GUIDE',
    content1: 'Day care, residential programmes',
    content2: 'and other care services are',
    content3: 'available to support persons with...',
    phone: '+65 6226 2366',
  },
  {
    img: MarketplaceAssets.img_enale_guide2,
    title: 'ENABLING',
    content1: 'ElderAid is a befriending and',
    content2: 'wellness programme to achieve a',
    content3: 'community ageing-in-place.',
    phone: '+65 6664 0500',
  },
];

const RenderItem = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <Image source={item?.img} style={{height: 100, width: 145}} />
      <View style={{marginLeft: 10}}>
        <Text style={customTxt(Fonts.Bold, 16, '#FFFFFF').txt}>
          {item?.title}
        </Text>
        <Text
          numberOfLines={3}
          style={[customTxt(Fonts.Regular, 13, '#FFFFFF').txt, {marginTop: 4}]}>
          {item?.content1}
        </Text>
        <Text
          numberOfLines={3}
          style={[customTxt(Fonts.Regular, 13, '#FFFFFF').txt]}>
          {item?.content2}
        </Text>
        <Text
          numberOfLines={3}
          style={[
            customTxt(Fonts.Regular, 13, '#FFFFFF').txt,
            {marginBottom: 8},
          ]}>
          {item?.content3}
        </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`tel:${item?.phone}`);
          }}
          style={{flexDirection: 'row'}}>
          <Image
            source={MarketplaceAssets.ic_phone}
            style={{height: 16, width: 16, marginRight: 4}}
          />
          <Text style={customTxt(Fonts.Medium, 13, '#FFFFFF').txt}>
            {item?.phone}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function DisabilityCare() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Disability Care'} />
      <View style={{marginTop: 40}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});
