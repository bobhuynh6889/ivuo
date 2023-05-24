import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  NativeModules,
} from 'react-native';
import React, {useState, useEffect} from 'react';

//in source
import Fonts from '../../constants/Fonts';
import {customTxt} from '../../constants/fontStyle';
import Routes from '../../navigation/Routes';
import NavigationService from '../../navigation';

// icon
import HomeIcon from '../../../assets/images/home';

const dataCause = [
  {
    content:
      'Inner ear problems: Disorders of the inner ear, such as vestibular neuritis or Meniere’s disease, can disrupt the body’s sense of balance.',
  },
  {
    content:
      'Medications: Certain medications, such as sedatives, antihistamines, and blood pressure drugs, can cause dizziness or lightheadedness, leading to falls.',
  },
  {
    content:
      'Vision problems: Poor vision or age-related changes to the eyes can make it difficult to judge distances and obstacles.',
  },
  {
    content:
      'Neurological disorders: Conditions such as Parkinson’s disease or multiple sclerosis can affect balance and coordination.',
  },
  {
    content:
      'Muscle weakness: As we age, our muscles naturally lose strength, which can make it more difficult to maintain balance.',
  },
  {
    content:
      'Cardiovascular problems: Heart disease and other circulatory problems can lead to dizziness and falls.',
  },
  {
    content:
      'Environmental factors: Slippery or uneven surfaces, poor lighting, and cluttered living spaces can all contribute to falls.',
  },
];

const RenderItem = ({item}) => {
  return (
    <View style={styles.ctnCause}>
      <View style={styles.dot} />
      <Text
        style={[customTxt(Fonts.Medium, 13, '#FFFFFF').txt, {marginTop: 2}]}>
        {item?.content}
      </Text>
    </View>
  );
};

