import {
  View,
  Text,
  StyleSheet,
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

// image && icon
import HealthAssets from '../../../assets/images/health';
import HomeAssets from '../../../assets/images/home';

const data = [
  {
    title: 'Active',
    param: '7h24',
    unit: 'min',
    status: 'Normal',
  },
  {
    title: 'Sleep',
    param: '7h38',
    unit: 'min',
    status: 'Normal',
  },
  {
    title: 'Exercise',
    param: 115,
    unit: 'kcal',
    status: 'Low',
  },
  {
    title: 'Average heart rate',
    param: 92,
    unit: 'bpm',
    status: 'Normal',
  },
  {
    title: 'Average body temperature',
    param: 37.2,
    unit: '°C',
    status: 'Normal',
  },
  {
    title: 'Energy level',
    param: 93,
    unit: '%',
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
      <Text style={customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt}>
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

export default function Wellness() {
  const itemTemp = (title, param) => {
    return (
      <View>
        <Text style={customTxt(Fonts.SemiBold, 15, '#FFFFFF').txt}>
          {title}
        </Text>
        <Text style={customTxt(Fonts.SemiBold, 28, '#FFFFFF').txt}>
          {param}{' '}
          <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>°C</Text>
        </Text>
      </View>
    );
  };
  const renderBodyTemp = () => {
    return (
      <View>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 15, '#FFFFFF').txt,
            {marginLeft: 20},
          ]}>
          Body temperature
        </Text>
        <Image source={HealthAssets.body_temp_chart} style={styles.bodyTemp} />
        <View style={styles.ctnBlockParamTemp}>
          {itemTemp('Minimum', '36,6')}
          {itemTemp('Maximum', '37,8')}
          {itemTemp('Average', '37,2')}
        </View>
        <View style={styles.ctnWarning}>
          <View>
            <Image source={HomeAssets.ic_chart} style={styles.iconStyle} />
          </View>
          <View>
            <Text style={customTxt(Fonts.SemiBold, 13, '#D8D8D8').txt}>
              Your average body temperature appears to be
            </Text>
            <Text style={customTxt(Fonts.SemiBold, 13, '#D8D8D8').txt}>
              slightly higher than the night before
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderStress = () => {
    return (
      <View style={{marginTop: 40}}>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 15, '#FFFFFF').txt,
            {marginLeft: 20},
          ]}>
          The Stress Index
        </Text>
        <Image source={HealthAssets.stress_chart} style={styles.stressChart} />
      </View>
    );
  };

  const itemComparisonParam = (bgColor, title, param) => {
    return (
      <View style={styles.ctnItemComparison}>
        <View style={styles.ctnDot}>
          <View style={[styles.dotColor, {backgroundColor: bgColor}]} />
        </View>
        <View>
          <Text style={customTxt(Fonts.Bold, 12, '#FFFFFF').txt}>{title}</Text>
          <Text
            style={[
              customTxt(Fonts.SemiBold, 16, '#FFFFFF').txt,
              {marginTop: 8},
            ]}>
            {param}
          </Text>
        </View>
      </View>
    );
  };

  const renderComparison = () => {
    return (
      <View style={{marginTop: 40}}>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 15, '#FFFFFF').txt,
            {marginLeft: 20},
          ]}>
          Comparison
        </Text>
        <Image
          source={HealthAssets.comparison_chart}
          style={styles.comparisonChart}
        />
        <View style={{marginTop: 30, flexDirection: 'row'}}>
          <View style={styles.ctnParam}>
            {itemComparisonParam('#23AC23', 'Relax', '12% 2hr24min')}
            {itemComparisonParam('#D5BB2C', 'Medium', '34% 6hr48min')}
          </View>
          <View style={styles.ctnParam}>
            {itemComparisonParam('#007CCB', 'Normal', '47% 9hr24min')}
            {itemComparisonParam('#FF0000', 'High', '7% 1hr24min')}
          </View>
        </View>
      </View>
    );
  };

  const renderDailyMovement = () => {
    return (
      <View>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 15, '#FFFFFF').txt,
            {marginLeft: 20},
          ]}>
          Comparison
        </Text>
        <Image
          source={HealthAssets.daily_movement_chart}
          style={styles.dailyMovementChart}
        />
      </View>
    );
  };

  const renderWellness = () => {
    return (
      <View style={{marginLeft: 20, marginTop: 40, paddingBottom: 30}}>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 15, '#FFFFFF').txt,
            {marginBottom: 20},
          ]}>
          Wellness contributors
        </Text>
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
        {renderBodyTemp()}
        {renderStress()}
        {renderComparison()}
        {renderDailyMovement()}
        {renderWellness()}
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
  bodyTemp: {
    height: 233,
    width: Dimensions.get('screen').width - 40,
    marginTop: 20,
    marginLeft: 20,
  },
  ctnBlockParamTemp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  iconStyle: {
    height: 13,
    width: 11,
    marginRight: 14,
  },
  ctnWarning: {
    backgroundColor: '#222222',
    flexDirection: 'row',
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 15,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  stressChart: {
    height: 267,
    width: Dimensions.get('screen').width - 40,
    marginTop: 24,
    marginLeft: 20,
  },
  comparisonChart: {
    height: 240,
    width: 240,
    marginTop: 24,
    alignSelf: 'center',
  },
  dotColor: {
    height: 8,
    width: 8,
    borderRadius: 4,
  },
  ctnDot: {
    height: 16,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  ctnItemComparison: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  ctnParam: {
    marginHorizontal: 35,
  },
  dailyMovementChart: {
    height: 195,
    width: Dimensions.get('screen').width - 20,
    marginTop: 16,
    alignSelf: 'center',
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
});
