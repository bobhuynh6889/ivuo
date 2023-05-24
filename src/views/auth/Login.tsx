import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';

// library
// import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';

// services
import Routes from '../../navigation/Routes';
import NavigationService from '../../navigation';
import {colorPrimary} from '../../constants/color';
import Fonts from '../../constants/Fonts';
import {customTxt} from '../../constants/fontStyle';

// component
import Button from '../../components/Button';
import LoadingView from '../../components/LoadingView';

//img
import Logo from '../../../assets/images/logo';
import AuthImg from '../../../assets/images/auth';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isSecurePass, setSecurePass] = useState(true);
  const [isLoading, setLoading] = useState(false);

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
        <Text style={customTxt(Fonts.Bold, 24, '#FFFFFF').txt}>
          Let’s Sign You In
        </Text>
        <Text style={customTxt(Fonts.SemiBold, 18, '#FFFFFF').txt}>
          Welcome back, you’ve been missed!
        </Text>
      </View>
    );
  };

  const renderInput = (
    iconName: string,
    title: string,
    placeholder: string,
    value: any,
    setValue: any,
    secureTextEntry?: boolean,
    iconRight?: boolean,
  ) => {
    return (
      <View style={{marginBottom: 20}}>
        <View style={styles.ctnTitleInput}>
          <Text style={customTxt(Fonts.Bold, 16, '#FFFFFF').txt}>{title}</Text>
        </View>
        <View style={styles.ctnTextInput}>
          <View style={{flex: 1}}>
            <TextInput
              placeholder={placeholder}
              style={[
                customTxt(Fonts.SemiBold, 16, '#FFFFFF').txt,
                {width: '100%'},
              ]}
              value={value}
              onChangeText={(text: any) => setValue(text)}
              secureTextEntry={secureTextEntry || false}
              autoCapitalize={'none'}
              placeholderTextColor={'#999999'}
            />
          </View>
          {iconRight && (
            <TouchableOpacity
              onPress={() => {
                setSecurePass(!isSecurePass);
              }}
              style={{height: 20, width: 20}}>
              <FeatherIcon
                name={isSecurePass ? 'eye' : 'eye-off'}
                size={20}
                color="#A9A9A9CC"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  const checkEmailValid = (value: any): boolean => {
    let regex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    regex.test(value);
    return regex.test(value);
  };

  const checkPasswordValid = (value: any): boolean => {
    let regex = new RegExp(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
    );
    regex.test(value);
    return regex.test(value);
  };

  const checkDisableBtnRegister = () => {
    if (checkEmailValid(email) && checkPasswordValid(password)) {
      return false;
    } else {
      return true;
    }
  };

  const _onPressSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      NavigationService.navigate(Routes.BOTTOM_TAB_SCREEN, {});
    }, 300);
  };

  const _onPressSignUp = () => {
    setTimeout(() => {
      NavigationService.navigate(Routes.REGISTER_SCREEN, {});
    }, 300);
  };

  const _onPressForgotPassword = () => {
    setTimeout(() => {
      NavigationService.navigate(Routes.FORGOT_PASS_SCREEN, {});
    }, 300);
  };

  const renderInputRegister = () => {
    return (
      <View style={styles.ctnForm}>
        {renderInput(
          'mail',
          'Email',
          'Enter your email',
          checkEmailValid(email),
          setEmail,
        )}
        <View style={{height: 30}} />
        {renderInput(
          'lock',
          'Password',
          'Enter your password',
          checkPasswordValid(password),
          setPassword,
          isSecurePass,
          true,
        )}
        <TouchableOpacity
          onPress={_onPressForgotPassword}
          style={styles.ctnForgotPass}>
          <Text style={customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt}>
            Forgotten password?
          </Text>
        </TouchableOpacity>
        <Button
          text="Sign In"
          stylesText={
            checkDisableBtnRegister()
              ? customTxt(Fonts.Bold, 18, '#A9A9A9').txt
              : customTxt(Fonts.Bold, 18, '#FFFFFF').txt
          }
          viewStyle={
            checkDisableBtnRegister()
              ? styles.btnRegisterStyle
              : styles.btnRegisterStyleActive
          }
          disabled={checkDisableBtnRegister()}
          onPress={_onPressSignIn}
        />
      </View>
    );
  };

  const renderOtherLogin = () => {
    return (
      <View style={styles.ctnOtherLogin}>
        <Text style={customTxt(Fonts.Bold, 18, '#FFFFFF').txt}>
          Or log in with
        </Text>
        <View style={styles.ctnIconLogin}>
          <Image source={AuthImg.ic_google} style={styles.iconStyle} />
          <Image source={AuthImg.ic_apple} style={styles.iconApple} />
          <Image source={AuthImg.ic_linkedln} style={styles.iconStyle} />
        </View>
        <View style={styles.ctnBottomText}>
          <Text style={customTxt(Fonts.Regular, 16, '#FFFFFF').txt}>
            Don’t have an account?{' '}
          </Text>
          <TouchableOpacity onPress={_onPressSignUp}>
            <Text style={customTxt(Fonts.ExtraBold, 18, colorPrimary).txt}>
              Join us
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View>
        {renderLogo()}
        {renderTitle()}
        {renderInputRegister()}
        {renderOtherLogin()}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="black" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardStyle}>
        <ScrollView style={styles.container}>{renderBody()}</ScrollView>
      </KeyboardAvoidingView>
      {isLoading && <LoadingView />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010919',
  },
  keyboardStyle: {
    width: '100%',
    height: '100%',
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
  },
  contentStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#525C67',
    marginTop: 8,
  },
  ctnInput: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 13,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#A9A9A966',
  },
  ctnInputActive: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 13,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: colorPrimary,
  },
  ctnTitleInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ctnTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1A2230',
    height: 52,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  textInputStyle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  ctnForm: {
    paddingHorizontal: 25,
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
  ctnBottomText: {
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
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
  ctnOtherLogin: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 150,
  },
  ctnForgotPass: {
    marginTop: 6,
    alignItems: 'flex-end',
  },
});
