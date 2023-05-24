import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

// in source
import Fonts from '../../../constants/Fonts';
import {customTxt} from '../../../constants/fontStyle';

import Header from '../components/Header';

export default function Privacy() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Privacy Policy'} />
      <ScrollView style={styles.ctnView}>
        <Text style={customTxt(Fonts.Regular, 14, '#FFFFFF').txt}>
          Welcome to iUvo Ring (“Company”, “we”, “our”, “us”). This Privacy
          Policy, (“Terms”, “Privacy”, ‘Service’) governs your use of our
          website located at www.iuvoring.com (together or individually
          “Service”) operated by iUvo Ring Pte. Ltd.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Our Privacy Policy also governs your use of our Service and explains
          how we collect, safeguard and disclose information that results from
          your use of our web pages.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          By using our web pages, you are also agreeing to be bound by our
          Privacy Policy, which outlines how we collect, protect, and disclose
          information resulting from your use of our Service. Your agreement
          with us includes both the Terms and the Privacy Policy, collectively
          referred to as the "Agreements." You acknowledge that you have
          reviewed and comprehended the Agreements and agree to comply with
          them.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If you do not agree with or are unable to adhere to the Agreements,
          please do not use our Service. However, please inform us via email at
          info@iuvoring.com so that we may attempt to resolve any issues. These
          Terms apply to all individuals, including visitors, users, and others
          who want to access or use our Service.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Definition of Service
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          The term "Service" refers to the website www.iuvoring.com, which is
          operated by iUvo Ring Pte. Ltd.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Changes to Service
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          We reserve the right to modify or discontinue our Service, as well as
          any services or materials offered through the Service, in our sole
          discretion and without prior notice. We shall not be held liable if
          all or a portion of the Service becomes unavailable at any time or for
          any length of time. We may, from time to time, limit access to certain
          sections of the Service or the entire Service, including registered
          users.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Amendments to Terms
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          We reserve the right to modify these Terms at any time by posting the
          updated terms on this website. It is your responsibility to
          periodically review these Terms.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Your continued use of the Service after any revisions become effective
          indicates that you agree to and accept the changes. You should
          frequently review this page to stay informed of any changes, as they
          are legally binding on you.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          By accessing or using our Service after any revisions take effect, you
          agree to abide by the updated terms. If you do not agree to the
          revised terms, you are no longer authorised to use the Service.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Waiver And Severability
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          Any waiver by the Company of a specific term or condition outlined in
          this policy shall not be considered a permanent waiver of that term or
          condition, nor shall it be deemed a waiver of any other term or
          condition. The Company's failure to assert any right or provision
          under these Terms shall not constitute a waiver of that right or
          provision.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If a court or other tribunal of competent jurisdiction deems any
          provision of these Terms to be invalid, illegal, or unenforceable for
          any reason, that provision shall be eliminated or limited to the
          minimum extent necessary so that the remaining provisions of these
          Terms shall continue to be valid and enforceable.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Personal Data
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          The term "Personal Data" refers to data about a living individual that
          can be used to identify that individual, either from that data alone
          or in combination with other information in our possession or likely
          to come into our possession.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          While using our Service, we may request certain personally
          identifiable information from you that can be used to contact or
          identify you ("Personal Data"). This may include, but is not limited
          to:
        </Text>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Email address
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            First name and last name
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Cookies and Usage Data
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Any affiliated social media accounts
          </Text>
        </View>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          We may use your Personal Data to contact you with newsletters,
          marketing or promotional materials and other information that may be
          of interest to you regarding our campaign launch. You may opt out of
          receiving any, or all, of these communications from us by following
          the unsubscribe link or the instructions provided in any email we
          send.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Data Usage
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          Usage Data refers to data that is automatically collected either
          through the use of our Service or from the Service's infrastructure
          itself (such as the duration of a page visit).
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          We may also collect information about how the Service is accessed and
          used, known as "Usage Data." This information may include your
          computer's Internet Protocol (IP) address, browser type and version,
          pages of our Service that you visit, the time and date of your visit,
          the time spent on those pages, unique device identifiers, and other
          diagnostic data.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Cookies
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          Cookies are small files that are stored on your computer or mobile
          device. We may use cookies to help enhance your experience when using
          our website, or services.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Information Collection and Use
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          We collect various types of information for different purposes to
          provide and improve our Service to you.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Cookie Data
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          We use cookies and similar tracking technologies to monitor the
          activity on our Service and hold certain information. Cookies are
          files containing a small amount of data, including an anonymous unique
          identifier. They are sent to your browser from a website and stored on
          your device. We also use other tracking technologies like beacons,
          tags, and scripts to collect and track information and to analyze and
          improve our Service. You can instruct your browser to refuse all
          cookies or to indicate when a cookie is being sent. However, if you do
          not accept cookies, you may not be able to use some portions of our
          Service.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Examples of Cookie Usage:
        </Text>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Session Cookies: we use Session Cookies to operate our Service
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Preference Cookies: we use Preference Cookies to remember your
            preferences and various setting
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Security Cookies: we use Security Cookies for security purposes
          </Text>
        </View>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Communications
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          As a user of our Service, you agree to receive newsletters, marketing
          or promotional materials, and other information we may send regarding
          the launch of our product. However, if you wish to stop receiving any
          or all of these communications from us, you can do so by following the
          unsubscribe link provided in your email or by sending an email to
          info@iuvoring.com.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          While using our Service, any Content provided by users may be
          monitored and edited by iUvo Ring at our discretion. Additionally, any
          Content found on or through our Service is the property of iUvo Ring
          or is used with permission. You may not distribute, modify, transmit,
          reuse, download, repost, copy, or use such Content, in whole or in
          part, for commercial purposes or personal gain without our express
          written permission.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          iUvo Ring Pte. Ltd collects and uses the data collected through our
          Service for various purposes:
        </Text>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To provide and maintain our Service
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To provide you with updates on our product launch via your email
            address to receive notifications on our campaign launch
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To notify you about changes to our Service
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To allow you to participate in interactive features of our Service
            when you choose to do so
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To provide customer support
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To gather analysis or valuable information so that we can improve
            our Service
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To monitor the usage of our Service
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To detect, prevent and address technical issues
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To provide you with news, special offers and general information
            about other goods, services and events which we offer that are
            similar to those that you have already purchased or enquired about
            unless you have opted not to receive such information
          </Text>
        </View>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Transfer of Data
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          Your Personal Data and other information may be transferred and stored
          on computers outside your jurisdiction, where data protection laws may
          differ from those in your jurisdiction.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If you provide information to us from outside Singapore, please note
          that your Personal Data will be transferred to Singapore and processed
          there. By agreeing to this Privacy Policy and submitting your
          information, you consent to this transfer. iUvo Ring Pte. Ltd will
          take reasonable measures to ensure the security and protection of your
          data, per this Privacy Policy. We will not transfer your Personal Data
          to any organisation or country without adequate controls, including
          the security of your data and other personal information.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          In the event of a merger, acquisition, or asset sale, your Personal
          Data may be transferred. We will notify you before any such transfer
          takes place and is subject to a different Privacy Policy.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Legal Requirements
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          iUvo Ring Pte. Ltd. may disclose your Personal Data in the good faith
          belief that such action is necessary to:
        </Text>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To comply with a legal obligation
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To protect and defend the rights or property of iUvo Ring Pte. Ltd.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To prevent or investigate possible wrongdoing in connection with the
            Service
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To protect the personal safety of users of the Service or the public
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To protect against legal liability
          </Text>
        </View>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Data Security
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          While we strive to use commercially acceptable methods to protect your
          Personal Data, the security of your data is important to us, but no
          method of transmission over the Internet or electronic storage is 100%
          secure. We cannot guarantee the absolute security of your Personal
          Data.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Links to Other Sites
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          Our Service may contain links to third-party sites. We do not operate
          these sites and cannot control their content, privacy policies, or
          practices. We strongly advise you to review the Privacy Policy and
          Terms & Conditions of every site you visit.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Prohibited Uses
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          You may only use the Service for lawful purposes and in accordance
          with the Terms. Any use of the Service that violates the Terms is
          prohibited.
        </Text>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            In any way that violates any applicable national or international
            law or regulation.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To exploit, harm, or attempt to exploit or harm minors in any way by
            exposing them to inappropriate content or otherwise.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To transmit, or procure the sending of, any advertising or
            promotional material, including any “junk mail”, “chain letter,”
            “spam,” or any other similar solicitation.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To impersonate or attempt to impersonate Company, a Company
            employee, another user, or any other person or entity.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            In any way that infringes upon the rights of others, or in any way
            is illegal, threatening, fraudulent, or harmful, or in connection
            with any unlawful, illegal, fraudulent, or harmful purpose or
            activity.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            To engage in any other conduct that restricts or inhibits anyone’s
            use or enjoyment of Service, or which, as determined by us, may harm
            or offend the Company or users of Service or expose them to
            liability.
          </Text>
        </View>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Additionally, you agree not to:
        </Text>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Use Service in any manner that could disable, overburden, damage, or
            impair Service or interfere with any other party’s use of Service,
            including their ability to engage in real-time activities through
            Service.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Use any robot, spider, or other automatic devices, process, or means
            to access Service for any purpose, including monitoring or copying
            any of the material on Service.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Use any manual process to monitor or copy any of the material on
            Service or for any other unauthorised purpose without our prior
            written consent.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Use any device, software, or routine that interferes with the proper
            working of Service.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Introduce any viruses, trojan horses, worms, logic bombs, or other
            material which is malicious or technologically harmful.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Attempt to gain unauthorised access to, interfere with, damage, or
            disrupt any parts of Service, the server on which Service is stored,
            or any server, computer, or database connected to Service.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Attack Service via a denial-of-service attack or a distributed
            denial-of-service attack.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Take any action that may damage or falsify Company ratings.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            Otherwise, attempt to interfere with the proper working of Service.
          </Text>
        </View>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Analytics
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          We may engage third-party service providers to monitor and analyze the
          use of our service. This is done to gather geo-location information to
          assist us with our campaign launch strategies and marketing efforts.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Share Credentials Disclaimer
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          Sharing your login credentials with a friend, family member, or
          professional service provider is at your discretion as the account
          holder. The feature is designed for the primary account holder to
          share access with carefully selected users within their network. iUvo
          Ring is not responsible for any changes made by invited users to
          account settings, including but not limited to password changes,
          personal information updates, user profile information changes,
          medical records and journal updates, personal banking information
          changes, subscription and data plan upgrades or changes, notifications
          and personal recommendation settings. iUvo Ring is not responsible for
          any purchases, upgrades or bookings made by any third party, and this
          responsibility is solely upheld by the primary account holder, as per
          the terms of use.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Children's Privacy
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          Our service does not address anyone under the age of 18 ("Children").
          We do not knowingly collect personally identifiable information from
          anyone under the age of 18. If you are a parent or guardian and you
          are aware that your child has provided us with personal data, please
          contact us. If we become aware that we have collected personal data
          from children without verification of parental consent, we take steps
          to remove that information from our servers.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Copyright Policy
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          We respect the intellectual property rights of others. It is our
          policy to respond to any claim that content posted on our service
          infringes on the copyright or other intellectual property rights
          ("Infringement") of any person or entity.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If you are a copyright owner or authorised on behalf of one and you
          believe that the copyrighted work has been copied in a way that
          constitutes copyright infringement, please submit your claim via email
          to info@iuvoring.com with the subject line "Copyright Infringement."
          Include in your claim a detailed description of the alleged
          infringement as detailed below, under "DMCA Notice and Procedure for
          Copyright Infringement Claims."
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Termination
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          We reserve the right to terminate or suspend your account and bar
          access to our service immediately, without prior notice or liability,
          at our sole discretion, for any reason whatsoever and without
          limitation, including but not limited to a breach of terms.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If you wish to terminate your account, you may simply discontinue
          using our service and unsubscribe from our mailing list.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          All provisions of terms which by their nature should survive
          termination shall survive termination, including, without limitation,
          ownership provisions, warranty disclaimers, indemnity and limitations
          of liability.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Limitation of liability
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          We will not be held responsible for any indirect, punitive, special,
          incidental, or consequential damage arising from this agreement,
          including attorneys’ fees and all related costs and expenses of
          litigation and arbitration, or at trial or on appeal if any, whether
          or not litigation or arbitration is instituted unless prohibited by
          law. This includes any claim for personal injury or property damage
          resulting from any violation by you of federal, state, or local laws,
          statutes, rules, or regulations. If we are found liable, our liability
          will be limited to the amount paid for the products and/or services,
          and under no circumstances will there be consequential or punitive
          damages, unless prohibited by law. Some states do not allow the
          exclusion or limitation of punitive, incidental, or consequential
          damages, so the prior limitation or exclusion may not apply to you.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Changes to This Privacy Policy
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          Our Privacy Policy may be updated periodically, and any changes will
          be communicated to you by posting the revised Privacy Policy on this
          page. We will also provide notice of any changes via email and/or a
          prominent notice on our Service before the changes become effective,
          and update the "effective date" at the top of this Privacy Policy.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          It is recommended that you review this Privacy Policy periodically for
          any updates. The revised policy will be deemed effective immediately
          upon being posted on this page with the updated date displayed at the
          top.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If any changes to your personal information and data usage require
          your written consent, we will notify you via email.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Error Reporting and Feedback
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          You can provide us with feedback on our Service, including suggestions
          for improvements, errors, ideas, complaints, and other related
          matters, either directly at info@iuvoring.com or through third-party
          sites and tools. By providing us with such feedback, you acknowledge
          and agree that:
        </Text>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            You will not claim any intellectual property right or other right,
            title, or interest in the Feedback.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            The Company may already have similar development ideas as the
            Feedback.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            The Feedback does not contain any confidential or proprietary
            information from you or any third party.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Entypo name={'controller-record'} size={15} color={'#FFFFFF'} />
          <Text style={[customTxt(Fonts.Regular, 14, '#FFFFFF').txt]}>
            The Company has no obligation of confidentiality regarding the
            Feedback.
          </Text>
        </View>
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
          If you have any questions about this Privacy Policy, please contact us
          by email: info@iuvoring.com.
        </Text>
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
