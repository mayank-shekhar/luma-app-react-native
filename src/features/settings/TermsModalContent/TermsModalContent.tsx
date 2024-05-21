import React, {useState} from 'react';
import {View, Text, Modal, Button} from 'react-native';
import {WebView} from 'react-native-webview';

export type TermsModalContentProps = {
  onClose?: () => void;
};

const TermsModalContent = (props: TermsModalContentProps) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 25,
        marginTop: 75,
        flex: 1,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}>
      <View style={{alignItems: 'flex-start'}}>
        <Button title="Close" onPress={props.onClose} />
      </View>

      <WebView
        originWhitelist={['*']}
        source={{
          html: `<!DOCTYPE html>
<html>
    <head>
        <title>Terms Of Use & Privacy Policy</title>
        <style>
            body {
                font-family: "Avenir", sans-serif;
                font-size: 16px;
                padding: 15px 15px;
            }
            a {
                color: purple;
                font-weight: 600;
            }
        </style>
    </head>
    <body>

        <h2><center>TERMS OF USE</center></h2>
        Welcome to our APP_NAME!<br>
        APP_NAME and its associates provide their services to you subject to the following conditions. Please read them carefully.
        <br><br>

        <strong>ELECTRONIC COMMUNICATIONS</strong><br>
        When you visit APP_NAME or send e-mails to us, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you by e-mail or by posting notices on this site. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.
        <br><br>

        <strong>COPYRIGHT</strong><br>
        All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of APP_NAME or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of APP_NAME, with copyright authorship for this collection by APP_NAME, and protected by international copyright laws.
        <br><br>

        <strong>TRADE MARKS</strong><br>
        APP_NAMEs trademarks and trade dress may not be used in connection with any product or service that is not APP_NAMEs, in any manner that is likely to cause confusion among customers, or in any manner that disparages or discredits APP_NAME. All other trademarks not owned by APP_NAME or its subsidiaries that appear on this site are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by APP_NAME or its subsidiaries.
        <br><br>

        <strong>LICENSE AND SITE ACCESS</strong><br>
        APP_NAME grants you a limited license to access and make personal use of this site and not to download (other than page caching) or modify it, or any portion of it, except with express written consent of APP_NAME. This license does not include any resale or commercial use of this site or its contents: any collection and use of any product listings, descriptions, or prices: any derivative use of this site or its contents: any downloading or copying of account information for the benefit of another merchant: or any use of data mining, robots, or similar data gathering and extraction tools. This site or any portion of this site may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent of APP_NAME. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of APP_NAME and our associates without express written consent. You may not use any meta tags or any other "hidden text" utilizing APP_NAMEs name or trademarks without the express written consent of APP_NAME. Any unauthorized use terminates the permission or license granted by APP_NAME. You are granted a limited, revocable, and nonexclusive right to create a hyperlink to the home page of APP_NAME so long as the link does not portray APP_NAME, its associates, or their products or services in a false, misleading, derogatory, or otherwise offensive matter. You may not use any APP_NAME logo or other proprietary graphic or trademark as part of the link without express written permission.
        <br><br>

        <strong>YOUR MEMBERSHIP ACCOUNT</strong>
        If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. If you are under 18, you may use our website only with involvement of a parent or guardian. APP_NAME and its associates reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in their sole discretion.
        <br><br>

        <strong>REVIEWS, COMMENTS, EMAILS, AND OTHER CONTENT</strong><br>
        Visitors may post reviews, comments, and other content: and submit suggestions, ideas, comments, questions, or other information, so long as the content is not illegal, obscene, threatening, defamatory, invasive of privacy, infringing of intellectual property rights, or otherwise injurious to third parties or objectionable and does not consist of or contain software viruses, political campaigning, commercial solicitation, chain letters, mass mailings, or any form of "spam." You may not use a false e-mail address, impersonate any person or entity, or otherwise mislead as to the origin of a card or other content. APP_NAME reserves the right (but not the obligation) to remove or edit such content, but does not regularly review posted content. If you do post content or submit material, and unless we indicate otherwise, you grant APP_NAME and its associates a nonexclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media. You grant APP_NAME and its associates and sublicensees the right to use the name that you submit in connection with such content, if they choose. You represent and warrant that you own or otherwise control all of the rights to the content that you post: that the content is accurate: that use of the content you supply does not violate this policy and will not cause injury to any person or entity: and that you will indemnify APP_NAME or its associates for all claims resulting from content you supply. APP_NAME has the right but not the obligation to monitor and edit or remove any activity or content. APP_NAME takes no responsibility and assumes no liability for any content posted by you or any third party.
        <br><br>

        <strong>RISK OF LOSS</strong><br>
        All items purchased from APP_NAME are made pursuant to a shipment contract. This basically means that the risk of loss and title for such items pass to you upon our delivery to the carrier.
        <br><br>

        <strong>PRODUCT DESCRIPTIONS</strong><br>
        APP_NAME and its associates attempt to be as accurate as possible. However, APP_NAME does not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free. If a product offered by APP_NAME itself is not as described, your sole remedy is to return it in unused condition.
        <br><br>

        DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY THIS SITE IS PROVIDED BY APP_NAME ON AN "AS IS" AND "AS AVAILABLE" BASIS. APP_NAME MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THIS SITE OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON THIS SITE. YOU EXPRESSLY AGREE THAT YOUR USE OF THIS SITE IS AT YOUR SOLE RISK. TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, APP_NAME DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. APP_NAME DOES NOT WARRANT THAT THIS SITE, ITS SERVERS, OR E-MAIL SENT FROM APP_NAME ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. APP_NAME WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THIS SITE, INCLUDING, BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES. CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MIGHT HAVE ADDITIONAL RIGHTS.
        <br><br>

        <strong>APPLICABLE LAW</strong>
        By visiting APP_NAME, you agree that the laws of the state of DEFINE_STATE, DEFINE_COUNTRY, without regard to principles of conflict of laws, will govern these Conditions of Use and any dispute of any sort that might arise between you and APP_NAME or its associates.
        <br><br>

        <strong>DISPUTES</strong><br>
        Any dispute relating in any way to your visit to APP_NAME or to products you purchase through APP_NAME shall be submitted to confidential arbitration in DEFINE_STATE, DEFINE_COUNTRY, except that, to the extent you have in any manner violated or threatened to violate APP_NAMEs intellectual property rights, APP_NAME may seek injunctive or other appropriate relief in any state or federal court in the state of DEFINE_STATE, DEFINE_COUNTRY, and you consent to exclusive jurisdiction and venue in such courts. Arbitration under this agreement shall be conducted under the rules then prevailing of the American Arbitration Association. The arbitrators award shall be binding and may be entered as a judgment in any court of competent jurisdiction. To the fullest extent permitted by applicable law, no arbitration under this Agreement shall be joined to an arbitration involving any other party subject to this Agreement, whether through class arbitration proceedings or otherwise.
        <br><br>

        <strong>SITE POLICIES, MODIFICATION, AND SEVERABILITY</strong><br>
        Please review our other policies, such as our Shipping and Returns policy, posted on this site. These policies also govern your visit to APP_NAME. We reserve the right to make changes to our site, policies, and these Conditions of Use at any time. If any of these conditions shall be deemed invalid, void, or for any reason unenforceable, that condition shall be deemed severable and shall not affect the validity and enforceability of any remaining condition.
        <br><br>

        <strong>QUESTIONS:</strong><br>
        Questions regarding our Conditions of Usage, Privacy Policy, or other policy related material can be directed to our support staff by clicking on the "Contact Us" link in the side menu. Or you can email us at: info@APP_NAME.com
        <br><br><br>



        <h2><center>PRIVACY POLICY</center></h2>
        Any information that is collected via our Services is covered by the Privacy Policy in effect at the time such information is collected. We may revise this Privacy Policy from time to time.<br>
        We may collect Personal Information from you such as email address, phone number or mailing address when you choose to request information about our Services, register for APP_NAME newsletter or a program that we may offer from time to time, request to receive customer or technical support, or otherwise communicate with us.<br>
        In some cases we may collect and store information about where you are located, such as by converting your IP address into a rough geolocation or by accessing your mobile device’s GPS coordinates or coarse location if you enable location services on your device. We may use location information to improve and personalize our Services for you.<br><br>

        <strong>We will not share any Personal Information that we have collected from or regarding you with any third-party company or business partner.</strong>
        <br><br>

        <strong>MODIFYING YOUR INFORMATION</strong><br>
        You can access and modify the Personal Information associated with your Account through your Account settings or by contacting us at <a href="mailto:support@yourdomain.com">support@yourdomain.com</a>.<br>
        If you want us to delete your Personal Information and your Account, please contact us at <a href="mailto:support@yourdomain.com">support@yourdomain.com</a> with your request. We’ll take steps to delete your information as soon we can, but some information may remain in archived/backup copies for our records or as otherwise required by law.
        <br><br>

        <strong>RIGHTS OF ACCESS, RECTIVICATION, ERASURE, AND RESTRICTION</strong><br>
        You may inquire as to whether APP_NAME is Processing Personal Information about you, request access to Personal Information, and ask that we correct, amend or delete your Personal Information where it is inaccurate. Where otherwise permitted by applicable law, you may contact us at <a href="mailto:support@yourdomain.com">support@yourdomain.com</a> to request access to, receive (port), seek rectification, or request erasure of Personal Information held about you by us. Please include your full name, email address associated with your Account, and a detailed description of your data request. Such requests will be processed in line with local laws.
        <br><br>
        Although APP_NAME makes good faith efforts to provide Individuals with access to their Personal Information, there may be circumstances in which we are unable to provide access, including but not limited to: where the information contains legal privilege, would compromise others’ privacy or other legitimate rights, where the burden or expense of providing access would be disproportionate to the risks to the Individual’s privacy in the case in question or where it is commercially proprietary. If we determine that access should be restricted in any particular instance, we will provide you with an explanation of why that determination has been made and a contact point for any further inquiries. To protect your privacy, we will take commercially reasonable steps to verify your identity before granting access to or making any changes to your Personal Information.
        <br><br>

        <strong>SECURITY OF YOUR INFORMATION</strong><br>
        We take reasonable administrative, physical and electronic measures designed to protect the information that we collect from or about you (including your Personal Information) from unauthorized access, use or disclosure. When you enter sensitive information on our forms, we encrypt this data using SSL or other technologies. Please be aware, however, that no method of transmitting information over the Internet or storing information is completely secure. Accordingly, we cannot guarantee the absolute security of any information. We do not accept liability for unintentional disclosure.<br>
        By using the App/Site or providing Personal Information to us, you agree that we may communicate with you electronically regarding security, privacy, and administrative issues relating to your use of the Site. If we learn of a security system’s breach, we may attempt to notify you electronically by posting a notice on the Site or sending an e-mail to you. You may have a legal right to receive this notice in writing.
        <br><br>

        <strong>OUR POLICY TOWARD CHILDREN</strong><br>
        Our Services are not directed to children under 13 and we do not knowingly collect Personal Information from children under 13. If we learn that we have collected Personal Information of a child under 13 we will take steps to delete such information from our files as soon as possible. If you are under the age of 18, you must have your parent’s permission to access the Services.
        <br><br>

        <strong>QUESTIONS?</strong><br>
        Please contact us at <a href="mailto:support@yourdomain.com">support@yourdomain.com</a> if you have any questions about our practices or this terms of Use and/or Privacy Policy.

        <br><br>
        <hr>
        <footer>
            <h5>Powered by MYCOMPANY @2018 - All Rights Reserved</h5>
        </footer>
    </body>
</html>
`,
        }}
      />
    </View>
  );
};

export default TermsModalContent;
