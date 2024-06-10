import * as React from 'react';
import {View, Modal, SafeAreaView, Platform, ScrollView} from 'react-native';

import TermsModalContent from './TermsModalContent/TermsModalContent';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import {useAppState, useMobileSDK} from '../../hooks';
import SettingsStyles from './Settings.styles';
import {
  ApplicationSetion,
  ConfigurationLocationSection,
  DataCollectionSection,
  TestSection,
} from './components';

function SettingsScreen() {
  const colors = useTheme();
  const [termsModalVisible, setTermsModalVisible] = React.useState(false);

  const mobileSDK = useMobileSDK();
  const {
    config: {isConfigurationModeEnabled},
    home: {
      identities: {email},
    },
  } = useAppState();

  useFocusEffect(
    React.useCallback(() => {
      console.info('Settings screen focused...');
      mobileSDK.sendTrackScreenEvent(
        `luma: content: ${Platform.OS}: us: en: config`,
      );
    }, []),
  );

  const styles = React.useMemo(() => {
    return SettingsStyles(colors.colors);
  }, [colors]);

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <SafeAreaView>
          <Modal
            animationType="slide"
            visible={termsModalVisible}
            presentationStyle="pageSheet"
            onRequestClose={() => {
              setTermsModalVisible(!termsModalVisible);
            }}>
            <TermsModalContent onClose={() => setTermsModalVisible(false)} />
          </Modal>
        </SafeAreaView>

        {/* Configuration section */}
        {isConfigurationModeEnabled && (
          <>
            <DataCollectionSection />
            <ConfigurationLocationSection />
          </>
        )}

        {/* Test section */}
        {email !== '' && <TestSection />}

        {/* Application settings */}
        <ApplicationSetion setTermsModalVisible={setTermsModalVisible} />
      </View>
    </ScrollView>
  );
}

export default SettingsScreen;
