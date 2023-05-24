/* eslint-disable react/no-unstable-nested-components */
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

// in source
import Fonts from '../../constants/Fonts';
import {customTxt} from '../../constants/fontStyle';

// image
import JournalAssets from '../../../assets/images/journal';

// top sub tab
import Medication from './subtoptab/Medication';
import FoodSupplement from './subtoptab/FoodSupplement';
import Activities from './subtoptab/Activities';

export default function Journal() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="black" />
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
                  MEDICATION
                </Text>
              </View>
            ),
          }}
          name="Medication"
          component={Medication}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <View style={focused ? styles.ctnTabStyle : styles.ctnTabStyle2}>
                <Text style={[customTxt(Fonts.Bold, 10, '#FFFFFF').txt]}>
                  FOOD & SUPPLEMENTS
                </Text>
              </View>
            ),
          }}
          name="FoodSupplement"
          component={FoodSupplement}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <View style={focused ? styles.ctnTabStyle : styles.ctnTabStyle2}>
                <Text style={[customTxt(Fonts.Bold, 10, '#FFFFFF').txt]}>
                  ACTIVITES
                </Text>
              </View>
            ),
          }}
          name="Activities"
          component={Activities}
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
});
