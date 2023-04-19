import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

// library
import AntIcon from 'react-native-vector-icons/AntDesign';

// services
import Routes from '../../navigation/Routes';
import NavigationService from '../../navigation';
import {colorPrimary} from '../../constants/color';

// component
import Button from '../../components/Button';
import LoadingView from '../../components/LoadingView';

//img
import Logo from '../../../assets/images/logo';

export default function ForgotPassword() {
  const [email, setEmail] = useState();
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
        <Text style={styles.titleStyle}>Password Recovery</Text>
        <Text style={styles.contentStyle}>Please enter your email address</Text>
        <Text style={styles.contentStyle}>to recover your password</Text>
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

  const checkDisableBtnRegister = () => {
    if (checkEmailValid(email)) {
      return false;
    } else {
      return true;
    }
  };

  const _onPressSendEmail = () => {
    setLoading(true);
    setTimeout(() => {
      NavigationService.navigate(Routes.OTP_SCREEN, {});
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
        <Button
          text="Send Email"
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
          onPress={_onPressSendEmail}
        />
      </View>
    );
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
    <SafeAreaView style={styles.container}>
      <ScrollView>{renderBody()}</ScrollView>
      {isLoading && <LoadingView />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
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
  textInputStyle: {
    marginTop: 13,
    fontSize: 16,
    color: '#323438',
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
});
