import * as React from 'react';
import {View, Text, Image} from 'react-native';
// import TargetOffersViewStyles from './TargetOffersView.styles';
import {useTheme} from '@react-navigation/native';
// import PersonalizationCard from '../../components/PersonalizationCard/PersonalizationCard';
import commonPersonalizationStyles from '../../commonPersonalization.styles';

function TargetOffersView() {
  const {colors} = useTheme();
  return (
    <View style={commonPersonalizationStyles.container}>
      <Text style={[commonPersonalizationStyles.heading, {color: colors.text}]}>
        TARGET
      </Text>
      <View
        style={[
          commonPersonalizationStyles.targetNoOffersCard,
          {backgroundColor: colors.card},
        ]}>
        <Image
          style={commonPersonalizationStyles.targetNoOffersImage}
          source={require('../../../../assets/aep-logo.png')}
        />
      </View>
      <Text
        style={[commonPersonalizationStyles.footnote, {color: colors.text}]}>
        0 offer(s) returned for this location…
      </Text>
    </View>
  );
}

export default TargetOffersView;
