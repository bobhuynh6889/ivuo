/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {customTxt} from '../constants/fontStyle';
import Fonts from '../constants/Fonts';

const Tab = createBottomTabNavigator();

import HomeScreen from '../views/home';
import HealthScreen from '../views/health';
import JournalScreen from '../views/journal';
import MarketplaceScreen from '../views/marketplace';
import ProfileScreen from '../views/profile';

//icon
import Icon from '../../assets/images/icon-bottom-tabs';

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#000000',
            paddingTop: 19,
            paddingBottom: 37,
            height: 104,
            borderTopColor: '#000000',
          },
          headerShown: false,
        }}>
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={
                  customTxt(Fonts.Regular, 12, focused ? '#007CCB' : '#999999')
                    .txt
                }>
                Home
              </Text>
            ),
            tabBarIcon: ({focused}) => {
              return focused ? (
                <Image
                  source={Icon.ic_home_active}
                  style={{height: 20, width: 20}}
                />
              ) : (
                <Image source={Icon.ic_home} style={{height: 20, width: 20}} />
              );
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={
                  customTxt(Fonts.Regular, 12, focused ? '#007CCB' : '#999999')
                    .txt
                }>
                Health
              </Text>
            ),
            tabBarIcon: ({focused}) => {
              return focused ? (
                <Image
                  source={Icon.ic_health_active}
                  style={{height: 15, width: 18}}
                />
              ) : (
                <Image
                  source={Icon.ic_health}
                  style={{height: 15, width: 18}}
                />
              );
            },
          }}
          name="Health"
          component={HealthScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={
                  customTxt(Fonts.Regular, 12, focused ? '#007CCB' : '#999999')
                    .txt
                }>
                Journal
              </Text>
            ),
            tabBarIcon: ({focused}) => {
              return focused ? (
                <Image
                  source={Icon.ic_journal_active}
                  style={{height: 20, width: 20}}
                />
              ) : (
                <Image
                  source={Icon.ic_journal}
                  style={{height: 20, width: 20}}
                />
              );
            },
          }}
          name="Journal"
          component={JournalScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={
                  customTxt(Fonts.Regular, 12, focused ? '#007CCB' : '#999999')
                    .txt
                }>
                Marketplace
              </Text>
            ),
            tabBarIcon: ({focused}) => {
              return focused ? (
                <Image
                  source={Icon.ic_marketplace_active}
                  style={{height: 17, width: 20}}
                />
              ) : (
                <Image
                  source={Icon.ic_marketplace}
                  style={{height: 17, width: 20}}
                />
              );
            },
          }}
          name="MarketPlace"
          component={MarketplaceScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={
                  customTxt(Fonts.Regular, 12, focused ? '#007CCB' : '#999999')
                    .txt
                }>
                Profile
              </Text>
            ),
            tabBarIcon: ({focused}) => {
              return focused ? (
                <Image
                  source={Icon.ic_profile}
                  style={{height: 20, width: 20}}
                />
              ) : (
                <Image
                  source={Icon.ic_profile}
                  style={{height: 20, width: 20}}
                />
              );
            },
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
