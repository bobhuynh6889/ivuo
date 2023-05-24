import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

// in source
import Fonts from '../../constants/Fonts';
import {customTxt} from '../../constants/fontStyle';
import AddNewMedicaiton from './AddNewMedicaiton';

// image
import JournalAssets from '../../../assets/images/journal';

export default function Intro({onPressComplete}) {
  const [state, setState] = useState(0);
  const [isAddMedication, setAddMedication] = useState(false);
  const renderImage = image => {
    return (
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.ctnImageBg}>
        <TouchableOpacity
          onPress={() => {
            setState(4);
          }}
          style={styles.ctnButtonSkip}>
          <Text style={customTxt(Fonts.Bold, 11, '#FFFFFF').txt}>SKIP</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };

  const renderContent = (title, content, onPress) => {
    return (
      <View style={styles.ctnContent}>
        <Text style={customTxt(Fonts.SemiBold, 24, '#FFFFFF').txt}>
          {title}
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 16, '#FFFFFF').txt,
            {marginHorizontal: 45, marginTop: 45, textAlign: 'center'},
          ]}>
          {content}
        </Text>
        <TouchableOpacity onPress={onPress} style={styles.ctnButtonNext}>
          <Text style={customTxt(Fonts.Bold, 11, '#FFFFFF').txt}>NEXT</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderJournal = (image, title, content, onPress) => {
    return (
      <View>
        {renderImage(image)}
        {renderContent(title, content, onPress)}
      </View>
    );
  };

  const renderDrugScreen = () => {
    return (
      <View style={styles.ctnDrugScreen}>
        <Text style={customTxt(Fonts.SemiBold, 24, '#FFFFFF').txt}>
          MEDICATION
        </Text>
        <Image source={JournalAssets.image_drugs} style={styles.imageDrug} />
        <Text style={customTxt(Fonts.SemiBold, 20, '#FFFFFF').txt}>
          Do you take any medication?
        </Text>
        <View style={styles.ctnNoYesBtn}>
          <TouchableOpacity
            onPress={onPressComplete}
            style={[styles.styleNoYesBtn, {marginRight: 8}]}>
            <Text style={customTxt(Fonts.Bold, 11, '#FFFFFF').txt}>NO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setAddMedication(true);
            }}
            style={[styles.styleNoYesBtn, {marginLeft: 8}]}>
            <Text style={customTxt(Fonts.Bold, 11, '#FFFFFF').txt}>YES</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const switchScreen = stateCheck => {
    switch (stateCheck) {
      case 0:
        return renderJournal(
          JournalAssets.journal_1,
          'JOURNAL',
          'Keep track of your medication, dietary requirements, and daily activities for a healthier lifestyle.',
          () => {
            setState(1);
          },
        );
      case 1:
        return renderJournal(
          JournalAssets.journal_2,
          'MEDICATION',
          'Creating reminders for your medication and vitamin intake can help you stay organised and on track.',
          () => {
            setState(2);
          },
        );
      case 2:
        return renderJournal(
          JournalAssets.journal_3,
          'FOOD & SUPPLEMENTS',
          'Tracking your food and supplement intake can help you maintain overall health and well-being.',
          () => {
            setState(3);
          },
        );
      case 3:
        return renderJournal(
          JournalAssets.journal_4,
          'ACTIVITIES',
          'Set regular exercise routines to help promote your overall balance and contribute to maintaining good health.',
          () => {
            setState(4);
          },
        );
      case 4:
        return renderDrugScreen();
      default:
        break;
    }
  };

  const renderBody = () => {
    return <View style={{paddingBottom: 50}}>{switchScreen(state)}</View>;
  };

  const checkShowScreen = () => {
    if (isAddMedication) {
      return <AddNewMedicaiton onPressComplete={onPressComplete} />;
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={'light-content'} backgroundColor="black" />
          <ScrollView>{renderBody()}</ScrollView>
        </SafeAreaView>
      );
    }
  };

  return checkShowScreen();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  ctnImageBg: {
    height: 626,
    alignItems: 'flex-end',
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  ctnButtonSkip: {
    backgroundColor: '#393939',
    borderRadius: 9,
    paddingVertical: 10,
    paddingHorizontal: 33,
  },
  ctnContent: {
    alignItems: 'center',
    marginTop: -80,
  },
  ctnButtonNext: {
    backgroundColor: '#5A5D60',
    borderRadius: 42,
    paddingVertical: 10,
    paddingHorizontal: 72,
    marginTop: 30,
  },
  ctnDrugScreen: {
    alignItems: 'center',
    marginTop: 20,
  },
  imageDrug: {
    height: 153,
    width: 153,
    marginTop: 170,
    marginBottom: 60,
  },
  ctnNoYesBtn: {
    flexDirection: 'row',
    marginTop: 30,
  },
  styleNoYesBtn: {
    backgroundColor: '#5A5D60',
    borderRadius: 42,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
