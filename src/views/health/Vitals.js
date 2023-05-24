import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

// in source
import Fonts from '../../constants/Fonts';
import {customTxt} from '../../constants/fontStyle';

// assets
import HealthAssets from '../../../assets/images/health';

const data = [
  {
    icon: HealthAssets.ic_blood_press,
    title: 'Blood pressure',
    param: 120,
    unit: 'mmhg',
    status: 'Normal',
  },
  {
    icon: HealthAssets.ic_heart_rate,
    title: 'Heart rate',
    param: 78,
    unit: 'bpm',
    status: 'Normal',
  },
  {
    icon: HealthAssets.ic_hrv,
    title: 'Heart rate variability',
    param: 82,
    unit: 'ms',
    status: 'Low',
  },
  {
    icon: HealthAssets.ic_respiration,
    title: 'Respiratory rate',
    param: 18,
    unit: 'breaths/min',
    status: 'Normal',
  },
  {
    icon: HealthAssets.ic_spo2,
    title: 'SPo2',
    param: 97,
    unit: '%',
    status: 'Normal',
  },
  {
    icon: HealthAssets.ic_vo2,
    title: 'Vo2',
    param: 35.7,
    unit: 'ml/kg/min',
    status: 'Normal',
  },
  {
    icon: HealthAssets.ic_temp,
    title: 'Body temperature',
    param: 37.9,
    unit: '°C',
    status: 'High',
  },
  {
    icon: HealthAssets.ic_calo,
    title: 'Calories',
    param: 294,
    unit: 'kcal',
    status: 'Normal',
  },
];

const ItemBlock = ({item}) => {
  const checkBGCStatus = () => {
    if (item?.status === 'Normal') {
      return '#243F3B';
    } else if (item?.status === 'Low') {
      return '#D5BB2C33';
    } else if (item?.status === 'High') {
      return '#C0304233';
    }
  };
  const checkColorStatus = () => {
    if (item?.status === 'Normal') {
      return '#83EAC2';
    } else if (item?.status === 'Low') {
      return '#D5BB2C';
    } else if (item?.status === 'High') {
      return '#FF0000';
    }
  };
  return (
    <TouchableOpacity style={styles.ctnBlockHealth}>
      <Image source={item?.icon} style={styles.styleIconHealth} />
      <Text style={customTxt(Fonts.SemiBold, 14, '#B0B0B0').txt}>
        {item?.title}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={customTxt(Fonts.SemiBold, 38, '#FFFFFF').txt}>
          {item?.param}
          <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
            {' '}
            {item?.unit}
          </Text>
        </Text>
        {item?.param2 && (
          <Text style={customTxt(Fonts.SemiBold, 38, '#FFFFFF').txt}>
            <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
              {','}
            </Text>{' '}
            {item?.param2}
            <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
              {' '}
              {item?.unit2}
            </Text>
          </Text>
        )}
      </View>
      <View style={[styles.status, {backgroundColor: checkBGCStatus()}]}>
        <Text style={customTxt(Fonts.SemiBold, 13, checkColorStatus()).txt}>
          {item?.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function Vitals() {
  const renderHeartRate = () => {
    return (
      <View>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 15, '#FFFFFF').txt,
            {marginLeft: 20, marginBottom: 20},
          ]}>
          Heart rate
        </Text>
        <Image
          source={HealthAssets.heart_rate_chart}
          style={styles.heartRateChart}
        />
      </View>
    );
  };

  const renderItemParamHealth = (title, param1, unit, param2, chart) => {
    const checkColor = () => {
      switch (title) {
        case 'Movement Index':
          return '#008853';
        case 'Temperature':
          return '#FF0000';
        case 'Avg heart beat':
          return '#0083D6';
        default:
          break;
      }
    };
    return (
      <View style={{marginTop: 30, marginLeft: 20}}>
        <Text style={customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt}>
          {title}
        </Text>
        <View style={styles.ctnLineParam}>
          <Text style={customTxt(Fonts.SemiBold, 38, '#FFFFFF').txt}>
            {param1}
          </Text>
          <View
            style={{
              justifyContent: 'flex-end',
              marginHorizontal: 6,
              height: 38,
            }}>
            <Text style={customTxt(Fonts.SemiBold, 13, checkColor()).txt}>
              {unit}{' '}
            </Text>
            {param2 && (
              <Text style={customTxt(Fonts.SemiBold, 13, '#008853').txt}>
                {param2}
              </Text>
            )}
          </View>
          <Image source={chart} style={styles.chartParam} />
        </View>
      </View>
    );
  };

  const renderParamHealth = () => {
    return (
      <View>
        {renderItemParamHealth(
          'Movement Index',
          88,
          '+23 from',
          'yesterday',
          HealthAssets.movement_chart,
        )}
        {renderItemParamHealth(
          'Temperature',
          37.5,
          '°C',
          '',
          HealthAssets.temperature_chart,
        )}
        {renderItemParamHealth(
          'Avg heart beat',
          88,
          'mmhg',
          '',
          HealthAssets.heart_beat_chart,
        )}
      </View>
    );
  };

  const renderBlockHealth = () => {
    return (
      <View style={styles.ctnBlock}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <ItemBlock item={item} index={index} />
          )}
          numColumns={2}
        />
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View>
        {renderHeartRate()}
        {renderParamHealth()}
        {renderBlockHealth()}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{renderBody()}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  heartRateChart: {
    height: 233,
    width: Dimensions.get('screen').width - 45,
    marginLeft: 20,
  },
  ctnLineParam: {
    flexDirection: 'row',
    marginRight: 20,
  },
  chartParam: {
    height: 46,
    width: 260,
  },
  ctnBlockHealth: {
    backgroundColor: '#181818',
    borderRadius: 8,
    height: 171,
    width: 175,
    marginRight: 10,
    marginBottom: 10,
    paddingTop: 18,
    paddingLeft: 18,
  },
  styleIconHealth: {
    height: 30,
    width: 30,
    marginBottom: 8,
  },
  status: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    // backgroundColor: '#243F3B',
    borderRadius: 10,
    alignSelf: 'baseline',
    marginTop: 4,
  },
  ctnBlock: {
    lignItems: 'center',
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 10,
  },
});
