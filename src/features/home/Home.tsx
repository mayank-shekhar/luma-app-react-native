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
import {Messaging} from '@adobe/react-native-aepmessaging';

function HomeScreen() {
  const mobileSDK = useMobileSDK();
  const getLatestMessage = async () => {
    const message = await Messaging.getLatestMessage();
    console.log('Latest Message:', message);
  };
  const refreshInAppMessages = () => {
    Messaging.refreshInAppMessages();
    console.log('messages refreshed');
  };
  useFocusEffect(
    React.useCallback(() => {
      mobileSDK.getIdentities();
      mobileSDK.getConsents();
      mobileSDK.sendTrackScreenEvent(
        `rn luma: content: ${Platform.OS}: us: en: home`,
      );

      getLatestMessage();
      refreshInAppMessages();
    }, []),
  );

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
