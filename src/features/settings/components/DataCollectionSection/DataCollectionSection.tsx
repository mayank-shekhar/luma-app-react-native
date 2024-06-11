import {useTheme} from '@react-navigation/native';
import React from 'react';
import SettingsStyles from '../../Settings.styles';
import {View, Text, TextInput, Alert} from 'react-native';
import commonStyles from '../../../../styles/common.styles';
import {useAppState, useDispatch} from '../../../../hooks';
import {isValidEnvironmentFileId} from '../../../../utils/stringModifiers';
import {setEnvironmentFileId} from '../../../../reducers/actions';

export default function DataCollectionSection() {
  const {colors} = useTheme();
  const [isEnvironmentFileIdValid, setIsEnvironmentFileIdValid] =
    React.useState(true);
  const styles = SettingsStyles(colors);
  const {
    config: {environmentFileId},
  } = useAppState();
  const dispatch = useDispatch();

  const raiseRestartAlert = () => {
    Alert.alert(
      'App Needs Restart!',
      'Restart the app to pick up the new configuration...',
    );
  };

  const onEnvironmentFileIdChange = (text: string) => {
    if (isValidEnvironmentFileId(text)) {
      setIsEnvironmentFileIdValid(true);
      dispatch(setEnvironmentFileId(text));
      raiseRestartAlert();
    } else {
      setIsEnvironmentFileIdValid(false);
    }
  };

  return (
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
            Environment file id for your mobile property in Adobe Experience
            Platform Data Collection…
          </Text>
        ) : (
          <Text style={[commonStyles.footnote, {color: 'red'}]}>
            Provide a valid environment file id from your AEP Data Collection
            mobile property
          </Text>
        )}
      </View>
    </View>
  );
}
