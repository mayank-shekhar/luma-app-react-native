import React from 'react';
import {View, Text, Button, Image, Platform} from 'react-native';
import {useAppState, useMobileSDK} from '../../hooks';
// import {useTheme} from '@react-navigation/native';
import {openSettings} from 'react-native-permissions';
import {useFocusEffect} from '@react-navigation/native';

export default function DisclaimerView({
  onContinueClick,
  appTrackingTransparencyStatus,
}: {
  onContinueClick: () => void;
  appTrackingTransparencyStatus: string;
}) {
  const {configuration} = useAppState();
  const mobileSDK = useMobileSDK();

  const onOpenSettingsClick = () => {
    openSettings().catch(() => console.warn('cannot open settings'));
  };

  useFocusEffect(
    React.useCallback(() => {
      console.info('Disclaimer screen focused...');
      mobileSDK.sendTrackScreenEvent(
        `luma: content: ${Platform.OS}: us: en: disclaimer`,
      );
    }, []),
  );
  return (
    <View style={{padding: 20}}>
      <View>
        <Image
          style={{width: '100%', height: 100, maxWidth: 360}}
          source={require('../../assets/luma-logo01.png')}
        />
      </View>
      <View style={{paddingVertical: 20}}>
        <Text style={{fontSize: 17, textAlign: 'center', lineHeight: 24}}>
          Welcome to the{' '}
          <Text style={{fontWeight: '600'}}>
            {configuration?.customer.name}
          </Text>{' '}
          iOS Sample App, showing how to use the Adobe Experience Platform
          Mobile SDK…
        </Text>
      </View>

      <View style={{paddingVertical: 50}}>
        {appTrackingTransparencyStatus === 'denied' ||
        appTrackingTransparencyStatus === 'blocked' ? (
          <>
            <Text style={{fontSize: 17, textAlign: 'center', lineHeight: 24}}>
              To enable personalization in the app, you need to allow the app to
              track your activity. Please go to Settings and enable tracking.
            </Text>
            <Button title="Open settings..." onPress={onOpenSettingsClick} />
          </>
        ) : (
          <>
            <Text style={{fontSize: 17, textAlign: 'center', lineHeight: 24}}>
              This app is to illustrate how to use the Adobe Experience Platform
              Mobile SDK in a React Native application. In compliance with
              Apple\'s Tracking Transparency, tap{' '}
              <Text style={{fontWeight: '600'}}>Continue</Text> to be prompted
              to allow the app to track your activity. Select{' '}
              <Text style={{fontWeight: '600'}}>Allow</Text> for the app to
              allow tracking and collect events which will enable
              personalization (offers, push notification messages) in the app.
              Select{' '}
              <Text style={{fontWeight: '600'}}>Ask App Not to Track</Text> if
              you do not want the app to track your activity and collectt
              events; you will not receive personalized offers and/or messages.
            </Text>
            <Button title="Continue..." onPress={onContinueClick} />
          </>
        )}
      </View>
    </View>
  );
}
