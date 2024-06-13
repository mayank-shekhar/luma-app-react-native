import * as React from 'react';
import {View, Text, Platform} from 'react-native';

import styles from './Identities.styles';
import {CustomFlatList, DataItemType} from '../../../../components';
import {useTheme} from '@react-navigation/native';
import {useAppState, useDispatch} from '../../../../hooks';
import {Identity} from '@adobe/react-native-aepcore';
import {
  ActionTypes,
  setCrid,
  setEcid,
  setEmail,
} from '../../../../reducers/actions';

const IdentitiesDataArray: DataItemType[] = [
  {
    id: 'ecid',
    title: 'ECID',
    description: '',
  },
  {
    id: 'email',
    title: 'Email',
    description: 'testUser@gmail.com',
  },
  {
    id: 'crmId',
    title: 'CRM ID',
    description: '112ca06ed53d3db37e4cea49cc45b71e',
    isLast: true,
  },
];

function IdentitiesList() {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {
    home: {
      identities: {ecid, email, crmId},
    },
  } = useAppState();

  React.useEffect(() => {
    dispatch(setEmail('testUser@gmail.com'));
    dispatch(setCrid('112ca06ed53d3db37e4cea49cc45b71e'));
    Identity.getExperienceCloudId()
      .then(ecid => {
        dispatch(setEcid(ecid));
      })
      .catch(error =>
        console.error(
          'AdobeExperienceSDK: getExperienceCloudId Error = ' + error,
        ),
      );
  }, []);

  const identitiesData = React.useMemo(() => {
    return IdentitiesDataArray.map(item => {
      if (item.id === 'ecid') {
        return {
          ...item,
          description: ecid,
        };
      }
      if (item.id === 'email') {
        return {
          ...item,
          description: email,
        };
      }
      if (item.id === 'crmId') {
        return {
          ...item,
          description: crmId,
        };
      }
      return item;
    });
  }, [ecid, email, crmId]);

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.header, {color: colors.text}]}>Identities</Text>
      <CustomFlatList data={identitiesData} />
      {Platform.OS === 'ios' && (
        <Text style={[styles.footnote, {color: colors.text, opacity: 0.6}]}>
          {email === 'testUser@gmail.com'
            ? 'If tracking is allowed, use the Person button to login using a new or existing email address...'
            : 'Reinstall the app to login using a different email address…'}
        </Text>
      )}
    </View>
  );
}
export default IdentitiesList;
