import React from 'react';
import SettingsStyles from '../../Settings.styles';
import {useTheme} from '@react-navigation/native';
import {View, Text, TextInput, ScrollView, Alert} from 'react-native';
import {AccordionItem} from '../../../../components';
import CommonStyles from '../../../../styles/common.styles';
import {useAppState, useDispatch} from '../../../../hooks';
import {setConfigLocation} from '../../../../reducers/actions';
import {saveConfigurationPath} from '../../../../reducers/storage';

export default function ConfigurationLocationSection() {
  const {colors} = useTheme();
  const styles = SettingsStyles(colors);
  const dispatch = useDispatch();
  const commonStyles = CommonStyles(colors);

  const {
    appConfig,
    config: {configurationLocation, deviceToken},
  } = useAppState();
  const [configPath, setConfigPath] = React.useState(
    configurationLocation as string,
  );

  const onConfigLocationChange = () => {
    dispatch(setConfigLocation(configPath));
    saveConfigurationPath(configPath);
    raiseRestartAlert();
  };

  const raiseRestartAlert = () => {
    Alert.alert(
      'App Needs Restart!',
      'Restart the app to pick up the new configuration...',
    );
  };
  return (
    <View style={styles.settingsSectionWrapper}>
      <Text style={styles.sectionHeader}>Configuration locator</Text>
      <View style={styles.sectionContainer}>
        <TextInput
          style={styles.textInputBox}
          placeholder="Path"
          onChange={event => setConfigPath(event.nativeEvent.text)}
          onEndEditing={onConfigLocationChange}
          // onChangeText={text => onConfigLocationChange(text)}
          // onEndEditing={event => onConfigLocationChange(event.nativeEvent.text)}
          value={configPath}
        />
        <View style={styles.configurationWrapper}>
          <AccordionItem
            title="Configuration details"
            headerStyles={commonStyles.footnote}>
            <View style={styles.configItemsWrapper}>
              <View style={styles.configItemRow}>
                <Text style={styles.configItemTitle}>Brand:</Text>
                <Text style={styles.configItemValue}>
                  {appConfig?.customer.name}
                </Text>
              </View>
              <View style={styles.configItemRow}>
                <Text style={styles.configItemTitle}>LDAP:</Text>
                <Text style={styles.configItemValue}>
                  {appConfig?.config.ldap}
                </Text>
              </View>
              <View style={styles.configItemRow}>
                <Text style={styles.configItemTitle}>Email Domain:</Text>
                <Text style={styles.configItemValue}>
                  {appConfig?.config.emailDomain}
                </Text>
              </View>
              <View style={styles.configItemRow}>
                <Text style={styles.configItemTitle}>TMS:</Text>
                <Text style={styles.configItemValue}>
                  {appConfig?.config.tms}
                </Text>
              </View>
              <View style={styles.configItemRow}>
                <Text style={styles.configItemTitle}>Tenant:</Text>
                <Text style={styles.configItemValue}>
                  {appConfig?.config.tenant}
                </Text>
              </View>
              <View style={styles.configItemRow}>
                <Text style={styles.configItemTitle}>Sandbox:</Text>
                <Text style={styles.configItemValue}>
                  {appConfig?.config.sandbox}
                </Text>
              </View>
              <View style={styles.configItemRow}>
                <Text style={styles.configItemTitle}>Device Token:</Text>
                <ScrollView>
                  <Text style={styles.configItemValue}>{deviceToken}</Text>
                </ScrollView>
              </View>
            </View>
          </AccordionItem>
        </View>
      </View>
      <View style={styles.footnoteWrapper}>
        {configurationLocation === '' ? (
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
  );
}
