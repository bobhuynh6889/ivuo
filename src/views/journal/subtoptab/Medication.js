import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

// in source
import Fonts from '../../../constants/Fonts';
import {customTxt} from '../../../constants/fontStyle';

// image
import JournalAssets from '../../../../assets/images/journal';

export default function Medication() {
  const [isEnabled, setIsEnabled] = useState();
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  let dataMedication = [
    {
      name: 'Panadol',
      time: '3 times in 1 week',
      enable: true,
      id: 0,
    },
    {
      name: 'Vitamin C',
      time: '2 times in 1 week',
      enable: false,
      id: 1,
    },
    {
      name: 'Vitamin A',
      time: '3 times in 1 week',
      enable: false,
      id: 2,
    },
    {
      name: 'Medicine',
      time: '1 times in 1 week',
      enable: true,
      id: 3,
    },
  ];

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderItem = ({item, index}) => {
    let check = item?.enable;
    return (
      <View>
        <View style={styles.ctnItem}>
          <View>
            <Text style={customTxt(Fonts.SemiBold, 20, '#FFFFFF').txt}>
              {item?.name}
            </Text>
            <Text
              style={[
                customTxt(Fonts.Regular, 16, '#FFFFFF').txt,
                {marginTop: 6},
              ]}>
              {item?.time}
            </Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: '#01B243'}}
            thumbColor={item?.enable ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              if (check) {
                console.log('check: ', dataMedication[index]?.enable);
                check = false;
              }
            }}
            value={check}
          />
        </View>
        <View style={styles.divider} />
      </View>
    );
  };

  const renderFlatlist = () => {
    return (
      <View>
        <FlatList
          data={dataMedication}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} />
          )}
        />
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        {renderFlatlist()}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.ctnEdit}>
        <Text style={customTxt(Fonts.SemiBold, 14, '#EA7101').txt}>EDIT</Text>
        <TouchableOpacity>
          <Image
            source={JournalAssets.ic_plus}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>{renderBody()}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  ctnEdit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 28,
  },
  ctnItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#353535',
    marginVertical: 12,
  },
});
