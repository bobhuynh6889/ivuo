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
import NotificationScreen from '../views/notification';
import BottomTabs from '../views/BottomTab';
import DetailScreen from '../views/notification/Detail';
import SettingScreen from '../views/profile/subScreens/Setting';
import LanguageScreen from '../views/profile/subScreens/Language';
import PersonalInfoScreen from '../views/profile/subScreens/PersonalInfo';
import AccessDetailsScreen from '../views/profile/subScreens/AccessDetails';
import GuardianScreen from '../views/profile/subScreens/Guardian';
import FamilyDoctorScreen from '../views/profile/subScreens/FamilyDoctor';
import PreferencesScreen from '../views/profile/subScreens/Preferences';
import RegisterByPhoneScreen from '../views/auth/RegisterByPhone';
import DisabilityCareScreen from '../views/marketplace/subtoptab/detailsScreen/DisabilityCare';
import LegalScreen from '../views/profile/subScreens/Legal';
import PrivacyScreen from '../views/profile/subScreens/Privacy';
import TermScreen from '../views/profile/subScreens/Term';
import DisclaimerScreen from '../views/profile/subScreens/Disclaimer';
import SoftwareScreen from '../views/profile/subScreens/Software';
import HardwareScreen from '../views/profile/subScreens/Hardware';

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
        initialRouteName={Routes.BOTTOM_TAB_SCREEN}>
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
        <Stack.Screen
          name={Routes.NOTIFICATION_SCREEN}
          component={NotificationScreen}
        />
        <Stack.Screen name={Routes.BOTTOM_TAB_SCREEN} component={BottomTabs} />
        <Stack.Screen
          name={Routes.DETAIL_NOTI_SCREEN}
          component={DetailScreen}
        />
        <Stack.Screen name={Routes.SETTING_SCREEN} component={SettingScreen} />
        <Stack.Screen
          name={Routes.LANGUAGE_SCREEN}
          component={LanguageScreen}
        />
        <Stack.Screen
          name={Routes.PERSONAL_INFO_SCREEN}
          component={PersonalInfoScreen}
        />
        <Stack.Screen
          name={Routes.ACCESS_DETAILS_SCREEN}
          component={AccessDetailsScreen}
        />
        <Stack.Screen
          name={Routes.GUARDIAN_SCREEN}
          component={GuardianScreen}
        />
        <Stack.Screen
          name={Routes.FAMILY_DOCTOR_SCREEN}
          component={FamilyDoctorScreen}
        />
        <Stack.Screen
          name={Routes.PREFERENCES_SCREEN}
          component={PreferencesScreen}
        />
        <Stack.Screen
          name={Routes.REGISTER_BY_PHONE_SCREEN}
          component={RegisterByPhoneScreen}
        />
        <Stack.Screen
          name={Routes.DISABILITY_CARE_SCREEN}
          component={DisabilityCareScreen}
        />
        <Stack.Screen name={Routes.LEGAL_SCREEN} component={LegalScreen} />
        <Stack.Screen name={Routes.PRIVACY_SCREEN} component={PrivacyScreen} />
        <Stack.Screen name={Routes.TERM_SCREEN} component={TermScreen} />
        <Stack.Screen
          name={Routes.DISCLAIMER_SCREEN}
          component={DisclaimerScreen}
        />
        <Stack.Screen
          name={Routes.SOFTWARE_SCREEN}
          component={SoftwareScreen}
        />
        <Stack.Screen
          name={Routes.HARDWARE_SCREEN}
          component={HardwareScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
