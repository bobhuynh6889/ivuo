import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

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

export default function RegisterByPhone() {
  const [isLoading, setLoading] = useState(false);
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
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
          Welcome to iUVO
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
    if (pass !== undefined && password !== undefined) {
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
          'First Name',
          '',
          checkPasswordValid(password),
          setPassword,
        )}
        <View style={{height: 30}} />
        {renderInput(
          'checkcircleo',
          'Last Name',
          '',
          checkConfirmPass(password2),
          setPassword2,
        )}
      </View>
    );
  };

  const _onPressReset = () => {
    setLoading(true);
    setTimeout(() => {
      NavigationService.navigate(Routes.BOTTOM_TAB_SCREEN, {});
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
            text="Complete"
            stylesText={
              checkConfirmPass(password2)
                ? customTxt(Fonts.Bold, 18, '#FFFFFF').txt
                : customTxt(Fonts.Bold, 18, '#A9A9A9').txt
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
      <StatusBar barStyle={'light-content'} backgroundColor="black" />
      <ScrollView style={styles.flex1}>{renderBody()}</ScrollView>
      {isLoading && <LoadingView />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010919',
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
  ctnForm: {
    paddingHorizontal: 25,
  },
});
