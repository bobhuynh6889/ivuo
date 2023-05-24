import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

//in source
import Fonts from '../../constants/Fonts';
import {customTxt} from '../../constants/fontStyle';
import Routes from '../../navigation/Routes';
import NavigationService from '../../navigation';

// icon
import HomeIcon from '../../../assets/images/home';

export default function Notification() {
  const _onPressBack = () => {
    NavigationService.goBack();
  };
  const renderHeader = () => {
    return (
      <View style={styles.ctnHeader}>
        <TouchableOpacity onPress={_onPressBack}>
          <Image source={HomeIcon.ic_back} style={styles.iconStyle} />
        </TouchableOpacity>
        <View>
          <Text style={customTxt(Fonts.SemiBold, 24, '#FFFFFF').txt}>
            Notifications
          </Text>
        </View>
        <View></View>
      </View>
    );
  };
  const _onPressDetail = () => {
    NavigationService.navigate(Routes.DETAIL_NOTI_SCREEN, {});
  };
  const renderBody = () => {
    return (
      <TouchableOpacity onPress={_onPressDetail} style={styles.ctnBody}>
        <View style={{marginRight: 12}}>
          <Image source={HomeIcon.ic_falling} style={styles.iconStyle} />
        </View>
        <View>
          <Text
            style={[
              customTxt(Fonts.Medium, 16, '#FFFFFF').txt,
              {marginBottom: 4},
            ]}>
            Looks like your mother has had a fall.
          </Text>
          <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
            09:54am, Today
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="black" />
      {renderHeader()}
      {renderBody()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
  ctnHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  ctnBody: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
});
