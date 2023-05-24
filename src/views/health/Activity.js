import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';

// in source
import Fonts from '../../constants/Fonts';
import {customTxt} from '../../constants/fontStyle';

// image && icon
import HealthAssets from '../../../assets/images/health';

export default function Activity() {
  const renderSleepMetric = () => {
    return (
      <View style={styles.ctnSleepMetric}>
        <Text style={customTxt(Fonts.SemiBold, 15, '#FFFFFF').txt}>
          Sleep metrics
        </Text>
        <Image
          source={HealthAssets.sleep_metric_chart}
          style={styles.sleepMetric}
        />
      </View>
    );
  };

  const renderItemTimeSleep = (icon, title, param, param2, param3, param4) => {
    return (
      <View style={styles.ctnItemTimeSleep}>
        <View>
          <Image source={icon} style={styles.iconSleep} />
        </View>
        <View>
          <Text style={customTxt(Fonts.Regular, 13, '#868990').txt}>
            {title}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              customTxt(Fonts.SemiBold, 28, '#FFFFFF').txt,
              {marginTop: 6},
            ]}>
            {param}
            {param2 && (
              <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
                {param2}{' '}
              </Text>
            )}
          </Text>
          {param3 && (
            <Text
              style={[
                customTxt(Fonts.SemiBold, 28, '#FFFFFF').txt,
                {marginTop: 6},
              ]}>
              {param3}
              <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
                {param4}
              </Text>
            </Text>
          )}
        </View>
      </View>
    );
  };

  const renderTimeSleep = () => {
    return (
      <View style={styles.ctnTimeSleep}>
        {renderItemTimeSleep(
          HealthAssets.ic_sleep_time,
          'Sleep Time',
          '7',
          'hrs',
          '38',
          'min',
        )}
        <View style={styles.verticalDevider} />
        {renderItemTimeSleep(
          HealthAssets.ic_fall_asleep,
          'Time to Fall Asleep',
          '2',
          'hrs',
          '28',
          'min',
        )}
        <View style={styles.verticalDevider} />
        {renderItemTimeSleep(HealthAssets.ic_sleep_score, 'Sleep Score', '92%')}
      </View>
    );
  };

  const renderEnergyLevel = () => {
    return (
      <View style={styles.ctnEnergyLevel}>
        <Text style={customTxt(Fonts.SemiBold, 38, '#FFFFFF').txt}>93</Text>
        <Text style={customTxt(Fonts.SemiBold, 15, '#FFFFFF').txt}>
          ENERGY LEVEL
        </Text>
        <Image source={HealthAssets.energy_chart} style={styles.energyChart} />
      </View>
    );
  };

  const renderActivity = () => {
    return (
      <View style={styles.ctnEnergyLevel}>
        <Text style={customTxt(Fonts.SemiBold, 14, '#B0B0B0').txt}>
          Activity
        </Text>
        <View style={styles.ctnParamActivity}>
          <Text style={customTxt(Fonts.SemiBold, 38, '#FFFFFF').txt}>
            115{' '}
            <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
              minutes
            </Text>
          </Text>
        </View>
        <Image
          source={HealthAssets.activity_chart}
          style={styles.activityChart}
        />
        <Image
          source={HealthAssets.cricle_activity_chart}
          style={styles.circleChart}
        />
        <View style={styles.ctnParamCircle}>
          <View>
            <Text style={customTxt(Fonts.SemiBold, 14, '#B0B0B0').txt}>
              Distance
            </Text>
            <View style={styles.ctnParamActivity}>
              <Text style={customTxt(Fonts.SemiBold, 38, '#FFFFFF').txt}>
                3{' '}
                <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
                  km
                </Text>
              </Text>
            </View>
          </View>
          <View>
            <Text style={customTxt(Fonts.SemiBold, 14, '#B0B0B0').txt}>
              Calories
            </Text>
            <View style={styles.ctnParamActivity}>
              <Text style={customTxt(Fonts.SemiBold, 38, '#FFFFFF').txt}>
                115{' '}
                <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
                  kcal
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={{paddingBottom: 40}}>
        {renderSleepMetric()}
        {renderTimeSleep()}
        {renderEnergyLevel()}
        {renderActivity()}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>{renderBody()}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  ctnSleepMetric: {
    marginTop: 24,
    marginHorizontal: 15,
  },
  sleepMetric: {
    height: 290,
    width: Dimensions.get('screen').width - 40,
    marginTop: 15,
  },
  ctnItemTimeSleep: {
    backgroundColor: '#181818',
    alignItems: 'center',
    paddingVertical: 14,
    flex: 1,
  },
  iconSleep: {
    height: 30,
    width: 30,
    marginBottom: 15,
  },
  ctnTimeSleep: {
    flexDirection: 'row',
    marginTop: 30,
    flex: 1,
  },
  verticalDevider: {
    width: 2,
    height: '100%',
    backgroundColor: '#111111',
  },
  ctnEnergyLevel: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  energyChart: {
    height: 110,
    width: Dimensions.get('screen').width - 40,
    marginTop: 20,
  },
  ctnParamActivity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  activityChart: {
    height: 73,
    width: Dimensions.get('screen').width - 40,
  },
  circleChart: {
    height: 221,
    width: Dimensions.get('screen').width - 170,
    alignSelf: 'center',
    marginTop: 40,
  },
  ctnParamCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 70,
    justifyContent: 'space-between',
  },
});
