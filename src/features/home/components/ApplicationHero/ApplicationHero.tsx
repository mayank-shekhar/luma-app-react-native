import * as React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './ApplicationHero.styles';
import {useTheme} from '@react-navigation/native';

function ApplicationHero() {
  const {colors} = useTheme();
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.header, {color: colors.text}]}>Home</Text>
      <View style={[styles.heroSection, {backgroundColor: colors.card}]}>
        <View style={styles.heroImageContainer}>
          <Image
            style={styles.heroImage}
            source={require('../../../../assets/luma-logo01.png')}
          />
        </View>
        <View style={styles.heroTextWrapper}>
          <Text style={[styles.heroText, {color: colors.text}]}>
            Welcome to the...
          </Text>
          <Text style={[styles.brandName, {color: colors.text}]}>Luma</Text>
          <Text style={[styles.heroText, {color: colors.text}]}>
            React Native Sample App!
          </Text>
        </View>
        <View style={styles.heroTextWrapper}>
          <Text style={[styles.heroText, {color: colors.text}]}>
            Showing how to use the
          </Text>
          <Text style={[styles.heroText, {color: colors.text}]}>
            Adobe Experience Platform Mobile SDK…
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ApplicationHero;
