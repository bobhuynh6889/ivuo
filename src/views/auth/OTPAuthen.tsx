import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';

// services
import Routes from '../../navigation/Routes';
import NavigationService from '../../navigation';
import {colorPrimary} from '../../constants/color';

// component
import Button from '../../components/Button';
import LoadingView from '../../components/LoadingView';

//img
import Logo from '../../../assets/images/logo';

export default function OTPAuthen() {
  const [isLoading, setLoading] = useState(false);
  const [code1, setCode1] = useState<any>();
  const [code2, setCode2] = useState<any>();
  const [code3, setCode3] = useState<any>();
  const [code4, setCode4] = useState<any>();
  const [check, setCheck] = useState<any>('');

  const renderLogo = () => {
    return (
      <View style={styles.ctnLogo}>
        <Image source={Logo.logo1} style={{height: 100, width: 200}} />
      </View>
    );
  };

  const renderTitle = () => {
    return (
      <View style={styles.ctnTitle}>
        <Text style={styles.titleStyle}>Verification</Text>
        <Text style={styles.contentStyle}>
          Enter your verification code that we sent you
        </Text>
        <Text style={styles.contentStyle}>through your e-mail.</Text>
      </View>
    );
  };

  const renderInputItem = (value: any) => {
    return (
      <View style={styles.ctnInputItem}>
        <Text style={styles.textInputStyle}>{value}</Text>
      </View>
    );
  };

  const renderInputCode = () => {
    return (
      <View style={styles.ctnInputCode}>
        {renderInputItem(code1)}
        {renderInputItem(code2)}
        {renderInputItem(code3)}
        {renderInputItem(code4)}
      </View>
    );
  };

  useEffect(() => {
    let checkLength = check.split('');
    if (checkLength.length > 0) {
      setCode1(checkLength[0]);
      setCode2(checkLength[1]);
      setCode3(checkLength[2]);
      setCode4(checkLength[3]);
    } else {
      setCode1('');
      setCode2('');
      setCode3('');
      setCode4('');
    }
  }, [check]);

  const checkDisable = () => {
    let checkLength = check.split('');
    if (checkLength.length >= 4) {
      return false;
    } else {
      return true;
    }
  };

  const _onPressContinue = () => {
    setLoading(true);
    setTimeout(() => {
      NavigationService.navigate(Routes.RESET_PASSWORD_SCREEN, {});
    }, 300);
  };

  const renderBody = () => {
    return (
      <View>
        <View>
          {renderLogo()}
          {renderTitle()}
          {renderInputCode()}
          <TextInput
            style={styles.textInputStyleFake}
            onChangeText={(text: any) => setCheck(text)}
            autoCapitalize={'none'}
            keyboardType={'number-pad'}
          />
          <Text
            style={[{textAlign: 'center', marginTop: 24}, styles.contentStyle]}>
            Didn’t receive code.{' '}
            <Text style={{color: colorPrimary, fontWeight: '700'}}>
              Resend Code
            </Text>
          </Text>
        </View>
        <View style={styles.ctnButton}>
          <Button
            text="Continue"
            stylesText={
              checkDisable()
                ? styles.textRegisterStyle
                : styles.textRegisterStyleActive
            }
            viewStyle={
              checkDisable()
                ? styles.btnRegisterStyle
                : styles.btnRegisterStyleActive
            }
            disabled={checkDisable()}
            onPress={_onPressContinue}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.flex1}>{renderBody()}</ScrollView>
      {isLoading && <LoadingView />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  flex1: {
    flex: 1,
  },
  ctnLogo: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  ctnTitle: {
    marginHorizontal: 20,
    marginBottom: 40,
    marginTop: 20,
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111A2C',
    marginBottom: 8,
  },
  contentStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#525C67',
    textAlign: 'center',
  },
  ctnInputItem: {
    height: 65,
    width: 65,
    backgroundColor: '#ededf2',
    borderWidth: 1,
    borderColor: '#CFD0D7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctnInputCode: {
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  textInputStyle: {
    fontSize: 16,
    color: '#111A2C',
    fontWeight: '700',
    width: '100%',
    paddingHorizontal: 25,
  },
  textInputStyleFake: {
    opacity: 0,
    height: 65,
    width: '100%',
    marginTop: -65,
    marginHorizontal: 35,
  },
  ctnButton: {
    justifyContent: 'flex-end',
    marginHorizontal: 25,
  },
  textRegisterStyle: {
    color: '#A9A9A9',
    fontSize: 18,
    fontWeight: '700',
  },
  textRegisterStyleActive: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  btnRegisterStyle: {
    borderWidth: 2,
    height: 48,
    borderColor: '#A9A9A9',
    marginTop: 30,
  },
  btnRegisterStyleActive: {
    height: 48,
    marginTop: 30,
    backgroundColor: colorPrimary,
  },
});
