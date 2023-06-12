import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

// in source
import Fonts from '../../../constants/Fonts';
import {customTxt} from '../../../constants/fontStyle';
import Entypo from 'react-native-vector-icons/Entypo';

import Header from '../components/Header';

export default function Disclaimer() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Medical Disclaimer'} />
      <ScrollView style={styles.ctnView}>
        <Text style={customTxt(Fonts.Regular, 14, '#FFFFFF').txt}>
          The iUvo Ring is not a medical device and should not be used to
          diagnose, cure, or treat any medical condition. It is not a substitute
          for seeking professional advice from a licensed medical practitioner.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          The features and functions of our health and wellness ring are
          designed to provide caregivers, patients, or medical professionals
          with indications of abnormal behaviour based on real-time health data
          and trends from onboard sensors and software algorithms. The iUvo Ring
          measures the rate of change of specific health parameters and learns
          what is considered a 'normal' range through benchmarking, which we
          call 'Baseline Mode'. This creates parameters for your personalised
          tips, alerts, and recommendations.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          However, it is important to note that in most cases, we advise that
          you consult with a licensed medical practitioner if there is any
          indication of a potential health issue. This is because many health
          conditions require a physical examination for proper diagnosis. Our
          goal is to help identify potential health issues faster so that you
          can seek professional help as soon as possible.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Please keep in mind that non-medical grade wearable devices such as
          the iUvo Ring have limitations based on usage and environmental
          conditions when wearing and not wearing the ring. This may result in
          inaccurate readings, alerts, or notifications. To minimise these
          limitations, please use the ring as intended, ensure that the battery
          is fully charged and that the Bluetooth signal is strong enough to get
          accurate readings.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          iUvo Ring is not responsible for any medical or non-medical issues
          that arise from a consultation with a third-party service provider or
          vendor contacted through our service platform or any external method
          of contact. This includes phone, email, messenger platforms,
          communication services, or walk-ins.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If you do not agree with the contents of this MEDICAL DISCLAIMER,
          please discontinue using our products or services immediately.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Service Changes
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          We retain the right to modify or discontinue, temporarily or
          permanently, our Service, and any service or material provided through
          the Service, at our sole discretion and without prior notice. We will
          not be held liable if any or all parts of the Service become
          unavailable at any time or for any period. At times, we may restrict
          access to certain parts of the Service or the entire Service,
          including for registered users.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Terms Amendments
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          We reserve the right to amend these Terms at any time by posting the
          revised terms on this website. It is your responsibility to
          periodically review these Terms.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Your continued use of the Platform after the posting of the revised
          Terms indicates that you accept and agree to the changes. Please check
          this page frequently to remain aware of any changes, as they are
          binding on you.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          By accessing or using our Service after the effective date of any
          revisions, you agree to be bound by the revised Terms. If you do not
          agree to the new Terms, you are no longer authorised to use the
          Service.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Waiver and Severability
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          No waiver by the Company of any term or condition outlined in these
          Terms shall be deemed a continuing or further waiver of such term or
          condition or any other term or condition, and any failure by the
          Company to assert a right or provision under these Terms shall not
          constitute a waiver of such right or provision.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If any provision of these Terms is found by a court or other tribunal
          of competent jurisdiction to be invalid, illegal, or unenforceable for
          any reason, such provision shall be removed or limited to the least
          extent necessary so that the remaining provisions of these Terms
          remain in full force and effect.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Contact Us
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          If you have any questions about this Privacy Policy, please contact
          us:
        </Text>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            By email: info@iuvoring.com
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            By visiting this page on our website: www.iuvoring.com
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  ctnView: {
    marginHorizontal: 15,
    marginTop: 20,
    paddingBottom: 40,
  },
  marginT8: {
    marginTop: 8,
  },
  marginT4: {
    marginTop: 4,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginLeft: 16,
  },
});
