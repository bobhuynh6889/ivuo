import {
  View,
  Text,
  StyleSheet,
  NativeModules,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

// in source
import HomeIcon from '../../assets/images/home';
import Fonts from '../constants/Fonts';
import {customTxt} from '../constants/fontStyle';

export default function NotiView({onClose}) {
  const [h, setH] = useState(0);
  useEffect(() => {
    const {StatusBarManager} = NativeModules;
    setH(StatusBarManager.HEIGHT);
  }, []);
  return (
    <View style={[styles.container, {top: h}]}>
      <View style={styles.ctnBody}>
        <View style={styles.ctnLine1}>
          <View></View>
          <View style={styles.ctnTitle}>
            <Image source={HomeIcon.ic_logo} style={styles.logoStyle} />
            <Text style={customTxt(Fonts.Medium, 16, '#FFFFFF').txt}>
              FALL DETECTION
            </Text>
          </View>
          <TouchableOpacity onPress={onClose}>
            <Image source={HomeIcon.ic_close} style={styles.iconClose} />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.ctnLine2}>
          <Image source={HomeIcon.ic_falling} style={styles.iconFalling} />
          <Text style={customTxt(Fonts.Medium, 16, '#FFFFFF').txt}>
            Looks like your mother has had a fall.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  ctnBody: {
    backgroundColor: '#222127',
    marginHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 8,
    shadowColor: '#00000066',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 17,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#2F2F2F',
  },
  logoStyle: {
    height: 30,
    width: 33,
    marginRight: 12,
  },
  ctnTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconClose: {
    height: 14,
    width: 14,
  },
  ctnLine1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#2F2F2F',
    marginVertical: 15,
  },
  ctnLine2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  iconFalling: {
    height: 30,
    width: 30,
    marginRight: 15,
  },
});
