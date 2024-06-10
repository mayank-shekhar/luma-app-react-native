import React from 'react';

import {useAppState} from '../../../../hooks';
import {View, Text, Button, Platform} from 'react-native';
import {RESULTS} from 'react-native-permissions';
import commonStyles from '../../../../styles/common.styles';
import SettingsStyles from '../../Settings.styles';
import {useTheme} from '@react-navigation/native';

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
  return (
    <>
      <View style={styles.settingsSectionWrapper}>
        <Text style={styles.sectionHeader}>Application</Text>
        <View style={styles.sectionContainer}>
          <View style={styles.settingsListItem}>
            <Text style={styles.textNote}>Terms of use</Text>
            <View style={styles.buttonWrapepr}>
              <Button title="View" onPress={() => setTermsModalVisible(true)} />
            </View>
          </View>
          {Platform.OS === 'ios' && (
            <View style={styles.settingsListItem}>
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
              <View style={styles.buttonWrapepr}>
                <Button title="App settings" />
              </View>
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
