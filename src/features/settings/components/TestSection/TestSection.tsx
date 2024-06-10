import React from 'react';
import {
  View,
  Text,
  Switch,
  Button,
  SwitchChangeEvent,
  Platform,
} from 'react-native';

import SettingsStyles from '../../Settings.styles';
import {useTheme} from '@react-navigation/native';
import {useAppState, useDispatch, useMobileSDK} from '../../../../hooks';
import DeviceInfo from 'react-native-device-info';
import {setTestProfileEnabled} from '../../../../reducers/actions';

export default function TestSection() {
  const {colors} = useTheme();
  const styles = SettingsStyles(colors);
  const mobileSDK = useMobileSDK();
  const {
    config: {isTestProfileEnabled, appTrackingTransparencyStatus},
    home: {
      identities: {ecid},
    },
  } = useAppState();
  const dispatch = useDispatch();

  const onDeliverPushNotificationClick = () => {
    const eventType = 'testPushEventType';
    const bundleIdentifier = DeviceInfo.getBundleId();
    mobileSDK.sendTestPushEvent(bundleIdentifier, eventType);
  };

  const onTestProfileSwitchClick = (event: SwitchChangeEvent) => {
    dispatch(setTestProfileEnabled(event.nativeEvent.value));
    mobileSDK.sendTrackAction('updateTestProfile', {
      ecid: ecid,
      testProfile: event.nativeEvent.value,
    });
  };

  return (
    <View style={styles.settingsSectionWrapper}>
      <Text style={styles.sectionHeader}>Test</Text>
      <View style={styles.sectionContainer}>
        <View style={[styles.testSection, {...styles.testProfileSection}]}>
          <Text>Test Profile</Text>
          <View>
            <Switch
              disabled={
                Platform.OS === 'ios' &&
                appTrackingTransparencyStatus !== 'granted'
              }
              onChange={onTestProfileSwitchClick}
              value={isTestProfileEnabled}
            />
          </View>
        </View>
        <View style={styles.testSection}>
          <View style={styles.buttonWrapepr}>
            <Button title="In-App Message" />
          </View>
          <View style={styles.buttonWrapepr}>
            <Button
              onPress={onDeliverPushNotificationClick}
              title="Push Notification"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
