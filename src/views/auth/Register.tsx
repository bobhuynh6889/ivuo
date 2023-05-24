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
  Modal,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';

// library
import AntIcon from 'react-native-vector-icons/AntDesign';
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

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isSecurePass, setSecurePass] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [phone, setPhone] = useState();
  const [phoneCode, setPhoneCode] = useState<any>();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCapcha, setModalCapcha] = useState(false);
  const [capcha, setCapcha] = useState();
  const [modalDigit, setModalDigit] = useState(false);
  const [code1, setCode1] = useState<any>();
  const [code2, setCode2] = useState<any>();
  const [code3, setCode3] = useState<any>();
  const [code4, setCode4] = useState<any>();
  const [code5, setCode5] = useState<any>();
  const [code6, setCode6] = useState<any>();
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
        <Text style={customTxt(Fonts.Bold, 24, '#FFFFFF').txt}>
          Get Started
        </Text>
        <Text style={customTxt(Fonts.SemiBold, 18, '#FFFFFF').txt}>
          Create an account to continue!
        </Text>
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
                ,
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
              ? customTxt(Fonts.Bold, 18, '#A9A9A9').txt
              : customTxt(Fonts.Bold, 18, '#FFFFFF').txt
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
          <Text style={customTxt(Fonts.Regular, 16, '#FFFFFF').txt}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={_onPressSignIn}>
            <Text style={customTxt(Fonts.ExtraBold, 18, colorPrimary).txt}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        {renderSignUpByPhone()}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.bottomView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => {
                  setPhoneCode(1);
                  setModalVisible(!modalVisible);
                }}
                style={styles.ctnLineCode}>
                <Text>+1</Text>
                <Text>United States</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPhoneCode(65);
                  setModalVisible(!modalVisible);
                }}
                style={styles.ctnLineCode}>
                <Text>+65</Text>
                <Text>Singapore</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPhoneCode(65);
                  setModalVisible(!modalVisible);
                }}
                style={styles.ctnLineCode}>
                <Text>+82</Text>
                <Text>Korea</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPhoneCode(84);
                  setModalVisible(!modalVisible);
                }}
                style={styles.ctnLineCode}>
                <Text>+84</Text>
                <Text>Viet Nam</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {renderCapcha()}
        {renderDigitCode()}
      </View>
    );
  };

  const _onPressSignIn = () => {
    NavigationService.navigate(Routes.LOGIN_SCREEN, {});
  };

  const _onPressRegister = () => {
    setLoading(true);
    setTimeout(() => {
      NavigationService.navigate(Routes.BOTTOM_TAB_SCREEN, {});
    }, 300);
  };

  const renderSignUpByPhone = () => {
    return (
      <View style={{alignItems: 'center', marginTop: 36}}>
        <Text style={customTxt(Fonts.Regular, 16, '#FFFFFF').txt}>
          Or sign up with your number instead
        </Text>
        <View style={styles.phoneNumber}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
            style={styles.ctnPhoneCode}>
            <Text style={customTxt(Fonts.Regular, 16, '#FFFFFF').txt}>+</Text>
            <Text style={customTxt(Fonts.Regular, 16, '#FFFFFF').txt}>
              {phoneCode}
            </Text>
            {!phoneCode && (
              <AntIcon
                name={'caretdown'}
                size={15}
                color={'white'}
                style={{marginLeft: 8}}
              />
            )}
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput
              placeholder={'Enter your number'}
              style={[customTxt(Fonts.SemiBold, 16, '#FFFFFF').txt]}
              value={phone}
              onChangeText={(text: any) => setPhone(text)}
              keyboardType={'phone-pad'}
              placeholderTextColor={'#999999'}
            />
            <TouchableOpacity
              onPress={() => {
                setModalCapcha(true);
              }}
              style={{height: 20, width: 20}}>
              <AntIcon name={'arrowright'} size={20} color="#A9A9A9CC" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderCapcha = () => {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalCapcha}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalCapcha(!modalCapcha);
          }}>
          <View style={styles.centerView}>
            <View style={styles.capchaView}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{height: 20, width: 20}} />
                <Text style={customTxt(Fonts.Bold, 20, '#000000').txt}>
                  ABC123@
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setModalCapcha(!modalCapcha);
                  }}>
                  <AntIcon name={'close'} size={20} color={'black'} />
                </TouchableOpacity>
              </View>
              <View style={styles.capchaTextInput}>
                <TextInput
                  placeholder={'Type what you see'}
                  style={[customTxt(Fonts.SemiBold, 16, '#000000').txt]}
                  value={capcha}
                  onChangeText={(text: any) => setCapcha(text)}
                  placeholderTextColor={'#999999'}
                />
              </View>
              <Button
                text="Submit"
                stylesText={customTxt(Fonts.Bold, 18, '#FFFFFF').txt}
                viewStyle={styles.submitBtn}
                onPress={() => {
                  setModalCapcha(false);
                  setModalDigit(true);
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  const renderInputItem = (value: any) => {
    return (
      <View style={styles.ctnInputItem}>
        <Text style={customTxt(Fonts.SemiBold, 16, '#000000').txt}>
          {value}
        </Text>
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
      setCode5(checkLength[4]);
      setCode6(checkLength[5]);
    } else {
      setCode1('');
      setCode2('');
      setCode3('');
      setCode4('');
      setCode5('');
      setCode6('');
    }
  }, [check, code1]);

  const renderDigitCode = () => {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalDigit}
          onRequestClose={() => {
            setModalDigit(!modalDigit);
          }}>
          <View style={styles.centerView}>
            <View style={styles.capchaView}>
              <Text
                style={[
                  customTxt(Fonts.Regular, 16, '#000000').txt,
                  {alignSelf: 'center', textAlign: 'center'},
                ]}>
                Next, please enter the 6-digit code we just sent to your +
                {phoneCode}
                {phone}
              </Text>
              <View style={styles.ctnInputCode}>
                {renderInputItem(code1)}
                {renderInputItem(code2)}
                {renderInputItem(code3)}
                {renderInputItem(code4)}
                {renderInputItem(code5)}
                {renderInputItem(code6)}
              </View>
              <TextInput
                style={styles.textInputStyleFake}
                onChangeText={(text: any) => setCheck(text)}
                autoCapitalize={'none'}
                keyboardType={'number-pad'}
              />
              <Button
                text="Continue"
                stylesText={customTxt(Fonts.Bold, 18, '#FFFFFF').txt}
                viewStyle={styles.submitBtn}
                onPress={() => {
                  setModalDigit(false);
                  setTimeout(() => {
                    NavigationService.navigate(
                      Routes.REGISTER_BY_PHONE_SCREEN,
                      {},
                    );
                  }, 200);
                }}
              />
            </View>
          </View>
        </Modal>
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
    <SafeAreaView style={styles.flex}>
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
  flex: {
    flex: 1,
    backgroundColor: '#010919',
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
    color: '#FFFFFF',
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
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
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
  phoneNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginTop: 12,
  },
  iconStyle: {
    height: 24,
    width: 24,
  },
  ctnPhoneCode: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderRightWidth: 1,
    borderColor: '#FFFFFF',
    paddingRight: 16,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  ctnLineCode: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 22,
  },
  capchaView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
  },
  capchaTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#999999',
    marginTop: 12,
  },
  submitBtn: {
    backgroundColor: colorPrimary,
    marginTop: 15,
    width: '40%',
    height: 40,
    alignSelf: 'center',
  },
  ctnInputItem: {
    height: 40,
    width: 40,
    borderWidth: 2,
    borderColor: '#CFD0D7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctnInputCode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  textInputStyleFake: {
    opacity: 0,
    height: 40,
    width: '100%',
    marginTop: -40,
    backgroundColor: 'pink',
  },
});
