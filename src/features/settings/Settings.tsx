import * as React from 'react';
import {View, Text, Button, Modal, SafeAreaView, Alert} from 'react-native';

import styles from './Settings.styles';
import commonStyles from '../../styles/common.styles';
import TermsModalContent from './TermsModalContent/TermsModalContent';
// import {CustomFlatList} from '../../components';

function SettingsScreen() {
  const [termsModalVisible, setTermsModalVisible] = React.useState(false);
  return (
    <View style={styles.wrapper}>
      <SafeAreaView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={termsModalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setTermsModalVisible(!termsModalVisible);
          }}>
          <TermsModalContent onClose={() => setTermsModalVisible(false)} />
        </Modal>
      </SafeAreaView>

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
          <View style={styles.settingsListItem}>
            <Text style={styles.textNote}>Terms of use</Text>
            <View style={styles.buttonWrapepr}>
              <Button title="View" onPress={() => setTermsModalVisible(true)} />
            </View>
          </View>
          <View style={styles.settingsListItem}>
            <Text style={styles.textNote}>Tracking is allowed...</Text>
            <View style={styles.buttonWrapepr}>
              <Button title="App settings" />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footnoteWrapper}>
        <Text style={commonStyles.footnote}>
          Open App settings for Luma to set tracking preferences...
        </Text>
      </View>
    </View>
  );
}

export default SettingsScreen;
