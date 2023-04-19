import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';

// library
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';

// services
import Routes from '../../navigation/Routes';
import NavigationService from '../../navigation';
import {colorPrimary} from '../../constants/color';

// component
import Button from '../../components/Button';
import LoadingView from '../../components/LoadingView';

//img
import Logo from '../../../assets/images/logo';

export default function Register() {
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
        <Text style={styles.titleStyle}>Get Started</Text>
        <Text style={styles.contentStyle}>Create an account to continue!</Text>
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
      <View style={value ? styles.ctnInputActive : styles.ctnInput}>
        <View style={styles.ctnTitleInput}>
          <AntIcon
            name={iconName}
            size={30}
            color={value ? colorPrimary : '#A9A9A9CC'}
          />
          <Text style={{color: '#32343899', marginLeft: 8}}>{title}</Text>
        </View>
        <View style={styles.ctnTextInput}>
          <View style={{flex: 1}}>
            <TextInput
              placeholder={placeholder}
              style={[styles.textInputStyle, {width: '100%'}]}
              value={value}
              onChangeText={(text: any) => setValue(text)}
              secureTextEntry={secureTextEntry || false}
              autoCapitalize={'none'}
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

  const checkDisableBtnRegister = () => {
    if (checkEmailValid(email) && checkPasswordValid(password)) {
      return false;
    } else {
      return true;
    }
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
        {renderInput(
          'lock',
          'Password',
          'Minimun 8 characters',
          checkPasswordValid(password),
          setPassword,
          isSecurePass,
          true,
        )}
        <Button
          text="Create account"
          stylesText={
            checkDisableBtnRegister()
              ? styles.textRegisterStyle
              : styles.textRegisterStyleActive
          }
          viewStyle={
            checkDisableBtnRegister()
              ? styles.btnRegisterStyle
              : styles.btnRegisterStyleActive
          }
          disabled={checkDisableBtnRegister()}
          onPress={_onPressRegister}
        />
        <View style={styles.ctnBottomText}>
          <Text style={{color: '#323438CC', marginRight: 4}}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={_onPressSignIn}>
            <Text
              style={{color: colorPrimary, fontWeight: '700', fontSize: 16}}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const _onPressSignIn = () => {
    NavigationService.navigate(Routes.LOGIN_SCREEN, {});
  };

  const _onPressRegister = () => {
    setLoading(true);
    setTimeout(() => {
      NavigationService.navigate(Routes.HOME_SCREEN, {});
    }, 300);
  };

  const renderBody = () => {
    return (
      <View>
        {renderLogo()}
        {renderTitle()}
        {renderInputRegister()}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar barStyle={'dark-content'} backgroundColor="black" />
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
  flex: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
  },
  keyboardStyle: {
    width: '100%',
    height: '100%',
  },
  ctnLogo: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  logoStyle: {
    color: '#7C9A93',
    fontSize: 56,
    fontWeight: '900',
  },
  ctnTitle: {
    marginHorizontal: 20,
    marginBottom: 40,
    marginTop: 15,
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
  ctnForm: {
    height: '100%',
    paddingHorizontal: 25,
  },
  ctnInput: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 13,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#A9A9A966',
    marginBottom: 30,
  },
  ctnInputActive: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 13,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: colorPrimary,
    marginBottom: 30,
  },
  placeholderStyle: {
    marginTop: 13,
    fontSize: 16,
    color: '#A9A9A9',
  },
  textInputStyle: {
    marginTop: 13,
    fontSize: 16,
    color: '#323438',
    fontWeight: '600',
  },
  ctnTitleInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ctnTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
});
