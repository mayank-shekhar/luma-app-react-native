import * as React from 'react';
import {useMobileSDK, useAppState, useDispatch} from '../../../../hooks';
import {View, Text, TextInput} from 'react-native';
import {Platform} from 'react-native';
import {useTheme} from '@react-navigation/native';
import LoginSheetStyles from './LoginSheet.styles';
import {v4 as uuidv4} from 'uuid';
import {getRandomInt} from '../../../../utils/numberUtils';
import {setCrid, setEmail} from '../../../../reducers/actions';
import {PlatformButton} from '../../../../components/index.ts';

export default function LoginSheet({navigation}: {navigation: any}) {
  const {colors} = useTheme();
  const mobileSDK = useMobileSDK();
  const {
    home: {
      identities: {email, crmId},
    },
  } = useAppState();
  const dispatch = useDispatch();

  const [ldap, setLdap] = React.useState('testUser');
  const emailDomain = 'gmail.com';
  const [disableLogin, setDisableLogin] = React.useState(false);
  const [currentEmail, setCurrentEmail] = React.useState(email);
  const [currentCrmId, setCurrentCrmId] = React.useState(crmId);

  React.useEffect(() => {
    if (crmId !== currentCrmId) {
      setCurrentCrmId(crmId);
    }
  }, [crmId]);

  React.useEffect(() => {
    if (email !== currentEmail) {
      setCurrentEmail(email);
    }
  }, [email]);

  React.useEffect(() => {
    mobileSDK.sendTrackScreenEvent(
      `rn luma: content: ${Platform.OS}: us: en: login`,
    );
    mobileSDK.getIdentities();
    if (email === 'testUser@gmail.com') {
      setDisableLogin(false);
    } else {
      setDisableLogin(true);
    }
  }, []);

  const onAutoButtonClick = (): void => {
    const dataString = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const crmId = uuidv4().replace(/-/g, '').toLowerCase();
    const currentEmailId = `${ldap}+${dataString}-${getRandomInt(
      1,
      100,
    )}@${emailDomain}`;

    setCurrentEmail(currentEmailId);
    setCurrentCrmId(crmId);
  };

  const onLoginButtonClick = (): void => {
    mobileSDK.updateIdentites(currentEmail, currentCrmId);
    mobileSDK.sendAppInteractionEvent('login');
    dispatch(setEmail(currentEmail));
    dispatch(setCrid(currentCrmId));
    navigation.goBack();
  };

  const onLogoutButtonClick = (): void => {
    mobileSDK.removeIdentities(currentEmail, currentCrmId).then(() => {
      setDisableLogin(false);
      dispatch(setEmail('testUser@gmail.com'));
      dispatch(setCrid('112ca06ed53d3db37e4cea49cc45b71e'));
    });
  };

  return (
    <View
      style={[LoginSheetStyles.wrapper, {backgroundColor: colors.background}]}>
      <Text style={LoginSheetStyles.heading}>Identites</Text>
      <View
        style={[
          LoginSheetStyles.formWrapper,
          {
            backgroundColor: colors.card,
          },
        ]}>
        {disableLogin ? (
          <View>
            <View style={LoginSheetStyles.inputViewWrapper}>
              <Text style={{marginBottom: 10}}>
                You are identified with email address
              </Text>
              <Text style={{fontSize: 12, fontWeight: '600'}}>
                {currentEmail}
              </Text>
            </View>
            <View style={LoginSheetStyles.inputViewWrapper}>
              <Text style={{marginBottom: 10}}>
                You are identified with CRM ID
              </Text>
              <Text style={{fontSize: 12, fontWeight: '600'}}>
                {currentCrmId}
              </Text>
            </View>
            <View style={LoginSheetStyles.formActions}>
              <PlatformButton
                onPress={onLogoutButtonClick}
                label="Logout"
                variant="secondary"
              />
              <PlatformButton
                onPress={() => navigation.goBack()}
                label="Done"
              />
            </View>
          </View>
        ) : (
          <>
            <View style={LoginSheetStyles.inputBoxWrapper}>
              <TextInput
                style={LoginSheetStyles.inputBox}
                value={currentEmail}
                onChangeText={setCurrentEmail}
              />
            </View>
            <View style={LoginSheetStyles.inputBoxWrapper}>
              <TextInput
                style={LoginSheetStyles.inputBox}
                value={currentCrmId}
                onChangeText={setCurrentCrmId}
              />
            </View>
            <View style={LoginSheetStyles.formActions}>
              <PlatformButton onPress={onAutoButtonClick} label="Auto" />
              <PlatformButton onPress={onLoginButtonClick} label="Login" />
            </View>
          </>
        )}
      </View>

      <View style={LoginSheetStyles.footerTextWrapper}>
        <Text style={{fontSize: 14, color: colors.text, opacity: 0.6}}>
          {disableLogin
            ? 'To use other identities, you have to re-install the app to ensure a new ECID is associated with the new identities…'
            : `To identify, use new or existing identities you registered with on a website set up with similar configuration through the AEP Web SDK… \nUse "Auto" button to autocomplete your ldap and emailDomain with a random email identifier ("${ldap}+YYYYMMDD-99@${emailDomain}") and a random CRM ID…`}
        </Text>
      </View>
      {/* <Button onPress={() => navigation.goBack()} title="Dismiss" /> */}
    </View>
  );
}
