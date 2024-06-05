import React from 'react';
import {View} from 'react-native';
import PersonalizationCardStyles from './PersonalizationCard.styles';

export default function PersonalizationCard() {
  return (
    <View style={PersonalizationCardStyles.container}>
      <View style={PersonalizationCardStyles.card}>
        <View style={PersonalizationCardStyles.cardContent}>
          <View style={PersonalizationCardStyles.cardHeader}>
            <View style={PersonalizationCardStyles.cardHeaderTitle} />
          </View>
          <View style={PersonalizationCardStyles.cardBody} />
        </View>
      </View>
    </View>
  );
}
