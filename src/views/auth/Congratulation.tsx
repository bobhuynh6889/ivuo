import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

// services
import Routes from '../../navigation/Routes';
import NavigationService from '../../navigation';
import {colorPrimary} from '../../constants/color';

// component
import Button from '../../components/Button';
import LoadingView from '../../components/LoadingView';

//img
import Logo from '../../../assets/images/logo';
import AuthImg from '../../../assets/images/auth';

export default function Congratulation() {
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
        <Text style={styles.titleStyle}>Congratulations!</Text>
        <Text style={styles.contentStyle}>
          You successfully rest your password.
        </Text>
        <Text style={styles.contentStyle}>Now you are good to go.</Text>
      </View>
    );
  };

  const _onPressToLogin = () => {
    setLoading(true);
    setTimeout(() => {
      NavigationService.navigate(Routes.LOGIN_SCREEN, {});
    }, 300);
  };

  const renderBody = () => {
    return (
      <View>
        <View>
          {renderLogo()}
          {renderTitle()}
        </View>
        <View style={styles.ctnImage}>
          <Image
            source={AuthImg.ic_congratulation}
            style={{height: 270, width: 286}}
          />
        </View>
        <View style={styles.ctnButton}>
          <Button
            text="Jump Into Log In"
            stylesText={styles.textRegisterStyleActive}
            viewStyle={styles.btnRegisterStyleActive}
            onPress={_onPressToLogin}
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
  textRegisterStyleActive: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  btnRegisterStyleActive: {
    height: 48,
    marginTop: 30,
    backgroundColor: colorPrimary,
  },
  ctnImage: {
    alignItems: 'center',
    marginTop: 30,
  },
  ctnButton: {
    marginHorizontal: 25,
    justifyContent: 'flex-end',
    height: 200,
  },
});
