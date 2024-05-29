import * as React from 'react';
import {View, Text} from 'react-native';

import styles from './Identities.styles';
import {CustomFlatList, DataItemType} from '../../../../components';
import {useTheme} from '@react-navigation/native';
import {useAppState} from '../../../../hooks';

const IdentitiesDataArray: DataItemType[] = [
  {
    id: 'ecid',
    title: 'ECID',
    description: '',
  },
  {
    id: 'email',
    title: 'Email',
    description: 'testuser@gmail.com',
  },
  {
    id: 'crmId',
    title: 'CRM ID',
    description: '39246218763218736iuhkjbgsad8',
    isLast: true,
  },
];

function IdentitiesList() {
  const {colors} = useTheme();
  const {
    home: {
      identities: {ecid, email, crmId},
    },
  } = useAppState();

  console.log('Identities:', {ecid, email, crmId});

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
      <Text style={[styles.footnote, {color: colors.text}]}>
        If tracking is allowed, use the Person button to login using a new or
        existing email address...
      </Text>
    </View>
  );
}
export default IdentitiesList;
