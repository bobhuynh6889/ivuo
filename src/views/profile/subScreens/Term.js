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
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          All content provided in association with the Services and this
          Agreement, including the Site, the Product, the Mobile App, and all
          other Copyrighted Works, are owned, controlled, or licensed by or to
          iUvo and are protected by U.S. and international copyright laws. You
          agree not to copy, reproduce, modify, create derivative works from,
          distribute, or publicly display the Copyrighted Works without prior
          express written permission from iUvo.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If you provide Feedback to iUvo, iUvo is free to use such Feedback,
          including any ideas, know-how, concepts, techniques, or other
          intellectual property rights contained therein, for any purpose
          whatsoever, without any attribution or compensation to any party.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          iUvo respects the intellectual property rights of others and promptly
          processes and reviews notices of claimed infringement of copyright or
          other applicable intellectual property laws.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Warranty Disclaimer
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          The services are provided to you "as is with all faults" and "as
          available" without any kind of warranty. iUvo and its subsidiaries,
          affiliates, officers, directors, employees, representatives, agents,
          partners, and licensors hereby disclaim all warranties and conditions
          concerning the services, whether express or implied. This includes the
          warranty of title, merchantability, fitness for a particular purpose,
          satisfactory quality, and non-infringement. iUvo does not guarantee
          interference with your enjoyment of the services, the availability of
          content, that the functions contained in the services will meet your
          requirements, that the services will be free of viruses or other
          harmful components, that the operation of the services will be
          uninterrupted or error-free, that defects in the services will be
          corrected, or that the functions contained in the services will
          function with other mobile apps or hardware, or within a system. No
          oral or written information or advice given by iUvo or an iUvo
          authorised representative shall create a warranty. However, some
          jurisdictions do not allow the exclusion of implied warranties or
          limitations on the applicable statutory rights of a consumer, so the
          above exclusion may not apply.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Notwithstanding the foregoing, iUvo provides a limited warranty to the
          original end-user purchaser that the product is free from defects in
          material and workmanship for one (1) year from the date of purchase.
          If your local law in effect at the time of purchase requires a
          warranty period longer than one (1) year, this warranty shall be
          extended to the extent required by such law. Within the warranty
          period, iUvo shall repair or replace any components of the Product
          that fail the limited warranty provided at no charge to you. However,
          you shall be responsible for any related transportation charges.
          Replacement products may be new or refurbished at our discretion. This
          limited warranty does not apply to normal wear and tear, including
          scratches and dents, consumable parts included in the Product such as
          batteries unless product damage has occurred due to a defect in
          materials or workmanship, damage resulting from your failure to use
          the Product following the instructions accompanying the iUvo Product
          or available at the website, damage resulting from an accident, flood,
          fire, misuse, or abuse, damage resulting from service performed, or
          damage resulting from tampering with or alterations to the Product by
          anyone not authorised by iUvo, or use of the Product with any
          application or software other than the Mobile App.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          At its sole discretion, iUvo reserves the exclusive right to either
          repair or replace the Product or offer a full refund. This remedy
          shall be the only solution available to you for any breach of this
          limited warranty. Any repairs or replacements made under warranty will
          be covered by a new warranty that is valid for the longer of either
          ninety (90) days or the remaining balance of the original one (1) year
          warranty.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Limitation of Liability
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          Under no circumstances shall iUvo, its subsidiaries, affiliates,
          officers, directors, employees, representatives, agents, partners, and
          licensors be held liable for any damages of any nature, under any
          legal theory, that arise from or are related to your use of the
          services or any content associated with the services, or from any
          other sites or services or items obtained through the services. This
          includes but is not limited to, direct, indirect, special, incidental,
          consequential, or punitive damages, such as personal injury, emotional
          distress, loss of revenue, profits, business or anticipated savings,
          business interruption, loss of use, goodwill, or data. These
          exclusions or limitations will apply regardless of whether iUvo has
          been advised of the possibility of such damages and whether the
          damages arise from tort (including negligence), breach of contract, or
          any other legal theory.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Precautions
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          The services offered by iUvo are not considered to be a medical
          device, and by using the services, you acknowledge that they do not
          constitute medical advice from iUvo. The services are not intended to
          diagnose, treat, cure, or prevent any disease or medical condition.
          They are solely for informational purposes and should not be used as a
          substitute for advice from a physician or other medical professionals.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If you have any health-related questions, it is recommended that you
          promptly contact your physician or other medical providers. It is
          important to never disregard medical advice or delay seeking medical
          attention because of any information presented on the services.
          Furthermore, the use of the services or any information provided
          within the services should not be used to diagnose or treat a health
          problem. Communication via the internet, email, or any other means,
          including the transmission and receipt of services in whole or in
          part, does not establish or create a doctor-patient,
          therapist-patient, or any other healthcare professional relationship
          between you and iUvo.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Before making any changes to your sleep or activity based on
          information provided through the services, it is important to consult
          with a physician. iUvo is not responsible for any health problems that
          may arise from information obtained through the services, and any
          changes made to sleep or activity based on such information are done
          so at your own risk. If you experience unexpected, repeating, or
          long-term pain, fatigue, or discomfort due to changes in your sleep or
          activity, it is recommended that you consult with a physician before
          continuing with such changes. The information provided within the
          services may be misleading if your physiological functions and
          responses differ significantly from population averages due to medical
          conditions or rare natural differences.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Please use caution to ensure that the product you are wearing does not
          become caught on fixed structures or heavy objects. If you experience
          redness or skin irritation on your finger while wearing the product,
          remove it immediately. If symptoms persist for more than 2-3 days
          after discontinuing the use of the product, please contact a medical
          professional.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Our product should never be placed in the mouth and is not intended
          for use by children. Children should not be left unattended with the
          product, as it may pose a choking hazard.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          The services may provide links to other websites, but iUvo does not
          endorse or have any affiliation, relationship, or sponsorship with the
          providers of such linked sites. iUvo is not responsible for any loss
          or injury you may suffer as a result of accessing the content provided
          on or through any linked site, and your use of any third-party site is
          subject to the terms and conditions applicable to that site, including
          its privacy policies.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Any content not owned by iUvo is owned by its respective owner, and
          iUvo is not liable or responsible for any such content provided by
          third parties, including your reliance on it. iUvo makes no
          representations or warranties concerning any third-party content.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          By using the services, you agree to indemnify, hold harmless, and
          defend iUvo, its subsidiaries, affiliates, officers, directors,
          employees, representatives, agents, partners, licensors, successors,
          and assigns, from any action, cause, claim, damage, debt, demand, or
          liability, including reasonable costs and attorneys’ fees, arising
          from (i) your use of the services, including anyone using your account
          or credentials; (ii) your breach of this agreement or anyone using
          your account or credentials; (iii) any information used, stored, or
          transmitted in connection with your account or credentials; (iv) your
          breach of the rights of any third party, including but not limited to
          privacy, publicity, intellectual property, or other proprietary rights
          or anyone using your account or credentials; or (v) your violation of
          any law, regulation, or other legal requirements.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Termination; Cancellation
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          This Agreement will remain in effect until it is terminated or
          cancelled according to the terms outlined in this Agreement.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          iUvo reserves the right to terminate this Agreement in the following
          circumstances: (i) for any reason, with thirty (30) days' notice to
          you; (ii) immediately if you materially breach this Agreement
          (excluding non-payment of Fees); or (iii) if you fail to pay Fees.
          However, iUvo may, at its sole discretion and without notice, remove,
          modify, suspend, or disable access to all or part of the Services at
          any time and for any reason.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          You may terminate this Agreement for any reason by giving iUvo thirty
          (30) days' notice by emailing info@iuvoring.com. You are responsible
          for all Fees incurred before and during the notice period.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Sections entitled Precautions, Intellectual Property Rights, Data and
          Communications, Indemnification, Warranty Disclaimer, Limitation of
          Liability, Governing Law, Forum; Mandatory Binding Arbitration; Class
          Action Waiver, and payment obligations for Fees incurred before and
          during any notice period will survive the termination of this
          Agreement for any reason.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Miscellaneous
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          You acknowledge that iUvo is authorised to monitor the usage of the
          Services to guarantee adherence to the Agreement.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Any waiver of a term, provision, or condition of this Agreement,
          whether by conduct or otherwise, in one or more instances, shall not
          be considered or constitute a waiver of any other term, provision, or
          condition of this Agreement, regardless of similarity. Such waiver
          shall not constitute a continuing waiver of any term, provision, or
          condition of this Agreement. Any waiver will only be binding if it is
          made in writing by the party that is granting the waiver.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          You may not assign this Agreement to any other party and any attempt
          to do so is void.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          In the event that any provision of this Agreement is deemed illegal or
          unenforceable, such provision shall be enforced to the fullest extent
          permitted by law, and the remaining provisions shall remain fully
          effective and enforceable.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          This Agreement, along with the Privacy Policy, constitutes the entire
          and exclusive agreement between you and iUvo with respect to the
          Services and supersedes any and all prior or contemporaneous
          communications, representations, statements, and understandings,
          whether oral or written, between the parties.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          If there is any conflict between the terms of this Agreement and the
          Privacy Policy, the terms of this Agreement shall take precedence.
        </Text>
        <Text
          style={[
            customTxt(Fonts.SemiBold, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          Modification of the Terms and Services
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT4,
          ]}>
          iUvo has the right to update its Agreement and/or Privacy Policy at
          its sole discretion by posting updated terms. The changes will become
          effective on a prospective basis from the date of posting unless
          otherwise indicated by iUvo. iUvo will notify you of any material
          changes to the Agreement or Services. By continuing to use the
          Services after being notified of a modification, you agree to be bound
          by the modified Agreement. If the modified Agreement is not acceptable
          to you, your only option is to stop using the Services.
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#FFFFFF').txt,
            styles.marginT8,
          ]}>
          iUvo and its third-party service providers may make improvements
          and/or changes to the Services, features, and prices described at any
          time and for any reason at their sole discretion. The Mobile App may
          download and install upgrades, updates, and additional features to
          improve, enhance, and further develop the Services. iUvo has the right
          to modify or discontinue the Services or any portion thereof,
          temporarily or permanently, with or without notice. You acknowledge
          that iUvo will not be liable to you or any third party for any
          modification, suspension, or discontinuance of the Services.
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
