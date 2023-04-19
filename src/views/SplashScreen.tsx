import {View, StyleSheet, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';

// library
import * as Animatable from 'react-native-animatable';

// in source
import NavigationService from '../navigation';
import Routes from '../navigation/Routes';
import {colorPrimary} from '../constants/color';

//img
import Logo from '../../assets/images/logo';

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.navigate(Routes.FIRST_SCREEN, {});
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#F4F6FA" />
      <View style={styles.ctnLogo}>
        <Animatable.View duration={1500} animation="pulse">
          <Image source={Logo.logo_splash} style={styles.logoStyle} />
        </Animatable.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: '#000000',
  },
  ctnLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    resizeMode: 'stretch',
  },
  ctnDisclaimer: {
    height: 100,
    alignItems: 'center',
    marginHorizontal: 18,
    justifyContent: 'flex-end',
  },
  sloganStyle: {
    fontSize: 24,
    marginHorizontal: 20,
    fontWeight: '700',
    color: colorPrimary,
  },
});
