import React from 'react';
import {
  View,
  Text,
  Switch,
  Button,
  SwitchChangeEvent,
  Platform,
  Pressable,
} from 'react-native';
// import {Messaging} from '@adobe/react-native-aepmessaging';
import SettingsStyles from '../../Settings.styles';
import {useTheme} from '@react-navigation/native';
import {useAppState, useDispatch, useMobileSDK} from '../../../../hooks';
import DeviceInfo from 'react-native-device-info';
import {setTestProfileEnabled} from '../../../../reducers/actions';
import CommonStyles from '../../../../styles/common.styles';

export default function TestSection() {
  const {colors} = useTheme();
  const commonStyles = CommonStyles(colors);
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
          <Pressable
            style={commonStyles.buttonWrapper}
            onPress={onTestInAppNotificationClick}>
            <Text>In-App Message</Text>
          </Pressable>
          <Pressable
            style={commonStyles.buttonWrapper}
            onPress={onDeliverPushNotificationClick}>
            <Text>Push Notification</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}