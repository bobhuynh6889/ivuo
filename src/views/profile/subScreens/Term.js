import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

// in source
import Fonts from '../../../constants/Fonts';
import {customTxt} from '../../../constants/fontStyle';

import Header from '../components/Header';

export default function Term() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Term of Use'} />
      <ScrollView style={styles.ctnView}>
        <Text style={customTxt(Fonts.Regular, 14, '#FFFFFF').txt}>
          Thank you for your interest in iUvo Ring. Our Terms of Use (the
          “Agreement”) govern your use of www.iuvoring.com (the “Site”), the
          smart ring, charger, and/or other electronic devices (the “Products”),
          and the iUvo mobile application (the “Mobile App”) (collectively, the
          “Services”). iUvo Health and its affiliates and subsidiaries, such as
          iUvo Ring Pte. Ltd., own and operate the Site and Mobile App
          (collectively referred to as “iUvo”).
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          In this Agreement, “iUvo,” “iUvo Ring,” “us,” and “we” refer to
          ourselves, while “you” or “Customer” refers to you. Each of us is
          referred to as a “Party,” and together, we are the “Parties.”
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          By using the Services, including accessing the Site, you agree to be
          bound by this Agreement and the Privacy Policy, which is incorporated
          by reference. If you do not agree to these terms and conditions, you
          may not use the Services.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          iUvo grants you a limited license to access the Site, and if you
          choose to use the Mobile App, you are further granted a license to
          access and use the Services. However, your access is subject to
          compliance with this Agreement, the Privacy Policy, and any other
          rules and requirements communicated by iUvo, including payment of
          applicable fees. Please note that iUvo may modify, update, or change
          the Services at any time and at its sole discretion.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          You represent and warrant that you are at least 18 years old and have
          the legal authority to accept this Agreement on your behalf or on
          behalf of any party you represent. You alone are responsible for your
          activities and interactions with the Services.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          You may not use the Services beyond the scope of the access granted in
          this Agreement. You may not copy, modify, or create derivative works
          of the Services, in whole or in part, or reverse engineer,
          disassemble, decompile, decode, adapt, or gain access to any Mobile
          App component of the Services, in whole or in part. Additionally, you
          may not use the Services in any manner that infringes,
          misappropriates, or otherwise violates any intellectual property right
          or other rights of any person or entity or that violates any law,
          regulation, or legal requirement.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Products purchased from iUvo are intended for your personal use only
          and are not authorised for resale without iUvo Ring's express
          authorisation. We reserve the right to refuse or cancel your order if
          we suspect you are purchasing Services for resale. Title for Products
          purchased from iUvo passes to you upon delivery by iUvo or our
          designated carrier.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Except for the limited license to access the Site and Mobile App, this
          Agreement does not grant or confer any right, title, or interest to
          any intellectual property, including any inventions, patents, patent
          applications, proprietary information, trade secrets, copyrights,
          trademarks, service marks, logos, or other tangible or intangible
          proprietary rights.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          You acknowledge that the Services may be inaccessible or inoperable at
          times due to equipment malfunctions, maintenance procedures, repairs,
          or causes beyond iUvo's control. iUvo may also temporarily suspend
          access to the Services for security purposes, to prevent illegal or
          fraudulent activity, to comply with requests from legal agencies or
          government entities, or if you violate this Agreement or the Privacy
          Policy.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          iUvo may engage third-party service providers to assist in the
          performance of the Services, such as web-hosting providers, payment
          processors, and other third parties. You must comply with the terms of
          use and other requirements associated with these third-party services
          in connection with the Services.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Customer Responsibilities
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          By using the Services, you accept full responsibility and liability
          for any direct or indirect use of the Services, and you must determine
          whether such access or use complies with this Agreement. It is your
          sole responsibility to comply with all applicable laws related to your
          use of the Services and to use the Services only for lawful purposes
          per all applicable federal and state laws and regulations, including
          those related to securities, money laundering, and counter-terrorism.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          You must ensure that you have access to and can use the Services,
          including obtaining your compatible hardware, Mobile App, internet
          access, security Mobile App, backup devices or services, and any other
          requirements. iUvo is not responsible for providing any additional
          Mobile App or hardware. You also agree that iUvo is not responsible
          for any data loss, damage, or loss suffered in connection with your
          use of the Services, including inadequate security or backup devices
          or services.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          It is your responsibility to ensure that iUvo has accurate and
          up-to-date information for your Customer account, including current
          payment and contact information. You must also regularly check your
          associated Customer email account for any communications from iUvo.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If you receive a username, password, credentials file, or any other
          security-related information (“Credentials”), you must treat this
          information as confidential and not disclose it to any other person or
          entity. Your account and Credentials are personal to you, and you
          agree not to share access to the Services or any portions of the
          Services with any other person using your username, password, or other
          security information. You must notify iUvo immediately if you become
          aware of any unauthorised access or use of your Credentials or any
          other security breach. iUvo reserves the right to disable any
          username, password, credentials file, or other identifiers at any
          time, whether selected by you or provided by iUvo.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          iUvo will use commercially reasonable efforts to provide support
          services for the Services. However, this Agreement does not guarantee
          any specific level, availability, or turnaround time for support
          services for the Services.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Payment and Fees
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          The Paid Services offered by iUvo include both one-time purchases and
          subscription-based services, such as those available through our Site
          and Mobile App. iUvo reserves the right to modify, suspend, or
          discontinue any Paid Services at any time, and has sole discretion in
          determining which Services require payment.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          In addition to standard Paid Services, you may also have the option to
          pre-order products that are not yet available for shipping. When
          placing a pre-order, you will be charged a fee, but the actual
          shipping date is subject to a variety of factors and cannot be
          guaranteed. By using any Paid Services, you agree to pay all
          applicable fees, including subscription fees, user fees, and offering
          fees. These fees and any associated taxes or other costs will be
          charged to your designated payment method. If your payment method is
          invalid or cannot be verified, your Paid Service may be suspended or
          cancelled until the issue is resolved. You authorise us or our
          third-party payment processor to charge your payment method for the
          total amount of your purchase, including any applicable taxes and
          charges.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If you finance a purchase through our third-party payment processor,
          you may be required to make loan payments, including interest, before
          all items in your order are shipped. Please note that any interest
          that has already accrued on a refunded amount may not be rebated.
          Finally, please note that all payment obligations related to Paid
          Services will survive the termination or cancellation of your
          agreement with iUvo.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Some Services require subscription-based purchases, and the following
          terms apply: Your subscription may have different terms, such as
          monthly or annually, and will continue until you cancel or iUvo
          suspends or terminates it. Before each Subscription Term, we will
          notify you of the applicable fees and charge your designated payment
          method, including any applicable taxes and charges.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          You can cancel your Subscription at any time, and the cancellation
          will take effect at the end of the current Subscription Term. To
          cancel, click on the “Cancel Account” button on your account screen or
          submit a ticket to our support team at info@iuvoring.com. However, you
          will not receive a refund for the current Subscription Term, and you
          will continue to have access to the Subscription until the end of that
          term. If you cancel, we may still send you promotional communications
          unless you opt out of them.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If we provide refunds, discounts, or other credits to some or all
          users, it's at our discretion, and it doesn't oblige us to do so in
          the future. If you reside outside the United States and haven't used
          the Services during the Cooling-Off Period, you may be eligible for a
          full refund within fourteen (14) days.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Occasionally, we may offer free trials of certain Subscriptions for a
          specified period without payment. Before you start your free trial, we
          will notify you of the applicable Subscription fees that will be
          charged once your free trial expires. If you do not cancel your
          Subscription before the end of your free trial by following the
          outlined steps, we or our third-party payment processor will charge
          your designated payment method regularly for your Subscription fee,
          plus any applicable taxes and other charges, for as long as your
          Subscription continues. To avoid any charges, you must cancel your
          Subscription before the end of your free trial period. The
          instructions for cancelling your Subscription are described above.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Your payment information will be processed and stored by a third-party
          payment processor. All paid account holders must keep at least one
          valid payment method for the payment of Fees, which are detailed
          during checkout. All Fees are billed to you on a monthly or annual
          basis, depending on your preference, and are due immediately upon
          receipt and are subject to change. You acknowledge that Fees have a
          recurring payment feature and you are responsible for all recurring
          charges before cancellation. Fees will be charged or debited from the
          designated payment method one day before the monthly or yearly
          anniversary of the initial purchase date.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If you have not logged in or used the Services for six (6) months or
          more following the purchase or receipt of a Product during a free
          trial, we reserve the right to terminate your subscription, cancel any
          pending purchases, and refund you the purchase price of the Product
          only. You will not be entitled to a refund for the value of the
          Subscription during the free trial.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          iUvo retains the right to adjust the Fees for our Paid Services, or
          any features or parts of our Paid Services, at any time. You
          acknowledge that iUvo may change the Fees for Paid Services at any
          time. In the event of a change, iUvo will notify you via the email
          address associated with your account at least thirty (30) days before
          the effective date of the change. Your continued use of the Services
          indicates your acceptance of any changes to the Fees. You are solely
          responsible for all applicable taxes and will be charged for taxes
          when required by law.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Data and Communications
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          iUvo may gather and process information about your use of its
          Services, and you give your consent to such collection and use, as
          well as to the sharing of such information with third-party service
          providers for purposes of providing, marketing, and improving the
          Services, and for any other reason stated in the Privacy Policy. All
          personal information gathered by iUvo is handled by the Privacy
          Policy.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          By accepting the terms and conditions of this Agreement and providing
          your contact information to iUvo, you give your express consent for
          iUvo, its affiliates, and agents to contact you from time to time
          using any mailing address, phone number, or email address you
          provided. This means that you agree to be contacted by iUvo and its
          service providers via phone, email, text message, or other means for
          any purpose, including notifications related to the Services and your
          account, subscriptions, purchases, available upgrades, billing and
          payment processing issues, and telemarketing communications. These
          communications may involve the use of automated dialling technology or
          pre-recorded messages. Any charges incurred as a result of such
          communication are your responsibility. You acknowledge that your
          consent to the foregoing is not a condition of using the iUvo Services
          and that you may contact iUvo to request placement on a do-not-contact
          list or opt-out at any time using the opt-out mechanism provided in
          any such communications.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          iUvo assumes no liability under this Agreement for any information you
          provide that may constitute electronic patient health records or
          similar information, notwithstanding anything to the contrary in this
          Agreement or as otherwise required by any applicable federal, state,
          or international laws, rules, or regulations.
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
