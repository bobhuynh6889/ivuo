import {View, Text, StyleSheet, SafeAreaView, Switch} from 'react-native';
import React, {useState} from 'react';

// in source
import Fonts from '../../../constants/Fonts';
import {customTxt} from '../../../constants/fontStyle';

// assets
import ProfileAssets from '../../../../assets/images/profile';

import Header from '../components/Header';

export default function Preferences() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleSwitch = () => setDarkMode(previousState => !previousState);
  const [metric, setMetric] = useState(false);
  const toggleSwitchMetric = () => setMetric(previousState => !previousState);
  const [notification, setNotification] = useState(true);
  const toggleSwitchNotification = () =>
    setNotification(previousState => !previousState);
  const [activityNoti, setActivityNoti] = useState(true);
  const toggleSwitchActivityNoti = () =>
    setActivityNoti(previousState => !previousState);
  const [impact, setImpact] = useState(false);
  const toggleSwitchImpact = () => setImpact(previousState => !previousState);
  const [voiceImpact, setVoiceImpact] = useState(false);
  const toggleSwitchVoiceImpact = () =>
    setVoiceImpact(previousState => !previousState);
  const [journal, setJournal] = useState(true);
  const toggleSwitchJournal = () => setJournal(previousState => !previousState);
  const [airplane, setAirplane] = useState(false);
  const toggleSwitchAirplane = () =>
    setAirplane(previousState => !previousState);

  const renderLine = (title, devider, state, toggle) => {
    return (
      <View style={{marginTop: 12, marginHorizontal: 20}}>
        <View style={styles.ctnLine}>
          <Text style={customTxt(Fonts.SemiBold, 18, '#FFFFFF').txt}>
            {title}
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#01B243'}}
            thumbColor={state ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggle}
            value={state}
          />
        </View>
        {devider && <View style={styles.devider} />}
      </View>
    );
  };
  const renderBody = () => {
    return (
      <View style={{marginTop: 36}}>
        {renderLine('Dark mode', true, darkMode, toggleSwitch)}
        {renderLine('Metric or Imperial', true, metric, toggleSwitchMetric)}
        {renderLine(
          'Show in-App Push notification',
          true,
          notification,
          toggleSwitchNotification,
        )}
        {renderLine(
          'Show Activity notifications',
          true,
          activityNoti,
          toggleSwitchActivityNoti,
        )}
        {renderLine(
          'Send to Chat App for Impact Alerts',
          true,
          impact,
          toggleSwitchImpact,
        )}
        {renderLine(
          'Send Voice Call for Impact Alerts',
          true,
          voiceImpact,
          toggleSwitchVoiceImpact,
        )}
        {renderLine('Journal notification', true, journal, toggleSwitchJournal)}
        {renderLine('Airplane mode', true, airplane, toggleSwitchAirplane)}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Preferences'} />
      {renderBody()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  devider: {
    height: 1,
    width: '100%',
    backgroundColor: '#363636',
    marginTop: 12,
  },
  ctnLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
