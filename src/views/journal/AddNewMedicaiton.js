import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';

// in source
import Fonts from '../../constants/Fonts';
import {customTxt} from '../../constants/fontStyle';
import CustomDatePicker from '../../components/CustomDatePicker';
import FloatDropDown from './FloatDropDown';

// image
import JournalAssets from '../../../assets/images/journal';

export default function AddNewMedicaiton({onPressComplete}) {
  const [number, setNumber] = useState(0);
  const datePickerRef = React.createRef();
  const [time, setTime] = useState();
  const calculatePercent = () => {
    let fullRange = Dimensions.get('screen').width - 124;
    let range = (fullRange / 10) * number;
    return range;
  };
  const renderBody = () => {
    return (
      <View style={styles.ctnDrugScreen}>
        <View style={{alignItems: 'center'}}>
          <Text style={customTxt(Fonts.SemiBold, 24, '#FFFFFF').txt}>
            MEDICATION
          </Text>
        </View>
        <View style={styles.textInput}>
          <Text style={customTxt(Fonts.SemiBold, 16, '#FFFFFF').txt}>
            What is the name of the medication?
          </Text>
          <TextInput
            style={[
              customTxt(Fonts.SemiBold, 16, '#FFFFFF').txt,
              styles.styleInput,
            ]}
            placeholder={'Enter drug name'}
            placeholderTextColor={'#666666'}
          />
          <View style={{marginTop: 30}}>
            <Text style={customTxt(Fonts.SemiBold, 16, '#FFFFFF').txt}>
              What dosage do you take per?
            </Text>
            <View style={styles.ctnDosage}>
              <TouchableOpacity
                onPress={() => {
                  number > 0 && setNumber(number - 1);
                }}
                style={styles.centerBlock}>
                <Text style={customTxt(Fonts.SemiBold, 22, '#FFFFFF').txt}>
                  -
                </Text>
              </TouchableOpacity>
              <View style={styles.centerBlock}>
                <View style={styles.line}>
                  <View
                    style={[
                      styles.countDosage,
                      marginLeft(calculatePercent()).fullView,
                    ]}>
                    <Text style={customTxt(Fonts.SemiBold, 11, '#191919').txt}>
                      {number}
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  number < 10 && setNumber(number + 1);
                }}
                style={styles.centerBlock}>
                <Text style={customTxt(Fonts.SemiBold, 22, '#FFFFFF').txt}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={customTxt(Fonts.SemiBold, 16, '#FFFFFF').txt}>
              What frequency?
            </Text>
            <View style={styles.ctnFrequency}>
              <Text style={customTxt(Fonts.Medium, 16, '#FFFFFF').txt}>
                Per hour
              </Text>
              <TouchableOpacity>
                <Image
                  source={JournalAssets.ic_dropdown}
                  style={styles.iconDropDown}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={customTxt(Fonts.SemiBold, 16, '#FFFFFF').txt}>
              Schedule a reminder (optional)?
            </Text>
            <View style={styles.ctnSchedule}>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <View style={styles.ctnClock}>
                  <Text style={customTxt(Fonts.Regular, 12, '#FFFFFF').txt}>
                    {time ? moment(time).format('HH:mm') : '07:00'}
                  </Text>
                  <TouchableOpacity onPress={_onPressClock}>
                    <Image
                      source={JournalAssets.ic_clock}
                      style={styles.iconClock}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{width: 10}} />
                <View style={[styles.ctnClock, {flex: 1.75}]}>
                  <Text style={customTxt(Fonts.Regular, 12, '#FFFFFF').txt}>
                    Per week
                  </Text>
                  <TouchableOpacity>
                    <Image
                      source={JournalAssets.ic_dropdown}
                      style={styles.iconDropDown}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.divider} />
              <View style={styles.ctnAddTime}>
                <TouchableOpacity>
                  <Image
                    source={JournalAssets.ic_add}
                    style={styles.iconDropDown}
                  />
                </TouchableOpacity>
                <Text
                  style={[
                    customTxt(Fonts.Regular, 16, '#FFFFFF').txt,
                    {marginLeft: 8},
                  ]}>
                  Add time
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <TouchableOpacity
              onPress={onPressComplete}
              style={styles.ctnCompleteBtn}>
              <Text style={customTxt(Fonts.SemiBold, 12, '#FFFFFF').txt}>
                COMPLETE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const _onPressClock = () => {
    if (datePickerRef?.current) {
      datePickerRef?.current?.onPressDate();
    }
  };
  const _onChangeDatePicker = date => {
    console.log('date: ', date);
    setTime(date);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{renderBody()}</ScrollView>
      <CustomDatePicker
        refDatePicker={datePickerRef}
        onChangeDate={_onChangeDatePicker}
        date={time}
        mode={'time'}
        is24Hour={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  ctnDrugScreen: {
    marginTop: 20,
  },
  textInput: {
    marginHorizontal: 20,
    marginTop: 44,
  },
  styleInput: {
    width: '100%',
    backgroundColor: '#212121',
    height: 40,
    borderRadius: 4,
    paddingLeft: 10,
    marginTop: 8,
  },
  ctnDosage: {
    width: '100%',
    backgroundColor: '#212121',
    height: 40,
    borderRadius: 4,
    marginTop: 8,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  centerBlock: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: Dimensions.get('screen').width - 104,
    height: 1,
    backgroundColor: '#6B6B6B',
    justifyContent: 'center',
  },
  countDosage: {
    height: 24,
    width: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Dimensions.get('screen').width - 124,
  },
  iconDropDown: {
    height: 20,
    width: 20,
  },
  ctnFrequency: {
    width: '100%',
    backgroundColor: '#212121',
    height: 40,
    borderRadius: 4,
    marginTop: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconClock: {
    height: 12,
    width: 12,
  },
  ctnSchedule: {
    padding: 10,
    backgroundColor: '#212121',
    width: '100%',
    marginTop: 8,
    borderRadius: 4,
  },
  ctnClock: {
    padding: 10,
    backgroundColor: '#111111',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#6B6B6B',
    marginTop: 10,
    marginBottom: 16,
  },
  ctnAddTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ctnCompleteBtn: {
    backgroundColor: '#5A5D60',
    paddingVertical: 9,
    borderRadius: 42,
    alignItems: 'center',
    marginHorizontal: 105,
  },
});

const marginLeft = h =>
  StyleSheet.create({
    fullView: {
      marginLeft: h,
    },
  });
