/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';

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
    title: 'English',
  },
  {
    title: 'Chinese',
  },
  {
    title: 'French',
  },
  {
    title: 'German',
  },
  {
    title: 'Italian',
  },
  {
    title: 'Japanese',
  },
  {
    title: 'Spanish',
  },
  {
    title: 'Vietnamese',
  },
];

export default function Language() {
  const [languageSelected, setLanguageSelected] = useState(0);
  useEffect(() => {
    console.log('languageSelected: ', languageSelected);
  }, [languageSelected]);
  const RenderItem = ({item, index}) => {
    const _onPressChoose = () => {
      setLanguageSelected(index);
    };
    return (
      <View
        style={
          languageSelected === index
            ? {marginHorizontal: 0}
            : {marginHorizontal: 15}
        }>
        <TouchableOpacity
          onPress={_onPressChoose}
          style={
            languageSelected === index
              ? styles.itemSetting2
              : styles.itemSetting
          }>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt}>
              {item?.title}
            </Text>
          </View>
          {languageSelected === index && (
            <Image
              source={ProfileAssets.ic_check}
              style={{height: 16, width: 16}}
            />
          )}
        </TouchableOpacity>
        {index !== dataList.length - 1 && languageSelected !== index && (
          <View style={styles.devider} />
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Language'} />
      <View>
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
  itemSetting2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#222222',
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  devider: {
    height: 1,
    width: '100%',
    backgroundColor: '#363636',
    marginTop: 12,
  },
});
