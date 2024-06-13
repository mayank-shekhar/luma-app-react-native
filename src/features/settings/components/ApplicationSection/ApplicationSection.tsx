import React from 'react';

import {useAppState} from '../../../../hooks';
import {View, Text, Button, Platform, Pressable} from 'react-native';
import {RESULTS, openSettings} from 'react-native-permissions';
import CommonStyles from '../../../../styles/common.styles';
import SettingsStyles from '../../Settings.styles';
import {useTheme} from '@react-navigation/native';
import {PlatformButton} from '../../../../components';

export default function ApplicationSection({
  setTermsModalVisible,
}: {
  setTermsModalVisible: (value: boolean) => void;
}) {
  const {colors} = useTheme();
  const styles = SettingsStyles(colors);
  const {
    config: {appTrackingTransparencyStatus},
  } = useAppState();
  const commonStyles = CommonStyles(colors);
  return (
    <>
      <View style={styles.settingsSectionWrapper}>
        <Text style={styles.sectionHeader}>Application</Text>
        <View style={styles.sectionContainer}>
          <View style={styles.settingsListItem}>
            <Text style={styles.textNote}>Terms of use</Text>
            <PlatformButton
              label="View"
              onPress={() => setTermsModalVisible(true)}
            />
          </View>
          {Platform.OS === 'ios' && (
            <View style={[styles.settingsListItem, {borderBottomWidth: 0}]}>
              <Text
                style={[
                  styles.textNote,
                  {
                    color:
                      appTrackingTransparencyStatus !== RESULTS.GRANTED
                        ? 'red'
                        : 'inherit',
                  },
                ]}>
                Tracking is allowed...
              </Text>
              <PlatformButton label="App settings" onPress={openSettings} />
            </View>
          )}
        </View>
      </View>
      {Platform.OS === 'ios' && (
        <View style={styles.footnoteWrapper}>
          <Text style={commonStyles.footnote}>
            Open App settings for Luma to set tracking preferences...
          </Text>
        </View>
      )}
    </>
  );
}
