/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import Fonts from '../../constants/Fonts';
import {customTxt} from '../../constants/fontStyle';
import HealthAssets from '../../../assets/images/health';
// screen
import Activity from './Activity';
import Vitals from './Vitals';
import Sleep from './Sleep';
import Wellness from './Wellness';

export default function Health() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ctnHeader}>
        <TouchableOpacity style={styles.cirle}>
          <Image source={HealthAssets.ic_left} style={styles.styleIcon} />
        </TouchableOpacity>
        <Text style={customTxt(Fonts.Bold, 20, '#FEFEFE').txt}>
          Apr 18 - 24
        </Text>
        <TouchableOpacity style={styles.cirle}>
          <Image source={HealthAssets.ic_right} style={styles.styleIcon} />
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#111111',
            marginHorizontal: 20,
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#111111',
          },
        }}>
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <View style={focused ? styles.ctnTabStyle : styles.ctnTabStyle2}>
                <Text style={[customTxt(Fonts.Bold, 10, '#FFFFFF').txt]}>
                  ACTIVITY
                </Text>
              </View>
            ),
          }}
          name="Activity"
          component={Activity}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <View style={focused ? styles.ctnTabStyle : styles.ctnTabStyle2}>
                <Text style={[customTxt(Fonts.Bold, 10, '#FFFFFF').txt]}>
                  VITALS
                </Text>
              </View>
            ),
          }}
          name="Vitals"
          component={Vitals}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <View style={focused ? styles.ctnTabStyle : styles.ctnTabStyle2}>
                <Text style={[customTxt(Fonts.Bold, 10, '#FFFFFF').txt]}>
                  SLEEP
                </Text>
              </View>
            ),
          }}
          name="Sleep"
          component={Sleep}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <View style={focused ? styles.ctnTabStyle : styles.ctnTabStyle2}>
                <Text style={[customTxt(Fonts.Bold, 10, '#FFFFFF').txt]}>
                  WELLNESS
                </Text>
              </View>
            ),
          }}
          name="Wellness"
          component={Wellness}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  ctnTabStyle: {
    backgroundColor: '#393939',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  ctnTabStyle2: {
    backgroundColor: '#111111',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  styleIcon: {
    height: 12,
    width: 6,
  },
  cirle: {
    borderWidth: 1,
    height: 24,
    width: 24,
    borderRadius: 12,
    borderColor: '#4A4A4A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctnHeader: {
    marginHorizontal: 42,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
