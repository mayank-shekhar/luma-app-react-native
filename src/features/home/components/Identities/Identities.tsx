import * as React from 'react';
import {View, Text} from 'react-native';

import styles from './Identities.styles';
import {CustomFlatList} from '../../../../components';

type ItemType = {
  id: string;
  title: string;
  description: string;
};
const DATA: ItemType[] = [
  {
    id: 'ecid',
    title: 'ECID',
    description: '213971278936y12963127932163219g312byi',
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
  },
];

function IdentitiesList() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Identities</Text>
      <CustomFlatList data={DATA} />
      <Text style={styles.footnote}>
        If tracking is allowed, use the Person button to login using a new or
        existing email address...
      </Text>
    </View>
  );
}
export default IdentitiesList;
