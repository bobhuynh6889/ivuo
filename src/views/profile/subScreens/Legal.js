import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';

// in source
import Fonts from '../../../constants/Fonts';
import {customTxt} from '../../../constants/fontStyle';
import Routes from '../../../navigation/Routes';
import NavigationService from '../../../navigation';

// assets
import ProfileAssets from '../../../../assets/images/profile';

import Header from '../components/Header';

const dataList = [
  {
    title: 'Privacy Policy',
    onPress: () => {
      NavigationService.navigate(Routes.PRIVACY_SCREEN, {});
    },
  },
  {
    title: 'Terms of Use',
    onPress: () => {
      NavigationService.navigate(Routes.TERM_SCREEN, {});
    },
  },
  {
    title: 'Medical Disclaimer',
    onPress: () => {
      NavigationService.navigate(Routes.DISCLAIMER_SCREEN, {});
    },
  },
];

const RenderItem = ({item, index}) => {
  return (
    <View>
      <TouchableOpacity onPress={item?.onPress} style={styles.itemSetting}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt}>
            {item?.title}
          </Text>
        </View>
        <Image
          source={ProfileAssets.ic_navigate_small}
          style={{height: 16, width: 16}}
        />
      </TouchableOpacity>
      {index !== dataList.length - 1 && <View style={styles.devider} />}
    </View>
  );
};

export default function Legal() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Legal'} />
      <View style={{marginHorizontal: 15}}>
        <FlatList
          data={dataList}
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
