import * as React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './ApplicationHero.styles';

function ApplicationHero() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Home</Text>
      <View style={styles.heroSection}>
        <View style={styles.heroImageContainer}>
          <Image
            style={styles.heroImage}
            source={require('../../../../assets/luma-logo01.png')}
          />
        </View>
        <View style={styles.heroTextWrapper}>
          <Text style={styles.heroText}>Welcome to the...</Text>
          <Text style={styles.brandName}>Luma</Text>
          <Text style={styles.heroText}>React Native Sample App!</Text>
        </View>
        <View style={styles.heroTextWrapper}>
          <Text style={styles.heroText}>Showing how to use the</Text>
          <Text style={styles.heroText}>
            Adobe Experience Platform Mobile SDK…
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ApplicationHero;
