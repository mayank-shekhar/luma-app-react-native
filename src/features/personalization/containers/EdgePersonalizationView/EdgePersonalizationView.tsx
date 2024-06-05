import React from 'react';
import {View, Text, Platform} from 'react-native';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import {loadDecisions} from '../../../../api/decisions';
import {Decision} from '../../../../models/Decision';
import {useMobileSDK} from '../../../../hooks';
import EdgePersonalizationViewStyles from './EdgePersonalizationView.styles';
import {FullScreenLoader} from '../../../../components';
import EdgeOffersView from '../EdgeOffersView/EdgeOffersView';

export default function EdgePersonalizationView() {
  const {colors} = useTheme();
  const mobileSDK = useMobileSDK();
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [decisions, setDecisions] = React.useState<Decision[]>([]);

  const getDecisions = async () => {
    // import {loadDecisions} from '../../../../api/decisions';
    const result = await loadDecisions();
    console.info(
      `EdgePersonalisationView - Loaded ${result.length} decisions...`,
      result,
    );
    setLoaded(true);
    setDecisions(result);
  };

  useFocusEffect(
    React.useCallback(() => {
      mobileSDK.sendTrackScreenEvent(
        `luma: content: ${Platform.OS}: us: en: personalisationEdge`,
      );
      getDecisions();
    }, []),
  );

  return (
    <View style={EdgePersonalizationViewStyles.container}>
      {!loaded ? (
        <FullScreenLoader />
      ) : (
        <>
          <Text>Edge Personalization View {colors.text}</Text>
          {decisions.map(decision => {
            return (
              <EdgeOffersView key={decision.activityId} decision={decision} />
            );
          })}
        </>
      )}
    </View>
  );
}
