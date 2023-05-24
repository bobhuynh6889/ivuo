/* eslint-disable react/no-unstable-nested-components */
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

// in source
import Fonts from '../../constants/Fonts';
import {customTxt} from '../../constants/fontStyle';

import Services from './subtoptab/Services';
import Goods from './subtoptab/Goods';

export default function MarketPlace() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle={'light-content'} backgroundColor="black" /> */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#111111',
            marginHorizontal: 100,
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
                  SERVICES
                </Text>
              </View>
            ),
          }}
          name="Services"
          component={Services}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <View style={focused ? styles.ctnTabStyle : styles.ctnTabStyle2}>
                <Text style={[customTxt(Fonts.Bold, 10, '#FFFFFF').txt]}>
                  GOODS
                </Text>
              </View>
            ),
          }}
          name="Goods"
          component={Goods}
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
