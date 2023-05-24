import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

//libary
import {LineChart} from 'react-native-chart-kit';

//in source
import {customTxt} from '../../constants/fontStyle';
import Fonts from '../../constants/Fonts';
import DataHealth from './dataHealth';
import NotiView from '../../components/NotiView';
import NavigationService from '../../navigation';
import Routes from '../../navigation/Routes';
//icon & image
import HomeImg from '../../../assets/images/home';

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

export default function Home() {
  const [isShowNoti, setShowNoti] = useState(false);
  const [isShowBadge, setShowBadge] = useState(false);

  const _onPressIconNoti = () => {
    NavigationService.navigate(Routes.NOTIFICATION_SCREEN, {});
  };

  const renderHeader = () => {
    return (
      <View style={styles.ctnHeader}>
        <View style={styles.headerLine1}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={HomeImg.avatar} style={styles.styleAvatar} />
            <Text style={customTxt(Fonts.Regular, 18, 'white').txt}>Mom</Text>
          </View>
          <TouchableOpacity
            onPress={_onPressIconNoti}
            style={styles.ctnIconNoti}>
            <Image source={HomeImg.ic_bell} style={styles.styleBell} />
            {isShowBadge && (
              <View style={styles.ctnBadge}>
                <Text style={customTxt(Fonts.Bold, 11, 'white').txt}>1</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.headerLine1}>
          <View>
            <Text style={customTxt(Fonts.Bold, 20).txt}>Health Insights</Text>
            <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
              Last Sync: 09:54am, Today
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setShowNoti(true);
              setShowBadge(true);
            }}>
            <Image source={HomeImg.ic_sync} style={styles.styleIcSync} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderHealthStatus = () => {
    return (
      <View style={styles.ctnHealthBlocks}>
        <FlatList
          data={DataHealth}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <ItemBlock item={item} index={index} />
          )}
          numColumns={2}
        />
      </View>
    );
  };

  const baseline = [7, 10, 25, 30, 15, 25, 18];
  const yLabelChart = [10, 8, 19, 21, 33, 12, 26];

  const renderChartBaseline = () => {
    return (
      <View>
        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                data: baseline,
                color: () => '#007CCB',
              },
              {
                data: yLabelChart,
                color: () => '#23AC23',
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={280}
          fromZero={true}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            decimalPlaces: 0, // optional, defaults to 2dp
            color: () => '#111111',
            labelColor: () => '#999999',
            propsForDots: {
              r: '4',
              strokeWidth: '2',
            },
            backgroundGradientFrom: '#111111',
            backgroundGradientTo: '#111111',
          }}
          style={{left: 0, right: 0}}
        />
      </View>
    );
  };

  const renderHealthStatusChart = () => {
    return (
      <View style={styles.ctnChart}>
        <View
          style={[
            styles.headerLine1,
            {marginBottom: 12, marginHorizontal: 20},
          ]}>
          <View>
            <Text style={customTxt(Fonts.Bold, 20).txt}>Health Status</Text>
            <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
              10 April to 16 April
            </Text>
          </View>
        </View>
        <View style={[styles.ctnNotiChart, {marginHorizontal: 20}]}>
          <Image source={HomeImg.ic_chart} style={styles.styleIcChart} />
          <Text style={customTxt(Fonts.SemiBold, 13, '#D8D8D8').txt}>
            Body stress levels versus your baseline metrics
          </Text>
        </View>
        {/* {renderChartBaseline()} */}
        <View>
          <Image source={HomeImg.chart} style={styles.styleChart} />
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
            REPORT
          </Text>
          <Text
            style={[
              customTxt(Fonts.Medium, 13, '#FFFFFF').txt,
              {marginTop: 8},
            ]}>
            There were mostly normal levels, with occasional slight elevations
            detected. However, there was a peak on Saturday the 15th, indicating
            the need for further observation.
          </Text>
        </View>
      </View>
    );
  };

  const renderAlert = () => {
    return (
      <View style={styles.ctnAlert}>
        <Text style={customTxt(Fonts.Bold, 20, '#FF0000').txt}>Alert</Text>
        <View style={styles.divider} />
        <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
          BODY TEMPERATURE
        </Text>
        <Text
          style={[customTxt(Fonts.Medium, 13, '#FFFFFF').txt, {marginTop: 4}]}>
          We have detected an irregularity in body temperature
        </Text>
        <View style={styles.ctnBtnReadMore}>
          <TouchableOpacity style={styles.btnReadMoreStyle}>
            <Text style={customTxt(Fonts.SemiBold, 12, '#FFFFFF').txt}>
              READ MORE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const rernderMarketPlace = () => {
    return (
      <View style={styles.ctnMarketPlace}>
        <Text style={customTxt(Fonts.Bold, 20).txt}>Marketplace</Text>
        <Image source={HomeImg.img_marketplace} style={styles.imageStyle} />
        <Text style={customTxt(Fonts.SemiBold, 16).txt}>Meals on Wheels</Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt,
            {marginTop: 4},
          ]}>
          We deliver specialised meals catered for your exact diary needs, 7
          days a week (incl. public holidays)
        </Text>
        <View style={styles.ctnOrderNow}>
          <TouchableOpacity style={styles.btnReadMoreStyle}>
            <Text style={customTxt(Fonts.SemiBold, 12, '#FFFFFF').txt}>
              ORDER NOW
            </Text>
          </TouchableOpacity>
          <Image source={HomeImg.ic_index} />
        </View>
      </View>
    );
  };

  const renderHealthShare = () => {
    return (
      <View style={styles.ctnHealthShare}>
        <Image source={HomeImg.ic_share} style={styles.iconShare} />
        <Text
          style={[
            customTxt(Fonts.SemiBold, 13, '#007CCB').txt,
            {marginTop: 12},
          ]}>
          HEALTH SHARING
        </Text>
        <Text
          style={[
            customTxt(Fonts.Medium, 15, '#D8D8D8').txt,
            {marginTop: 11, textAlign: 'center'},
          ]}>
          Keep friends and family up to date on how you’re doing by securely
          sharing your Health data
        </Text>
        <TouchableOpacity style={styles.btnShare}>
          <Text style={customTxt(Fonts.SemiBold, 12, '#FFFFFF').txt}>
            SHARE WITH SOMEONE
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={styles.ctnBody}>
        {renderHeader()}
        {renderHealthStatus()}
        {renderHealthStatusChart()}
        {renderAlert()}
        {rernderMarketPlace()}
        {renderHealthShare()}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="#111111" />
      <ScrollView>{renderBody()}</ScrollView>
      {isShowNoti && (
        <NotiView
          onClose={() => {
            setShowNoti(false);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  ctnBody: {
    paddingBottom: 48,
  },
  ctnHeader: {
    marginHorizontal: 20,
  },
  headerLine1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  styleAvatar: {
    height: 55,
    width: 55,
    marginRight: 10,
  },
  styleIcSync: {
    height: 22,
    width: 22,
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
  ctnHealthBlocks: {
    marginHorizontal: 15,
    alignItems: 'center',
  },
  ctnChart: {
    marginTop: 18,
    // marginHorizontal: 20,
  },
  styleIcChart: {
    height: 13,
    width: 11.5,
    marginRight: 14,
  },
  ctnNotiChart: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 13,
    backgroundColor: '#222222',
    borderRadius: 8,
    marginBottom: 20,
  },
  ctnAlert: {
    padding: 15,
    marginHorizontal: 20,
    backgroundColor: '#222222',
    borderRadius: 8,
    marginTop: 24,
  },
  divider: {
    height: 1,
    borderWidth: 1,
    borderColor: '#2D2D2D',
    width: '100%',
    marginTop: 15,
    marginBottom: 12,
  },
  ctnBtnReadMore: {
    alignItems: 'flex-end',
    marginTop: 15,
  },
  btnReadMoreStyle: {
    backgroundColor: '#5A5D60',
    borderRadius: 42,
    paddingVertical: 8,
    paddingHorizontal: 17,
  },
  ctnMarketPlace: {
    marginTop: 49,
    marginHorizontal: 20,
  },
  imageStyle: {
    height: 161,
    width: '100%',
    marginTop: 12,
    marginBottom: 13,
  },
  ctnOrderNow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 11,
  },
  iconShare: {
    height: 25,
    width: 40,
  },
  ctnHealthShare: {
    marginTop: 32,
    alignItems: 'center',
    marginHorizontal: 70,
  },
  btnShare: {
    paddingVertical: 9,
    paddingHorizontal: 22,
    backgroundColor: '#5A5D60',
    borderRadius: 42,
    marginTop: 14,
  },
  ctnBadge: {
    backgroundColor: '#E82C2C',
    justifyContent: 'center',
    alignItems: 'center',
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000000',
    marginLeft: -12,
    marginTop: -3,
  },
  ctnIconNoti: {
    flexDirection: 'row',
  },
  styleBell: {
    height: 25,
    width: 25,
  },
  styleChart: {
    height: 280,
    width: Dimensions.get('screen').width,
  },
});