export default function Detail() {
  const [h, setH] = useState(0);
  useEffect(() => {
    const {StatusBarManager} = NativeModules;
    setH(StatusBarManager.HEIGHT);
  }, []);
  const _onPressBack = () => {
    NavigationService.goBack();
  };

  const renderHeader = () => {
    return (
      <View style={[styles.ctnHeader, {marginTop: h}]}>
        <TouchableOpacity onPress={_onPressBack}>
          <Image source={HomeIcon.ic_back} style={styles.iconStyle} />
        </TouchableOpacity>
        <View>
          <Text style={customTxt(Fonts.SemiBold, 24, '#FFFFFF').txt}>
            Details
          </Text>
        </View>
        <View></View>
      </View>
    );
  };

  const renderContentTop = () => {
    return (
      <View style={{marginTop: 30, marginHorizontal: 15}}>
        <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
          WHY WAS THIS ALERT TRIGGERED?
        </Text>
        <Text
          style={[customTxt(Fonts.Medium, 13, '#FFFFFF').txt, {marginTop: 12}]}>
          The iUvo ring is equipped with the latest in sensor technology,
          especially in regard to movement and motion. Each movement creates a
          pattern; walking, sleeping, running and even falling. If a fall
          occurs, an abnormal spike is produced due to the rapid velocity and
          sudden stop upon impact. This spike may trigger an alert. Typically, a
          person can endure a fall with a force of 2 to 5 g's, but anything
          beyond 9 g's has the potential to be lethal.
        </Text>
      </View>
    );
  };

  const renderDataOnFall = () => {
    return (
      <View style={{marginTop: 40, marginHorizontal: 15}}>
        <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
          DATA ON THIS FALL
        </Text>
        <View style={styles.ctnNotiChart}>
          <Image source={HomeIcon.ic_chart} style={styles.styleIcChart} />
          <Text style={customTxt(Fonts.SemiBold, 13, '#D8D8D8').txt}>
            G-force data captured during this fall.
          </Text>
        </View>
        <View>
          <Image source={HomeIcon.chart_falling} style={styles.styleChart} />
        </View>
        <View style={{marginLeft: 25}}>
          <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
            REPORT
          </Text>
          <Text
            style={[
              customTxt(Fonts.Medium, 13, '#FFFFFF').txt,
              {marginTop: 4},
            ]}>
            A possible impact was dateced with a sudden increase in g-force
            moving from 1.1 G’s to 5.4 in a time span of 0.5 seconds followed by
            a rapid decline to 0.1 G/s in 0.2 seconds.
          </Text>
        </View>
      </View>
    );
  };

  const renderSymptomOrCause = () => {
    return (
      <View style={{marginTop: 40, marginHorizontal: 15}}>
        <Text style={customTxt(Fonts.SemiBold, 13, '#FFFFFF').txt}>
          WHY WAS THIS ALERT TRIGGERED?
        </Text>
        <Text
          style={[customTxt(Fonts.Medium, 11, '#F1F1F1').txt, {marginTop: 2}]}>
          Information provided by ChatGPT.
        </Text>
        <Text
          style={[customTxt(Fonts.Medium, 13, '#FFFFFF').txt, {marginTop: 12}]}>
          There are many potential causes of loss of balance and falls in a
          65-year-old female. Some common causes include
        </Text>
        <View style={styles.devider} />
        <View>
          <FlatList
            data={dataCause}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <RenderItem item={item} index={index} />
            )}
          />
        </View>
        <View style={styles.ctnBlock}>
          <Text style={[customTxt(Fonts.Medium, 13, '#FFFFFF').txt]}>
            If you or someone you know is experiencing recurrent falls or loss
            of balance, it is important to consult a healthcare professional for
            a proper evaluation and treatment plan.
          </Text>
        </View>
      </View>
    );
  };

  const renderRateImage = () => {
    return (
      <View style={{marginTop: 30}}>
        <Image source={HomeIcon.image_falling} />
      </View>
    );
  };

  const renderBlockExplain = () => {
    return (
      <View style={styles.ctnBlockRate}>
        <View style={styles.dot} />
        <Text
          numberOfLines={5}
          style={[customTxt(Fonts.Medium, 13, '#FFFFFF').txt]}>
          The iUvo Ring is not a medical device and should not be used for the
          diagnosis, treatment, or prevention of any medical condition. Always
          consult with a doctor or medical professional.
        </Text>
      </View>
    );
  };

  const renderBlockRate = () => {
    return (
      <View style={styles.ctnBlockRateIcon}>
        <View>
          <Text style={customTxt(Fonts.Medium, 13, '#FFFFFF').txt}>
            How accurate was our notification or alert?
          </Text>
        </View>
        <View style={styles.ctnIconRate}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={HomeIcon.ic_like} style={styles.iconRateStyle} />
            <Text style={customTxt(Fonts.Medium, 13, '#FFFFFF').txt}>
              Better
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={HomeIcon.ic_unlike} style={styles.iconRateStyle} />
            <Text style={customTxt(Fonts.Medium, 13, '#FFFFFF').txt}>
              Worse
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={HomeIcon.ic_same} style={styles.iconRateStyle} />
            <Text style={customTxt(Fonts.Medium, 13, '#FFFFFF').txt}>Same</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={styles.ctnBody}>
        {renderContentTop()}
        {renderDataOnFall()}
        {renderSymptomOrCause()}
        {renderRateImage()}
        {renderBlockExplain()}
        {renderBlockRate()}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView>{renderBody()}</ScrollView>
      <View style={styles.ctnBottom}>
        <TouchableOpacity style={styles.ctnItemBlockBottom}>
          <Image source={HomeIcon.ic_call} style={styles.iconCallStyle} />
          <Text style={customTxt(Fonts.Medium, 13, '#FFFFFF').txt}>Mother</Text>
        </TouchableOpacity>
        <View style={styles.verticalDevider} />
        <TouchableOpacity style={styles.ctnItemBlockBottom}>
          <Image source={HomeIcon.ic_call} style={styles.iconCallStyle} />
          <Text style={customTxt(Fonts.Medium, 13, '#FFFFFF').txt}>Doctor</Text>
        </TouchableOpacity>
        <View style={styles.verticalDevider} />
        <TouchableOpacity style={styles.ctnItemBlockBottom}>
          <Image source={HomeIcon.ic_call} style={styles.iconCallStyle} />
          <Text style={customTxt(Fonts.Medium, 13, '#FFFFFF').txt}>
            Caregiver
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  ctnBody: {
    paddingBottom: 20,
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
  ctnHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingBottom: 4,
  },
  ctnNotiChart: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 13,
    backgroundColor: '#222222',
    borderRadius: 8,
    marginTop: 20,
  },
  styleIcChart: {
    height: 13,
    width: 11.5,
    marginRight: 14,
  },
  styleChart: {
    height: 271,
    width: Dimensions.get('screen').width - 40,
    marginTop: 20,
  },
  dot: {
    height: 4,
    width: 4,
    backgroundColor: '#868686',
    borderRadius: 2,
    marginRight: 10,
  },
  ctnCause: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  devider: {
    height: 1,
    width: '100%',
    backgroundColor: '#868686',
    marginVertical: 12,
    marginHorizontal: 5,
  },
  ctnBlock: {
    backgroundColor: '#222222',
    padding: 12,
    borderRadius: 8,
  },
  imageFalling: {
    height: 387,
    width: Dimensions.get('screen').width,
  },
  ctnBlockRate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    padding: 12,
    backgroundColor: '#222222',
    borderRadius: 8,
    marginTop: -100,
  },
  ctnBlockRateIcon: {
    marginHorizontal: 40,
    paddingHorizontal: 12,
    paddingVertical: 15,
    backgroundColor: '#222222',
    borderRadius: 8,
    marginTop: 15,
  },
  ctnIconRate: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconRateStyle: {
    height: 20,
    width: 20,
    marginRight: 6,
  },
  ctnBottom: {
    backgroundColor: '#222222',
    height: 52,
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  ctnItemBlockBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCallStyle: {
    height: 16,
    width: 16,
    marginRight: 4,
  },
  verticalDevider: {
    width: 1,
    height: '100%',
    backgroundColor: '#434343',
  },
});
