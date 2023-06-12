import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

// in source
import Fonts from '../../constants/Fonts';
import {customTxt} from '../../constants/fontStyle';
import Routes from '../../navigation/Routes';
import NavigationService from '../../navigation';

// assets
import Avatar from '../../../assets/images/home';
import ProfileAssets from '../../../assets/images/profile';

const dataSetting = [
  {
    icon: ProfileAssets.ic_setting,
    title: 'Setting',
    onPress: () => {
      NavigationService.navigate(Routes.SETTING_SCREEN, {});
    },
  },
  {
    icon: ProfileAssets.ic_support,
    title: 'Support',
  },
  {
    icon: ProfileAssets.ic_legal,
    title: 'Legal',
    onPress: () => {
      NavigationService.navigate(Routes.LEGAL_SCREEN, {});
    },
  },
  {
    icon: ProfileAssets.ic_software,
    title: 'Software',
    onPress: () => {
      NavigationService.navigate(Routes.SOFTWARE_SCREEN, {});
    },
  },
];

const RenderItem = ({item, index}) => {
  return (
    <View>
      <TouchableOpacity onPress={item?.onPress} style={styles.itemSetting}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.ctnIconSetting}>
            <Image source={item?.icon} style={{height: 22, width: 22}} />
          </View>
          <Text style={customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt}>
            {item?.title}
          </Text>
        </View>
        <Image
          source={ProfileAssets.ic_navigate_small}
          style={{height: 16, width: 16}}
        />
      </TouchableOpacity>
      {index !== dataSetting.length - 1 && <View style={styles.devider} />}
    </View>
  );
};

export default function Profile() {
  const _onPressDetailInfo = () => {
    NavigationService.navigate(Routes.PERSONAL_INFO_SCREEN, {});
  };
  const lineProfile = () => {
    return (
      <TouchableOpacity
        onPress={_onPressDetailInfo}
        style={styles.ctnLineProfile}>
        <View style={{flexDirection: 'row'}}>
          <Image source={Avatar.avatar} style={{height: 55, width: 55}} />
          <View style={{justifyContent: 'center', marginLeft: 10}}>
            <Text style={customTxt(Fonts.Bold, 20, '#FFFFFF').txt}>Mom</Text>
            <Text style={customTxt(Fonts.SemiBold, 13, '#999999').txt}>
              Show profile
            </Text>
          </View>
        </View>
        <Image
          source={ProfileAssets.ic_navigate}
          style={{height: 30, width: 30}}
        />
      </TouchableOpacity>
    );
  };

  const renderSetting = () => {
    return (
      <View style={{marginHorizontal: 15}}>
        <FlatList
          data={dataSetting}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} />
          )}
        />
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 24, '#FFFFFF').txt,
            {marginTop: 10, marginLeft: 15},
          ]}>
          Profile
        </Text>
        {lineProfile()}
        {renderSetting()}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="black" />
      <ScrollView>{renderBody()}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  ctnLineProfile: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#222222',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 35,
  },
  ctnIconSetting: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  itemSetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  devider: {
    height: 1,
    width: '100%',
    backgroundColor: '#363636',
    marginTop: 12,
  },
});
