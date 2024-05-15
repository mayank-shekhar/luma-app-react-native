import * as React from 'react';
import {View, Text, Button} from 'react-native';

import styles from './Settings.styles';
import {CustomFlatList} from '../../components';

function SettingsScreen() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Settings</Text>

      {/* Test section */}
      <View style={styles.settingsSectionWrapper}>
        <Text style={styles.sectionHeader}>Test</Text>
        <View style={styles.sectionContainer}>
          <View style={styles.testSection}>
            <View style={styles.buttonWrapepr}>
              <Button title="In-App Message" />
            </View>
            <View style={styles.buttonWrapepr}>
              <Button title="Push Notification" />
            </View>
          </View>
        </View>
      </View>
      {/* Application settings */}
      <View style={styles.settingsSectionWrapper}>
        <Text style={styles.sectionHeader}>Application</Text>
        <View style={styles.sectionContainer}>
          <View>
            <CustomFlatList
              data={[{id: '1', title: 'App', description: 'test'}]}
            />
          </View>
          {/* <View style={styles.testSection}>
            <Button>In-App Message</Button>
            <Button>Push Notification</Button>
          </View> */}
        </View>
      </View>
    </View>
  );
}

export default SettingsScreen;
