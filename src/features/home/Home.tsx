import * as React from 'react';
import {View, Pressable, Platform} from 'react-native';
import ApplicationHero from './components/ApplicationHero/ApplicationHero';
import IdentitiesList from './components/Identities/Identities';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMobileSDK} from '../../hooks';
import LoginSheet from './components/LoginSheet/LoginSheet';
import {HeaderButtonProps} from '../../types';
import {useFocusEffect} from '@react-navigation/native';

function HomeScreen() {
  const mobileSDK = useMobileSDK();
  useFocusEffect(
    React.useCallback(() => {
      mobileSDK.getConsents();
      mobileSDK.sendTrackScreenEvent(
        `rn luma: content: ${Platform.OS}: us: en: home`,
      );
    }, []),
  );

  // React.useEffect(() => {

  // }, []);
  return (
    <View style={{flex: 1, flexDirection: 'column', marginTop: 20}}>
      <ApplicationHero />
      <IdentitiesList />
    </View>
  );
}

const RootStack = createNativeStackNavigator();

function RootHomeScreen() {
  const getModalCloseButton = (navigation: any) => {
    return (
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="close" size={30} />
      </Pressable>
    );
  };

  const getHomePageHeaderRight = (
    props: HeaderButtonProps,
    navigation: any,
  ) => {
    const onLoginIconPress = () => {
      navigation.navigation.navigate('LoginModal');
    };
    return (
      <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
        <Pressable onPress={onLoginIconPress}>
          <Icon name="person-outline" color={props.tintColor} size={24} />
        </Pressable>
      </View>
    );
  };
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home "
        component={HomeScreen}
        options={navigation => ({
          headerShown: true,
          headerRight: props => getHomePageHeaderRight(props, navigation),
        })}
      />
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen
          name="LoginModal"
          component={LoginSheet}
          options={navigation => ({
            headerShown: true,
            headerTransparent: true,
            headerBackButtonMenuEnabled: false,
            headerBackVisible: false,
            headerTitle: '',
            headerRight: () => getModalCloseButton(navigation.navigation),
          })}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default RootHomeScreen;
