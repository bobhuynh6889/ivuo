import {StyleSheet, ImageBackground, StatusBar, View, Text} from 'react-native';
import React from 'react';

// in source
import NavigationService from '../navigation';
import Routes from '../navigation/Routes';
import Button from '../components/Button';

// style
import {colorPrimary, colorSemi} from '../constants/color';
import {customTxt} from '../constants/fontStyle';
import Fonts from '../constants/Fonts';

//img
import AuthImg from '../../assets/images/auth';

export default function FirstScreen() {
  return (
    <ImageBackground
      source={AuthImg.background_2}
      resizeMode="cover"
      style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="black" />
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Text style={customTxt(Fonts.ExtraBold, 24, '#FFFFFF').txt}>
          FROM IUVO
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 13, '#989898').txt,
            {marginHorizontal: 20, marginTop: 20},
          ]}>
          The iUvo Ring is not a medical-grade device. It is important to always
          seek medical advice from a qualified professional, especially when it
          comes to matters related to one's health and well-being.
        </Text>
        <View style={{}}>
          <Button
            onPress={() => {
              NavigationService.navigate(Routes.REGISTER_SCREEN, {});
            }}
            text={'GET STARTED'}
            stylesText={customTxt(Fonts.SemiBold, 12, '#FFFFFF').txt}
            disabled={false}
            viewStyle={styles.btnGetStarted}
            backgroundColor={'#565656'}
          />
        </View>
      </View>
      {/* <View
        style={{
          flex: 1.5,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: '700',
            color: 'white',
            marginBottom: 16,
            fontFamily: 'Urbanist',
          }}>
          Welcome to iUVO
        </Text>
        <Text style={styles.sloganStyle}>Health and Wellness</Text>
        <Text style={styles.sloganStyle}>At Your fingertips</Text>
      </View> */}
      {/* BUTTON */}
      {/* <View style={styles.ctnBottomView}>
        <View style={styles.ctnButton}>
          <Button
            onPress={() => {
              NavigationService.navigate(Routes.LOGIN_SCREEN, {});
            }}
            backgroundColor={colorPrimary}
            text={'Sign in'}
            stylesText={styles.textSignUpStyle}
            disabled={false}
          />
          <Button
            onPress={() => {
              NavigationService.navigate(Routes.REGISTER_SCREEN, {});
            }}
            text={'Join us'}
            stylesText={styles.textJoinUsStyle}
            disabled={false}
            viewStyle={styles.btnJoinusStyle}
          />
        </View>
        <View style={styles.ctnDisclaimer}>
          <Text style={{color: '#525C67', fontSize: 11}}>
            The iUvo Ring is not a medical-grade device. It is important to
            always seek medical advice from a qualified professional, especially
            when it comes to matters related to one's health and well-being.
          </Text>
        </View>
      </View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 53,
  },
  ctnBottomView: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  ctnButton: {
    marginHorizontal: 20,
    marginTop: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 9,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textLogInStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  textSignUpStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  iconStyle: {
    height: 28,
    width: 28,
  },
  iconApple: {
    height: 30,
    width: 30,
  },
  ctnIconLogin: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 16,
    width: '50%',
  },
  sloganStyle: {
    fontSize: 24,
    marginHorizontal: 20,
    fontWeight: '700',
    color: 'white',
    fontFamily: 'Urbanist',
  },
  ctnDisclaimer: {
    height: 70,
    alignItems: 'center',
    marginHorizontal: 18,
    justifyContent: 'flex-end',
  },
  ctnBottomText: {
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textJoinUsStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  btnJoinusStyle: {
    borderWidth: 1.5,
    borderColor: colorSemi,
    marginTop: 14,
    height: 48,
  },
  btnGetStarted: {
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 42,
    marginTop: 40,
  },
});
