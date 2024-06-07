import * as React from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  SafeAreaView,
  Alert,
  Platform,
  TextInput,
  ScrollView,
} from 'react-native';

import commonStyles from '../../styles/common.styles';
import TermsModalContent from './TermsModalContent/TermsModalContent';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import {useAppState, useDispatch, useMobileSDK} from '../../hooks';
import SettingsStyles from './Settings.styles';
import {setConfigLocation, setEnvironmentFileId} from '../../reducers/actions';
import {isValidEnvironmentFileId} from '../../utils/stringModifiers';
import {AccordionItem} from '../../components';
import {loadConfiguration} from '../../api/configuration';
import {Configuration} from '../../models/Configuration';

function SettingsScreen() {
  const colors = useTheme();
  const [termsModalVisible, setTermsModalVisible] = React.useState(false);
  const [showConfigSections, setShowConfigSections] = React.useState(true);
  const [configuration, setConfiguration] =
    React.useState<Configuration | null>(null);
  const [isEnvironmentFileIdValid, setIsEnvironmentFileIdValid] =
    React.useState(true);
  const mobileSDK = useMobileSDK();
  const {environmentFileId, configLocation, deviceToken} = useAppState();
  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      console.info('Settings screen focused...');
      mobileSDK.sendTrackScreenEvent(
        `luma: content: ${Platform.OS}: us: en: config`,
      );

      loadConfiguration().then(config => {
        console.log('Configuration loaded:', config);
        setConfiguration(config);
      });
    }, []),
  );

  const styles = React.useMemo(() => {
    return SettingsStyles(colors.colors);
  }, [colors]);

  const raiseRestartAlert = () => {
    Alert.alert(
      'App Needs Restart!',
      'Restart the app to pick up the new configuration...',
    );
  };

  const onEnvironmentFileIdChange = (text: string) => {
    console.log('Environment File Id changed to:', text);
    if (isValidEnvironmentFileId(text)) {
      setIsEnvironmentFileIdValid(true);
      dispatch(setEnvironmentFileId(text));
      raiseRestartAlert();
    } else {
      setIsEnvironmentFileIdValid(false);
    }
  };

  const onConfigLocationChange = (text: string) => {
    console.log('Config location changed to:', text);
    dispatch(setConfigLocation(text));
    raiseRestartAlert();
  };

  return (
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

      {/* <Text style={styles.header}>Settings</Text> */}

      {/* Configuration section */}
      {showConfigSections && (
        <>
          <View style={styles.settingsSectionWrapper}>
            <Text style={styles.sectionHeader}>AEP Data Collection</Text>
            <View style={styles.sectionContainer}>
              <TextInput
                style={styles.textInputBox}
                placeholder="Environment File Id"
                onEndEditing={event =>
                  onEnvironmentFileIdChange(event.nativeEvent.text)
                }
                value={environmentFileId}
              />
            </View>
            <View style={styles.footnoteWrapper}>
              {isEnvironmentFileIdValid ? (
                <Text style={commonStyles.footnote}>
                  Environment file id for your mobile property in Adobe
                  Experience Platform Data Collection…
                </Text>
              ) : (
                <Text style={[commonStyles.footnote, {color: 'red'}]}>
                  Provide a valid environment file id from your AEP Data
                  Collection mobile property
                </Text>
              )}
            </View>
          </View>
          <View style={styles.settingsSectionWrapper}>
            <Text style={styles.sectionHeader}>Configuration locator</Text>
            <View style={styles.sectionContainer}>
              <TextInput
                style={styles.textInputBox}
                placeholder="Path"
                onEndEditing={event =>
                  onConfigLocationChange(event.nativeEvent.text)
                }
                value={configLocation}
              />
              <View style={styles.configurationWrapper}>
                <AccordionItem
                  title="Configuration details"
                  headerStyles={commonStyles.footnote}>
                  <View style={styles.configItemsWrapper}>
                    <View style={styles.configItemRow}>
                      <Text style={styles.configItemTitle}>Brand:</Text>
                      <Text style={styles.configItemValue}>
                        {configuration?.customer.name}
                      </Text>
                    </View>
                    <View style={styles.configItemRow}>
                      <Text style={styles.configItemTitle}>LDAP:</Text>
                      <Text style={styles.configItemValue}>
                        {configuration?.config.ldap}
                      </Text>
                    </View>
                    <View style={styles.configItemRow}>
                      <Text style={styles.configItemTitle}>Email Domain:</Text>
                      <Text style={styles.configItemValue}>
                        {configuration?.config.emailDomain}
                      </Text>
                    </View>
                    <View style={styles.configItemRow}>
                      <Text style={styles.configItemTitle}>TMS:</Text>
                      <Text style={styles.configItemValue}>
                        {configuration?.config.tms}
                      </Text>
                    </View>
                    <View style={styles.configItemRow}>
                      <Text style={styles.configItemTitle}>Tenant:</Text>
                      <Text style={styles.configItemValue}>
                        {configuration?.config.tenant}
                      </Text>
                    </View>
                    <View style={styles.configItemRow}>
                      <Text style={styles.configItemTitle}>Sandbox:</Text>
                      <Text style={styles.configItemValue}>
                        {configuration?.config.sandbox}
                      </Text>
                    </View>
                    <View style={styles.configItemRow}>
                      <Text style={styles.configItemTitle}>Device Token:</Text>
                      <ScrollView>
                        <Text style={styles.configItemValue}>
                          {deviceToken}
                        </Text>
                      </ScrollView>
                    </View>
                  </View>
                </AccordionItem>
              </View>
            </View>
            <View style={styles.footnoteWrapper}>
              {configLocation === '' ? (
                <Text style={commonStyles.footnote}>
                  App is using internal configuration files (general, products,
                  (i)beacons, geofences))
                </Text>
              ) : (
                <Text style={commonStyles.footnote}>
                  App is using remote configuration files (general, products,
                  (i)beacons, geofences)…
                </Text>
              )}
            </View>
          </View>
        </>
      )}

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
