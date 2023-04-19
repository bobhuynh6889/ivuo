import {NavigationContainer} from '@react-navigation/native';
import {navigationRef, isMountedRef} from './index';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import Routes from './Routes';

//screen
import RegisterScreen from '../views/auth/Register';
import SplashScreen from '../views/SplashScreen';
import HomeScreen from '../views/home';
import LoginScreen from '../views/auth/Login';
import FirstScreen from '../views/FirstScreen';
import ForgotPasswordScreen from '../views/auth/ForgotPassword';
import OTPAuthenScreen from '../views/auth/OTPAuthen';
import ResetPasswordScreen from '../views/auth/ResetPassword';
import CongratulationScreen from '../views/auth/Congratulation';

export default function RootNavigation() {
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Routes.HOME_SCREEN}>
        <Stack.Screen name={Routes.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={Routes.FIRST_SCREEN} component={FirstScreen} />
        <Stack.Screen
          name={Routes.REGISTER_SCREEN}
          component={RegisterScreen}
        />
        <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen
          name={Routes.FORGOT_PASS_SCREEN}
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name={Routes.OTP_SCREEN} component={OTPAuthenScreen} />
        <Stack.Screen
          name={Routes.RESET_PASSWORD_SCREEN}
          component={ResetPasswordScreen}
        />
        <Stack.Screen
          name={Routes.CONGRATULATION_SCREEN}
          component={CongratulationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
