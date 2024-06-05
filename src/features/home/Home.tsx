import * as React from 'react';
import {View, Pressable, SafeAreaView, Platform} from 'react-native';
import ApplicationHero from './components/ApplicationHero/ApplicationHero';
import IdentitiesList from './components/Identities/Identities';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMobileSDK} from '../../hooks';
import LoginSheet from './components/LoginSheet/LoginSheet';

function HomeScreen({navigation}: {navigation: any}) {
  const mobileSDK = useMobileSDK();
  const onLoginIconPress = () => {
    console.log('Login icon pressed');
    navigation.navigate('LoginModal');
  };
  React.useEffect(() => {
    mobileSDK.getConsents();
    mobileSDK.sendTrackScreenEvent(
      `rn luma: content: ${Platform.OS}: us: en: home`,
    );
  }, []);
  return (
    <View style={{flex: 1, flexDirection: 'column', marginTop: 0}}>
      <SafeAreaView>
        <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
          <View style={{paddingHorizontal: 15, paddingVertical: 5}}>
            <Pressable onPress={onLoginIconPress}>
              <Icon name="person-outline" size={30} />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
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
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Homepage"
        component={HomeScreen}
        options={_navigation => ({
          headerShown: true,
          headerTransparent: false,
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            height: 10,
            backgroundColor: 'transparent',
          },
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
