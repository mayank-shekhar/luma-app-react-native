import React from 'react';
import {View, Text, Switch, SwitchChangeEvent, Platform} from 'react-native';
import SettingsStyles from '../../Settings.styles';
import {useTheme} from '@react-navigation/native';
import {useAppState, useDispatch, useMobileSDK} from '../../../../hooks';
import DeviceInfo from 'react-native-device-info';
import {setTestProfileEnabled} from '../../../../reducers/actions';
import {PlatformButton} from '../../../../components';

export default function TestSection() {
  const {colors} = useTheme();
  const styles = SettingsStyles(colors);
  const mobileSDK = useMobileSDK();
  const {
    config: {
      isTestProfileEnabled,
      appTrackingTransparencyStatus,
      isConfigurationModeEnabled,
    },
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
      testProfile: event.nativeEvent.value.toString(),
    });
  };

  const onTestInAppNotificationClick = () => {
    mobileSDK.sendTrackAction('in-app', {showMessage: 'true'});
  };

  return (
    <View style={styles.settingsSectionWrapper}>
      <Text style={styles.sectionHeader}>Test</Text>
      <View style={styles.sectionContainer}>
        {isConfigurationModeEnabled && (
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
        )}
        <View style={styles.testSection}>
          <PlatformButton
            onPress={onTestInAppNotificationClick}
            label="In-App Message"
          />
          <PlatformButton
            onPress={onDeliverPushNotificationClick}
            label="Push Notification"
          />
        </View>
      </View>
    </View>
  );
}
