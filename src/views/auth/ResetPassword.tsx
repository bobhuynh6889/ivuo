import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
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

export default function ResetPassword() {
  const [isLoading, setLoading] = useState(false);
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [isSecurePass, setSecurePass] = useState(true);
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
        <Text style={styles.titleStyle}>Reset Your Password</Text>
        <Text style={styles.contentStyle}>
          At least 8 characters, with uppercase and
        </Text>
        <Text style={styles.contentStyle}>lowercase letters.</Text>
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

  const checkPasswordValid = (value: any): boolean => {
    let regex = new RegExp(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
    );
    regex.test(value);
    return regex.test(value);
  };

  const checkConfirmPass = (pass: any) => {
    if (password === pass && password !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  const renderInputRegister = () => {
    return (
      <View style={styles.ctnForm}>
        {renderInput(
          'lock',
          'New Password',
          '',
          checkPasswordValid(password),
          setPassword,
          isSecurePass,
          true,
        )}
        <View style={{height: 30}} />
        {renderInput(
          'checkcircleo',
          'Confirm Password',
          '',
          checkConfirmPass(password2),
          setPassword2,
          isSecurePass,
          true,
        )}
      </View>
    );
  };

  const _onPressReset = () => {
    setLoading(true);
    setTimeout(() => {
      NavigationService.navigate(Routes.CONGRATULATION_SCREEN, {});
    }, 300);
  };

  const renderBody = () => {
    return (
      <View style={{height: '100%'}}>
        <View>
          {renderLogo()}
          {renderTitle()}
          {renderInputRegister()}
        </View>
        <View style={styles.ctnButton}>
          <Button
            text="Reset Password"
            stylesText={
              checkConfirmPass(password2)
                ? styles.textRegisterStyleActive
                : styles.textRegisterStyle
            }
            viewStyle={
              checkConfirmPass(password2)
                ? styles.btnRegisterStyleActive
                : styles.btnRegisterStyle
            }
            disabled={checkConfirmPass(password2) ? false : true}
            onPress={_onPressReset}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="black" />
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
    flex: 1,
    marginHorizontal: 30,
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
  },
  ctnTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ctnForm: {
    paddingHorizontal: 25,
  },
});
